const https = require('https');
const http = require('http'); // Just in case, though usually https

const SOURCE_API_URL = 'https://renewablemirror.com/wp-json/wp/v2/posts?per_page=20';
const TARGET_API_URL = 'https://admin.renewableobserver.com/wp-json/wp/v2/posts';
// Basic Auth credentials from cleanup.js
const AUTH = 'Basic ' + Buffer.from('abhishek2019cs034abesit@gmail.com:JDIi SPiE 0Nxi xSIV 86Bn aEyL').toString('base64');

// Helper to make GET requests
function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Helper to make POST requests
function postJSON(url, body) {
  return new Promise((resolve, reject) => {
    const dataString = JSON.stringify(body);
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: {
        'Authorization': AUTH,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(dataString)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });

    req.on('error', reject);
    req.write(dataString);
    req.end();
  });
}

async function syncPosts() {
  console.log('Fetching latest posts from renewablemirror.com...');
  try {
    const sourcePosts = await fetch(SOURCE_API_URL);
    if (!Array.isArray(sourcePosts)) {
      console.error('Failed to fetch source posts or invalid response.');
      return;
    }
    console.log(`Found ${sourcePosts.length} posts on source.`);

    console.log('Fetching existing posts from admin.renewableobserver.com to avoid duplicates...');
    const targetPosts = await fetch(`${TARGET_API_URL}?per_page=100`);
    const existingSlugs = new Set();
    
    if (Array.isArray(targetPosts)) {
      targetPosts.forEach(p => existingSlugs.add(p.slug));
    }
    console.log(`Found ${existingSlugs.size} existing posts on target.`);

    let addedCount = 0;

    for (const post of sourcePosts) {
      if (existingSlugs.has(post.slug)) {
        console.log(`Skipping "${post.title.rendered}" (already exists).`);
        continue;
      }

      console.log(`Adding new post: "${post.title.rendered}"`);
      
      const newPost = {
        title: post.title.rendered,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        status: 'publish', // or 'draft' if you prefer to review them first
        slug: post.slug,
        // categories and tags might have different IDs on the new site, so we omit them for now 
        // to let them be uncategorized, or you could map them.
      };

      const result = await postJSON(TARGET_API_URL, newPost);
      if (result.status === 201) {
        console.log(`Successfully added: "${post.title.rendered}"`);
        addedCount++;
      } else {
        console.error(`Failed to add "${post.title.rendered}": Status ${result.status}`, result.data);
      }
    }

    console.log(`Sync complete! Added ${addedCount} new posts.`);
  } catch (error) {
    console.error('Error during sync:', error);
  }
}

syncPosts();
