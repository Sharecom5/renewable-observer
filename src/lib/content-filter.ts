/**
 * Keeps contact-form submissions out of the published site.
 *
 * The WordPress install has a contact form wired to create posts, so every
 * submission — including spam — was published as an article. Thirty-one of
 * them were live, carrying real people's names, email addresses and phone
 * numbers, and several were backlink-exchange spam. Nine had the sender's
 * email address as the article title, which put it in the URL as well.
 *
 * This is the frontend half of the fix: it stops the site serving them at all.
 * The posts still need deleting in WordPress (`npm run purge-junk`), and the
 * form-to-post rule needs turning off, or new ones will keep arriving.
 *
 * Written to be conservative. Every rule targets a shape that editorial content
 * does not have — a mail-tag placeholder, a bare address as a headline — so a
 * real article cannot match by accident.
 */

/** Contact Form 7 mail tags, left unreplaced when a form posts to the CMS. */
const CF7_PLACEHOLDER =
  /\[your-(subject|name|email|message|phone|website|company)\]|\[_?(post|site)[-_]?(title|url)\]/i;

/** A title that is nothing but an email address. */
const EMAIL_ONLY_TITLE = /^[\s"'<>]*[\w.+-]+@[\w-]+\.[\w.]{2,}[\s"'<>]*$/;

/** Slugs derived from an address, e.g. "jane-doegmail-com". */
const EMAIL_DERIVED_SLUG =
  /-(gmail|outlook|yahoo|hotmail|msn|aol|protonmail|proton|icloud|live|rediffmail|yandex)-(com|net|org|in|co-in|co-uk)$/i;

/** The post WordPress ships with on a fresh install. */
const WP_SAMPLE_TITLE = /^hello world!?$/i;

function toPlain(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, c) => String.fromCharCode(Number(c)))
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Decidable from title and slug alone.
 *
 * Kept separate because the sitemap walks the catalogue with `_fields=slug,
 * date,title` — pulling full bodies for a thousand posts to run this check
 * would make the route time out.
 */
export function isJunkByIdentity(titleHtml: string, slug: string): boolean {
  const title = toPlain(titleHtml);

  if (!title) return true;
  if (CF7_PLACEHOLDER.test(title)) return true;
  if (EMAIL_ONLY_TITLE.test(title)) return true;
  if (EMAIL_DERIVED_SLUG.test(slug)) return true;
  if (WP_SAMPLE_TITLE.test(title)) return true;

  return false;
}

/**
 * Full check, for callers that already hold the body.
 *
 * The extra rules catch submissions whose subject line happened to be filled
 * in, so the title looks ordinary and only the body gives them away.
 */
export function isJunkPost(post: {
  title: { rendered: string };
  content?: { rendered: string };
  slug: string;
}): boolean {
  if (isJunkByIdentity(post.title.rendered, post.slug)) return true;

  const body = toPlain(post.content?.rendered ?? "");

  // An unreplaced mail tag anywhere in the body.
  if (CF7_PLACEHOLDER.test(body)) return true;

  // Effectively empty. Real articles do not ship at forty characters.
  if (body.length < 40) return true;

  // The shape of a form submission: a contact block of address plus phone
  // number, in a body too short to be an article.
  const hasEmail = /\b[\w.+-]+@[\w-]+\.[\w.]{2,}\b/.test(body);
  const hasPhone = /\b\d{9,12}\b/.test(body);
  if (hasEmail && hasPhone && body.length < 2000) return true;

  return false;
}
