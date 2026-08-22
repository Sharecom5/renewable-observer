import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"
import { ogFor } from "@/lib/seo"

export const metadata = {
 alternates: { canonical: "/sitemap" },
 openGraph: ogFor("/sitemap"),
 title: "Sitemap",
 description: "Navigate Renewable Observer. Find links to our news categories, reports, events, and corporate policies.",
}

export default function SitemapPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-12">
 <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-primary">Sitemap</h1>
 <p className="text-lg text-muted-foreground font-medium">Directory of Renewable Observer</p>
 </div>
 </FadeIn>

 <div className="max-w-4xl mx-auto">
 <FadeIn delay={0.1}>
 <div className="grid md:grid-cols-2 gap-12">
 
 {/* Main Categories */}
 <div className="space-y-6">
 <div>
 <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">Main Categories</h2>
 <ul className="space-y-3 font-medium text-muted-foreground">
 <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
 <li><Link href="/market" className="hover:text-primary transition-colors">Market Intelligence</Link></li>
 <li><Link href="/reports" className="hover:text-primary transition-colors">Industry Reports</Link></li>
 <li><Link href="/events" className="hover:text-primary transition-colors">Events & Webinars</Link></li>
 <li><Link href="/trending" className="hover:text-primary transition-colors">Trending Topics</Link></li>
 </ul>
 </div>

 <div>
 <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">News Categories</h2>
 <ul className="space-y-3 font-medium text-muted-foreground">
 {/* Slugs verified against the categories the backend actually publishes.
     These previously carried a /category/ prefix from an older routing
     scheme, so every link on this page 404'd. */}
 <li><Link href="/solar" className="hover:text-primary transition-colors">Solar Energy</Link></li>
 <li><Link href="/solar-pv" className="hover:text-primary transition-colors">Solar PV</Link></li>
 <li><Link href="/solar-manufacturing" className="hover:text-primary transition-colors">Solar Manufacturing</Link></li>
 <li><Link href="/wind" className="hover:text-primary transition-colors">Wind Energy</Link></li>
 <li><Link href="/wind-power" className="hover:text-primary transition-colors">Wind Power</Link></li>
 <li><Link href="/storage" className="hover:text-primary transition-colors">Energy Storage</Link></li>
 <li><Link href="/hydrogen" className="hover:text-primary transition-colors">Green Hydrogen</Link></li>
 <li><Link href="/green-ammonia-hydrogen" className="hover:text-primary transition-colors">Green Ammonia & Hydrogen</Link></li>
 <li><Link href="/ev" className="hover:text-primary transition-colors">Electric Mobility</Link></li>
 <li><Link href="/sustainable-transport" className="hover:text-primary transition-colors">Sustainable Transport</Link></li>
 <li><Link href="/investment" className="hover:text-primary transition-colors">Investment</Link></li>
 <li><Link href="/markets" className="hover:text-primary transition-colors">Markets</Link></li>
 <li><Link href="/policy" className="hover:text-primary transition-colors">Policy & Regulation</Link></li>
 <li><Link href="/business" className="hover:text-primary transition-colors">Business</Link></li>
 <li><Link href="/international-news" className="hover:text-primary transition-colors">International News</Link></li>
 <li><Link href="/interviews" className="hover:text-primary transition-colors">Interviews</Link></li>
 <li><Link href="/renewable-energy" className="hover:text-primary transition-colors">Renewable Energy</Link></li>
 <li><Link href="/all-news" className="hover:text-primary transition-colors">All News</Link></li>
 </ul>
 </div>
 </div>

 {/* Corporate & Legal */}
 <div className="space-y-6">
 <div>
 <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">Company</h2>
 <ul className="space-y-3 font-medium text-muted-foreground">
 <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
 <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
 <li><Link href="/authors" className="hover:text-primary transition-colors">Authors & Contributors</Link></li>
 <li><Link href="/editorial-policy" className="hover:text-primary transition-colors">Editorial Policy</Link></li>
 <li><Link href="/corrections-policy" className="hover:text-primary transition-colors">Corrections Policy</Link></li>
 <li><Link href="/ethics-policy" className="hover:text-primary transition-colors">Ethics Policy</Link></li>
 </ul>
 </div>

 <div>
 <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">Business</h2>
 <ul className="space-y-3 font-medium text-muted-foreground">
 <li><Link href="/advertise-with-us" className="hover:text-primary transition-colors">Advertise With Us</Link></li>
 <li><Link href="/media-kit" className="hover:text-primary transition-colors">Media Kit</Link></li>
 <li><Link href="/submit-press-release" className="hover:text-primary transition-colors">Submit Press Release</Link></li>
 <li><Link href="/write-for-us" className="hover:text-primary transition-colors">Write For Us</Link></li>
 </ul>
 </div>

 <div>
 <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">Legal</h2>
 <ul className="space-y-3 font-medium text-muted-foreground">
 <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
 <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
 <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
 <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
 <li><Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility Statement</Link></li>
 </ul>
 </div>
 </div>

 </div>
 </FadeIn>
 </div>
 </div>
 )
}
