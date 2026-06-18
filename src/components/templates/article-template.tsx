import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { NewsCard } from "@/components/ui/news-card"
import { SubscribeForm } from "@/components/ui/subscribe-form"
import { DynamicAd } from "@/components/ui/dynamic-ad"
import { Post } from "@/types"

interface ArticleTemplateProps {
  post: Post
  relatedPosts: Post[]
}

export function ArticleTemplate({ post, relatedPosts }: ArticleTemplateProps) {
  const category = post.category_info?.[0]

  // Calculate reading time
  const wordCount = post.content.rendered.replace(/<[^>]+>/g, '').split(/\s+/).length || 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  // Extract H2s for Table of Contents
  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const toc: string[] = [];
  let match;
  while ((match = h2Regex.exec(post.content.rendered)) !== null) {
    toc.push(match[1].replace(/<[^>]+>/g, '').trim());
  }

  // Generate Schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title.rendered,
    "image": post.featured_image_url ? [post.featured_image_url] : [],
    "datePublished": post.date,
    "dateModified": post.modified || post.date,
    "author": [{
      "@type": "Person",
      "name": post.author_info?.name || "Renewable Observer",
      "url": `https://renewableobserver.com/authors/${post.author_info?.slug || ''}`
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Renewable Observer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://renewableobserver.com/logo.png"
      }
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://renewableobserver.com/"
      },
      ...(category ? [{
        "@type": "ListItem",
        "position": 2,
        "name": category.name,
        "item": `https://renewableobserver.com/${category.slug}`
      }] : []),
      {
        "@type": "ListItem",
        "position": category ? 3 : 2,
        "name": post.title.rendered,
        "item": `https://renewableobserver.com/${post.slug}`
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
          <li 
            className="text-foreground truncate max-w-[150px] sm:max-w-xs"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-8">
          <header className="mb-10">
            {category && (
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 inline-block px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                {category.name === "Uncategorized" ? "Daily Updates" : category.name}
              </span>
            )}
            <h1 
              className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.15] mb-6 text-foreground"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  E
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm uppercase tracking-wider">By Editorial Desk</div>
                  <div className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                    <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
                    <span>&bull;</span>
                    <span>{readTime} min read</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {/* LinkedIn */}
                <button aria-label="Share on LinkedIn" className="h-8 w-8 border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                </button>
                {/* X (Twitter) */}
                <button aria-label="Share on X" className="h-8 w-8 border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </button>
                {/* Facebook */}
                <button aria-label="Share on Facebook" className="h-8 w-8 border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
                </button>
                {/* WhatsApp */}
                <button aria-label="Share on WhatsApp" className="h-8 w-8 border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </button>
              </div>
            </div>
          </header>

          {post.featured_image_url && (
            <figure className="mb-12 relative w-full aspect-video bg-muted/30 border border-border/50 rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <Image 
                src={post.featured_image_url} 
                alt={post.title.rendered}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
                unoptimized={true}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </figure>
          )}

          {toc.length > 0 && (
            <div className="mb-12 p-8 bg-card/50 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl">
              <h2 className="font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
                <span className="h-5 w-1 bg-primary rounded-full"></span>
                Table of Contents
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {toc.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-start gap-2">
                    <span className="text-primary/50 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div 
            className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:underline prose-p:leading-[1.7] prose-img:rounded-xl prose-img:border prose-img:border-border/50 prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          
          <hr className="my-16 border-border/50 border-t" />



          {/* Read Next / Related Articles */}
          {relatedPosts && relatedPosts.length > 1 && (
            <div className="mb-12 border-t-2 border-border/60 pt-8 mt-12">
              <h3 className="font-bold text-2xl text-foreground mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-sm"></span>
                Read Next
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.filter(p => p.id !== post.id).slice(0, 4).map((relatedPost) => (
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
              {relatedPosts.filter(p => p.id !== post.id).slice(0, 3).map(relatedPost => (
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
