import { getPosts } from '@/lib/api';
import { SITE_URL, SITE_NAME, SITE_LOCALE, decodeHtml, escapeXml } from '@/lib/site';

export const revalidate = 300;

/** Google News only considers articles from roughly the last two days. */
const WINDOW_HOURS = 48;

export async function GET() {
  try {
    const posts = await getPosts(50);

    const cutoff = new Date();
    cutoff.setHours(cutoff.getHours() - WINDOW_HOURS);

    // The backend holds repeated imports of the same article, which previously
    // put the same headline in the feed up to nine times. Keep the first of each.
    const seenSlugs = new Set<string>();
    const seenTitles = new Set<string>();

    const recentPosts = posts.filter((post) => {
      if (new Date(post.date) < cutoff) return false;
      if (seenSlugs.has(post.slug)) return false;

      const titleKey = decodeHtml(post.title.rendered).trim().toLowerCase();
      if (seenTitles.has(titleKey)) return false;

      seenSlugs.add(post.slug);
      seenTitles.add(titleKey);
      return true;
    });

    const xmlUrls = recentPosts
      .map((post) => {
        // Decode first, escape once. Escaping first turned "&#8217;" into
        // "&amp;#8217;", so the entity was shown to readers verbatim.
        const safeTitle = escapeXml(decodeHtml(post.title.rendered));

        return `
  <url>
    <loc>${escapeXml(`${SITE_URL}/${post.slug}`)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(SITE_NAME)}</news:name>
        <news:language>${SITE_LOCALE}</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.date).toISOString()}</news:publication_date>
      <news:title>${safeTitle}</news:title>
    </news:news>
  </url>`;
      })
      .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${xmlUrls}
</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    // A 5xx keeps the last known-good feed in place at Google's end.
    console.error('Failed to generate Google News sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}
