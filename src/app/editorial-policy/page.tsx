import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Editorial Policy | Renewable Observer Standards for Accuracy, Independence & Transparency",
 description: "Learn about Renewable Observer's editorial standards, fact-checking practices, corrections policy, content guidelines, transparency principles, and commitment to independent renewable energy journalism.",
}

export default function EditorialPolicyPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-16 text-center">
 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-primary">Editorial Policy</h1>
 <p className="text-xl text-muted-foreground leading-relaxed font-medium">
 At Renewable Observer, editorial integrity is the foundation of everything we publish.
 </p>
 </div>
 </FadeIn>

 <div className="max-w-3xl mx-auto space-y-12">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <p>
 As a renewable energy media company, we recognize the importance of delivering accurate, balanced, transparent, and trustworthy information to our readers. Our audience includes industry professionals, investors, policymakers, researchers, sustainability leaders, renewable energy developers, technology providers, and organizations that rely on high-quality information to make informed decisions.
 </p>
 <p>
 This Editorial Policy outlines the principles, standards, and practices that guide our journalism, reporting, analysis, research, interviews, industry coverage, and digital publishing activities.
 </p>
 <p>
 Headquartered in Noida, India and serving a global audience, Renewable Observer is committed to maintaining the highest standards of professional journalism while supporting informed discussion about renewable energy, sustainability, climate technology, and the global energy transition.
 </p>
 </div>
 </FadeIn>

 <FadeIn delay={0.2}>
 <section className="bg-background border-y border-border p-8 border">
 <h2 className="text-2xl font-bold text-foreground mb-4">Our Editorial Mission</h2>
 <p className="text-muted-foreground mb-4">Renewable Observer exists to provide accurate and meaningful information about renewable energy and sustainability.</p>
 <h3 className="font-bold text-foreground mb-2">Our mission is to:</h3>
 <ul className="list-disc pl-5 text-muted-foreground space-y-1 mb-4">
 <li>Inform industry stakeholders</li>
 <li>Promote transparency</li>
 <li>Support knowledge sharing</li>
 <li>Encourage informed decision-making</li>
 <li>Deliver independent journalism</li>
 <li>Foster constructive industry dialogue</li>
 </ul>
 <p className="text-muted-foreground italic">Through responsible reporting and professional editorial practices, we aim to help readers better understand developments occurring across the renewable energy sector.</p>
 </section>
 </FadeIn>

 <FadeIn delay={0.3}>
 <section className="space-y-6">
 <h2 className="text-3xl font-bold text-foreground">Areas of Coverage</h2>
 <p className="text-muted-foreground">Renewable Observer covers a broad range of topics related to renewable energy and sustainability.</p>
 
 <div className="grid sm:grid-cols-2 gap-6 not-prose mt-6">
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Renewable Energy</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Solar & Wind Energy</li>
 <li>Hydropower & Bioenergy</li>
 <li>Geothermal & Ocean Energy</li>
 </ul>
 </div>
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Energy Technologies</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Energy Storage & Green Hydrogen</li>
 <li>Smart Grids & Energy Management Systems</li>
 <li>Digital Energy Solutions</li>
 </ul>
 </div>
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Sustainable Mobility</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Electric Vehicles & Charging Infrastructure</li>
 <li>Fleet Electrification & Battery Technologies</li>
 </ul>
 </div>
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Sustainability</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>ESG & Climate Action</li>
 <li>Net-Zero Strategies & Carbon Management</li>
 <li>Environmental Innovation</li>
 </ul>
 </div>
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Markets and Finance</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Renewable Energy Investments & Project Financing</li>
 <li>Green Bonds, Venture Capital, M&A</li>
 </ul>
 </div>
 <div className="bg-background border p-6 ">
 <h3 className="font-bold text-primary mb-2">Policy and Regulation</h3>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>Government Policies & Regulatory Developments</li>
 <li>Energy Programs & Industry Standards</li>
 </ul>
 </div>
 </div>
 <p className="text-muted-foreground font-medium mt-4">Our objective is to provide balanced and informative coverage across all major segments of the clean energy ecosystem.</p>
 </section>
 </FadeIn>

 <FadeIn delay={0.4}>
 <section className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <h2 className="text-3xl font-bold text-foreground">Commitment to Accuracy</h2>
 <p>Accuracy is one of the most important principles guiding our editorial work. Before publishing information, we strive to verify facts through reliable and credible sources.</p>
 <p><strong>These sources may include:</strong> Government Agencies, Regulatory Bodies, Industry Associations, Public Company Filings, Academic Research, Official Press Releases, Industry Experts, and Independent Research Organizations.</p>
 <p>While we make every effort to ensure accuracy, information can evolve quickly, particularly within rapidly changing sectors such as renewable energy and technology. When new information becomes available, content may be updated accordingly.</p>
 </section>
 </FadeIn>

 <FadeIn delay={0.5}>
 <section className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <h2 className="text-3xl font-bold text-foreground">Fact-Checking Standards</h2>
 <p>Renewable Observer follows reasonable fact-checking procedures designed to improve accuracy and reliability. These procedures may include: Verification of factual claims, Confirmation of statistics, Cross-referencing multiple sources, Validation of company announcements, Review of regulatory information, and Examination of publicly available data.</p>
 <p>We encourage readers to contact us if they believe information requires correction or clarification. Editorial inquiries may be directed to: <a href="mailto:editor@renewableobserver.com" className="text-secondary font-bold hover:underline">editor@renewableobserver.com</a></p>
 </section>
 </FadeIn>

 <FadeIn delay={0.6}>
 <section className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <h2 className="text-3xl font-bold text-foreground">Editorial Independence & Transparency</h2>
 <p>Renewable Observer maintains strict editorial independence. Editorial decisions are made based on: Newsworthiness, Relevance, Public interest, Industry significance, and Informational value.</p>
 <p>Editorial content is not influenced by: Advertisers, Sponsors, Business Partners, Political Organizations, Government Agencies, or Special Interest Groups. Our commitment to independence helps ensure credibility and reader trust.</p>
 
 <h3 className="text-xl font-bold text-foreground mt-8">Transparency</h3>
 <p>Transparency is essential to responsible journalism. Renewable Observer aims to clearly distinguish between: Editorial Content, Sponsored Content, Advertising, Opinion Pieces, and Press Releases. Readers should always be able to understand the nature and purpose of the content they are viewing.</p>

 <h3 className="text-xl font-bold text-foreground mt-8">Sponsored Content Policy</h3>
 <p>Renewable Observer may publish sponsored content, promotional articles, industry features, and partner-supported materials. To maintain transparency: Sponsored content will be clearly identified, Promotional content will be appropriately disclosed, and Advertising relationships will not influence editorial decisions.</p>
 <p>Sponsored content allows organizations to communicate valuable information while maintaining transparency for readers. For sponsorship opportunities, readers can visit our <Link href="/advertise-with-us" className="text-primary hover:underline">Advertise With Us page</Link>.</p>

 <h3 className="text-xl font-bold text-foreground mt-8">Press Releases</h3>
 <p>Renewable Observer regularly receives press releases from companies, government agencies, research organizations, industry associations, and technology providers. Press releases may be: Published as submitted, Edited for clarity, Used as sources for broader reporting, or Incorporated into industry coverage.</p>
 <p>Publication of a press release does not imply endorsement of the organization, product, service, or claims being presented.</p>

 <h3 className="text-xl font-bold text-foreground mt-8">Opinions and Commentary</h3>
 <p>Opinion articles play an important role in encouraging discussion and knowledge sharing. Opinion content may include: Expert Commentary, Industry Perspectives, Guest Articles, Leadership Views, and Market Analysis. Opinions expressed by contributors belong solely to the authors and do not necessarily represent the views of Renewable Observer. Opinion content will generally be identified appropriately.</p>

 <h3 className="text-xl font-bold text-foreground mt-8">Corrections Policy</h3>
 <p>Renewable Observer is committed to correcting factual errors when identified. If inaccuracies are discovered, we may: Update content, Clarify information, Correct factual mistakes, or Add explanatory notes. Readers are encouraged to report potential errors by contacting: <a href="mailto:editor@renewableobserver.com" className="text-secondary font-bold hover:underline">editor@renewableobserver.com</a>.</p>
 </section>
 </FadeIn>

 <FadeIn delay={0.7}>
 <section className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
 <h2 className="text-3xl font-bold text-foreground">Artificial Intelligence and Technology</h2>
 <p>Renewable Observer may utilize technology tools to support research, organization, data analysis, and editorial workflows.</p>
 <p>However:</p>
 <ul>
 <li>Human editorial oversight remains essential.</li>
 <li>Published content is reviewed before publication.</li>
 <li>Editorial responsibility remains with Renewable Observer.</li>
 <li>Accuracy standards apply regardless of production methods.</li>
 </ul>
 <p>Technology is used to support efficiency, not replace editorial judgment.</p>
 </section>
 </FadeIn>

 <FadeIn delay={0.8}>
 <section className="bg-background border-t-4 border-t-primary border-x border-b border-border border border-primary/20 p-8 text-center md:text-left mt-12">
 <h2 className="text-2xl font-bold text-foreground mb-4">Contact Renewable Observer</h2>
 <p className="text-muted-foreground mb-6">For editorial questions, corrections, or policy-related inquiries:</p>
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
 <section className="mt-12 pt-8 border-t text-sm font-semibold flex flex-wrap gap-4 justify-center sm:justify-start">
 <span className="text-foreground w-full sm:w-auto">Related Pages:</span>
 <Link href="/about-us" className="text-primary hover:underline">About Us</Link>
 <Link href="/contact-us" className="text-primary hover:underline">Contact Us</Link>
 <Link href="/advertise-with-us" className="text-primary hover:underline">Advertise With Us</Link>
 <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
 <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link>
 <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>
 <Link href="/authors" className="text-primary hover:underline">Authors & Contributors</Link>
 </section>
 </FadeIn>
 </div>
 </div>
 )
}
