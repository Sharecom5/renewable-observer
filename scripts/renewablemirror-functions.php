<?php
/**
 * Push published posts from renewablemirror.com to admin.renewableobserver.com.
 *
 * NOT part of the Next.js app. This lives on renewablemirror.com — paste it
 * into that site's theme functions.php (better: into a small plugin, so a theme
 * update cannot wipe it). Kept in this repo only so it is version-controlled
 * and reviewable alongside the frontend it feeds.
 *
 * ---------------------------------------------------------------------------
 * CREDENTIALS
 * ---------------------------------------------------------------------------
 * Define these in wp-config.php, NOT here. functions.php sits in the theme
 * directory, is readable by anyone with FTP or file-manager access, and is
 * routinely copied into backups and staging sites.
 *
 *   define('RO_GEMINI_API_KEY',        '…');
 *   define('RO_TARGET_WP_USER',        '…');
 *   define('RO_TARGET_WP_APP_PASSWORD','…');
 *
 * ---------------------------------------------------------------------------
 * WHAT CHANGED FROM THE ORIGINAL
 * ---------------------------------------------------------------------------
 *  · Credentials read from wp-config constants instead of being hardcoded.
 *  · The sync runs on WP-Cron instead of inline. The original blocked the
 *    editor's publish request for up to 90 seconds (60s Gemini + 30s POST),
 *    which on most hosts exceeds max_execution_time — PHP kills the request
 *    partway, and because the lock was already set the post never syncs and
 *    never retries.
 *  · The lock is released on failure and retried, with a cap. The original set
 *    the lock before the slow call and never cleared it, so any transient
 *    Gemini error permanently stranded that post.
 *  · The response from the target is checked and failures are logged. The
 *    original discarded it, so a rejected post looked identical to a successful
 *    one.
 *  · The source post id travels with the payload as meta, so the target can
 *    recognise a re-send. Deduplicating on title cannot work here — the whole
 *    point of the rewrite is that the title changes.
 *  · Headline parsing tolerates the formatting the model actually returns
 *    (markdown bold, colons, stray blank lines) and strips code fences.
 */

if (!defined('ABSPATH')) exit;

const RO_TARGET_WP_URL   = 'https://admin.renewableobserver.com/wp-json/wp/v2/posts';
const RO_TARGET_CATEGORY = 11;          // "All News"
const RO_SYNC_EVENT      = 'ro_sync_post_event';
const RO_MAX_ATTEMPTS    = 3;

/**
 * Model id. Verify this against Google's current model list before relying on
 * it — gemini-1.5-flash is an older generation and the v1beta endpoint has
 * retired models before. A 404 here silently falls back to publishing the
 * original text unrewritten.
 */
const RO_GEMINI_MODEL = 'gemini-1.5-flash';

/* ------------------------------------------------------------------ *
 * Queue the sync — fast, non-blocking.
 * ------------------------------------------------------------------ */

add_action('transition_post_status', 'ro_queue_sync', 10, 3);

function ro_queue_sync($new_status, $old_status, $post) {
    if ($new_status !== 'publish' || $old_status === 'publish') return;
    if ($post->post_type !== 'post') return;
    if (wp_is_post_revision($post->ID)) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;

    // Already synced, or already queued.
    if (get_post_meta($post->ID, '_ro_synced_at', true)) return;
    if (wp_next_scheduled(RO_SYNC_EVENT, array($post->ID))) return;

    wp_schedule_single_event(time() + 10, RO_SYNC_EVENT, array($post->ID));
}

add_action(RO_SYNC_EVENT, 'ro_sync_post');

/* ------------------------------------------------------------------ *
 * Do the work.
 * ------------------------------------------------------------------ */

