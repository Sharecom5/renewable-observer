import { getPosts } from '@/lib/api';

const BASE_URL = 'https://www.renewableobserver.com';
const PUBLICATION_NAME = 'Renewable Observer';
const PUBLICATION_LANG = 'en';

export async function GET() {
  try {
    // Google News Sitemaps should only contain articles published in the last 48 hours.
    // For this implementation, we fetch the latest 50 posts and filter them by date.
    const posts = await getPosts(50);
    
    // Filter posts from the last 48 hours
    const twoDaysAgo = new Date();
    twoDaysAgo.setHours(twoDaysAgo.getHours() - 48);
    
    const recentPosts = posts.filter(post => {
      const postDate = new Date(post.date);
      return postDate >= twoDaysAgo;
    });

    const xmlUrls = recentPosts.map((post) => {
      // Decode HTML entities in title safely for XML
      const safeTitle = post.title.rendered
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')
        .replace(/&#8216;/g, "'")
        .replace(/&#8217;/g, "'")
        .replace(/&#8211;/g, "-")
        .replace(/&#8212;/g, "--");

      return `
  <url>
    <loc>${BASE_URL}/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>${PUBLICATION_NAME}</news:name>
        <news:language>${PUBLICATION_LANG}</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.date).toISOString()}</news:publication_date>
      <news:title>${safeTitle}</news:title>
    </news:news>
  </url>`;
    }).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${xmlUrls}
</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'text/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error("Failed to generate Google News Sitemap:", error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}
