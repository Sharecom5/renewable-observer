import { FadeIn } from "@/components/ui/fade-in"
import { ArrowUpRight, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
 title: "Trending News | Renewable Observer",
 description: "The most read and shared articles in the renewable energy sector.",
}

export default function TrendingPage() {
 const trendingArticles = [
 { rank: 1, title: "EU Finalizes Carbon Border Tax Details", category: "Policy", time: "2 hours ago" },
 { rank: 2, title: "Solar Module Prices Hit Record Low in Q3", category: "Markets", time: "5 hours ago" },
 { rank: 3, title: "Major Utility Announces 5GW Storage Procurement", category: "Infrastructure", time: "1 day ago" },
 { rank: 4, title: "Startups Target Next-Gen Electrolyzer Efficiency", category: "Technology", time: "1 day ago" },
 { rank: 5, title: "Offshore Wind Auctions See Resurgence in Asia", category: "Markets", time: "2 days ago" },
 { rank: 6, title: "US Treasury Clarifies IRA Tax Credit Rules", category: "Policy", time: "2 days ago" },
 { rank: 7, title: "Copper Shortage Threatens Grid Upgrades", category: "Supply Chain", time: "3 days ago" },
 { rank: 8, title: "Geothermal Power Projects Secure Private Equity Backing", category: "Finance", time: "3 days ago" },
 ]

 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="mb-12 border-b pb-8 flex items-center justify-between">
 <div>
 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-primary flex items-center gap-4">
 Trending <TrendingUp className="w-10 h-10 text-accent" />
 </h1>
 <p className="text-xl text-muted-foreground max-w-2xl">
 The most-read stories across global markets right now.
 </p>
 </div>
 </div>
 </FadeIn>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
 <div className="lg:col-span-2 space-y-4">
 {trendingArticles.map((article, i) => (
 <FadeIn key={i} delay={0.05 * i}>
 <Link href="#" className="group flex gap-6 p-4 hover:bg-background border-y border-border/50 transition-colors border border-transparent hover:border-border">
 <div className="flex-shrink-0 w-12 text-center">
 <span className={`text-4xl font-black ${i < 3 ? 'text-accent' : 'text-muted-foreground/30'}`}>
 {article.rank}
 </span>
 </div>
 <div className="flex-grow">
 <div className="flex items-center gap-3 mb-2">
 <span className="text-xs font-bold text-secondary uppercase tracking-wider">{article.category}</span>
 <span className="flex items-center text-xs text-muted-foreground"><Clock className="w-3 h-3 mr-1" /> {article.time}</span>
 </div>
 <h3 className="text-xl font-bold group-hover:text-primary transition-colors pr-8 relative text-foreground">
 {article.title}
 <ArrowUpRight className="absolute right-0 top-1 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
 </h3>
 </div>
 </Link>
 </FadeIn>
 ))}
 </div>

 <div className="lg:col-span-1">
 <FadeIn delay={0.4} className="bg-background border p-8 sticky top-24">
 <h3 className="font-bold text-xl mb-6 border-b pb-4 text-foreground">Hot Topics</h3>
 <div className="flex flex-wrap gap-2">
 {['#GridStorage', '#IRA', '#OffshoreWind', '#GreenHydrogen', '#CarbonTax', '#SupplyChain', '#ProjectFinance'].map(tag => (
 <Link key={tag} href="#" className="bg-background border-y border-border hover:bg-primary hover:text-primary-foreground text-foreground px-4 py-2 text-sm font-semibold transition-colors">
 {tag}
 </Link>
 ))}
 </div>
 </FadeIn>
 </div>
 </div>
 </div>
 )
}
