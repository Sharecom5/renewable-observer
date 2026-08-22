import { Post, Category, Author } from "@/types";
import { isJunkPost, isJunkByIdentity } from "./content-filter";

const WP_API_URL = "https://admin.renewableobserver.com/wp-json/wp/v2";

/** The WordPress REST API rejects per_page above this with a 400. */
const WP_MAX_PER_PAGE = 100;

/**
 * House ad creatives, shown when the backend has no ad booked for a slot.
 * These are clearly-labelled placeholders for empty inventory — unlike editorial
 * content, there is no reader harm in a fallback here.
 */
const FALLBACK_ADS: Record<string, string> = {
  "header-leaderboard": `
    <a href="#" class="w-full max-w-[728px] lg:max-w-[970px] h-[90px] relative overflow-hidden group cursor-pointer items-center justify-center bg-black flex mx-auto block">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=80')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity"></div>
      <div class="relative z-10 text-white flex flex-col items-center text-center">
        <span class="text-xl font-bold tracking-widest uppercase">Mouser Electronics</span>
        <span class="text-xs text-blue-300 uppercase tracking-widest mt-1">Discover Next-Gen AI Sensors</span>
      </div>
      <div class="absolute top-1 left-2 text-[8px] uppercase tracking-widest text-white/50">Advertisement</div>
    </a>
  `,
  "sidebar-skyscraper-left": `
    <a href="#" class="absolute inset-0 block h-full w-full group cursor-pointer">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity bg-black"></div>
      <div class="relative z-10 text-white flex flex-col items-center text-center p-4 h-full bg-gradient-to-b from-black/80 via-black/40 to-black/90">
        <div class="text-[9px] uppercase tracking-widest text-white/50 mb-6">Advertisement</div>
        <div class="font-black text-sm mb-4 text-blue-400 uppercase tracking-widest">TrustedParts</div>
        <div class="text-white font-bold text-lg mb-6 leading-tight">Tasked with buying components?</div>
        <div class="mt-auto bg-blue-600 group-hover:bg-blue-500 text-white text-xs font-bold py-2 w-full uppercase tracking-wider transition-colors text-center">Search Now</div>
      </div>
    </a>
  `,
  "sidebar-skyscraper-right": `
    <a href="#" class="absolute inset-0 block h-full w-full group cursor-pointer">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity bg-black"></div>
      <div class="relative z-10 text-white flex flex-col items-center text-center p-4 h-full bg-gradient-to-b from-black/80 via-black/40 to-black/90">
        <div class="text-[9px] uppercase tracking-widest text-white/50 mb-6">Advertisement</div>
        <div class="font-black text-sm mb-4 text-blue-400 uppercase tracking-widest">TrustedParts</div>
        <div class="text-white font-bold text-lg mb-6 leading-tight">Tasked with designing circuits?</div>
        <div class="mt-auto bg-blue-600 group-hover:bg-blue-500 text-white text-xs font-bold py-2 w-full uppercase tracking-wider transition-colors text-center">Search Now</div>
      </div>
    </a>
  `,
  "article-sidebar-square": `
    <a href="#" class="w-full h-full relative overflow-hidden group cursor-pointer bg-black flex items-center justify-center block">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544256718-3b61027159cb?w=400&q=80')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity"></div>
      <div class="relative z-10 text-white flex flex-col items-center text-center p-4">
        <span class="text-xl font-black tracking-widest uppercase mb-2">CONQUER</span>
        <span class="text-sm font-bold">High-Voltage Circuit Protection</span>
      </div>
      <div class="absolute top-1 left-2 text-[8px] uppercase tracking-widest text-white/50">Advertisement</div>
    </a>
  `,
};

export async function getAdSlot(slotId: string): Promise<string> {
  try {
    const res = await fetch(`${WP_API_URL}/ads?slug=${encodeURIComponent(slotId)}`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.length > 0 && data[0].content?.rendered) {
        return data[0].content.rendered;
      }
    }
  } catch (error) {
    console.error(`Failed to fetch ad slot ${slotId} from WP backend:`, error);
  }

  return FALLBACK_ADS[slotId] || "";
}

