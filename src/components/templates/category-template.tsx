import Link from "next/link"
import { NewsCard } from "@/components/ui/news-card"
import { Pagination } from "@/components/ui/pagination"
import { Category, Post } from "@/types"
import { SITE_URL, SITE_LOCALE, urlForSlug, decodeHtml } from "@/lib/site"

interface CategoryTemplateProps {
  category: Category
  posts: Post[]
  page?: number
  totalPages?: number
}

export function CategoryTemplate({ category, posts, page = 1, totalPages = 1 }: CategoryTemplateProps) {
  const categoryUrl = urlForSlug(category.slug)
  const isFirstPage = page === 1

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": categoryUrl,
    name: `${category.name} News & Analysis`,
    description: `Latest ${category.name.toLowerCase()} news, market data and policy analysis from Renewable Observer.`,
    url: categoryUrl,
    inLanguage: SITE_LOCALE,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: urlForSlug(post.slug),
        name: decodeHtml(post.title.rendered),
      })),
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: category.name, item: categoryUrl },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-[1280px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([collectionSchema, breadcrumbSchema]) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true" className="opacity-40">/</li>
          <li className="text-foreground">{category.name}</li>
        </ol>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-primary">
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-[-0.015em] text-foreground mb-3 text-balance">
          {category.name}
        </h1>
        <p className="text-base text-muted-foreground max-w-[62ch] leading-relaxed">
          Latest developments, market trends and policy updates across the {category.name.toLowerCase()} sector.
        </p>
        {/* Stated once on page one only — repeating it on every page adds
            near-duplicate copy to each paginated URL. */}
        {isFirstPage && typeof category.count === "number" && category.count > 0 && (
          <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground/70 font-semibold mt-4">
            {category.count} articles
          </p>
        )}
      </header>

      {posts.length > 0 ? (
        <>
          {/* Page one leads with a larger story; later pages are a flat grid,
              since the "lead" of page 7 is not meaningfully the lead of
              anything. */}
          {isFirstPage && (
            <div className="mb-10 pb-10 border-b border-border">
              <NewsCard post={posts[0]} variant="lead" priority />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {(isFirstPage ? posts.slice(1) : posts).map((post) => (
              <NewsCard key={post.id} post={post} variant="default" />
            ))}
          </div>

          <Pagination basePath={`/${category.slug}`} page={page} totalPages={totalPages} />
        </>
      ) : (
        <p className="py-16 text-muted-foreground">No articles found in this category.</p>
      )}
    </div>
  )
}
