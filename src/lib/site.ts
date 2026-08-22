/**
 * Canonical site constants. Import these rather than writing the URL out again —
 * it previously appeared in five files in three different spellings, one of
 * which pointed at a domain that was never registered.
 */

export const SITE_URL = "https://www.renewableobserver.com";
export const SITE_NAME = "Renewable Observer";
export const SITE_LOCALE = "en";

/** Absolute URL for an article or category, from its slug. */
export function urlForSlug(slug: string): string {
  return `${SITE_URL}/${slug}`;
}

const HTML_ENTITIES: Record<string, string> = {
  "&#8220;": "“",
  "&#8221;": "”",
  "&#8216;": "‘",
  "&#8217;": "’",
  "&#8211;": "–",
  "&#8212;": "—",
  "&#038;": "&",
  "&#039;": "'",
  "&amp;": "&",
  "&quot;": '"',
  "&lt;": "<",
  "&gt;": ">",
  "&nbsp;": " ",
};

/**
 * Turns WordPress' entity-encoded text into plain characters. Used anywhere a
 * title leaves HTML and enters a context with its own escaping rules — page
 * metadata, XML feeds, social posts.
 */
export function decodeHtml(html: string): string {
  return html
    .replace(/&#\d+;|&[a-z]+;/gi, (entity) => HTML_ENTITIES[entity.toLowerCase()] ?? entity)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

/** Strips tags and decodes entities — for excerpts used as descriptions. */
export function toPlainText(html: string): string {
  return decodeHtml(html.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

/** Escapes text for inclusion in an XML text node. Decode first, then call this. */
export function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 3).trimEnd() + "...";
}
