import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Authors & Contributors | Renewable Observer Editorial Team",
 description: "Meet the authors, contributors, analysts, and editorial professionals behind Renewable Observer. Learn about our expertise, editorial standards, and commitment to renewable energy journalism.",
}

export default function AuthorsPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-16 text-center">
 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-primary">Authors & Contributors</h1>
 <p className="text-xl text-muted-foreground leading-relaxed font-medium">
 Credible journalism begins with knowledgeable contributors and industry experts.
 </p>
 </div>
 </FadeIn>

 <div className="max-w-3xl mx-auto space-y-12">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <p>
 At Renewable Observer, we believe that credible journalism begins with knowledgeable contributors, experienced editors, industry experts, researchers, and professionals who are committed to delivering accurate, transparent, and informative content.
 </p>
 <p>
 Our authors and contributors play a critical role in helping Renewable Observer fulfill its mission of providing trusted renewable energy news, market intelligence, sustainability insights, industry analysis, and educational content for a global audience.
 </p>
 <p>
 Headquartered in Noida, India and serving a global audience, Renewable Observer works with professionals from diverse backgrounds to deliver meaningful coverage of renewable energy, climate technology, sustainability, and the global energy transition.
 </p>
 <p>
 This page provides information about our contributors, editorial process, content expertise, and commitment to maintaining high editorial standards.
 </p>
 </div>
 </FadeIn>

 <FadeIn delay={0.2}>
 <section className="bg-background border-y border-border p-8 border">
 <h2 className="text-2xl font-bold text-foreground mb-4">Our Editorial Team</h2>
 <p className="text-muted-foreground mb-4">Renewable Observer is supported by a growing network of:</p>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold text-foreground mb-4">
 <ul className="space-y-2">
 <li>Journalists</li>
 <li>Industry Analysts</li>
 </ul>
 <ul className="space-y-2">
 <li>Researchers</li>
 <li>Technical Writers</li>
 </ul>
 <ul className="space-y-2">
 <li>Sustainability Experts</li>
 <li>Energy Professionals</li>
 </ul>
 <ul className="space-y-2">
 <li>Subject Matter Experts</li>
 <li>Guest Contributors</li>
 </ul>
 </div>
 <p className="text-muted-foreground">Together, these contributors help provide reliable and insightful coverage across the renewable energy ecosystem.</p>
 <p className="text-muted-foreground mt-2">Our editorial team works to ensure that content is informative, accurate, and relevant to readers operating within the renewable energy sector.</p>
 </section>
 </FadeIn>

 <FadeIn delay={0.3}>
 <section className="space-y-6">
 <h2 className="text-3xl font-bold text-foreground">Areas of Expertise</h2>
 <p className="text-muted-foreground">Renewable Observer contributors cover a broad range of renewable energy and sustainability topics.</p>
 
 <div className="grid sm:grid-cols-2 gap-6 not-prose mt-6">
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Solar & Wind Energy</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Utility-Scale & Rooftop Solar</li>
 <li>Solar Manufacturing & Photovoltaic Tech</li>
 <li>Onshore & Offshore Wind</li>
 <li>Turbine Manufacturing & Market Trends</li>
 </ul>
 </div>
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Storage & Hydrogen</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Battery Energy Storage Systems</li>
 <li>Grid & Long-Duration Storage</li>
 <li>Hydrogen Production & Electrolyzers</li>
 <li>Green Ammonia & Infrastructure</li>
 </ul>
 </div>
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Hydropower & Bioenergy</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Hydroelectric & Pumped Storage</li>
 <li>Biomass & Biogas Projects</li>
 <li>Waste-to-Energy & Biofuels</li>
 </ul>
 </div>
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Geothermal & Ocean Energy</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Exploration Technologies</li>
 <li>Commercial Applications</li>
 <li>Tidal & Wave Energy</li>
 </ul>
 </div>
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Electric Mobility</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Electric Vehicles</li>
 <li>Charging Infrastructure</li>
 <li>Fleet Electrification</li>
 <li>Battery Innovation</li>
 </ul>
 </div>
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Sustainability and ESG</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Corporate Sustainability</li>
 <li>ESG Reporting</li>
 <li>Net-Zero Strategies</li>
 <li>Carbon Reduction Initiatives</li>
 </ul>
 </div>
 </div>
 </section>
 </FadeIn>

 <FadeIn delay={0.4}>
 <section className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <h2 className="text-3xl font-bold text-foreground">Industry Knowledge and Experience</h2>
 <p>Renewable Observer values expertise and practical knowledge.</p>
 <p>Our contributors may include professionals with backgrounds in: Renewable Energy Development, Engineering, Sustainability Consulting, Environmental Science, Research and Academia, Energy Policy, Investment Analysis, Corporate Communications, and Journalism.</p>
 <p>This diversity helps us provide balanced perspectives and comprehensive industry coverage.</p>
 </section>
 </FadeIn>

 <FadeIn delay={0.5}>
 <section className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <h2 className="text-3xl font-bold text-foreground">Editorial Review Process</h2>
 <p>Content published on Renewable Observer may undergo editorial review before publication. Our review process is designed to promote: Accuracy, Clarity, Transparency, Relevance, and Professionalism.</p>
 <p>Editorial review may include: Fact Verification, Source Evaluation, Content Editing, Technical Review, and Quality Assurance.</p>
 <p>Additional information regarding editorial standards can be found in our <Link href="/editorial-policy" className="text-primary hover:underline">Editorial Policy</Link>.</p>

 <h3 className="text-xl font-bold text-foreground mt-8">Contributor Standards</h3>
 <p>All contributors are expected to follow professional publishing standards. Contributors are encouraged to: Provide accurate information, Use reliable sources, Maintain transparency, Avoid conflicts of interest, Respect intellectual property rights, and Support factual reporting.</p>
 <p>These standards help maintain the trust of our readers and industry stakeholders.</p>

 <h3 className="text-xl font-bold text-foreground mt-8">Guest Contributors</h3>
 <p>Renewable Observer welcomes contributions from qualified professionals and industry experts. Guest contributions may include: Industry Insights, Opinion Articles, Research Summaries, Technology Perspectives, Sustainability Commentary, and Market Analysis.</p>
 <p>All guest submissions are subject to editorial review. Publication decisions are based on: Relevance, Accuracy, Quality, and Reader Value. Submission does not guarantee publication.</p>
 </section>
 </FadeIn>

 <FadeIn delay={0.6}>
 <section className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <h2 className="text-3xl font-bold text-foreground">Thought Leadership & Transparency</h2>
 <p>Renewable Observer believes that industry knowledge sharing contributes to innovation and progress. We encourage thought leadership content that helps readers understand: Emerging Technologies, Market Developments, Policy Changes, Sustainability Strategies, Industry Challenges, and Future Opportunities.</p>
 <p>Thought leadership content should be informative, evidence-based, and relevant to the renewable energy sector.</p>

 <h3 className="text-xl font-bold text-foreground mt-8">Commitment to Transparency</h3>
 <p>Transparency is an important component of responsible publishing. Renewable Observer seeks to clearly distinguish between: Editorial Content, Sponsored Content, Opinion Pieces, Press Releases, and Advertising Materials. This helps readers understand the nature of the information being presented.</p>

 <h3 className="text-xl font-bold text-foreground mt-8">Diversity of Perspectives</h3>
 <p>The renewable energy industry is global, dynamic, and multidisciplinary. Renewable Observer values diverse perspectives and seeks to feature insights from contributors representing different regions, technologies, professional backgrounds, and areas of expertise. This approach helps readers gain a broader understanding of the renewable energy landscape.</p>
 </section>
 </FadeIn>

 <FadeIn delay={0.7}>
 <section className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <h2 className="text-3xl font-bold text-foreground">Contributing to Renewable Observer</h2>
 <p>Professionals interested in contributing to Renewable Observer are encouraged to contact our editorial team.</p>
 <p>Potential contributors may include: Industry Experts, Researchers, Consultants, Academics, Sustainability Professionals, Renewable Energy Executives, and Technical Specialists.</p>
 <p>Contribution opportunities may include: Articles, Commentary, Research Insights, Interviews, and Industry Perspectives. Editorial inquiries may be directed to: <a href="mailto:editor@renewableobserver.com" className="text-secondary font-bold hover:underline">editor@renewableobserver.com</a></p>

 <h3 className="text-xl font-bold text-foreground mt-8">Why Expertise Matters</h3>
 <p>Renewable energy continues to evolve rapidly through technological innovation, policy developments, market expansion, and investment activity.</p>
 <p>Reliable information requires contributors who understand the complexities of: Energy Markets, Infrastructure Development, Sustainability Frameworks, Environmental Policy, Climate Technologies, and Financial Markets.</p>
 <p>Renewable Observer remains committed to working with knowledgeable contributors who help readers navigate this evolving landscape.</p>
 </section>
 </FadeIn>

 <FadeIn delay={0.8}>
 <section className="bg-background border-t-4 border-t-primary border-x border-b border-border border border-primary/20 p-8 text-center md:text-left mt-12">
 <h2 className="text-2xl font-bold text-primary mb-4">Contact Our Editorial Team</h2>
 <p className="text-muted-foreground mb-6">Questions regarding authorship, contributor opportunities, editorial standards, or content submissions may be directed to:</p>
 <div className="grid md:grid-cols-2 gap-6">
 <div>
 <strong className="block text-sm uppercase tracking-wider text-muted-foreground mb-1">General Contact</strong>
 <a href="mailto:hello@renewableobserver.com" className="text-lg font-bold text-primary hover:underline">hello@renewableobserver.com</a>
 </div>
 <div>
 <strong className="block text-sm uppercase tracking-wider text-muted-foreground mb-1">Editorial Contact</strong>
 <a href="mailto:editor@renewableobserver.com" className="text-lg font-bold text-secondary hover:underline">editor@renewableobserver.com</a>
 </div>
 </div>
 <p className="mt-6 pt-4 border-t border-primary/20 text-foreground font-semibold">
 Headquartered in Noida, India<br/>
 Serving a Global Audience
 </p>
 </section>
 </FadeIn>

 <FadeIn delay={0.9}>
 <div className="text-center mt-16">
 <h2 className="text-3xl font-bold mb-6 text-foreground">Our Commitment</h2>
 <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
 The quality of Renewable Observer depends on the expertise, professionalism, and integrity of the people who contribute to our platform.
 </p>
 <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
 We remain committed to delivering trustworthy renewable energy journalism, sustainability insights, market intelligence, and educational resources that support informed decision-making across the global clean energy sector.
 </p>
 <p className="text-xl font-bold text-accent">Thank you for reading Renewable Observer and supporting independent renewable energy media.</p>
 </div>
 </FadeIn>

 <FadeIn delay={1.0}>
 <section className="mt-12 pt-8 border-t text-sm font-semibold flex flex-wrap gap-4 justify-center sm:justify-start">
 <span className="text-foreground w-full sm:w-auto">Related Pages:</span>
 <Link href="/about-us" className="text-primary hover:underline">About Us</Link>
 <Link href="/contact-us" className="text-primary hover:underline">Contact Us</Link>
 <Link href="/advertise-with-us" className="text-primary hover:underline">Advertise With Us</Link>
 <Link href="/editorial-policy" className="text-primary hover:underline">Editorial Policy</Link>
 <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
 <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link>
 <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>
 </section>
 </FadeIn>
 </div>
 </div>
 )
}
