import { getPosts } from '@/lib/api';
import { SITE_URL, SITE_NAME, SITE_LOCALE, urlForSlug, decodeHtml, toPlainText, escapeXml } from '@/lib/site';

export const revalidate = 600;

const FEED_LENGTH = 30;
const DESCRIPTION =
  'Renewable energy news, market intelligence and policy analysis covering solar, wind, green hydrogen, storage and the global energy transition.';

export async function GET() {
  try {
    const posts = await getPosts(FEED_LENGTH);

    // The backend holds repeated imports of the same article; a feed that
    // repeats one headline several times gets dropped by aggregators.
    const seen = new Set<string>();
    const items = posts
      .filter((post) => {
        const key = decodeHtml(post.title.rendered).trim().toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .map((post) => {
        const url = urlForSlug(post.slug);
        // Decode entities first, then escape once for XML — escaping first
        // leaves "&amp;#8217;" visible in every reader.
        const title = escapeXml(decodeHtml(post.title.rendered));
        const description = escapeXml(toPlainText(post.excerpt.rendered).slice(0, 500));

        return `
    <item>
      <title>${title}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${description}</description>${
        post.category_info?.[0]
          ? `\n      <category>${escapeXml(post.category_info[0].name)}</category>`
          : ''
      }${
        post.featured_image_url
          ? `\n      <enclosure url="${escapeXml(post.featured_image_url)}" type="image/jpeg" />`
          : ''
      }
    </item>`;
      })
      .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}/</link>
    <description>${escapeXml(DESCRIPTION)}</description>
    <language>${SITE_LOCALE}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=600, s-maxage=600, stale-while-revalidate=1200',
      },
    });
  } catch (error) {
    console.error('Failed to generate RSS feed:', error);
    return new Response('Error generating feed', { status: 500 });
  }
}
