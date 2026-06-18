import { FadeIn } from "@/components/ui/fade-in"
import { Download, FileText, Lock } from "lucide-react"

export const metadata = {
 title: "Industry Reports | Renewable Observer",
 description: "Download premium whitepapers and market analyses.",
}

export default function ReportsPage() {
 const reports = [
 { title: "Global Solar Capacity Outlook 2026", type: "Market Analysis", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" },
 { title: "Offshore Wind Supply Chain Bottlenecks", type: "Whitepaper", image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80" },
 { title: "Battery Storage: The Economics of Peaker Replacement", type: "Investment Guide", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
 { title: "Green Hydrogen: Scaling Production in the EU", type: "Policy Brief", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80" },
 ]

 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="mb-12 border-b pb-8">
 <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-primary">Industry Reports</h1>
 <p className="text-base text-muted-foreground max-w-3xl">
 Deep-dive market analyses, investment guides, and policy briefs. Accessible to premium subscribers and registered institutional partners.
 </p>
 </div>
 </FadeIn>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 {reports.map((report, i) => (
 <FadeIn key={i} delay={0.1 * i} className="group">
 <div className="bg-background border overflow-hidden flex flex-col md:flex-row h-full hover:border-primary/50 transition-colors">
 <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
 <img src={report.image} alt={report.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
 <div className="absolute inset-0 bg-black/10" />
 </div>
 <div className="md:w-3/5 p-6 flex flex-col justify-between">
 <div>
 <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-secondary mb-3">
 <FileText className="w-3 h-3" /> {report.type}
 </span>
 <h3 className="text-base font-bold leading-tight mb-4 group-hover:text-primary transition-colors">
 {report.title}
 </h3>
 <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
 Comprehensive breakdown of capital expenditure trends, regulatory hurdles, and long-term yield forecasts for institutional investors.
 </p>
 </div>
 <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
 <span className="flex items-center text-xs font-semibold text-muted-foreground">
 <Lock className="w-3 h-3 mr-1" /> Premium Access
 </span>
 <button className="flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
 <Download className="w-4 h-4" /> Download PDF
 </button>
 </div>
 </div>
 </div>
 </FadeIn>
 ))}
 </div>
 </div>
 )
}
