import { getLiveStockData } from "@/lib/api"
import { MarketDashboard } from "./market-dashboard"
import { FadeIn } from "@/components/ui/fade-in"
import { ogFor } from "@/lib/seo"

export const metadata = {
 alternates: { canonical: "/market" },
 openGraph: ogFor("/market"),
 title: "Live Market Data",
 description: "Real-time stock prices and market intelligence for Indian renewable energy companies.",
}

export default async function MarketPage() {
 const initialData = await getLiveStockData()

 return (
 <div className="container mx-auto px-4 py-12 min-h-screen">
 <FadeIn>
 <div className="mb-12 border-b pb-8">
 <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-primary">Live Market Data</h1>
 <p className="text-base text-muted-foreground max-w-2xl">
 Real-time tracking of India’s top renewable energy and power generation stocks. Prices refresh automatically every minute.
 </p>
 </div>
 </FadeIn>

 <FadeIn delay={0.2}>
 <MarketDashboard initialData={initialData} />
 </FadeIn>
 </div>
 )
}
