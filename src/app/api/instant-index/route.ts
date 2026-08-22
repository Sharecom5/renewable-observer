import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { secretMatches, extractSecret } from '@/lib/auth';
import { SITE_URL } from '@/lib/site';

// Public by design — this value is also served from /public and must match it.
const INDEXNOW_KEY = 'e5c1a84f938d47bfa7c268df12e09641';
const HOST = new URL(SITE_URL).host;

type PingResult = { success: boolean; status?: number; error?: string };

export async function POST(req: NextRequest) {
  try {
    // Reported separately from 401 so a missing environment variable is visible
    // rather than looking like a rejected caller. This endpoint sat inert for
    // months because an unset secret and a wrong secret were indistinguishable.
    if (!process.env.INDEXING_SECRET) {
      return NextResponse.json({ error: 'INDEXING_SECRET is not configured' }, { status: 503 });
    }

    if (!secretMatches(extractSecret(req), process.env.INDEXING_SECRET)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse the incoming webhook payload for the URL
    const body = await req.json();
    const targetUrl: unknown = body.url; // { "url": "https://www.renewableobserver.com/my-article" }

    if (typeof targetUrl !== 'string' || !targetUrl) {
      return NextResponse.json({ error: 'Missing target URL in payload' }, { status: 400 });
    }

    // Only ever submit our own URLs. Without this the endpoint is an open relay
    // for asking search engines to crawl arbitrary third-party pages.
    let parsed: URL;
    try {
      parsed = new URL(targetUrl);
    } catch {
      return NextResponse.json({ error: 'Target URL is not a valid URL' }, { status: 400 });
    }
    if (parsed.host !== HOST) {
      return NextResponse.json(
        { error: `Target URL must be on ${HOST}` },
        { status: 400 }
      );
    }

    const results: Record<string, PingResult> = {};

    // ==========================================
    // ACTION 1: Ping IndexNow (Bing, Yandex, etc.)
    // ==========================================
    try {
      const indexNowRes = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          host: HOST,
          key: INDEXNOW_KEY,
          keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
          urlList: [targetUrl],
        }),
      });
      
      results.indexNow = {
        status: indexNowRes.status,
        success: indexNowRes.ok
      };
    } catch (e) {
      results.indexNow = { success: false, error: (e as Error).message };
    }

    // ==========================================
    // ACTION 2: Ping Google Indexing API
    // ==========================================
    try {
      const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
      const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'); // Handle multiline env var

      if (clientEmail && privateKey) {
        const jwtClient = new google.auth.JWT({
          email: clientEmail,
          key: privateKey,
          scopes: ['https://www.googleapis.com/auth/indexing'],
        });

        await jwtClient.authorize();

        const indexing = google.indexing({
          version: 'v3',
          auth: jwtClient,
        });

        const googleRes = await indexing.urlNotifications.publish({
          requestBody: {
            url: targetUrl,
            type: 'URL_UPDATED',
          },
        });

        results.google = {
          status: googleRes.status,
          success: googleRes.status === 200
        };
      } else {
        results.google = { success: false, error: 'Google Service Account credentials missing from ENV.' };
      }
    } catch (e) {
      results.google = { success: false, error: (e as Error).message };
    }

    return NextResponse.json({
      message: 'Indexing requests dispatched',
      targetUrl,
      results
    });

  } catch (error) {
    console.error('Instant Indexing API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: (error as Error).message },
      { status: 500 }
    );
  }
}
