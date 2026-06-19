import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const INDEXNOW_KEY = 'e5c1a84f938d47bfa7c268df12e09641';
const HOST = 'www.renewableobserver.com';

export async function POST(req: NextRequest) {
  try {
    // 1. Basic security check (We only want WP webhooks triggering this)
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get('secret');
    const expectedSecret = process.env.INDEXING_SECRET;

    if (!expectedSecret || secret !== expectedSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse the incoming webhook payload for the URL
    const body = await req.json();
    const targetUrl = body.url; // We expect { "url": "https://www.renewableobserver.com/my-article" }

    if (!targetUrl) {
      return NextResponse.json({ error: 'Missing target URL in payload' }, { status: 400 });
    }

    const results: any = {};

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
    } catch (e: any) {
      results.indexNow = { success: false, error: e.message };
    }

    // ==========================================
    // ACTION 2: Ping Google Indexing API
    // ==========================================
    try {
      const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
      const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'); // Handle multiline env var

      if (clientEmail && privateKey) {
        const jwtClient = new google.auth.JWT(
          clientEmail,
          undefined,
          privateKey,
          ['https://www.googleapis.com/auth/indexing'],
          undefined
        );

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
    } catch (e: any) {
      results.google = { success: false, error: e.message };
    }

    return NextResponse.json({ 
      message: 'Indexing requests dispatched', 
      targetUrl, 
      results 
    });

  } catch (error: any) {
    console.error('Instant Indexing API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