function ro_sync_post($post_id) {
    $post = get_post($post_id);
    if (!$post || $post->post_status !== 'publish') return;

    // Idempotency: the scheduler can fire twice if cron overlaps.
    if (get_post_meta($post_id, '_ro_synced_at', true)) return;

    $attempts = (int) get_post_meta($post_id, '_ro_sync_attempts', true);
    if ($attempts >= RO_MAX_ATTEMPTS) {
        ro_log("post {$post_id}: giving up after {$attempts} attempts");
        return;
    }
    update_post_meta($post_id, '_ro_sync_attempts', $attempts + 1);

    if (!defined('RO_TARGET_WP_USER') || !defined('RO_TARGET_WP_APP_PASSWORD')) {
        ro_log('target credentials are not defined in wp-config.php — aborting');
        return;
    }

    $rewritten  = ro_rewrite_with_gemini($post->post_title, $post->post_content);
    $title      = $rewritten['title'];
    $content    = $rewritten['content'];

    $auth = base64_encode(RO_TARGET_WP_USER . ':' . RO_TARGET_WP_APP_PASSWORD);

    $response = wp_remote_post(RO_TARGET_WP_URL, array(
        'timeout' => 30,
        'headers' => array(
            'Authorization' => 'Basic ' . $auth,
            'Content-Type'  => 'application/json',
        ),
        'body' => wp_json_encode(array(
            'title'      => $title,
            'content'    => $content,
            'status'     => 'publish',
            'categories' => array(RO_TARGET_CATEGORY),
            // Lets the target detect a re-send. Title matching cannot: the
            // rewrite deliberately changes the title every time.
            'meta'       => array(
                'source_site'    => 'renewablemirror.com',
                'source_post_id' => $post_id,
            ),
        )),
    ));

    if (is_wp_error($response)) {
        ro_log("post {$post_id}: transport error — " . $response->get_error_message());
        wp_schedule_single_event(time() + 600, RO_SYNC_EVENT, array($post_id));
        return;
    }

    $code = wp_remote_retrieve_response_code($response);
    if ($code !== 201) {
        ro_log("post {$post_id}: target returned {$code} — " . substr(wp_remote_retrieve_body($response), 0, 300));
        wp_schedule_single_event(time() + 600, RO_SYNC_EVENT, array($post_id));
        return;
    }

    $body = json_decode(wp_remote_retrieve_body($response), true);
    update_post_meta($post_id, '_ro_synced_at', current_time('mysql'));
    update_post_meta($post_id, '_ro_target_post_id', isset($body['id']) ? $body['id'] : 0);

    ro_log("post {$post_id}: synced as target #" . (isset($body['id']) ? $body['id'] : '?'));
}

/* ------------------------------------------------------------------ *
 * Gemini rewrite. Falls back to the original text on any failure.
 * ------------------------------------------------------------------ */

function ro_rewrite_with_gemini($original_title, $original_content) {
    $fallback = array('title' => $original_title, 'content' => $original_content);

    if (!defined('RO_GEMINI_API_KEY') || !RO_GEMINI_API_KEY) {
        ro_log('no Gemini key defined — publishing original text');
        return $fallback;
    }

    $url = 'https://generativelanguage.googleapis.com/v1beta/models/' . RO_GEMINI_MODEL . ':generateContent';

    $prompt = "You are a news editor. Rewrite the article below in your own words for republication, "
        . "keeping every fact, figure, name and quote accurate and unchanged. Do not invent details. "
        . "Write a new headline.\n\n"
        . "Respond in exactly this format, with no preamble:\n"
        . "HEADLINE: <headline>\n\n<article body as HTML paragraphs>\n\n"
        . "---\n\nTitle: " . $original_title . "\n\nContent: " . wp_strip_all_tags($original_content);

    $response = wp_remote_post($url, array(
        'timeout' => 60,
        'headers' => array(
            'Content-Type' => 'application/json',
            // Header rather than ?key= — query strings land in server access
            // logs and proxy logs.
            'x-goog-api-key' => RO_GEMINI_API_KEY,
        ),
        'body' => wp_json_encode(array(
            'contents' => array(
                array('parts' => array(array('text' => $prompt))),
            ),
        )),
    ));

    if (is_wp_error($response)) {
        ro_log('Gemini transport error — ' . $response->get_error_message());
        return $fallback;
    }

    $code = wp_remote_retrieve_response_code($response);
    if ($code !== 200) {
        ro_log("Gemini returned {$code} — " . substr(wp_remote_retrieve_body($response), 0, 300));
        return $fallback;
    }

    $body = json_decode(wp_remote_retrieve_body($response), true);
    $text = isset($body['candidates'][0]['content']['parts'][0]['text'])
        ? $body['candidates'][0]['content']['parts'][0]['text']
        : '';

    if (!$text) {
        // Usually a safety block or a truncated candidate.
        $reason = isset($body['candidates'][0]['finishReason']) ? $body['candidates'][0]['finishReason'] : 'unknown';
        ro_log("Gemini returned no text (finishReason: {$reason})");
        return $fallback;
    }

    // Models wrap HTML in code fences often enough to strip them unconditionally.
    $text = preg_replace('/^\s*```(?:html)?\s*|\s*```\s*$/i', '', trim($text));

    // Tolerate "HEADLINE:", "**HEADLINE:**", "## HEADLINE -", and single or
    // double newlines after it. The original pattern required exactly two
    // newlines and no markdown, and fell through on anything else — leaving
    // the literal "HEADLINE: …" line sitting in the published body.
    if (preg_match('/^\s*[#*\s]*HEADLINE[:\-]?\s*\**\s*(.+?)\s*\n+(.*)$/is', $text, $m)) {
        $title   = trim(wp_strip_all_tags($m[1]), " *#\"'");
        $content = trim($m[2]);
        if ($title !== '' && $content !== '') {
            return array('title' => $title, 'content' => $content);
        }
    }

    ro_log('could not parse a headline out of the Gemini response — keeping original title');
    return array('title' => $original_title, 'content' => $text);
}

function ro_log($message) {
    if (defined('WP_DEBUG') && WP_DEBUG) {
        error_log('[ro-sync] ' . $message);
    }
}
