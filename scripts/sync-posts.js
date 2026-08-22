/**
 * Copies recent posts from the mirror site into the WordPress backend.
 *
 * Credentials come from the environment, never from this file:
 *   WP_USER      the WordPress account email
 *   WP_APP_PASS  a WordPress application password for that account
 *
 * Usage:  WP_USER=… WP_APP_PASS=… node scripts/sync-posts.js
 */

const SOURCE_API_URL = 'https://renewablemirror.com/wp-json/wp/v2/posts?per_page=20';
const TARGET_API_URL = 'https://admin.renewableobserver.com/wp-json/wp/v2/posts';

const { WP_USER, WP_APP_PASS } = process.env;

if (!WP_USER || !WP_APP_PASS) {
  console.error('Missing WP_USER / WP_APP_PASS environment variables.');
  process.exit(1);
}

const AUTH = 'Basic ' + Buffer.from(`${WP_USER}:${WP_APP_PASS}`).toString('base64');

// WordPress appends -2, -3, … when a slug collides, so a slug comparison never
// matches an existing post and every run re-imports the whole feed. Compare on
// normalised titles instead.
function titleKey(post) {
  return post.title.rendered
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

async function getJSON(url, auth) {
  const res = await fetch(url, auth ? { headers: { Authorization: AUTH } } : undefined);
  if (!res.ok) throw new Error(`GET ${url} failed: ${res.status} ${res.statusText}`);
  return res.json();
}

// The REST API caps per_page at 100, so walk pages until X-WP-TotalPages is met.
async function getAllTargetPosts() {
  const posts = [];
  let page = 1;
  let totalPages = 1;

  do {
    const url = `${TARGET_API_URL}?per_page=100&page=${page}&_fields=id,title&status=any`;
    const res = await fetch(url, { headers: { Authorization: AUTH } });
    if (!res.ok) throw new Error(`GET page ${page} failed: ${res.status} ${res.statusText}`);
    totalPages = Number(res.headers.get('x-wp-totalpages')) || 1;
    posts.push(...(await res.json()));
    page++;
  } while (page <= totalPages);

  return posts;
}

async function syncPosts() {
  console.log('Fetching latest posts from renewablemirror.com…');
  const sourcePosts = await getJSON(SOURCE_API_URL);
  if (!Array.isArray(sourcePosts)) throw new Error('Source returned an unexpected payload.');
  console.log(`Found ${sourcePosts.length} posts on source.`);

  console.log('Fetching existing posts from the target to avoid duplicates…');
  const targetPosts = await getAllTargetPosts();
  const existingTitles = new Set(targetPosts.map(titleKey));
  console.log(`Found ${existingTitles.size} distinct titles across ${targetPosts.length} existing posts.`);

  let added = 0;

  for (const post of sourcePosts) {
    const key = titleKey(post);

    if (existingTitles.has(key)) {
      console.log(`Skipping "${post.title.rendered}" (already exists).`);
      continue;
    }

    console.log(`Adding "${post.title.rendered}"`);

    const res = await fetch(TARGET_API_URL, {
      method: 'POST',
      headers: { Authorization: AUTH, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: post.title.rendered,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        status: 'publish',
        slug: post.slug,
      }),
    });

    if (res.status === 201) {
      // Record it immediately so a duplicate inside this same batch is caught too.
      existingTitles.add(key);
      added++;
    } else {
      console.error(`Failed to add "${post.title.rendered}": ${res.status}`, await res.text());
    }
  }

  console.log(`Sync complete. Added ${added} new posts.`);
}

syncPosts().catch((error) => {
  console.error('Sync failed:', error.message);
  process.exit(1);
});
