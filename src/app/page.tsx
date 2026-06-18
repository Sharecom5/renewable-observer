import { getPosts, getCategories, getPostsByCategorySlug } from "@/lib/api"
import { NewsCard } from "@/components/ui/news-card"
import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { DynamicAd } from "@/components/ui/dynamic-ad"

// A helper to render category blocks in a dense "Magazine" layout
function CategoryBlock({ title, posts, slug }: { title: string, posts: any[], slug: string }) {
  if (!posts || posts.length === 0) {
    return null;
  }
  
  return (
    <section className="mb-12 border-t-[3px] border-foreground pt-4 relative">
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-border/40">
        <h2 className="text-xl md:text-2xl font-black font-serif tracking-tight text-foreground uppercase">
          {title}
        </h2>
        <Link href={`/${slug}`} className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em] flex items-center gap-1 group">
          More <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Massive Featured Article */}
        <div className={posts.length > 1 ? "lg:col-span-7" : "lg:col-span-12"}>
          <FadeIn className="h-full">
            <NewsCard post={posts[0]} variant="featured" />
          </FadeIn>
        </div>
        
        {/* Right Side: Stacked Compact Articles (5 columns) */}
        {posts.length > 1 && (
          <div className="lg:col-span-5 flex flex-col gap-4">
            {posts.slice(1, 4).map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <NewsCard post={post} variant="compact" />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default async function Home() {
  const allPosts = await getPosts(20)
  const solarPosts = await getPostsByCategorySlug('solar', 4)
  const windPosts = await getPostsByCategorySlug('wind', 4)
  const hydrogenPosts = await getPostsByCategorySlug('hydrogen', 4)
  const marketPosts = await getPostsByCategorySlug('markets', 4)
  const interviewsPosts = await getPostsByCategorySlug('interview', 4)

  const featuredPost = allPosts[0]
  const latestTicker = allPosts.slice(1, 6)
  const editorsPicks = allPosts.slice(6, 9)

  return (
    <div className="container mx-auto px-4 py-6 overflow-hidden max-w-[1300px]">
      
      {/* "Newsroom" Dense Hero Section (3 Columns) */}
      <section className="mb-10 border-b-4 border-border/40 pb-10">
        <h2 className="sr-only">Top Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Latest News Ticker (3 columns wide) */}
          <div className="lg:col-span-3 border-r border-border/40 pr-6 hidden lg:block">
            <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] border-b-2 border-primary pb-2 mb-4 text-foreground flex items-center justify-between">
              <span>Latest News</span>
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
            </h3>
            <div className="flex flex-col gap-1">
              {latestTicker.map((post, i) => (
                <FadeIn key={post.id} delay={i * 0.1}>
                  <NewsCard post={post} variant="textOnly" />
                </FadeIn>
              ))}
            </div>
          </div>
          
          {/* Column 2: Center Lead Story (6 columns wide) */}
          <div className="lg:col-span-6 lg:border-r border-border/40 lg:pr-6 flex flex-col">
            <FadeIn className="flex-1">
              {featuredPost && <NewsCard post={featuredPost} variant="featured" />}
            </FadeIn>
          </div>

          {/* Column 3: Editor's Picks (3 columns wide) */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] border-b-2 border-foreground pb-2 mb-4 text-foreground">
              Trending
            </h3>
            <div className="flex flex-col gap-5 flex-1">
              {editorsPicks.map((post, i) => (
                <FadeIn key={post.id} delay={i * 0.1}>
                  <NewsCard post={post} variant="default" />
                </FadeIn>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Top Ad Strip */}
      <section className="mb-10">
        <FadeIn className="w-full">
          <div className="w-full bg-muted/20 border border-border/40 rounded-sm flex flex-col items-center justify-center p-2 relative overflow-hidden group max-w-[970px] mx-auto">
            <span className="text-[9px] uppercase tracking-widest text-muted-foreground absolute top-1 left-2">Advertisement</span>
            <Link href="https://www.iconsolar-en.com/" target="_blank" rel="noopener noreferrer" className="block w-full flex justify-center mt-3">
              <img src="/images/banner1.webp" alt="Advertisement" className="max-w-full h-auto object-contain" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Category Blocks in 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
        <div className="flex flex-col">
          <CategoryBlock title="Solar Energy" posts={solarPosts} slug="solar" />
          <CategoryBlock title="Green Hydrogen" posts={hydrogenPosts} slug="hydrogen" />
        </div>
        <div className="flex flex-col">
          <CategoryBlock title="Wind Energy" posts={windPosts} slug="wind" />
          <CategoryBlock title="Markets & Policy" posts={marketPosts} slug="market" />
        </div>
      </div>

      {/* Interviews spans full width at bottom */}
      <div className="mt-4">
        <CategoryBlock title="Exclusive Interviews" posts={interviewsPosts} slug="interviews" />
      </div>

    </div>
  )
}
