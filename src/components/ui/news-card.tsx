import Link from "next/link"
import Image from "next/image"
import { Post } from "@/types"
import { decodeHtml, toPlainText } from "@/lib/site"

/**
 * Article card, in the sizes a news front page needs.
 *
 * This is a server component. It previously carried "use client" and wrapped
 * every instance in framer-motion, so a homepage of ~35 cards shipped and
 * hydrated 120 KB of animation runtime to move a card four pixels on hover.
 * That lands squarely on INP, which has been a Core Web Vital since 2024.
 * The same hover behaviour is CSS, costs nothing, and lets the whole grid
 * render on the server.
 *
 * Titles are rendered as decoded text rather than injected as HTML. WordPress
 * sends entity-encoded headlines, not markup, so there is nothing to preserve
 * and one less injection path to think about.
 */

type Variant =
  | "lead"          // the single dominant story on the front page
  | "featured"      // lead of a section block
  | "default"       // grid card
  | "compact"       // headline + small thumbnail
  | "thumbnailLeft" // dense list row
  | "textOnly"      // headline only
  | "overlay"       // text over image

interface NewsCardProps {
  post: Post
  variant?: Variant
  /** Set on the front page's lead image only — it is the LCP element. */
  priority?: boolean
}

function categoryLabel(post: Post) {
  const name = post.category_info?.[0]?.name
  return !name || name === "Uncategorized" ? "Daily Updates" : name
}

/** Absolute date. Crawlers and readers both prefer it to "3 days ago". */
function published(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function Meta({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-[11px] text-muted-foreground font-medium ${className}`}>
      <time dateTime={post.date}>{published(post.date)}</time>
    </div>
  )
}

function Eyebrow({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <p className={`text-[10px] font-bold text-primary uppercase tracking-[0.12em] ${className}`}>
      {categoryLabel(post)}
    </p>
  )
}

export function NewsCard({ post, variant = "default", priority = false }: NewsCardProps) {
  const title = decodeHtml(post.title.rendered)
  const href = `/${post.slug}`

  /* ---------------------------------------------------------------- *
   * Lead — one per front page, and the LCP element.
   * ---------------------------------------------------------------- */
  if (variant === "lead") {
    return (
      <article className="group">
        {post.featured_image_url && (
          <Link href={href} className="block relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-border mb-5">
            <Image
              src={post.featured_image_url}
              alt={title}
              fill
              // Full width to the 8-col main column at desktop.
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 780px"
              priority={priority}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </Link>
        )}
        <Eyebrow post={post} className="mb-2" />
        <h2 className="font-serif font-bold text-2xl md:text-4xl leading-[1.12] tracking-[-0.015em] text-foreground text-balance mb-3">
          <Link href={href} className="hover:text-primary transition-colors">{title}</Link>
        </h2>
        {post.excerpt?.rendered && (
          <p className="text-[15px] leading-relaxed text-muted-foreground line-clamp-3 mb-3 max-w-[62ch]">
            {toPlainText(post.excerpt.rendered)}
          </p>
        )}
        <Meta post={post} />
      </article>
    )
  }

  /* ---------------------------------------------------------------- *
   * Overlay — text over image.
   * ---------------------------------------------------------------- */
  if (variant === "overlay") {
    return (
      <article className="relative overflow-hidden group w-full h-full rounded-lg isolate">
        <Link href={href} className="block absolute inset-0 z-20" aria-label={title} />
        {post.featured_image_url ? (
          <Image
            src={post.featured_image_url}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
          />
        ) : (
          <div className="absolute inset-0 bg-primary/20 z-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col z-30 pointer-events-none">
          <p className="text-[10px] font-bold text-white/80 uppercase tracking-[0.14em] mb-2">{categoryLabel(post)}</p>
          <h2 className="font-serif font-bold text-white text-xl sm:text-2xl md:text-3xl leading-[1.15] text-balance mb-2">
            {title}
          </h2>
          <time dateTime={post.date} className="text-[11px] text-white/75 font-medium">{published(post.date)}</time>
        </div>
      </article>
    )
  }

  /* ---------------------------------------------------------------- *
   * Text only.
   * ---------------------------------------------------------------- */
  if (variant === "textOnly") {
    return (
      <article className="border-b border-border/60 last:border-b-0 py-3 group">
        <Link href={href} className="flex flex-col gap-1.5">
          <Eyebrow post={post} />
          <h3 className="font-serif font-semibold text-[15px] leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-3">
            {title}
          </h3>
          <Meta post={post} />
        </Link>
      </article>
    )
  }

  /* ---------------------------------------------------------------- *
   * Compact — headline with a small thumbnail.
   * ---------------------------------------------------------------- */
  if (variant === "compact") {
    return (
      <article className="border-b border-border/60 last:border-b-0 group">
        <Link href={href} className="flex gap-4 py-4 items-start">
          <div className="flex-1 space-y-1.5">
            <Eyebrow post={post} />
            <h3 className="font-serif font-semibold text-[15px] leading-snug text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <Meta post={post} />
          </div>
          {post.featured_image_url && (
            <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-md border border-border">
              <Image
                src={post.featured_image_url}
                alt=""
                fill
                sizes="80px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
        </Link>
      </article>
    )
  }

  /* ---------------------------------------------------------------- *
   * Thumbnail left — dense list row.
   * ---------------------------------------------------------------- */
  if (variant === "thumbnailLeft") {
    return (
      <article className="border-b border-border/60 last:border-b-0 group py-3">
        <Link href={href} className="flex gap-3 items-start">
          {post.featured_image_url && (
            <div className="relative w-24 h-[62px] shrink-0 overflow-hidden rounded-md border border-border">
              <Image
                src={post.featured_image_url}
                alt=""
                fill
                sizes="96px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
          <div className="flex-1 space-y-1">
            <h3 className="font-serif font-semibold text-sm leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-3">
              {title}
            </h3>
            <Meta post={post} />
          </div>
        </Link>
      </article>
    )
  }

  /* ---------------------------------------------------------------- *
   * Featured (section lead) and default grid card.
   * ---------------------------------------------------------------- */
  const isFeatured = variant === "featured"

  return (
    <article className="group flex flex-col h-full">
      {post.featured_image_url && (
        <Link
          href={href}
          className={`block relative w-full overflow-hidden rounded-lg border border-border mb-3 ${
            isFeatured ? "aspect-[16/9]" : "aspect-[3/2]"
          }`}
        >
          <Image
            src={post.featured_image_url}
            alt={title}
            fill
            sizes={isFeatured ? "(max-width: 768px) 100vw, 380px" : "(max-width: 768px) 100vw, 300px"}
            priority={priority}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </Link>
      )}

      <div className="flex flex-col flex-1">
        <Eyebrow post={post} className="mb-1.5" />
        <h2
          className={`font-serif font-semibold text-foreground text-balance mb-2 ${
            isFeatured ? "text-lg md:text-xl leading-[1.2]" : "text-base leading-snug line-clamp-3"
          }`}
        >
          <Link href={href} className="hover:text-primary transition-colors">{title}</Link>
        </h2>

        {isFeatured && post.excerpt?.rendered && (
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2 mb-2">
            {toPlainText(post.excerpt.rendered)}
          </p>
        )}

        <Meta post={post} className="mt-auto pt-1" />
      </div>
    </article>
  )
}
