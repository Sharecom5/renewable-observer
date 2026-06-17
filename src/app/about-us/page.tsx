import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "About Renewable Observer | Global Renewable Energy Media Company",
 description: "Learn about Renewable Observer, a renewable energy media company delivering trusted news, market intelligence, sustainability insights, industry reports, and clean energy coverage worldwide.",
}

export default function AboutPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-16">
 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-primary">About Renewable Observer</h1>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <p className="text-xl leading-relaxed mb-6 font-medium text-foreground">
 Welcome to Renewable Observer, a global renewable energy media company dedicated to delivering trusted industry news, market intelligence, sustainability insights, clean energy developments, and thought leadership content for professionals, businesses, policymakers, investors, researchers, and sustainability advocates worldwide.
 </p>
 <p className="mb-4">
 As the world accelerates toward a cleaner and more sustainable future, the renewable energy sector continues to evolve at an unprecedented pace. Technological innovation, policy transformation, climate commitments, infrastructure investments, and energy security concerns are reshaping the way nations, businesses, and communities generate and consume energy. Renewable Observer was established to serve as a reliable source of information and industry intelligence during this historic transformation.
 </p>
 <p className="mb-4">
 Headquartered in Noida, India and serving a global audience, Renewable Observer provides comprehensive coverage of renewable energy technologies, clean energy markets, sustainability initiatives, climate innovation, industry developments, and emerging opportunities shaping the future of energy.
 </p>
 <p>
 Our mission is simple: to inform, educate, and connect stakeholders across the global renewable energy ecosystem through independent journalism, insightful analysis, and trustworthy reporting.
 </p>
 </div>
 </div>
 </FadeIn>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
 <FadeIn delay={0.1} className="bg-background border p-8 ">
 <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
 <div className="text-muted-foreground space-y-4">
 <p>Renewable Observer envisions a future where reliable information helps accelerate the transition to sustainable energy systems worldwide.</p>
 <p>We believe that access to high-quality industry intelligence enables better decision-making, encourages innovation, supports responsible investment, strengthens policy development, and promotes long-term sustainability.</p>
 <p>Our vision is to become one of the world's most trusted renewable energy media platforms by delivering accurate reporting, meaningful insights, and valuable resources that empower stakeholders across the clean energy sector.</p>
 </div>
 </FadeIn>

 <FadeIn delay={0.2} className="bg-background border p-8 ">
 <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
 <div className="text-muted-foreground space-y-4">
 <p>Our mission is to provide independent, accurate, and informative coverage of renewable energy and sustainability-related developments worldwide.</p>
 <p>Through news reporting, research-driven content, interviews, market analysis, industry reports, and educational resources, we aim to help readers understand the opportunities and challenges emerging across the energy transition.</p>
 <p>Renewable Observer strives to bridge the gap between information and action by making complex industry developments accessible to businesses, professionals, policymakers, investors, researchers, and the wider public.</p>
 </div>
 </FadeIn>
 </div>

 <FadeIn delay={0.3}>
 <div className="max-w-4xl mx-auto mb-20">
 <h2 className="text-3xl font-bold mb-8 border-b pb-4 text-foreground">What We Cover</h2>
 <p className="text-lg text-muted-foreground mb-8">Renewable Observer provides comprehensive coverage across the renewable energy value chain.</p>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
 {/* Categories */}
 <div>
 <h3 className="text-xl font-bold mb-3 text-secondary">Solar Energy</h3>
 <p className="text-muted-foreground mb-3 text-sm">Solar power remains one of the fastest-growing renewable energy technologies globally. Our solar coverage includes:</p>
 <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
 <li>Utility-scale solar projects</li>
 <li>Rooftop solar developments</li>
 <li>Solar manufacturing</li>
 <li>Photovoltaic technologies</li>
 <li>Solar modules and inverters</li>
 <li>Project financing</li>
 <li>Regulatory developments</li>
 <li>Industry investments</li>
 </ul>
 </div>

 <div>
 <h3 className="text-xl font-bold mb-3 text-secondary">Wind Energy</h3>
 <p className="text-muted-foreground mb-3 text-sm">Wind power continues to play a major role in clean energy generation. We report on:</p>
 <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
 <li>Onshore wind projects</li>
 <li>Offshore wind developments</li>
 <li>Turbine technologies</li>
 <li>Grid integration</li>
 <li>Industry investments</li>
 <li>Market trends</li>
 <li>Policy updates</li>
 </ul>
 </div>

 <div>
 <h3 className="text-xl font-bold mb-3 text-secondary">Energy Storage</h3>
 <p className="text-muted-foreground mb-3 text-sm">Energy storage is critical to renewable energy integration and grid stability. Our coverage includes:</p>
 <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
 <li>Battery Energy Storage Systems (BESS)</li>
 <li>Lithium-ion technologies</li>
 <li>Long-duration storage</li>
 <li>Grid-scale storage projects</li>
 <li>Energy management solutions</li>
 <li>Storage policy developments</li>
 </ul>
 </div>

 <div>
 <h3 className="text-xl font-bold mb-3 text-secondary">Green Hydrogen</h3>
 <p className="text-muted-foreground mb-3 text-sm">Green hydrogen is rapidly becoming an important pillar of future energy systems. Renewable Observer covers:</p>
 <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
 <li>Hydrogen production technologies</li>
 <li>Electrolyzers</li>
 <li>Green ammonia</li>
 <li>Infrastructure projects</li>
 <li>Investment trends</li>
 <li>Policy developments</li>
 <li>Industrial applications</li>
 </ul>
 </div>

 <div>
 <h3 className="text-xl font-bold mb-3 text-secondary">Hydropower & Ocean Energy</h3>
 <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
 <li>Hydroelectric & pumped storage facilities</li>
 <li>Infrastructure modernization</li>
 <li>Tidal & wave energy</li>
 <li>Marine renewable technologies</li>
 <li>Commercial deployments</li>
 <li>Environmental considerations</li>
 </ul>
 </div>

 <div>
 <h3 className="text-xl font-bold mb-3 text-secondary">Bioenergy & Geothermal</h3>
 <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
 <li>Biomass & Biogas projects</li>
 <li>Biofuels</li>
 <li>Waste-to-energy technologies</li>
 <li>Circular economy initiatives</li>
 <li>Geothermal technologies & project development</li>
 </ul>
 </div>

 <div>
 <h3 className="text-xl font-bold mb-3 text-secondary">Electric Mobility & Climate Tech</h3>
 <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
 <li>Electric vehicles & charging infrastructure</li>
 <li>Fleet electrification</li>
 <li>Battery technologies & Mobility innovation</li>
 <li>Climate tech startups</li>
 <li>Carbon management solutions & capture tech</li>
 <li>Digital sustainability tools</li>
 </ul>
 </div>

 <div>
 <h3 className="text-xl font-bold mb-3 text-secondary">Finance, ESG & Supply Chains</h3>
 <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
 <li>Project financing & infrastructure investments</li>
 <li>Mergers and acquisitions & Venture capital</li>
 <li>Sustainability initiatives & ESG reporting</li>
 <li>Net-zero commitments</li>
 <li>Solar, battery, and wind component manufacturing</li>
 <li>Critical minerals & supply chain developments</li>
 </ul>
 </div>
 </div>
 </div>
 </FadeIn>

 <FadeIn delay={0.4}>
 <div className="max-w-4xl mx-auto space-y-16">
 <section>
 <h2 className="text-3xl font-bold mb-6 text-foreground">Industry Intelligence and Research</h2>
 <div className="text-muted-foreground space-y-4">
 <p>In addition to daily news reporting, Renewable Observer provides industry intelligence and market insights designed to support informed decision-making.</p>
 <p>Our research-focused content covers: Industry trends, Market forecasts, Technology assessments, Policy developments, Investment opportunities, and Business intelligence.</p>
 <p>These resources help industry stakeholders better understand evolving market dynamics and future growth opportunities. Readers seeking deeper analysis can explore our <Link href="/reports" className="text-primary hover:underline font-semibold">Reports</Link> section for additional insights.</p>
 </div>
 </section>

 <section>
 <h2 className="text-3xl font-bold mb-6 text-foreground">Editorial Independence</h2>
 <div className="text-muted-foreground space-y-4">
 <p>Renewable Observer is committed to maintaining editorial independence and professional journalism standards. Our editorial decisions are guided by:</p>
 <ul className="list-disc pl-5 space-y-1 font-medium text-foreground">
 <li>Accuracy</li>
 <li>Transparency</li>
 <li>Fairness</li>
 <li>Accountability</li>
 <li>Integrity</li>
 </ul>
 <p>We strive to ensure that commercial relationships do not influence editorial coverage. Readers can learn more by reviewing our <Link href="/editorial-policy" className="text-primary hover:underline font-semibold">Editorial Policy</Link> page.</p>
 </div>
 </section>

 <section className="bg-background border-y border-border p-8 md:p-10 border">
 <h2 className="text-2xl font-bold mb-6 text-foreground">Supporting the Renewable Energy Community</h2>
 <p className="text-muted-foreground mb-4">Renewable Observer serves a diverse audience, including Renewable Energy Developers, EPC Companies, Technology Providers, Manufacturers, Investors, Utilities, Policymakers, Consultants, Researchers, Academic Institutions, Sustainability Professionals, and Industry Associations.</p>
 <p className="text-muted-foreground mb-8 pb-8 border-b border-border">Our platform is designed to foster knowledge sharing, collaboration, and informed discussion across the renewable energy ecosystem.</p>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
 <div>
 <h3 className="text-xl font-bold mb-3 text-foreground">Events and Industry Engagement</h3>
 <p className="text-sm text-muted-foreground mb-4">Renewable Observer actively supports industry engagement through Conferences, Webinars, Industry forums, Awards programs, Educational initiatives, and Networking opportunities.</p>
 <Link href="/events" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
 View our Events section →
 </Link>
 </div>
 <div>
 <h3 className="text-xl font-bold mb-3 text-foreground">Advertising and Partnerships</h3>
 <p className="text-sm text-muted-foreground mb-4">We work with organizations across renewable energy, sustainability, and climate technology sectors to create responsible advertising and partnership opportunities. We support Brand awareness campaigns, Sponsored content, Event partnerships, Industry collaborations, and Thought leadership initiatives.</p>
 <Link href="/advertise-with-us" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
 Advertise With Us →
 </Link>
 </div>
 </div>
 </section>

 <section>
 <h2 className="text-3xl font-bold mb-6 text-foreground">Our Global Perspective & Contact</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="text-muted-foreground space-y-4">
 <p>While headquartered in Noida, India, Renewable Observer serves a truly global audience.</p>
 <p>Our coverage spans Asia Pacific, Europe, North America, Latin America, Middle East, and Africa. By providing international perspectives, we help readers understand how renewable energy markets are evolving across different regions and regulatory environments.</p>
 </div>
 <div className="bg-background border p-8 ">
 <h3 className="font-bold text-xl mb-4 text-foreground">Contact Renewable Observer</h3>
 <p className="text-sm text-muted-foreground mb-6">We welcome feedback, press releases, partnership inquiries, story suggestions, and industry insights.</p>
 <ul className="space-y-4 text-sm mb-8">
 <li><strong className="text-foreground block mb-1">General Inquiries:</strong> <a href="mailto:hello@renewableobserver.com" className="text-primary hover:underline font-medium">hello@renewableobserver.com</a></li>
 <li><strong className="text-foreground block mb-1">Editorial Inquiries:</strong> <a href="mailto:editor@renewableobserver.com" className="text-primary hover:underline font-medium">editor@renewableobserver.com</a></li>
 <li className="pt-4 border-t border-border text-muted-foreground font-medium">Headquartered in Noida, India<br/>Serving a Global Audience</li>
 </ul>
 <div className="pt-4 border-t border-border flex flex-wrap gap-4 text-sm font-semibold">
 <Link href="/contact-us" className="text-primary hover:underline">Contact Us</Link>
 <Link href="/authors" className="text-primary hover:underline">Authors & Contributors</Link>
 <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
 <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link>
 <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>
 </div>
 </div>
 </div>
 </section>

 <section className="text-center bg-primary text-primary-foreground p-10 md:p-16 relative overflow-hidden">
 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
 <div className="relative z-10">
 <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to the Future</h2>
 <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
 The renewable energy transition represents one of the most important global transformations of our time. Renewable Observer is committed to documenting this journey by delivering trusted journalism, industry intelligence, and meaningful insights that help readers understand the technologies, policies, investments, and innovations shaping a sustainable future.
 </p>
 <p className="text-lg font-semibold max-w-2xl mx-auto">
 Whether you are an investor evaluating opportunities, a policymaker developing strategies, a researcher exploring innovation, or a professional working within the renewable energy industry, Renewable Observer aims to be your trusted source of information.
 </p>
 <p className="mt-8 text-accent font-bold text-lg">
 Thank you for being part of the Renewable Observer community and supporting the future of renewable energy.
 </p>
 </div>
 </section>
 </div>
 </FadeIn>
 </div>
 )
}
