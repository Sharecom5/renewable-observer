import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Media Kit | Renewable Observer",
 description: "Download the Renewable Observer Media Kit to explore advertising options, audience demographics, and sponsorship opportunities.",
}

export default function MediaKitPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-12 text-center">
 <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground font-semibold text-sm mb-4">Partner With Us</span>
 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-primary">Media Kit</h1>
 <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">Connect your brand with the world's leading professionals driving the renewable energy transition.</p>
 </div>
 </FadeIn>

 <div className="max-w-5xl mx-auto">
 <FadeIn delay={0.1}>
 <div className="grid md:grid-cols-3 gap-8 mb-16">
 <div className="bg-background border p-6 text-center ">
 <div className="text-4xl font-bold text-primary mb-2">100K+</div>
 <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Monthly Professionals</div>
 </div>
 <div className="bg-background border p-6 text-center ">
 <div className="text-4xl font-bold text-secondary mb-2">45K+</div>
 <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Newsletter Subscribers</div>
 </div>
 <div className="bg-background border p-6 text-center ">
 <div className="text-4xl font-bold text-accent mb-2">60%</div>
 <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">C-Suite & Directors</div>
 </div>
 </div>
 </FadeIn>

 <FadeIn delay={0.2}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
 <section>
 <h2 className="text-3xl font-bold text-foreground">Our Audience Demographics</h2>
 <p>Renewable Observer serves a highly targeted, global audience of B2B professionals, investors, and policymakers. By advertising with us, you aren't just buying impressions—you are securing engagement from the decision-makers shaping the clean energy economy.</p>
 <div className="grid sm:grid-cols-2 gap-8 mt-6 not-prose">
 <div className="bg-background border-y border-border p-6 border">
 <h3 className="font-bold text-foreground mb-4">By Sector</h3>
 <ul className="space-y-2 text-sm text-muted-foreground">
 <li className="flex justify-between border-b pb-2"><span>Project Developers</span> <span className="font-bold">25%</span></li>
 <li className="flex justify-between border-b pb-2"><span>Finance & Investment</span> <span className="font-bold">20%</span></li>
 <li className="flex justify-between border-b pb-2"><span>Equipment Manufacturers</span> <span className="font-bold">18%</span></li>
 <li className="flex justify-between border-b pb-2"><span>Engineering & EPC</span> <span className="font-bold">15%</span></li>
 <li className="flex justify-between border-b pb-2"><span>Government & Policy</span> <span className="font-bold">12%</span></li>
 <li className="flex justify-between pb-2"><span>Other (Research, Legal, Media)</span> <span className="font-bold">10%</span></li>
 </ul>
 </div>
 <div className="bg-background border-y border-border p-6 border">
 <h3 className="font-bold text-foreground mb-4">By Region</h3>
 <ul className="space-y-2 text-sm text-muted-foreground">
 <li className="flex justify-between border-b pb-2"><span>North America</span> <span className="font-bold">35%</span></li>
 <li className="flex justify-between border-b pb-2"><span>Europe</span> <span className="font-bold">30%</span></li>
 <li className="flex justify-between border-b pb-2"><span>Asia Pacific</span> <span className="font-bold">20%</span></li>
 <li className="flex justify-between border-b pb-2"><span>Middle East & Africa</span> <span className="font-bold">10%</span></li>
 <li className="flex justify-between pb-2"><span>Latin America</span> <span className="font-bold">5%</span></li>
 </ul>
 </div>
 </div>
 </section>

 <section>
 <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Advertising Options</h2>
 
 <div className="space-y-8 not-prose">
 <div className="flex flex-col md:flex-row gap-6 items-start bg-background p-6 border">
 <div className="w-16 h-16 bg-primary/10 flex items-center justify-center shrink-0">
 <svg xmlns="http://www.w3.org/.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
 </div>
 <div>
 <h3 className="text-xl font-bold text-foreground mb-2">Display Advertising</h3>
 <p className="text-sm text-muted-foreground mb-4">Premium ad placements across our homepage, category hubs, and article pages. We offer standard IAB sizes including 728x90 leaderboards, 300x250 medium rectangles, and 970x250 billboards.</p>
 </div>
 </div>

 <div className="flex flex-col md:flex-row gap-6 items-start bg-background p-6 border">
 <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center shrink-0">
 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8l-4 4v14a2 2 0 0 0 2 2z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"/></svg>
 </div>
 <div>
 <h3 className="text-xl font-bold text-foreground mb-2">Sponsored Content (Native Ads)</h3>
 <p className="text-sm text-muted-foreground mb-4">Publish thought leadership articles, case studies, and whitepapers natively on our platform. Sponsored content integrates seamlessly into our news feed and provides deep engagement.</p>
 </div>
 </div>

 <div className="flex flex-col md:flex-row gap-6 items-start bg-background p-6 border">
 <div className="w-16 h-16 bg-accent/10 flex items-center justify-center shrink-0">
 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
 </div>
 <div>
 <h3 className="text-xl font-bold text-foreground mb-2">Newsletter Sponsorships</h3>
 <p className="text-sm text-muted-foreground mb-4">Reach our highly engaged daily email subscribers directly in their inbox. Options include exclusive banner sponsorships, featured text placements, and dedicated email blasts.</p>
 </div>
 </div>
 </div>
 </section>

 <section className="bg-background border-t-4 border-t-primary border-x border-b border-border border border-primary/20 p-10 text-center mt-16">
 <h2 className="text-3xl font-bold text-foreground mb-4">Request the Full PDF Media Kit</h2>
 <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">For detailed pricing, inventory availability, and custom campaign proposals, please contact our advertising team to request the full 2026 PDF Media Kit.</p>
 
 <div className="inline-flex flex-col items-center justify-center">
 <strong className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">Advertising Inquiries</strong>
 <a href="mailto:hello@renewableobserver.com" className="text-2xl font-bold text-primary hover:underline">hello@renewableobserver.com</a>
 <span className="mt-4 text-sm font-semibold bg-background px-4 py-1 border">Response within 24 hours</span>
 </div>
 </section>
 </div>
 </FadeIn>
 </div>
 </div>
 )
}
