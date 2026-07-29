import { AdSlot } from "@/components/AdSlot";
import { FeaturedStory } from "@/components/FeaturedStory";
import { CategoryGrid } from "@/components/CategoryGrid";
import { MarketInsightsWidget } from "@/components/MarketInsightsWidget";
import { getLatestPosts } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Mail, Zap } from "lucide-react";

const mockPosts = [
  {
    id: 1,
    slug: 'breakthrough-in-solar-efficiency',
    title: { rendered: 'Breakthrough in Solar Panel Efficiency Could Halve Costs' },
    excerpt: { rendered: 'Researchers have developed a new perovskite solar cell that achieves 30% efficiency, promising a massive disruption to the traditional silicon market...' },
    date: new Date().toISOString(),
  },
  {
    id: 2,
    slug: 'new-government-subsidy-scheme',
    title: { rendered: 'New Government Subsidy Scheme Accelerates Residential Solar Adoption' },
    excerpt: { rendered: 'The newly announced scheme is set to transform the residential market by offering unprecedented rebates...' },
    date: new Date().toISOString(),
  },
  {
    id: 3,
    slug: 'wind-power-records-broken',
    title: { rendered: 'Offshore Wind Power Records Broken in the North Sea' },
    excerpt: { rendered: 'Massive new turbines are generating unprecedented levels of clean energy, pushing the grid to new limits...' },
    date: new Date().toISOString(),
  },
  {
    id: 4,
    slug: 'ev-battery-recycling',
    title: { rendered: 'The Future of EV Battery Recycling' },
    excerpt: { rendered: 'Startups are finding new ways to extract rare earth metals from spent batteries, closing the loop on EV manufacturing...' },
    date: new Date().toISOString(),
  },
  {
    id: 5,
    slug: 'green-hydrogen-hub',
    title: { rendered: 'Massive Green Hydrogen Hub Planned for Desert Region' },
    excerpt: { rendered: 'A new multi-billion dollar project aims to export green hydrogen globally, positioning the region as a new energy superpower...' },
    date: new Date().toISOString(),
  }
];

export default async function Home() {
  let posts = await getLatestPosts(10).catch(() => []);
  
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    posts = mockPosts;
  }

  const featuredPost = posts[0];
  const solarPosts = posts.slice(1, 4);
  const policyPosts = posts.slice(2, 5);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <AdSlot format="banner" className="mb-10" />
      
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="lg:w-3/4">
          <FeaturedStory post={featuredPost} />
        </div>
        <aside className="lg:w-1/4 space-y-8">
          <MarketInsightsWidget />
          <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
            <h3 className="font-bold text-lg mb-2 text-primary font-heading flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Trending Now
            </h3>
            <ul className="space-y-4 mt-4">
              {solarPosts.map((post: any, idx: number) => (
                <li key={idx} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <span className="text-4xl font-black text-muted/50 float-left mr-3 leading-none">{idx + 1}</span>
                  <a href={`/article/${post.slug}`} className="text-sm font-semibold hover:text-primary transition-colors line-clamp-3">
                    {post.title.rendered}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-3/4">
          <CategoryGrid title="Latest in Solar" posts={solarPosts} />
          <AdSlot format="banner" className="my-12" />
          <CategoryGrid title="Policy & Regulation" posts={policyPosts} />
        </div>
        
        <aside className="lg:w-1/4 space-y-8">
          <AdSlot format="rectangle" />
          <div className="bg-card shadow-sm p-6 rounded-xl border border-border text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl mb-2 font-heading text-foreground">Daily Briefing</h3>
            <p className="text-sm text-muted-foreground mb-6">Join 50,000+ industry professionals receiving our daily market wrap-up.</p>
            <input type="email" placeholder="Work email address" className="w-full px-4 py-3 border border-border rounded-lg mb-3 bg-background focus:ring-2 focus:ring-primary outline-none transition-all" />
            <Button className="w-full bg-primary text-primary-foreground font-semibold py-6 rounded-lg">Subscribe Free</Button>
            <p className="text-xs text-muted-foreground mt-4">By subscribing, you agree to our Terms & Privacy Policy.</p>
          </div>
          <AdSlot format="sidebar" />
        </aside>
      </div>
    </div>
  );
}
