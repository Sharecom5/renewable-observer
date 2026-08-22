import { MetadataRoute } from 'next';
import { getCategories, getAllPostSlugs, dedupeByTitle } from '@/lib/api';
import { SITE_URL } from '@/lib/site';

// Rebuilt hourly rather than on every request: a full crawl of the backend is
// over a thousand posts, which is too much work to repeat per hit.
export const revalidate = 3600;

// Indexable routes only. /trending, /reports and /events are deliberately
// absent: they currently render placeholder content and carry `noindex`, and a
// sitemap that advertises noindexed URLs is a contradictory signal.
const STATIC_ROUTES = [
  '',
  '/about-us',
  '/contact-us',
  '/newsletter',
  '/terms-and-conditions',
  '/privacy-policy',
  '/advertise-with-us',
  '/write-for-us',
  '/editorial-policy',
  '/ethics-policy',
  '/cookie-policy',
  '/corrections-policy',
  '/disclaimer',
  '/accessibility',
  '/market',
  '/authors',
  '/media-kit',
  '/submit-press-release',
  '/sitemap',
];

/** Routes that carry more weight than the boilerplate policy pages. */
const PRIORITY_ROUTES = new Set(['', '/about-us', '/authors', '/market', '/newsletter']);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    // Policy pages change rarely; claiming daily churn on all of them wastes
    // crawl budget that should go to articles.
    changeFrequency: (PRIORITY_ROUTES.has(route) ? 'daily' : 'monthly') as 'daily' | 'monthly',
    priority: route === '' ? 1.0 : PRIORITY_ROUTES.has(route) ? 0.8 : 0.4,
  }));

  // Deliberately not wrapped in try/catch. A sitemap that silently degrades to
  // partial or placeholder content is worse than one that errors: search
  // engines keep the last good copy on a 5xx, but act on a bad one.
  // Matching revalidate windows: a shorter one on any inner fetch would pull the
  // whole route down to it, re-crawling every post far more often than needed.
  const [categories, posts] = await Promise.all([getCategories(3600), getAllPostSlugs()]);

  const categoryRoutes = categories.map((category) => ({
    url: `${SITE_URL}/${category.slug}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // Submitting all three imports of one article is a duplicate-content signal;
  // dedupe on title, since each copy carries its own -2 / -3 slug.
  const postRoutes = dedupeByTitle(posts).map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: new Date(post.modified || post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
