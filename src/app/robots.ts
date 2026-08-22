import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          // Placeholder pages, also marked noindex at the page level.
          '/trending',
          '/reports',
          '/events',
        ],
      },
      {
        // Google News crawls the news sitemap and needs the articles
        // themselves; it has no use for the utility routes.
        userAgent: 'Googlebot-News',
        allow: '/',
        disallow: ['/api/', '/trending', '/reports', '/events', '/sitemap'],
      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/news-sitemap.xml`,
    ],
    host: SITE_URL,
  };
}
