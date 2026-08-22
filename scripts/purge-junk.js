/**
 * Finds contact-form submissions that were published as articles and moves
 * them to trash.
 *
 * The WordPress install has a form wired to create posts, so submissions —
 * including spam — became public articles. Several carried the sender's name,
 * email address and phone number, and nine used the address itself as the
 * article title, putting it in the URL too.
 *
 * Deleting these does not stop new ones arriving. Turn off the form's
 * create-post action in WordPress as well, or this script becomes a chore.
 *
 * Credentials come from the environment, never from this file:
 *   WP_USER      the WordPress account email
 *   WP_APP_PASS  a WordPress application password for that account
 *
 * Dry run (default, changes nothing):
 *   WP_USER=… WP_APP_PASS=… npm run purge-junk
 *
 * Apply — moves them to trash, recoverable from the WordPress trash:
 *   WP_USER=… WP_APP_PASS=… npm run purge-junk -- --apply
 */

const API_BASE = 'https://admin.renewableobserver.com/wp-json/wp/v2/posts';

const { WP_USER, WP_APP_PASS } = process.env;
const APPLY = process.argv.includes('--apply');

if (!WP_USER || !WP_APP_PASS) {
  console.error('Missing WP_USER / WP_APP_PASS environment variables.');
  process.exit(1);
}

const AUTH = 'Basic ' + Buffer.from(`${WP_USER}:${WP_APP_PASS}`).toString('base64');

// Kept in step with src/lib/content-filter.ts. The frontend hides these; this
// removes them. Both need the same definition of "junk".
const CF7_PLACEHOLDER =
  /\[your-(subject|name|email|message|phone|website|company)\]|\[_?(post|site)[-_]?(title|url)\]/i;
const EMAIL_ONLY_TITLE = /^[\s"'<>]*[\w.+-]+@[\w-]+\.[\w.]{2,}[\s"'<>]*$/;
const EMAIL_DERIVED_SLUG =
  /-(gmail|outlook|yahoo|hotmail|msn|aol|protonmail|proton|icloud|live|rediffmail|yandex)-(com|net|org|in|co-in|co-uk)$/i;
const WP_SAMPLE_TITLE = /^hello world!?$/i;

const toPlain = (html) =>
  (html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, c) => String.fromCharCode(Number(c)))
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** Returns the reason a post is junk, or null if it should stay. */
function junkReason(post) {
  const title = toPlain(post.title.rendered);
  const body = toPlain(post.content?.rendered);

  if (!title) return 'empty title';
  if (CF7_PLACEHOLDER.test(title)) return 'contact-form placeholder in title';
  if (EMAIL_ONLY_TITLE.test(title)) return 'title is an email address';
  if (EMAIL_DERIVED_SLUG.test(post.slug)) return 'slug derived from an email address';
  if (WP_SAMPLE_TITLE.test(title)) return 'WordPress sample post';
  if (CF7_PLACEHOLDER.test(body)) return 'contact-form placeholder in body';
  if (body.length < 40) return 'empty or near-empty body';
  if (/\b[\w.+-]+@[\w-]+\.[\w.]{2,}\b/.test(body) && /\b\d{9,12}\b/.test(body) && body.length < 2000) {
    return 'contact details in a body too short to be an article';
  }
  return null;
}

/** Hides the local part of any address so the log does not restate the PII. */
const redact = (s) => s.replace(/[\w.+-]+@/g, '<redacted>@');

async function getAllPosts() {
  const posts = [];
  let page = 1;
  let totalPages = 1;

  do {
    const url = `${API_BASE}?per_page=100&page=${page}&_fields=id,slug,title,content,date&status=any`;
    const res = await fetch(url, { headers: { Authorization: AUTH } });
    if (!res.ok) throw new Error(`GET page ${page} failed: ${res.status} ${res.statusText}`);
    totalPages = Number(res.headers.get('x-wp-totalpages')) || 1;
    posts.push(...(await res.json()));
    process.stdout.write(`\rFetched page ${page}/${totalPages}…`);
    page++;
  } while (page <= totalPages);

  process.stdout.write('\n');
  return posts;
}

async function purge() {
  const posts = await getAllPosts();
  console.log(`Scanned ${posts.length} posts.\n`);

  const junk = [];
  for (const post of posts) {
    const reason = junkReason(post);
    if (reason) junk.push({ post, reason });
  }

  if (junk.length === 0) {
    console.log('Nothing to remove.');
    return;
  }

  const byReason = {};
  for (const { reason } of junk) byReason[reason] = (byReason[reason] || 0) + 1;

  console.log(`Found ${junk.length} posts to remove:\n`);
  for (const [reason, count] of Object.entries(byReason)) {
    console.log(`  ${String(count).padStart(3)}  ${reason}`);
  }
  console.log();

  for (const { post, reason } of junk) {
    console.log(`  #${post.id}  ${redact(post.slug).slice(0, 58)}`);
    console.log(`        ${reason}`);
  }

  if (!APPLY) {
    console.log(`\nDry run — nothing was changed. Re-run with --apply to trash these ${junk.length} posts.`);
    return;
  }

  console.log(`\nTrashing ${junk.length} posts…`);
  let trashed = 0;

  for (const { post } of junk) {
    // No force=true: posts go to trash and stay recoverable.
    const res = await fetch(`${API_BASE}/${post.id}`, {
      method: 'DELETE',
      headers: { Authorization: AUTH },
    });
    if (res.ok) trashed++;
    else console.error(`  Failed to trash #${post.id}: ${res.status}`);
  }

  console.log(`Done. Trashed ${trashed} of ${junk.length}. Recoverable from the WordPress trash.`);
  console.log('\nNow turn off the contact form\'s create-post action, or new submissions will keep appearing.');
}

purge().catch((error) => {
  console.error('Purge failed:', error.message);
  process.exit(1);
});
