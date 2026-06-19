import { MetadataRoute } from 'next';
import { getCategories, getPosts } from '@/lib/api';

const BASE_URL = 'https://www.renewableobserver.com';

export const revalidate = 0; // Force Next.js to always generate this live, never cache it

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static Routes
  const staticRoutes = [
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
    '/events',
    '/reports',
    '/market',
    '/trending',
    '/authors',
    '/media-kit',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Fetch Categories
  let categoryRoutes: MetadataRoute.Sitemap = [];
  try {
    const categories = await getCategories();
    categoryRoutes = categories.map((category) => ({
      url: `${BASE_URL}/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    }));
  } catch (error) {
    console.error("Failed to fetch categories for sitemap:", error);
  }

  // Fetch Posts (Limit to 500 for the main sitemap to ensure fast generation)
  let postRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPosts(500);
    postRoutes = posts.map((post) => ({
      url: `${BASE_URL}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to fetch posts for sitemap:", error);
  }

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
