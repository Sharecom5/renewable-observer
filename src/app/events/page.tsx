import { FadeIn } from "@/components/ui/fade-in"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

export const metadata = {
 title: "Events & Summits | Renewable Observer",
 description: "Upcoming industry conferences and webinars.",
}

export default function EventsPage() {
 const events = [
 { title: "Global Offshore Wind Summit 2026", date: "October 12-14, 2026", location: "London, UK", type: "In-Person", highlight: true },
 { title: "Energy Storage Financing Webinar", date: "November 5, 2026", location: "Online", type: "Virtual", highlight: false },
 { title: "APAC Solar Markets Briefing", date: "November 18, 2026", location: "Singapore", type: "Hybrid", highlight: false },
 { title: "Grid Modernization Forum", date: "December 2-3, 2026", location: "New York, USA", type: "In-Person", highlight: false },
 ]

 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="mb-12 border-b pb-8">
 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-primary">Events & Summits</h1>
 <p className="text-xl text-muted-foreground max-w-3xl">
 Join our expert analysts and global industry leaders at upcoming conferences, exclusive briefings, and virtual webinars.
 </p>
 </div>
 </FadeIn>

 <div className="space-y-6 max-w-5xl mx-auto">
 {events.map((event, i) => (
 <FadeIn key={i} delay={0.1 * i}>
 <div className={`border p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover: ${event.highlight ? 'bg-background border-t-4 border-t-primary border-x border-b border-border border-primary/30' : 'bg-background'}`}>
 <div className="md:w-2/3">
 <div className="flex items-center gap-3 mb-3">
 <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${event.type === 'Virtual' ? 'bg-secondary/10 text-secondary' : 'bg-accent/20 text-accent-foreground'}`}>
 {event.type}
 </span>
 {event.highlight && (
 <span className="text-xs font-bold uppercase tracking-wider text-primary">Featured Event</span>
 )}
 </div>
 <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
 <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-medium">
 <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {event.date}</span>
 <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.location}</span>
 </div>
 </div>
 <div className="md:w-1/3 flex md:justify-end">
 <button className={`w-full md:w-auto px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${event.highlight ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'}`}>
 Register Now <ArrowRight className="w-4 h-4" />
 </button>
 </div>
 </div>
 </FadeIn>
 ))}
 </div>
 </div>
 )
}