/* ------------------------------------------------------------------ *
 * Shape of the raw WordPress REST payloads we consume.
 * ------------------------------------------------------------------ */

interface WPTerm {
  id: number;
  name: string;
  slug: string;
  count?: number;
}

interface WPMedia {
  source_url?: string;
  media_details?: { sizes?: { full?: { source_url?: string } } };
}

interface WPAuthor {
  id: number;
  name: string;
  slug?: string;
  description?: string;
}

interface WPPost extends Omit<Post, "featured_image_url" | "category_info" | "author_info"> {
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
    author?: WPAuthor[];
  };
}

/**
 * A failure that should surface as a 5xx rather than a 404.
 *
 * The distinction matters for search: a missing article is a permanent signal
 * that removes a URL from the index, whereas a transient backend error should
 * tell crawlers to come back later. Never conflate the two.
 */
export class BackendUnavailableError extends Error {
  constructor(url: string, detail: string) {
    super(`WordPress backend unavailable (${url}): ${detail}`);
    this.name = "BackendUnavailableError";
  }
}

const RETRY_ATTEMPTS = 3;
const RETRY_BASE_MS = 400;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Fetch against the WordPress REST API, retrying transient failures.
 *
 * A build prerenders a hundred articles, and the WordPress host rate-limits
 * under that kind of burst — one dropped connection would otherwise fail the
 * whole deploy. Retries cover network errors, 429 and 5xx.
 *
 * 4xx responses are returned to the caller rather than retried: those are
 * answers, not outages, and repeating them just burns the rate limit faster.
 */
async function wpFetch(url: string, revalidate = 60): Promise<Response> {
  let lastDetail = "unknown error";

  for (let attempt = 1; attempt <= RETRY_ATTEMPTS; attempt++) {
    let res: Response | undefined;

    try {
      res = await fetch(url, { next: { revalidate } });
    } catch (error) {
      lastDetail = (error as Error).message;
    }

    if (res) {
      if (res.ok) return res;

      lastDetail = `HTTP ${res.status} ${res.statusText}`;

      // A client error is a real answer — surface it immediately.
      if (res.status < 500 && res.status !== 429) {
        throw new BackendUnavailableError(url, lastDetail);
      }
    }

    if (attempt < RETRY_ATTEMPTS) {
      await sleep(RETRY_BASE_MS * 2 ** (attempt - 1));
    }
  }

  throw new BackendUnavailableError(url, `${lastDetail} (after ${RETRY_ATTEMPTS} attempts)`);
}

/* ------------------------------------------------------------------ *
 * Market data
 * ------------------------------------------------------------------ */

