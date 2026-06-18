import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Contact Renewable Observer | Editorial, Media & Business Inquiries",
 description: "Get in touch with Renewable Observer for editorial inquiries, press releases, media partnerships, advertising opportunities, industry collaborations, and general support.",
}

export default function ContactUsPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-16 text-center">
 <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-6 text-primary">Contact Us</h1>
 <p className="text-base text-muted-foreground leading-relaxed font-medium">
 Thank you for your interest in Renewable Observer.
 </p>
 </div>
 </FadeIn>

 <div className="max-w-4xl mx-auto space-y-16">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <p>
 We value communication, collaboration, and engagement with professionals, organizations, businesses, researchers, policymakers, investors, and readers across the global renewable energy ecosystem.
 </p>
 <p>
 Renewable Observer was established with the goal of becoming a trusted renewable energy media platform that informs, educates, and connects stakeholders involved in the global energy transition. We welcome inquiries from individuals and organizations interested in renewable energy, sustainability, climate technology, energy storage, green hydrogen, electric mobility, ESG, and clean energy innovation.
 </p>
 <p>
 Whether you are looking to share industry news, submit a press release, explore advertising opportunities, discuss partnerships, provide feedback, or simply learn more about Renewable Observer, our team is ready to assist you.
 </p>
 <p className="font-semibold text-foreground pt-4">
 Headquartered in Noida, India<br/>
 Serving a Global Audience
 </p>
 </div>
 </FadeIn>

 <FadeIn delay={0.2}>
 <h2 className="text-3xl font-bold mb-8 border-b pb-4 text-foreground">How to Contact Us</h2>
 <p className="text-lg text-muted-foreground mb-8">Renewable Observer is committed to responding to inquiries in a professional and timely manner.</p>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
 <div className="bg-background border p-8 ">
 <h3 className="text-2xl font-bold mb-4 text-foreground">General Inquiries</h3>
 <p className="text-muted-foreground mb-4">For general questions about our website, content, services, reports, partnerships, or industry coverage, please contact:</p>
 <a href="mailto:hello@renewableobserver.com" className="text-primary font-bold text-lg hover:underline block mb-6">hello@renewableobserver.com</a>
 <h4 className="font-semibold text-foreground mb-2">General inquiries may include:</h4>
 <ul className="list-disc pl-5 text-muted-foreground space-y-1">
 <li>Website feedback</li>
 <li>Business inquiries</li>
 <li>Industry suggestions</li>
 <li>Partnership requests</li>
 <li>Event information</li>
 <li>Research inquiries</li>
 <li>General support</li>
 </ul>
 </div>

 <div className="bg-background border p-8 ">
 <h3 className="text-2xl font-bold mb-4 text-foreground">Editorial Inquiries</h3>
 <p className="text-muted-foreground mb-4">For editorial matters, story suggestions, press releases, news tips, interview requests, expert commentary, and content-related questions, please contact:</p>
 <a href="mailto:editor@renewableobserver.com" className="text-secondary font-bold text-lg hover:underline block mb-6">editor@renewableobserver.com</a>
 <h4 className="font-semibold text-foreground mb-2">Editorial inquiries may include:</h4>
 <ul className="list-disc pl-5 text-muted-foreground space-y-1">
 <li>News submissions</li>
 <li>Story ideas</li>
 <li>Press releases</li>
 <li>Industry updates</li>
 <li>Company announcements</li>
 <li>Executive interviews</li>
 <li>Opinion contributions</li>
 <li>Market insights</li>
 </ul>
 <p className="text-sm text-muted-foreground mt-4 italic">Our editorial team continuously monitors developments across the renewable energy sector and welcomes relevant information that may benefit our readers.</p>
 </div>
 </div>
 </FadeIn>

 <FadeIn delay={0.3}>
 <section className="space-y-6">
 <h2 className="text-3xl font-bold text-foreground">Press Releases and News Submissions</h2>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <p>Renewable Observer welcomes press releases and news announcements from organizations operating within the renewable energy and sustainability sectors.</p>
 <p>We encourage companies, industry associations, research organizations, government agencies, and technology providers to share relevant information about:</p>
 
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8 not-prose">
 <div className="bg-background border-y border-border p-6 ">
 <h4 className="font-bold text-foreground mb-3">Renewable Energy Projects</h4>
 <ul className="text-sm space-y-1">
 <li>Solar projects</li>
 <li>Wind farms</li>
 <li>Battery storage projects</li>
 <li>Green hydrogen facilities</li>
 <li>Hydropower developments</li>
 <li>Bioenergy projects</li>
 <li>Geothermal projects</li>
 </ul>
 </div>
 <div className="bg-background border-y border-border p-6 ">
 <h4 className="font-bold text-foreground mb-3">Business Announcements</h4>
 <ul className="text-sm space-y-1">
 <li>Partnerships & Acquisitions</li>
 <li>Investments & Funding rounds</li>
 <li>Expansion plans</li>
 <li>Product launches</li>
 </ul>
 <h4 className="font-bold text-foreground mt-4 mb-3">Technology Innovations</h4>
 <ul className="text-sm space-y-1">
 <li>Renewable energy tech</li>
 <li>Climate technology solutions</li>
 <li>Energy efficiency innovations</li>
 <li>Storage & Smart grid solutions</li>
 </ul>
 </div>
 <div className="bg-background border-y border-border p-6 ">
 <h4 className="font-bold text-foreground mb-3">Industry Reports</h4>
 <ul className="text-sm space-y-1">
 <li>Market studies</li>
 <li>Research findings</li>
 <li>Industry forecasts</li>
 <li>Sustainability reports</li>
 </ul>
 </div>
 </div>
 <p className="text-sm italic">Submission of information does not guarantee publication. All content may be reviewed according to our Editorial Policy.</p>
 </div>
 </section>
 </FadeIn>

 <FadeIn delay={0.4}>
 <section className="space-y-6">
 <h2 className="text-3xl font-bold text-foreground">Advertising Opportunities</h2>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <p>Renewable Observer offers advertising opportunities for organizations seeking to reach decision-makers and professionals across the renewable energy industry.</p>
 <p>We work with: Solar Companies, Wind Energy Companies, Battery Manufacturers, Green Hydrogen Developers, Technology Providers, EPC Contractors, Consulting Firms, Investors, and Industry Associations.</p>
 <h4 className="font-bold text-foreground mt-6">Advertising opportunities may include:</h4>
 <ul className="list-disc pl-5">
 <li><strong>Digital Advertising:</strong> Homepage banners, Category sponsorships, Display advertising, Newsletter sponsorships</li>
 <li><strong>Content Marketing:</strong> Sponsored articles, Industry features, Thought leadership content, Branded content</li>
 <li><strong>Event Promotion:</strong> Conference promotion, Webinar promotion, Awards programs, Industry events</li>
 </ul>
 <p className="mt-4">
 For advertising opportunities, please contact: <a href="mailto:hello@renewableobserver.com" className="text-primary font-bold hover:underline">hello@renewableobserver.com</a>. 
 Additional details are available on our <Link href="/advertise-with-us" className="text-primary hover:underline">Advertise With Us page</Link>.
 </p>
 </div>
 </section>
 </FadeIn>

 <FadeIn delay={0.5}>
 <section className="space-y-6">
 <h2 className="text-3xl font-bold text-foreground">Partnership Opportunities</h2>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <p>Renewable Observer actively collaborates with organizations that support innovation, sustainability, and renewable energy development.</p>
 <p>Potential partnership opportunities include: Media Partnerships, Event Partnerships, Research Collaborations, Educational Programs, Industry Associations, Sustainability Initiatives, Webinar Programs, and Knowledge Sharing Projects.</p>
 <p>We believe collaboration helps accelerate industry growth and supports the global transition toward clean energy.</p>
 <p>Partnership discussions can be initiated through: <a href="mailto:hello@renewableobserver.com" className="text-primary font-bold hover:underline">hello@renewableobserver.com</a></p>
 </div>
 </section>
 </FadeIn>

 <FadeIn delay={0.6}>
 <section className="space-y-6">
 <h2 className="text-3xl font-bold text-foreground">Industry Coverage</h2>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <p>Renewable Observer covers developments across the complete renewable energy ecosystem. Organizations operating in these sectors are encouraged to engage with our editorial and business teams.</p>
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mt-6 not-prose">
 <div>
 <strong className="block text-foreground mb-2">Renewable Energy</strong>
 <ul className="space-y-1">
 <li>Solar Energy</li>
 <li>Wind Energy</li>
 <li>Hydropower</li>
 <li>Bioenergy</li>
 <li>Geothermal Energy</li>
 <li>Ocean Energy</li>
 </ul>
 </div>
 <div>
 <strong className="block text-foreground mb-2">Clean Tech & Storage</strong>
 <ul className="space-y-1">
 <li>Clean Technology</li>
 <li>Energy Storage</li>
 <li>Green Hydrogen</li>
 <li>Smart Grids</li>
 <li>Climate Technology</li>
 <li>Carbon Management</li>
 </ul>
 </div>
 <div>
 <strong className="block text-foreground mb-2">Mobility & ESG</strong>
 <ul className="space-y-1">
 <li>Sustainable Mobility</li>
 <li>Electric Vehicles</li>
 <li>Charging Infrastructure</li>
 <li>Fleet Electrification</li>
 <li>Sustainability & ESG</li>
 <li>Net-Zero Strategies</li>
 <li>Corporate Sustainability</li>
 </ul>
 </div>
 <div>
 <strong className="block text-foreground mb-2">Markets & Finance</strong>
 <ul className="space-y-1">
 <li>Renewable Investments</li>
 <li>Infrastructure Funding</li>
 <li>Green Bonds</li>
 <li>Venture Capital</li>
 <li>Mergers and Acquisitions</li>
 </ul>
 </div>
 </div>
 </div>
 </section>
 </FadeIn>

 <FadeIn delay={0.7}>
 <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t pt-12">
 <div>
 <h2 className="text-2xl font-bold mb-4 text-foreground">Event & Conference Support</h2>
 <p className="text-muted-foreground mb-4">Renewable Observer supports industry events and educational initiatives designed to advance renewable energy knowledge and collaboration. We welcome inquiries related to Conferences, Trade Shows, Webinars, Summits, Awards Programs, and Industry Forums.</p>
 <p className="text-muted-foreground mb-4">Event organizers interested in promotional opportunities, media partnerships, or event coverage may contact us through: <a href="mailto:hello@renewableobserver.com" className="text-primary hover:underline font-semibold">hello@renewableobserver.com</a></p>
 <p className="text-muted-foreground">For upcoming industry activities, readers can visit our <Link href="/events" className="text-primary hover:underline">Events section</Link>.</p>
 </div>
 <div>
 <h2 className="text-2xl font-bold mb-4 text-foreground">Research & Industry Intelligence</h2>
 <p className="text-muted-foreground mb-4">Renewable Observer regularly publishes market intelligence, industry insights, and research-based content.</p>
 <p className="text-muted-foreground mb-4">Organizations seeking to share reports, research findings, market studies, or industry data may contact: <a href="mailto:editor@renewableobserver.com" className="text-secondary hover:underline font-semibold">editor@renewableobserver.com</a></p>
 <p className="text-muted-foreground">Research topics may include: Renewable Energy Markets, Sustainability Trends, Technology Developments, Policy Analysis, Investment Activity, and Infrastructure Growth.</p>
 </div>
 </section>
 </FadeIn>

 <FadeIn delay={0.8}>
 <section className="bg-background border-y border-border p-8 md:p-12 text-center">
 <h2 className="text-3xl font-bold mb-6 text-foreground">Connect With Renewable Observer</h2>
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
 Whether you are sharing news, exploring partnerships, promoting events, or seeking information, we appreciate your interest in Renewable Observer.
 </p>
 <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-8">
 <div>
 <span className="block text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-2">General Contact</span>
 <a href="mailto:hello@renewableobserver.com" className="text-base font-bold text-primary hover:underline">hello@renewableobserver.com</a>
 </div>
 <div>
 <span className="block text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-2">Editorial Contact</span>
 <a href="mailto:editor@renewableobserver.com" className="text-base font-bold text-secondary hover:underline">editor@renewableobserver.com</a>
 </div>
 </div>
 <p className="font-semibold text-foreground">
 Headquartered in Noida, India<br/>
 Serving a Global Audience
 </p>
 <p className="mt-8 text-accent font-bold text-lg">Thank you for connecting with Renewable Observer.</p>
 </section>
 </FadeIn>
 </div>
 </div>
 )
}
