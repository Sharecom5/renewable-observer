# Renewable Observer

Next.js 16 frontend for renewableobserver.com, reading from a headless
WordPress backend at `admin.renewableobserver.com`.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill it in
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Every environment variable the app reads is listed in `.env.example`. The
indexing and newsletter features return a `503` (rather than failing quietly)
when their variables are missing, so an unset value is visible in the response
instead of looking like a rejected caller.

## Architecture

Articles and categories share the root namespace: `/[slug]` resolves a slug to
an article first, then a category, then 404s. The hundred most recent articles
are prerendered via `generateStaticParams`; the rest render on demand and cache.

`src/lib/api.ts` is the only module that talks to WordPress. Two conventions
there are load-bearing:

- **No placeholder content, ever.** The API layer used to fall back to mock
  articles when a request failed, which put twenty invented URLs into
  `sitemap.xml` and served them at HTTP 200 with `index, follow`. Functions now
  throw a `BackendUnavailableError` instead.
- **404 and 5xx mean different things.** `getPostBySlug` returns `null` only
  when WordPress confirms the article does not exist; a backend failure throws.
  A 404 permanently removes a URL from search, a 5xx tells crawlers to retry.

Use the `*Safe` variants only where an outage should thin the page rather than
break it — the breaking-news strip in the root layout appears on every route, so
letting it throw would take down the static policy pages too.

`src/lib/site.ts` holds the canonical site URL. Import it rather than writing
the domain out again.

## Scripts

```bash
npm run lint

# Copy recent posts from the mirror site. Deduplicates on title, because
# WordPress assigns a new -2 / -3 slug on collision and a slug comparison
# therefore re-imports the whole feed on every run.
WP_USER=… WP_APP_PASS=… npm run sync-posts

# Report duplicate articles already in the backend. Dry run by default;
# pass -- --apply to move them to trash, keeping the oldest of each set.
WP_USER=… WP_APP_PASS=… npm run dedupe-posts
```

`WP_APP_PASS` is a WordPress *application password*, issued under
WP Admin → Users → Profile. Never the account password, and never committed.

## Troubleshooting

**`Cannot find module '../../src/app/<route>/page.js'` during typecheck** —
stale generated validators in `.next` for a route that has since been deleted.
Run `rm -rf .next` and rebuild.

**`Next.js inferred your workspace root`** — a lockfile above this directory is
outranking the project's own. `turbopack.root` in `next.config.ts` pins it.
