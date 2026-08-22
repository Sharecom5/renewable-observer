import { getCategoryBySlug, getPostBySlug, getPosts, getAllPostSlugs, dedupeByTitle, getCanonicalSlug, getCategoryPage } from "@/lib/api"
import { notFound } from "next/navigation"
import { CategoryTemplate } from "@/components/templates/category-template"
import { ArticleTemplate } from "@/components/templates/article-template"
import { decodeHtml, toPlainText } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"

interface DynamicRouteProps {
  params: Promise<{ slug: string }>
}

/**
 * Prerenders the newest articles at build time; the rest render on first
 * request and are then cached by ISR.
 *
 * Held to twenty deliberately. The WordPress host rate-limits under burst
 * load, and prerendering a hundred articles reliably tripped it — a single
 * dropped connection during prerender fails the whole deploy. Twenty covers
 * the stories linked from the front page, which take almost all the traffic,
 * and everything else is one cache miss away from being just as fast.
 */
const PRERENDER_COUNT = 20

export async function generateStaticParams() {
  try {
    const posts = dedupeByTitle(await getAllPostSlugs())
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return posts.slice(0, PRERENDER_COUNT).map((post) => ({ slug: post.slug }))
  } catch (error) {
    // A backend blip during build shouldn't fail the deploy — these pages will
    // simply be rendered on demand instead.
    console.error("generateStaticParams: could not prerender articles:", error)
    return []
  }
}

/**
 * Resolves a slug to either an article or a category.
 *
 * Articles are tried first because they outnumber categories by roughly fifty
 * to one, so the previous category-first order meant every article page paid
 * for a lookup that was always going to miss.
 *
 * Next.js dedupes identical fetches within a render pass, so calling this from
 * both generateMetadata and the page costs one round-trip, not two.
 */
async function resolveSlug(slug: string) {
  const post = await getPostBySlug(slug)
  if (post) return { kind: "post" as const, post }

  const category = await getCategoryBySlug(slug)
  if (category) return { kind: "category" as const, category }

  return { kind: "none" as const }
}

export async function generateMetadata({ params }: DynamicRouteProps) {
  const { slug } = await params
  const resolved = await resolveSlug(slug)

  if (resolved.kind === "post") {
    const { post } = resolved

    // Re-imports of one article serve identical content under -2 / -3 slugs.
    // Pointing them at the oldest copy consolidates the duplicates instead of
    // letting them compete with each other.
    const canonicalSlug = await getCanonicalSlug(post.slug)

    const rankMathNoIndex = post.rank_math_robots?.some((r) => r.toLowerCase() === "noindex")

    return pageMetadata({
      title: decodeHtml(post.rank_math_title || post.title.rendered),
      description: decodeHtml(post.rank_math_description || toPlainText(post.excerpt.rendered)),
      path: `/${canonicalSlug}`,
      image: post.featured_image_url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified || post.date,
      index: !rankMathNoIndex,
    })
  }

  if (resolved.kind === "category") {
    const { category } = resolved
    return pageMetadata({
      title: category.rank_math_title || `${category.name} News & Analysis`,
      description:
        category.rank_math_description ||
        `Latest ${category.name.toLowerCase()} news, market data and policy analysis from Renewable Observer.`,
      path: `/${category.slug}`,
      // An empty category has nothing to rank for; keep it crawlable but out
      // of the index until it does.
      index: (category.count ?? 0) > 0,
    })
  }

  return { title: "Not found", robots: { index: false, follow: false } }
}

export default async function DynamicSlugPage({ params }: DynamicRouteProps) {
  const { slug } = await params
  const resolved = await resolveSlug(slug)

  if (resolved.kind === "post") {
    const { post } = resolved
    const relatedPosts = post.categories?.[0] ? await getPosts(5, post.categories[0]) : []
    return <ArticleTemplate post={post} relatedPosts={relatedPosts} />
  }

  if (resolved.kind === "category") {
    const { category } = resolved
    const { posts, totalPages } = await getCategoryPage(category.id, 1, 24)
    return <CategoryTemplate category={category} posts={posts} page={1} totalPages={totalPages} />
  }

  notFound()
}