export async function getLiveStockData() {
  const symbols = [
    { symbol: "ADANIGREEN.NS", name: "Adani Green" },
    { symbol: "TATAPOWER.NS", name: "Tata Power" },
    { symbol: "SUZLON.NS", name: "Suzlon" },
    { symbol: "BORORENEW.NS", name: "Borosil" },
    { symbol: "INOXWIND.NS", name: "Inox Wind" },
    { symbol: "SWSOLAR.NS", name: "Sterling & Wilson" },
    { symbol: "KPIGREEN.NS", name: "KPI Green" },
    { symbol: "RELIANCE.NS", name: "Reliance New Energy" },
  ];

  const quotes = await Promise.all(
    symbols.map(async (s) => {
      try {
        const res = await fetch(
          `https://query1.finance.yahoo.com/v8/finance/chart/${s.symbol}`,
          { cache: "no-store", headers: { "User-Agent": "Mozilla/5.0" } }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json = await res.json();
        const meta = json?.chart?.result?.[0]?.meta;
        const price = meta?.regularMarketPrice;
        const prevClose = meta?.previousClose;

        // Guard the division: a zero or missing previous close yields NaN/Infinity,
        // which would render as "NaN%" in the ticker.
        if (typeof price !== "number" || typeof prevClose !== "number" || !prevClose) {
          return null;
        }

        const changeVal = ((price - prevClose) / prevClose) * 100;

        return {
          ...s,
          price: price.toFixed(2),
          change: `${changeVal > 0 ? "+" : ""}${changeVal.toFixed(2)}%`,
          isPositive: changeVal >= 0,
        };
      } catch {
        // Drop the symbol rather than showing a fabricated 0.00 quote.
        return null;
      }
    })
  );

  return quotes.filter((q): q is NonNullable<typeof q> => q !== null);
}

/* ------------------------------------------------------------------ *
 * Categories
 * ------------------------------------------------------------------ */

export async function getCategories(revalidate = 60): Promise<Category[]> {
  const res = await wpFetch(`${WP_API_URL}/categories?per_page=${WP_MAX_PER_PAGE}`, revalidate);
  return res.json();
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const res = await wpFetch(`${WP_API_URL}/categories?slug=${encodeURIComponent(slug)}`);
  const data: Category[] = await res.json();
  return data?.length > 0 ? data[0] : null;
}

/** One request for every category, so callers can resolve slugs without a round-trip each. */
export async function getCategoryMap(): Promise<Map<string, Category>> {
  const categories = await getCategories();
  return new Map(categories.map((c) => [c.slug, c]));
}

/* ------------------------------------------------------------------ *
 * Posts
 * ------------------------------------------------------------------ */

/** Shown when the CMS account has no presentable display name. */
export const DEFAULT_BYLINE = "Editorial Desk";

/**
 * WordPress falls back to the account's login when no display name is set, and
 * on this install that login is a personal email address. Publishing it would
 * put a private address in every byline and in the Article schema, so anything
 * email-shaped is replaced with the house byline.
 */
function normaliseAuthor(author: WPAuthor | undefined): Author | undefined {
  if (!author) return undefined;

  const name = (author.name || "").trim();
  const looksLikeEmail = name.includes("@");

  if (!name || looksLikeEmail) {
    return { id: author.id, name: DEFAULT_BYLINE, description: "" };
  }

  return {
    id: author.id,
    name,
    slug: author.slug,
    description: author.description || "",
  };
}

function mapWPPostToPost(wpPost: WPPost): Post {
  const embedded = wpPost._embedded;

  let featured_image_url: string | undefined;
  const media = embedded?.["wp:featuredmedia"]?.[0];
  if (media) {
    featured_image_url = media.source_url || media.media_details?.sizes?.full?.source_url;
  }

  // Fall back to the first image in the body when no featured image is set.
  if (!featured_image_url && wpPost.content?.rendered) {
    const imgMatch = wpPost.content.rendered.match(/<img[^>]+src="([^">]+)"/i);
    if (imgMatch?.[1]) featured_image_url = imgMatch[1];
  }

  const terms = embedded?.["wp:term"]?.[0];
  const category_info: Category[] = Array.isArray(terms)
    ? terms.map((t) => ({ id: t.id, name: t.name, slug: t.slug, count: t.count || 0 }))
    : [];

  const author_info = normaliseAuthor(embedded?.author?.[0]);

  // Built field by field rather than spreading wpPost.
  //
  // Spreading carried `_embedded` and `_links` — the entire raw REST payload —
  // into the serialized component tree, which shipped the WordPress account's
  // display name (a personal email address) to the browser on every article,
  // along with several KB per post of link relations nothing renders.
  return {
    id: wpPost.id,
    date: wpPost.date,
    modified: wpPost.modified,
    slug: wpPost.slug,
    status: wpPost.status,
    type: wpPost.type,
    title: wpPost.title,
    content: wpPost.content,
    excerpt: wpPost.excerpt,
    author: wpPost.author,
    featured_media: wpPost.featured_media,
    categories: wpPost.categories,
    tags: wpPost.tags,
    rank_math_title: wpPost.rank_math_title,
    rank_math_description: wpPost.rank_math_description,
    rank_math_robots: wpPost.rank_math_robots,
    featured_image_url,
    category_info,
    author_info,
  };
}

/**
 * Fetches posts, paginating transparently past the API's 100-per-request cap.
 *
 * A limit above 100 previously produced a 400 that was swallowed as "no posts",
 * which is how the sitemap came to publish placeholder content.
 */
