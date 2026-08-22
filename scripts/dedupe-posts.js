/**
 * Finds posts in the WordPress backend that share a title and moves the newer
 * copies to trash, keeping the oldest of each set.
 *
 * The oldest copy is kept deliberately: it holds the unsuffixed slug (later
 * imports get -2, -3, …) and whatever search equity the article has accrued.
 *
 * Credentials come from the environment, never from this file:
 *   WP_USER      the WordPress account email
 *   WP_APP_PASS  a WordPress application password for that account
 *
 * Dry run (default, changes nothing):
 *   WP_USER=… WP_APP_PASS=… node scripts/dedupe-posts.js
 *
 * Apply — trashes duplicates, recoverable from the WordPress trash:
 *   WP_USER=… WP_APP_PASS=… node scripts/dedupe-posts.js --apply
 */

const API_BASE = 'https://admin.renewableobserver.com/wp-json/wp/v2/posts';

const { WP_USER, WP_APP_PASS } = process.env;
const APPLY = process.argv.includes('--apply');

if (!WP_USER || !WP_APP_PASS) {
  console.error('Missing WP_USER / WP_APP_PASS environment variables.');
  process.exit(1);
}

const AUTH = 'Basic ' + Buffer.from(`${WP_USER}:${WP_APP_PASS}`).toString('base64');

function titleKey(post) {
  return post.title.rendered
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

async function getAllPosts() {
  const posts = [];
  let page = 1;
  let totalPages = 1;

  do {
    const url = `${API_BASE}?per_page=100&page=${page}&_fields=id,date,slug,title&orderby=date&order=asc`;
    const res = await fetch(url, { headers: { Authorization: AUTH } });
    if (!res.ok) throw new Error(`GET page ${page} failed: ${res.status} ${res.statusText}`);
    totalPages = Number(res.headers.get('x-wp-totalpages')) || 1;
    posts.push(...(await res.json()));
    process.stdout.write(`\rFetched page ${page}/${totalPages}…`);
    page++;
  } while (page <= totalPages);

  process.stdout.write('\n');
  return posts;
}

async function dedupe() {
  const posts = await getAllPosts();
  console.log(`Found ${posts.length} posts total.`);

  // Posts arrive oldest-first, so the first of each title is the one to keep.
  const seen = new Map();
  const duplicates = [];

  for (const post of posts) {
    const key = titleKey(post);
    if (seen.has(key)) duplicates.push({ post, keeping: seen.get(key) });
    else seen.set(key, post);
  }

  console.log(`${seen.size} distinct titles, ${duplicates.length} duplicates.\n`);

  if (duplicates.length === 0) return;

  for (const { post, keeping } of duplicates) {
    console.log(`  #${post.id}  ${post.slug}`);
    console.log(`      duplicate of #${keeping.id} (${keeping.slug})`);
  }

  if (!APPLY) {
    console.log(`\nDry run — nothing was changed. Re-run with --apply to trash these ${duplicates.length} posts.`);
    return;
  }

  console.log(`\nTrashing ${duplicates.length} duplicates…`);
  let trashed = 0;

  for (const { post } of duplicates) {
    // No force=true: posts go to trash and stay recoverable.
    const res = await fetch(`${API_BASE}/${post.id}`, {
      method: 'DELETE',
      headers: { Authorization: AUTH },
    });
    if (res.ok) trashed++;
    else console.error(`Failed to trash #${post.id}: ${res.status}`);
  }

  console.log(`Done. Trashed ${trashed} of ${duplicates.length}. Recoverable from the WordPress trash.`);
}

dedupe().catch((error) => {
  console.error('Dedupe failed:', error.message);
  process.exit(1);
});
