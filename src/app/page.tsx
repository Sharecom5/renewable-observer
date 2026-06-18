import { getPosts, getPostsByCategorySlug } from "@/lib/api"
import { NewsCard } from "@/components/ui/news-card"
import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { DynamicAd } from "@/components/ui/dynamic-ad"

// 1. Feature + List (Style A)
function FeatureListCategory({ title, posts, slug, colorClass }: { title: string, posts: any[], slug: string, colorClass: string }) {
  if (!posts || posts.length === 0) return null;
  return (
    <section className="mb-10">
      <div className={`flex items-center justify-between mb-4 pb-2 border-b-2 ${colorClass}`}>
        <h2 className={`text-base font-bold uppercase tracking-wide text-foreground`}>{title}</h2>
        <Link href={`/${slug}`} className="text-xs font-bold text-muted-foreground hover:text-primary uppercase tracking-widest flex items-center gap-1 group">
          View All <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <NewsCard post={posts[0]} variant="featured" />
        </div>
        <div className="flex flex-col gap-0">
          {posts.slice(1, 5).map((post) => (
            <NewsCard key={post.id} post={post} variant="thumbnailLeft" />
          ))}
        </div>
      </div>
    </section>
  )
}

// 2. 2-Column Split (Style B)
function SplitColumnCategory({ title, posts, slug, colorClass }: { title: string, posts: any[], slug: string, colorClass: string }) {
  if (!posts || posts.length === 0) return null;
  return (
    <section className="mb-10">
      <div className={`flex items-center justify-between mb-4 pb-2 border-b-2 ${colorClass}`}>
        <h2 className={`text-base font-bold uppercase tracking-wide text-foreground`}>{title}</h2>
        <Link href={`/${slug}`} className="text-xs font-bold text-muted-foreground hover:text-primary uppercase tracking-widest flex items-center gap-1 group">
          View All <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
        <div className="flex flex-col gap-0">
          {posts.slice(0, 3).map((post) => (
            <NewsCard key={post.id} post={post} variant="compact" />
          ))}
        </div>
        <div className="flex flex-col gap-0">
          {posts.slice(3, 6).map((post) => (
            <NewsCard key={post.id} post={post} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default async function Home() {
  const allPosts = await getPosts(20)
  
  if (!allPosts || allPosts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <p className="text-muted-foreground text-lg">No articles found. Sync posts from WordPress to populate the newsfeed.</p>
      </div>
    )
  }

  const solarPosts = await getPostsByCategorySlug('solar', 6)
  const windPosts = await getPostsByCategorySlug('wind', 6)
  const hydrogenPosts = await getPostsByCategorySlug('hydrogen', 5)
  const marketPosts = await getPostsByCategorySlug('markets', 6)
  const interviewPosts = await getPostsByCategorySlug('interview', 4)

  const heroFeatured = allPosts[0]
  const heroList = allPosts.slice(1, 4)
  const mostPopular = allPosts.slice(4, 9)

  return (
    <div className="container mx-auto px-4 py-6 overflow-hidden max-w-[1280px]">
      
      {/* Top Banner Ad */}
      <div className="mb-8 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-2">Advertisement</span>
        <Link href="https://www.iconsolar-en.com/" target="_blank" rel="noopener noreferrer" className="block w-full max-w-[728px] hover:opacity-95 transition-opacity">
          <img src="/images/banner1.webp" alt="Advertisement" className="w-full h-auto object-contain shadow-sm" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* =========================================================
            LEFT CONTENT AREA (9 Columns / ~75%)
            ========================================================= */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
          
          {/* Hero Section */}
          <section className="mb-10 pb-10 border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Massive Featured Article */}
              <div className="md:col-span-7 xl:col-span-8">
                <FadeIn>
                  {heroFeatured && <NewsCard post={heroFeatured} variant="featured" />}
                </FadeIn>
              </div>
              {/* Vertical List of 3 */}
              <div className="md:col-span-5 xl:col-span-4 flex flex-col justify-between h-full">
                {heroList.map((post, i) => (
                  <FadeIn key={post.id} delay={i * 0.1}>
                    <NewsCard post={post} variant="thumbnailLeft" />
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Category Blocks */}
          <FeatureListCategory title="Solar Energy" posts={solarPosts} slug="solar" colorClass="border-orange-500" />
          
          <SplitColumnCategory title="Wind Energy" posts={windPosts} slug="wind" colorClass="border-blue-500" />
          
          <FeatureListCategory title="Markets & Policy" posts={marketPosts} slug="market" colorClass="border-purple-500" />
          
          <FeatureListCategory title="Green Hydrogen" posts={hydrogenPosts} slug="hydrogen" colorClass="border-green-500" />
          
          {/* 3-Column Categories (e.g. EV, Interviews, Storage) - Inline grid */}
          <section className="mb-10 pt-8 border-t border-border">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="flex flex-col">
                 <h2 className="text-lg font-bold uppercase tracking-wide text-foreground mb-4 pb-2 border-b-2 border-red-500">Interviews</h2>
                 {interviewPosts.slice(0,3).map(post => <NewsCard key={post.id} post={post} variant="thumbnailLeft" />)}
               </div>
               <div className="flex flex-col">
                 <h2 className="text-lg font-bold uppercase tracking-wide text-foreground mb-4 pb-2 border-b-2 border-teal-500">Storage</h2>
                 {/* Reusing solar for mock data until they add storage posts */}
                 {solarPosts.slice(2,5).map(post => <NewsCard key={post.id} post={post} variant="thumbnailLeft" />)}
               </div>
               <div className="flex flex-col">
                 <h2 className="text-lg font-bold uppercase tracking-wide text-foreground mb-4 pb-2 border-b-2 border-blue-400">EVs</h2>
                 {/* Reusing wind for mock data until they add ev posts */}
                 {windPosts.slice(2,5).map(post => <NewsCard key={post.id} post={post} variant="thumbnailLeft" />)}
               </div>
             </div>
          </section>

        </div>

        {/* =========================================================
            RIGHT SIDEBAR (3 Columns / ~25%)
            ========================================================= */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col space-y-8">
          
          {/* Sidebar Ad 1 */}
          <div className="w-full h-[250px] bg-gradient-to-br from-[#0F5132]/90 to-[#0F5132] border border-border/50 flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"></div>
            <span className="text-[9px] uppercase tracking-widest text-white/50 absolute top-2 left-2 z-10">Advertisement</span>
            <div className="flex flex-col items-center justify-center text-center p-6 z-10 w-full h-full border-[10px] border-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 mb-3 drop-shadow-md"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              <span className="font-black text-base text-white uppercase tracking-widest mb-1 drop-shadow-md">Book Your</span>
              <span className="font-black text-2xl text-yellow-400 uppercase tracking-widest mb-4 drop-shadow-lg leading-none">Ad Space</span>
              <a href="mailto:hello@renewableobserver.com" className="bg-white/10 hover:bg-white text-white hover:text-[#0F5132] text-[11px] font-bold uppercase tracking-widest py-2 px-4 rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 shadow-lg">Contact Us</a>
            </div>
            <a href="mailto:hello@renewableobserver.com" className="absolute inset-0 z-20"><span className="sr-only">Book Ad Space</span></a>
          </div>

          {/* Join Newsletter */}
          <div className="bg-[#f8f9fa] border border-border p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-2 text-foreground uppercase tracking-wide border-l-4 border-[#e31837] pl-2">Join Our Newsletter</h4>
            <p className="text-xs text-muted-foreground mb-4">Get the latest news and updates directly in your inbox.</p>
            <input type="text" placeholder="Your Name" className="w-full px-3 py-2 text-sm border border-border mb-2 focus:outline-none focus:border-[#e31837]" />
            <input type="email" placeholder="Your Email" className="w-full px-3 py-2 text-sm border border-border mb-3 focus:outline-none focus:border-[#e31837]" />
            <button className="w-full bg-[#e31837] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-3 transition-colors">
              Join Now
            </button>
          </div>

          {/* Most Popular */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider border-b-2 border-black pb-2 mb-4 text-foreground">
              Most Popular
            </h3>
            <div className="flex flex-col gap-0">
              {mostPopular.map((post, i) => (
                <FadeIn key={post.id} delay={i * 0.1}>
                  <NewsCard post={post} variant="thumbnailLeft" />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Sidebar Ad 2 */}
          <div className="w-full h-[600px] bg-gradient-to-b from-[#0F5132] to-black border border-border/50 flex flex-col items-center justify-center relative mt-8 sticky top-24 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"></div>
            <span className="text-[9px] uppercase tracking-widest text-white/50 absolute top-2 left-2 z-10">Advertisement</span>
            <div className="flex flex-col items-center justify-center text-center p-8 z-10 w-full h-full border-[12px] border-white/5">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <span className="font-black text-2xl text-white uppercase tracking-widest mb-2 drop-shadow-md">Amplify</span>
              <span className="font-black text-4xl text-yellow-400 uppercase tracking-widest mb-6 drop-shadow-lg leading-none">Your<br/>Brand</span>
              <p className="text-white/80 text-sm font-medium mb-8 max-w-[200px] leading-relaxed drop-shadow-sm">Reach global leaders in the renewable energy sector.</p>
              <a href="mailto:hello@renewableobserver.com" className="bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black uppercase tracking-[0.2em] py-4 px-6 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]">Book This Space</a>
            </div>
            <a href="mailto:hello@renewableobserver.com" className="absolute inset-0 z-20"><span className="sr-only">Book Ad Space</span></a>
          </div>

        </div>
        
      </div>
    </div>
  )
}