export async function getPosts(limit = 10, categoryId?: number): Promise<Post[]> {
  // Fixed page size for the whole walk. `page` is an offset expressed in units
  // of `per_page`, so shrinking per_page on the final request to fetch exactly
  // the remainder would re-request posts already collected — page 3 of 50 covers
  // the same range as page 2 of 100. Take full pages and trim at the end.
  const perPage = Math.min(limit, WP_MAX_PER_PAGE);
  const posts: Post[] = [];
  let page = 1;

  while (posts.length < limit) {
    let url = `${WP_API_URL}/posts?per_page=${perPage}&page=${page}&_embed`;
    if (categoryId) url += `&categories=${categoryId}`;

    const res = await wpFetch(url);
    const batch: WPPost[] = await res.json();

    // Contact-form submissions are dropped here rather than at each call site,
    // so no surface can accidentally publish one. The loop keeps paging until
    // it has `limit` real articles.
    posts.push(...batch.filter((p) => !isJunkPost(p)).map(mapWPPostToPost));

    const totalPages = Number(res.headers.get("x-wp-totalpages")) || 1;
    if (page >= totalPages || batch.length === 0) break;
    page++;
  }

  return posts.slice(0, limit);
}

/**
 * Slug and date for every published post, for the sitemap.
 *
 * Skips _embed and requests only the two fields needed — the full payload for
 * a thousand-plus posts is large enough to time out the sitemap route.
 */
export interface PostIndexEntry {
  slug: string;
  date: string;
  modified?: string;
  title: { rendered: string };
}

export async function getAllPostSlugs(): Promise<PostIndexEntry[]> {
  const entries: PostIndexEntry[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const url = `${WP_API_URL}/posts?per_page=${WP_MAX_PER_PAGE}&page=${page}&_fields=slug,date,modified,title`;
    const res = await wpFetch(url, 3600);
    totalPages = Number(res.headers.get("x-wp-totalpages")) || 1;
    const batch: PostIndexEntry[] = await res.json();

    // Identity-only check: this walk deliberately omits post bodies, since
    // pulling a thousand of them would time the sitemap out.
    entries.push(...batch.filter((e) => !isJunkByIdentity(e.title.rendered, e.slug)));
    page++;
  } while (page <= totalPages);

  return entries;
}

/**
 * Collapses the backend's repeated imports of the same article, keeping the
 * oldest copy — it holds the unsuffixed slug and whatever search equity exists.
 *
 * WordPress gives each re-import a distinct slug (-2, -3, …), so deduping on
 * slug alone would still submit three URLs for one article.
 */
function titleKeyOf(entry: PostIndexEntry): string {
  return entry.title.rendered.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}

export function dedupeByTitle(entries: PostIndexEntry[]): PostIndexEntry[] {
  const byTitle = new Map<string, PostIndexEntry>();

  for (const entry of entries) {
    if (!entry.slug) continue;
    const key = titleKeyOf(entry);
    const existing = byTitle.get(key);
    if (!existing || new Date(entry.date) < new Date(existing.date)) {
      byTitle.set(key, entry);
    }
  }

  return [...byTitle.values()];
}

/**
 * Maps every post slug to the canonical slug for its title.
 *
 * The backend holds the same article under several slugs — WordPress appends
 * -2, -3 on each re-import — and all of them serve identical content. Left
 * alone that is a duplicate-content signal across roughly seven hundred URLs,
 * so the copies point their canonical at the oldest version, which holds the
 * unsuffixed slug and whatever search equity exists.
 *
 * Built from the hourly-cached post index, so this costs one walk per hour
 * rather than one per request. Becomes a no-op once the duplicates are removed
 * from WordPress.
 */
