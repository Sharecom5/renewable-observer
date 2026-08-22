import { getCategoryBySlug, getCategoryPage } from "@/lib/api"
import { notFound, redirect } from "next/navigation"
import { CategoryTemplate } from "@/components/templates/category-template"
import { pageMetadata } from "@/lib/seo"

/**
 * Page 2+ of a category archive: /<category>/page/<n>.
 *
 * Rendered on demand rather than prerendered — these are deep archive pages
 * that exist so crawlers can reach older articles, not pages readers land on
 * from search.
 */

interface Props {
  params: Promise<{ slug: string; page: string }>
}

const PER_PAGE = 24

function parsePage(raw: string): number | null {
  if (!/^[1-9]\d*$/.test(raw)) return null
  const n = Number(raw)
  return n > 1000 ? null : n
}

export async function generateMetadata({ params }: Props) {
  const { slug, page: rawPage } = await params
  const page = parsePage(rawPage)
  if (!page) return { title: "Not found", robots: { index: false, follow: false } }

  const category = await getCategoryBySlug(slug).catch(() => null)
  if (!category) return { title: "Not found", robots: { index: false, follow: false } }

  return pageMetadata({
    title: `${category.name} — Page ${page}`,
    description: `Page ${page} of ${category.name.toLowerCase()} news and analysis from Renewable Observer.`,
    // Self-referencing canonical. Pointing every page at page one would tell
    // Google to drop these URLs, taking the links to older articles with them —
    // the opposite of why pagination exists.
    path: `/${slug}/page/${page}`,
  })
}

export default async function CategoryPagedPage({ params }: Props) {
  const { slug, page: rawPage } = await params
  const page = parsePage(rawPage)
  if (!page) notFound()

  // Page one is /<category>; keeping /page/1 alive would serve the same
  // content at two URLs.
  if (page === 1) redirect(`/${slug}`)

  const category = await getCategoryBySlug(slug)
  if (!category) notFound()

  const { posts, totalPages } = await getCategoryPage(category.id, page, PER_PAGE)
  if (posts.length === 0) notFound()

  return <CategoryTemplate category={category} posts={posts} page={page} totalPages={totalPages} />
}
