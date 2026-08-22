import { getPostsSafe, getCategoryMap, getPosts } from "@/lib/api"
import { NewsCard } from "@/components/ui/news-card"
import { FadeIn } from "@/components/ui/fade-in"
import { SubscribeForm } from "@/components/ui/subscribe-form"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Post, Category } from "@/types"

export const revalidate = 60

/**
 * Section heading with a link through to the full category.
 *
 * The rule under it is the primary green rather than a per-section colour.
 * Seven different accent colours read as decoration; one repeated accent reads
 * as a system, and leaves colour free to mean something when it is used.
 */
function SectionHeading({ title, slug }: { title: string; slug: string }) {
  return (
    <div className="flex items-baseline justify-between mb-5 pb-2 border-b-2 border-primary">
      <h2 className="font-serif text-xl font-bold tracking-tight text-foreground">{title}</h2>
      <Link
        href={`/${slug}`}
        className="text-[11px] font-bold text-muted-foreground hover:text-primary uppercase tracking-[0.12em] flex items-center gap-1 group shrink-0"
      >
        All {title} <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  )
}

/** Section lead plus a short list — the standard newspaper section block. */
function SectionBlock({ title, posts, slug }: { title: string; posts: Post[]; slug: string }) {
  if (!posts?.length) return null
  return (
    <section className="mb-12">
      <SectionHeading title={title} slug={slug} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <NewsCard post={posts[0]} variant="featured" />
        <div className="flex flex-col">
          {posts.slice(1, 5).map((post) => (
            <NewsCard key={post.id} post={post} variant="thumbnailLeft" />
          ))}
        </div>
      </div>
    </section>
  )
}

/** Three-across grid, for sections with enough depth to fill it. */
function GridBlock({ title, posts, slug }: { title: string; posts: Post[]; slug: string }) {
  if (!posts?.length) return null
  return (
    <section className="mb-12">
      <SectionHeading title={title} slug={slug} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {posts.slice(0, 3).map((post) => (
          <NewsCard key={post.id} post={post} variant="default" />
        ))}
      </div>
    </section>
  )
}

function titleKey(post: Post) {
  return post.title.rendered.replace(/<[^>]+>/g, "").trim().toLowerCase()
}

/**
 * Takes up to `max` posts not already placed elsewhere on the page.
 *
 * Sections that come up short render short. An earlier version repeated
 * articles to fill the grid, which duplicated React keys and showed readers
 * the same headline twice.
 */
function takeUnused(candidates: Post[], max: number, used: Set<string>) {
  const result: Post[] = []
  for (const post of candidates) {
    const key = titleKey(post)
    if (used.has(key)) continue
    used.add(key)
    result.push(post)
    if (result.length >= max) break
  }
  return result
}