export async function getCanonicalSlugMap(): Promise<Map<string, string>> {
  const entries = await getAllPostSlugs();
  const canonicalByTitle = new Map<string, PostIndexEntry>();

  for (const entry of entries) {
    if (!entry.slug) continue;
    const key = titleKeyOf(entry);
    const existing = canonicalByTitle.get(key);
    if (!existing || new Date(entry.date) < new Date(existing.date)) {
      canonicalByTitle.set(key, entry);
    }
  }

  const map = new Map<string, string>();
  for (const entry of entries) {
    if (!entry.slug) continue;
    const canonical = canonicalByTitle.get(titleKeyOf(entry));
    if (canonical) map.set(entry.slug, canonical.slug);
  }

  return map;
}

/** Canonical slug for one article, falling back to itself if unknown. */
export async function getCanonicalSlug(slug: string): Promise<string> {
  try {
    return (await getCanonicalSlugMap()).get(slug) ?? slug;
  } catch {
    // A self-referencing canonical is always safe; never block a page on this.
    return slug;
  }
}

export interface CategoryPage {
  posts: Post[];
  page: number;
  totalPages: number;
}

/**
 * One page of a category, for paginated archive pages.
 *
 * Without pagination a category showed its newest twenty articles and nothing
 * linked to the rest, so most of the catalogue was reachable only through the
 * sitemap. Crawlers follow links to judge how much a section is worth; a feed
 * that dead-ends after twenty says the section has twenty articles in it.
 *
 * `totalPages` comes from WordPress and counts posts before the junk filter,
 * so the last page can come up a little short. Overstating by a page or two is
 * harmless; guessing low would hide real articles.
 */
export async function getCategoryPage(
  categoryId: number,
  page = 1,
  perPage = 24
): Promise<CategoryPage> {
  const url = `${WP_API_URL}/posts?per_page=${perPage}&page=${page}&categories=${categoryId}&_embed`;

  // Asking for a page past the end is a 400 (`rest_post_invalid_page_number`),
  // not an outage. Treated as "no such page" so the route can 404; letting it
  // reach wpFetch would raise BackendUnavailableError and render a 500, which
  // tells crawlers to come back and retry a URL that will never exist.
  let res: Response;
  try {
    res = await fetch(url, { next: { revalidate: 60 } });
  } catch (error) {
    throw new BackendUnavailableError(url, (error as Error).message);
  }

  if (res.status === 400) {
    return { posts: [], page, totalPages: 0 };
  }
  if (!res.ok) {
    throw new BackendUnavailableError(url, `HTTP ${res.status} ${res.statusText}`);
  }

  const batch: WPPost[] = await res.json();

  return {
    posts: batch.filter((p) => !isJunkPost(p)).map(mapWPPostToPost),
    page,
    totalPages: Number(res.headers.get("x-wp-totalpages")) || 1,
  };
}

export async function getPostsByCategorySlug(slug: string, limit = 10): Promise<Post[]> {
  const category = await getCategoryBySlug(slug);
  if (!category) return [];
  return getPosts(limit, category.id);
}

/**
 * Degrading variants, for surfaces where an outage should thin the page rather
 * than take it down — the breaking-news strip in the root layout would
 * otherwise 500 every route on the site, including the static policy pages.
 *
 * These return fewer posts. They never return invented ones.
 */
export async function getPostsSafe(limit = 10, categoryId?: number): Promise<Post[]> {
  try {
    return await getPosts(limit, categoryId);
  } catch (error) {
    console.error("getPosts failed, rendering without them:", error);
    return [];
  }
}

export async function getPostsByCategorySlugSafe(slug: string, limit = 10): Promise<Post[]> {
  try {
    return await getPostsByCategorySlug(slug, limit);
  } catch (error) {
    console.error(`getPostsByCategorySlug(${slug}) failed, rendering without them:`, error);
    return [];
  }
}

/**
 * Returns null only when the article genuinely does not exist. A backend
 * failure throws instead, so the route renders a 5xx rather than a 404.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await wpFetch(`${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`);
  const data: WPPost[] = await res.json();
  if (!data?.length) return null;

  // Treated as not found rather than rendered. These pages carried third
  // parties' names, addresses and phone numbers; a 404 is the correct answer
  // until they are deleted at source.
  if (isJunkPost(data[0])) return null;

  return mapWPPostToPost(data[0]);
}
