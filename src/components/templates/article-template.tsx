import Image from "next/image"
import Link from "next/link"
import { format, isSameDay } from "date-fns"
import { NewsCard } from "@/components/ui/news-card"
import { DynamicAd } from "@/components/ui/dynamic-ad"
import { Post } from "@/types"
import { DEFAULT_BYLINE } from "@/lib/api"
import { SITE_URL, SITE_LOCALE, urlForSlug, decodeHtml, toPlainText } from "@/lib/site"

interface ArticleTemplateProps {
  post: Post
  relatedPosts: Post[]
}

/** Stable, URL-safe id for a heading, so the contents list can link to it. */
function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60)
}

/**
 * Pulls the H2s out for the contents list and gives each one an id in the body
 * HTML, so the two can actually link up. Previously the list was rendered with
 * a pointer cursor but no anchors to point at.
 */
function buildTableOfContents(html: string) {
  const headings: { id: string; text: string }[] = []
  const used = new Set<string>()

  const contentWithIds = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (full, attrs: string, inner: string) => {
      const text = decodeHtml(inner.replace(/<[^>]+>/g, "")).trim()
      if (!text) return full

      // Respect an id the CMS already set; otherwise derive one and de-collide.
      const existing = attrs.match(/\sid=["']([^"']+)["']/i)?.[1]
      let id = existing || slugifyHeading(text) || `section-${headings.length + 1}`
      let n = 2
      while (!existing && used.has(id)) id = `${slugifyHeading(text)}-${n++}`
      used.add(id)

      headings.push({ id, text })
      return existing ? full : `<h2${attrs} id="${id}">${inner}</h2>`
    }
  )

  return { headings, contentWithIds }
}

