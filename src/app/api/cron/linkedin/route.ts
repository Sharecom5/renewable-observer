import { NextResponse } from 'next/server';
import { getLatestPosts } from '@/lib/api';
// Stateless time-based check variables
const MAX_AGE_MINUTES = 65;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const posts = await getLatestPosts(1);
    if (!posts || posts.length === 0) {
      return NextResponse.json({ message: 'No posts found' });
    }

    const latestPost = posts[0];
    const postId = latestPost.id.toString();

    // Check if the article is new (published in the last hour)
    // We use a stateless time-based approach for Vercel compatibility
    const postDate = new Date(latestPost.date);
    const now = new Date();
    const diffMinutes = (now.getTime() - postDate.getTime()) / (1000 * 60);

    if (diffMinutes > MAX_AGE_MINUTES) {
      return NextResponse.json({ message: `No new posts. Latest post is ${Math.round(diffMinutes)} minutes old (we only post articles from the last hour).` });
    }

    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json({ error: 'Missing LinkedIn Access Token' }, { status: 500 });
    }

    // 1. Get User Profile ID (URN) dynamically
    const meRes = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    
    let authorUrn = '';
    
    if (meRes.ok) {
       const meData = await meRes.json();
       authorUrn = `urn:li:person:${meData.sub}`;
    } else {
       // fallback to v2/me if userinfo scope wasn't selected
       const fallbackRes = await fetch('https://api.linkedin.com/v2/me', {
         headers: { 'Authorization': `Bearer ${accessToken}` }
       });
       const fallbackData = await fallbackRes.json();
       if (!fallbackData.id) {
           return NextResponse.json({ error: 'Could not fetch LinkedIn Profile URN', details: fallbackData }, { status: 500 });
       }
       authorUrn = `urn:li:person:${fallbackData.id}`;
    }

    // 2. Create the LinkedIn Post
    // Note: Assuming your frontend routes to /article/[slug]
    const articleUrl = `https://renewable-observer.com/article/${latestPost.slug}`;
    const cleanTitle = latestPost.title.rendered.replace(/&#038;/g, '&').replace(/&#8211;/g, '-');
    const text = `Read our latest article: ${cleanTitle}\n\n${articleUrl}`;

    // Clean HTML tags from excerpt for the link description
    const rawExcerpt = latestPost.excerpt?.rendered || '';
    const cleanExcerpt = rawExcerpt.replace(/<[^>]*>?/gm, '').substring(0, 200);

    const postBody = {
      author: authorUrn,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: {
            text: text,
          },
          shareMediaCategory: 'ARTICLE',
          media: [
            {
              status: 'READY',
              description: {
                text: cleanExcerpt || 'Read the full article on our website.',
              },
              originalUrl: articleUrl,
              title: {
                text: cleanTitle,
              },
            },
          ],
        },
      },
      visibility: {
        'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
      },
    };

    const postRes = await fetch('https://api.linkedin.com/v2/ugcPosts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-Restli-Protocol-Version': '2.0.0',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    });

    const postData = await postRes.json();

    if (!postRes.ok) {
      return NextResponse.json({ error: 'Failed to post to LinkedIn', details: postData }, { status: 500 });
    }

    // No local file saving needed for time-based approach

    return NextResponse.json({ message: 'Successfully posted to LinkedIn!', post: postData });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