export default async function Home() {
  const [allPosts, categoryMap] = await Promise.all([
    getPostsSafe(100),
    getCategoryMap().catch((): Map<string, Category> => new Map()),
  ])

  if (allPosts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <p className="text-muted-foreground text-lg">Articles are temporarily unavailable. Please try again shortly.</p>
      </div>
    )
  }

  const used = new Set<string>()

  // A front page needs one story that is clearly the story. The previous
  // layout gave ~35 articles near-equal weight, which leaves a reader with
  // nowhere to look first.
  const lead = allPosts[0]
  used.add(titleKey(lead))

  const secondary = takeUnused(allPosts, 2, used)
  const topStories = takeUnused(allPosts, 5, used)
  const mostRecent = takeUnused(allPosts, 6, used)

  const wanted = ["solar", "wind", "markets", "hydrogen", "interview", "interviews", "storage", "ev", "policy"]

  const feeds = await Promise.all(
    wanted.map(async (slug) => {
      const category = categoryMap.get(slug)
      if (!category) return [slug, [] as Post[]] as const
      const posts = await getPosts(10, category.id).catch(() => [] as Post[])
      return [slug, posts] as const
    })
  )
  const feed = Object.fromEntries(feeds) as Record<string, Post[]>

  const interviews = [...feed.interview, ...feed.interviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const solar = takeUnused(feed.solar, 5, used)
  const wind = takeUnused(feed.wind, 5, used)
  const markets = takeUnused(feed.markets, 5, used)
  const hydrogen = takeUnused(feed.hydrogen, 3, used)
  const storage = takeUnused(feed.storage, 3, used)
  const policy = takeUnused(feed.policy, 3, used)
  const interviewPosts = takeUnused(interviews, 3, used)
  const ev = takeUnused(feed.ev, 3, used)

  return (
    <div className="container mx-auto px-4 py-6 max-w-[1280px]">

      {/* Top Banner Ad — fixed box so it cannot shift the page as it loads. */}
      <div className="mb-8 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60 mb-2">Advertisement</span>
        <Link href="https://www.iconsolar-en.com/" target="_blank" rel="noopener noreferrer sponsored" className="block w-full max-w-[728px]">
          <Image src="/images/banner1.webp" alt="Advertisement" width={728} height={90} className="w-full h-auto rounded-lg" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* ============================ MAIN ============================ */}
        <div className="lg:col-span-8 xl:col-span-9">

          {/* Lead + two secondaries. The lead image is the LCP element, so it
              is the only card on the page marked priority. */}
          <section className="mb-12 pb-10 border-b border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <NewsCard post={lead} variant="lead" priority />
              </div>
              <div className="lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-border lg:pl-8">
                {secondary.map((post) => (
                  <NewsCard key={post.id} post={post} variant="default" />
                ))}
              </div>
            </div>
          </section>

          {/* Top stories — a scannable list, no images competing with the lead. */}
          {topStories.length > 0 && (
            <section className="mb-12">
              <SectionHeading title="Top Stories" slug="all-news" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                {topStories.map((post) => (
                  <NewsCard key={post.id} post={post} variant="compact" />
                ))}
              </div>
            </section>
          )}

          <FadeIn><SectionBlock title="Solar" posts={solar} slug="solar" /></FadeIn>
          <FadeIn><SectionBlock title="Wind" posts={wind} slug="wind" /></FadeIn>
          <FadeIn><SectionBlock title="Markets" posts={markets} slug="markets" /></FadeIn>
          <FadeIn><GridBlock title="Hydrogen" posts={hydrogen} slug="hydrogen" /></FadeIn>
          <FadeIn><GridBlock title="Storage" posts={storage} slug="storage" /></FadeIn>
          <FadeIn><GridBlock title="Policy" posts={policy} slug="policy" /></FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <section className="mb-12">
              <SectionHeading title="Interviews" slug="interviews" />
              {interviewPosts.map((post) => (
                <NewsCard key={post.id} post={post} variant="thumbnailLeft" />
              ))}
            </section>
            <section className="mb-12">
              <SectionHeading title="EVs" slug="ev" />
              {ev.map((post) => (
                <NewsCard key={post.id} post={post} variant="thumbnailLeft" />
              ))}
            </section>
          </div>
        </div>

        {/* =========================== SIDEBAR =========================== */}
        <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8">

          {/* Newsletter first: the highest-value action on the page. */}
          <div className="bg-muted/40 border border-border rounded-lg p-5">
            <h2 className="font-serif font-bold text-lg mb-1.5 text-foreground">Daily Briefing</h2>
            <p className="text-[13px] text-muted-foreground mb-4 leading-relaxed">
              The day&rsquo;s renewable energy news, in your inbox each morning.
            </p>
            <SubscribeForm variant="footer" />
          </div>

          {/* Latest — a dense list gives crawlers more internal links per pixel
              than a card grid, and readers a reason to keep scrolling. */}
          {mostRecent.length > 0 && (
            <div>
              <h2 className="font-serif text-lg font-bold text-foreground pb-2 mb-3 border-b-2 border-primary">
                Latest
              </h2>
              {mostRecent.map((post) => (
                <NewsCard key={post.id} post={post} variant="textOnly" />
              ))}
            </div>
          )}

          {/* House ad. Fixed height so it reserves its own space. */}
          <div className="w-full h-[250px] bg-gradient-to-br from-[#0F5132]/95 to-[#0F5132] border border-border rounded-lg flex flex-col items-center justify-center relative overflow-hidden group">
            <span className="text-[9px] uppercase tracking-[0.14em] text-white/50 absolute top-2 left-3">Advertisement</span>
            <div className="flex flex-col items-center text-center px-6">
              <span className="font-sans font-bold text-xs text-white/70 uppercase tracking-[0.16em] mb-1">Book your</span>
              <span className="font-serif font-bold text-3xl text-yellow-400 mb-4 leading-none">Ad Space</span>
              <span className="bg-white/10 group-hover:bg-white text-white group-hover:text-[#0F5132] text-[11px] font-bold uppercase tracking-[0.12em] py-2 px-4 rounded-full border border-white/30 transition-colors">
                Contact Us
              </span>
            </div>
            <a href="mailto:hello@renewableobserver.com" className="absolute inset-0 z-20">
              <span className="sr-only">Book ad space</span>
            </a>
          </div>

          <div className="sticky top-24 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60 mb-2">Advertisement</span>
            <Image src="/images/banner2.webp" alt="Advertisement" width={300} height={250} className="w-full h-auto rounded-lg border border-border" />
          </div>

        </aside>
      </div>
    </div>
  )
}