export function ArticleTemplate({ post, relatedPosts }: ArticleTemplateProps) {
  const category = post.category_info?.[0]

  const wordCount = post.content.rendered.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length
  const readTime = Math.max(1, Math.ceil(wordCount / 200))

  const { headings, contentWithIds } = buildTableOfContents(post.content.rendered)

  const plainTitle = decodeHtml(post.title.rendered)
  const articleUrl = urlForSlug(post.slug)
  // api.ts already replaces email-shaped display names with the house byline.
  const authorName = post.author_info?.name || DEFAULT_BYLINE

  // Filtering on id alone lets the backend's repeated imports of this same
  // article show up as "Read Next", since each copy carries a different id.
  const seenRelated = new Set([plainTitle.toLowerCase()])
  const related = relatedPosts.filter((p) => {
    const key = decodeHtml(p.title.rendered).toLowerCase()
    if (p.id === post.id || seenRelated.has(key)) return false
    seenRelated.add(key)
    return true
  })

  const shareTargets = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(plainTitle)}`,
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
      path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${plainTitle} ${articleUrl}`)}`,
      path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    },
  ]

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    // Google truncates headlines past 110 characters in rich results.
    "headline": plainTitle.slice(0, 110),
    "name": plainTitle,
    "description": toPlainText(post.excerpt.rendered).slice(0, 300),
    "mainEntityOfPage": { "@type": "WebPage", "@id": articleUrl },
    "url": articleUrl,
    "image": post.featured_image_url ? [post.featured_image_url] : [],
    "datePublished": post.date,
    "dateModified": post.modified || post.date,
    "inLanguage": SITE_LOCALE,
    "wordCount": wordCount,
    "isAccessibleForFree": true,
    ...(category ? { "articleSection": category.name } : {}),
    "author": [{
      "@type": authorName === DEFAULT_BYLINE ? "Organization" : "Person",
      "name": authorName,
      ...(post.author_info?.slug ? { "url": `${SITE_URL}/authors/${post.author_info.slug}` } : {})
    }],
    // Resolved against the Organization node emitted in the root layout.
    "publisher": { "@id": `${SITE_URL}/#organization` }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}/`
      },
      ...(category ? [{
        "@type": "ListItem",
        "position": 2,
        "name": category.name,
        "item": urlForSlug(category.slug)
      }] : []),
      {
        "@type": "ListItem",
        "position": category ? 3 : 2,
        "name": plainTitle,
        "item": articleUrl
      }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }}
      />
      
      {/* Editorial Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-8 font-semibold border-b border-border/50 pb-4">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><span className="mx-2 opacity-50">&gt;</span></li>
          {category && (
            <>
              <li><Link href={`/${category.slug}`} className="hover:text-primary transition-colors">{category.name}</Link></li>
              <li><span className="mx-2 opacity-50">&gt;</span></li>
            </>
          )}
          <li className="text-foreground truncate max-w-[150px] sm:max-w-xs">{plainTitle}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-8">
          <header className="mb-10">
            {category && (
              <Link
                href={`/${category.slug}`}
                className="text-[11px] font-bold text-primary uppercase tracking-[0.14em] mb-4 inline-block hover:underline"
              >
                {category.name === "Uncategorized" ? "Daily Updates" : category.name}
              </Link>
            )}
            {/* Serif, and set large. The headline is the page's LCP text and
                the strongest relevance signal it has; the previous text-3xl cap
                read as a section label rather than a lead. */}
            <h1 className="font-serif text-3xl md:text-[2.75rem] font-bold tracking-[-0.02em] leading-[1.1] mb-5 text-foreground text-balance">
              {plainTitle}
            </h1>

            {post.excerpt?.rendered && (
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[62ch] mb-6">
                {toPlainText(post.excerpt.rendered)}
              </p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {authorName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">By {authorName}</div>
                  <div className="text-xs text-muted-foreground font-medium flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <time dateTime={post.date}>
                      Published {format(new Date(post.date), "MMMM d, yyyy")}
                    </time>
                    {/* Shown only when it differs. A freshness signal readers
                        and crawlers both use — and a claim worth not making
                        falsely on every article. */}
                    {post.modified && !isSameDay(new Date(post.modified), new Date(post.date)) && (
                      <>
                        <span aria-hidden="true">&bull;</span>
                        <time dateTime={post.modified}>
                          Updated {format(new Date(post.modified), "MMMM d, yyyy")}
                        </time>
                      </>
                    )}
                    <span aria-hidden="true">&bull;</span>
                    <span>{readTime} min read</span>
                  </div>
                </div>
              </div>
              
              {/* Real share links. These were <button> elements with no
                  handler — they rendered, they hovered, they did nothing. */}
              <div className="flex items-center gap-2">
                {shareTargets.map((target) => (
                  <a
                    key={target.label}
                    href={target.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${target.label}`}
                    className="h-8 w-8 border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={target.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </header>

          {post.featured_image_url && (
            <figure className="mb-12 relative w-full aspect-video bg-muted/30 border border-border/50 rounded-lg overflow-hidden shadow-md">
              <Image
                src={post.featured_image_url}
                alt={plainTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </figure>
          )}

          {headings.length > 0 && (
            <nav aria-label="Table of contents" className="mb-12 p-8 bg-muted/40 border border-border rounded-lg">
              <h2 className="font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
                <span className="h-5 w-1 bg-primary rounded-full"></span>
                Table of Contents
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {headings.map((heading) => (
                  <li key={heading.id} className="text-sm font-medium flex items-start gap-2">
                    <span className="text-primary/50 mt-0.5" aria-hidden="true">•</span>
                    <a
                      href={`#${heading.id}`}
                      className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Body HTML carries the heading ids injected above, so the contents
              list has somewhere to land. */}
          <div
            // Serif body at 18px with a 72ch measure. Long copy set in a UI
            // sans across the full column width is the single biggest drag on
            // how long people stay on an article.
            className="prose prose-lg dark:prose-invert prose-measure text-foreground
              font-serif prose-p:leading-[1.75] prose-p:tracking-[-0.003em]
              prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-[-0.015em] prose-headings:scroll-mt-24
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-a:text-primary prose-a:underline prose-a:underline-offset-2 prose-a:decoration-primary/40 hover:prose-a:decoration-primary
              prose-strong:font-bold prose-strong:text-foreground
              prose-blockquote:border-l-primary prose-blockquote:not-italic prose-blockquote:text-foreground
              prose-li:leading-[1.7]
              prose-img:rounded-lg prose-img:border prose-img:border-border
              prose-figcaption:font-sans prose-figcaption:text-[13px]"
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          />
          
          <hr className="my-16 border-border/50 border-t" />



          {/* Read Next / Related Articles */}
          {related.length > 0 && (
            <div className="mb-12 border-t-2 border-border/60 pt-8 mt-12">
              <h3 className="font-bold text-2xl text-foreground mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-sm"></span>
                Read Next
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.slice(0, 4).map((relatedPost) => (
                  <NewsCard key={relatedPost.id} post={relatedPost} variant="compact" />
                ))}
              </div>
            </div>
          )}

        </article>        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          {/* Related Articles */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2 border-b border-border pb-2 text-primary">
              More In {category?.name === "Uncategorized" ? "Daily Updates" : (category?.name || "News")}
            </h3>
            <div className="flex flex-col gap-6">
              {related.slice(0, 3).map(relatedPost => (
                <div key={relatedPost.id} className="group border-b border-border pb-4 last:border-0">
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                    {relatedPost.category_info?.[0]?.name}
                  </div>
                  <Link href={`/${relatedPost.slug}`} className="block">
                    <h4 
                      className="font-bold text-lg leading-tight group-hover:text-primary transition-colors"
                      dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Ad Slot */}
          <div className="h-[250px] w-full flex items-center justify-center border border-border">
            <DynamicAd slotId="article-sidebar-square" className="h-full w-full" />
          </div>
        </aside>
      </div>
    </div>
  )
}
