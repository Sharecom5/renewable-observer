import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/api';
import { secretMatches, extractSecret } from '@/lib/auth';
import { urlForSlug, decodeHtml, toPlainText } from '@/lib/site';

/** Only share articles published within this window. */
const MAX_AGE_MINUTES = 1440; // 24 hours

export async function GET(request: Request) {
  if (!process.env.CRON_SECRET) {
    // Distinguished from 401 on purpose: an unset secret is a deployment
    // problem, and reporting it as "unauthorized" hides that from whoever is
    // watching the cron's results.
    return NextResponse.json({ error: 'CRON_SECRET is not configured' }, { status: 503 });
  }

  if (!secretMatches(extractSecret(request), process.env.CRON_SECRET)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 11 is the "All News" category on admin.renewableobserver.com
    const posts = await getPosts(1, 11);
    if (posts.length === 0) {
      return NextResponse.json({ message: 'No posts found' });
    }

    const latestPost = posts[0];

    const ageMinutes = (Date.now() - new Date(latestPost.date).getTime()) / (1000 * 60);
    if (ageMinutes > MAX_AGE_MINUTES) {
      return NextResponse.json({
        message: `No new posts. Latest is ${Math.round(ageMinutes)} minutes old (limit ${MAX_AGE_MINUTES}).`,
      });
    }

    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json({ error: 'Missing LinkedIn Access Token' }, { status: 500 });
    }

    // 1. Resolve the posting identity.
    let authorUrn: string;
    const meRes = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (meRes.ok) {
      const meData = await meRes.json();
      authorUrn = `urn:li:person:${meData.sub}`;
    } else {
      // Fall back to /v2/me when the userinfo scope wasn't granted.
      const fallbackRes = await fetch('https://api.linkedin.com/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const fallbackData = await fallbackRes.json();
      if (!fallbackData.id) {
        return NextResponse.json(
          { error: 'Could not fetch LinkedIn Profile URN', details: fallbackData },
          { status: 500 }
        );
      }
      authorUrn = `urn:li:person:${fallbackData.id}`;
    }

    // 2. Build the share.
    //
    // Articles live at the site root. This previously pointed at
    // https://renewable-observer.com/article/<slug> — a domain that was never
    // registered, on a route that had been removed — so every share since the
    // routing change carried a dead link.
    const articleUrl = urlForSlug(latestPost.slug);
    const cleanTitle = decodeHtml(latestPost.title.rendered);
    const cleanExcerpt = toPlainText(latestPost.excerpt?.rendered || '').substring(0, 200);

    const postBody = {
      author: authorUrn,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: { text: `Read our latest article: ${cleanTitle}\n\n${articleUrl}` },
          shareMediaCategory: 'ARTICLE',
          media: [
            {
              status: 'READY',
              description: { text: cleanExcerpt || 'Read the full article on our website.' },
              originalUrl: articleUrl,
              title: { text: cleanTitle },
            },
          ],
        },
      },
      visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
    };

    const postRes = await fetch('https://api.linkedin.com/v2/ugcPosts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'X-Restli-Protocol-Version': '2.0.0',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    });

    const postData = await postRes.json();

    if (!postRes.ok) {
      return NextResponse.json(
        { error: 'Failed to post to LinkedIn', details: postData },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: 'Successfully posted to LinkedIn',
      url: articleUrl,
      post: postData,
    });
  } catch (error) {
    console.error('LinkedIn cron failed:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: (error as Error).message },
      { status: 500 }
    );
  }
}
