import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Disclaimer | Renewable Observer Content & Information Disclaimer",
 description: "Read the Renewable Observer Disclaimer regarding website content, renewable energy news, market intelligence, third-party information, investment-related content, and limitations of liability.",
}

export default function DisclaimerPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-12 text-center">
 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-primary">Disclaimer</h1>
 <p className="text-lg text-muted-foreground font-medium">Last Updated: June 2026</p>
 </div>
 </FadeIn>

 <div className="max-w-3xl mx-auto">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
 <section>
 <p className="text-xl leading-relaxed mb-6 font-medium text-foreground">Welcome to Renewable Observer.</p>
 <p>This Disclaimer governs your use of Renewable Observer and all content, articles, reports, newsletters, interviews, research publications, market intelligence, event information, advertising materials, and related services provided through our platform.</p>
 <p>By accessing or using Renewable Observer, you acknowledge and agree to the terms outlined in this Disclaimer. If you do not agree with any part of this Disclaimer, you should discontinue use of the website.</p>
 <p>Renewable Observer is a renewable energy media company headquartered in Noida, India and serving a global audience. Our mission is to provide reliable information, industry insights, and educational content related to renewable energy, sustainability, climate technology, and the global energy transition.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">General Information Disclaimer</h2>
 <p>The information published on Renewable Observer is intended solely for informational and educational purposes.</p>
 <p>While we strive to provide accurate, timely, and reliable information, we make no guarantees regarding:</p>
 <ul className="list-disc pl-5 mb-4 space-y-1">
 <li>Accuracy</li>
 <li>Completeness</li>
 <li>Reliability</li>
 <li>Availability</li>
 <li>Timeliness</li>
 <li>Suitability</li>
 </ul>
 <p>of any content published on the website.</p>
 <p>Readers should independently verify information before relying upon it for business, financial, legal, technical, operational, or strategic decisions.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">No Professional Advice</h2>
 <p>Content published on Renewable Observer does not constitute professional advice of any kind.</p>
 <p>Information provided on the website should not be interpreted as:</p>
 <ul className="list-disc pl-5 mb-4 space-y-1">
 <li>Investment Advice</li>
 <li>Financial Advice</li>
 <li>Legal Advice</li>
 <li>Tax Advice</li>
 <li>Engineering Advice</li>
 <li>Regulatory Advice</li>
 <li>Business Consulting Advice</li>
 <li>Technical Advice</li>
 </ul>
 <p>Users should consult appropriately qualified professionals before making decisions based on information found on the website.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Renewable Energy Industry Disclaimer</h2>
 <p>Renewable Observer covers multiple industries and technologies including: Solar Energy, Wind Energy, Energy Storage, Green Hydrogen, Hydropower, Bioenergy, Geothermal Energy, Ocean Energy, Electric Mobility, Sustainability, ESG, Climate Technology, Renewable Manufacturing, and Energy Finance.</p>
 <p>Information published within these sectors may become outdated due to: Technological Advancements, Market Changes, Regulatory Updates, Policy Revisions, and Industry Developments.</p>
 <p>Readers should verify current information through official and authoritative sources before making decisions.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Investment Disclaimer</h2>
 <p>Renewable Observer may publish information relating to: Renewable Energy Stocks, Public Companies, Private Investments, Project Financing, Infrastructure Funds, Green Bonds, Venture Capital Activity, and Mergers and Acquisitions.</p>
 <p>Such information is provided solely for informational purposes. Nothing published on Renewable Observer should be interpreted as: Investment Recommendations, Trading Advice, Stock Recommendations, Financial Endorsements, or Portfolio Guidance.</p>
 <p className="font-semibold text-foreground">Investments involve risk, including potential loss of capital.</p>
 <p>Readers should conduct independent research and seek advice from licensed financial professionals before making investment decisions. Past performance does not guarantee future results.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Market Intelligence Disclaimer</h2>
 <p>Renewable Observer may publish: Market Reports, Industry Forecasts, Research Studies, Economic Assessments, Trend Analysis, and Industry Surveys.</p>
 <p>Such content may contain: Assumptions, Projections, Estimates, Forecasts, and Opinions.</p>
 <p>Actual outcomes may differ significantly from projections or forecasts. Readers should use such information as one component of broader research and decision-making processes.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Technology and Product Disclaimer</h2>
 <p>Renewable Observer may publish content related to renewable energy technologies, products, equipment, software, infrastructure, and services.</p>
 <p>References to products, technologies, or service providers do not constitute endorsements unless explicitly stated.</p>
 <p>Readers should independently evaluate: Product Specifications, Certifications, Safety Requirements, Technical Capabilities, Performance Claims, and Warranty Information before making purchasing or operational decisions.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third-Party Content Disclaimer</h2>
 <p>Renewable Observer may publish or reference: Press Releases, Guest Articles, Sponsored Content, Industry Reports, Third-Party Research, and Partner Information.</p>
 <p>Such content may originate from external organizations. We do not guarantee the accuracy, completeness, or reliability of third-party information. Publication of third-party content does not imply endorsement by Renewable Observer.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Press Release Disclaimer</h2>
 <p>Organizations may submit press releases for publication or editorial review. Press releases are generally based on information provided by the submitting organization.</p>
 <p>Renewable Observer: Does not guarantee accuracy of submitted information, Does not independently verify every claim, and Does not endorse products or services mentioned.</p>
 <p>Readers should independently verify information contained in press releases.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Sponsored Content Disclaimer</h2>
 <p>Renewable Observer may publish sponsored articles, branded content, promotional features, and advertising materials. Sponsored content will be identified where appropriate.</p>
 <p>Publication of sponsored content does not imply endorsement of: Companies, Products, Services, Technologies, or Investment Opportunities. Readers should independently evaluate any commercial claims presented within sponsored materials.</p>
 <p>For information regarding advertising opportunities, please visit our <Link href="/advertise-with-us" className="text-primary hover:underline">Advertise With Us page</Link>.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Opinions and Commentary Disclaimer</h2>
 <p>Renewable Observer may publish: Expert Opinions, Guest Contributions, Editorial Commentary, and Industry Perspectives.</p>
 <p>Views expressed by contributors belong solely to the authors and do not necessarily reflect the views of Renewable Observer. Readers should consider multiple perspectives before forming conclusions.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">External Links Disclaimer</h2>
 <p>Renewable Observer may provide links to external websites, organizations, and resources. These links are provided for informational purposes only.</p>
 <p>We do not control or guarantee: External Content, Third-Party Services, Third-Party Policies, or External Website Security. Users access external resources at their own discretion and risk.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Website Availability Disclaimer</h2>
 <p>While we strive to maintain reliable website access, Renewable Observer does not guarantee uninterrupted availability.</p>
 <p>Website access may be affected by: Maintenance Activities, Software Updates, Hosting Issues, Technical Problems, Cybersecurity Events, and External Factors Beyond Our Control. We are not responsible for losses resulting from temporary service interruptions.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">No Warranties & Limitation of Liability</h2>
 <p>Renewable Observer provides information on an "as is" and "as available" basis. We make no warranties regarding: Accuracy, Completeness, Reliability, Availability, Performance, Suitability, or Non-Infringement. Users access and use the website at their own risk.</p>
 <p>To the fullest extent permitted by applicable law, Renewable Observer shall not be liable for: Direct Damages, Indirect Damages, Incidental Damages, Consequential Damages, Business Losses, Financial Losses, Lost Opportunities, Data Loss, or Service Interruptions arising from: Website Usage, Reliance on Published Information, Third-Party Content, Technical Errors, or External Resources.</p>
 <p className="font-semibold text-foreground">Users assume full responsibility for how they use information obtained from the website.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">User Responsibility</h2>
 <p>Users are responsible for: Verifying Information Independently, Conducting Appropriate Research, Consulting Qualified Professionals, and Evaluating Risks Before Making Decisions.</p>
 <p>Renewable Observer should be viewed as an informational resource rather than a substitute for professional advice.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Updates to This Disclaimer</h2>
 <p>Renewable Observer reserves the right to modify or update this Disclaimer at any time. Updates may occur due to: Legal Requirements, Regulatory Changes, Industry Developments, Business Operations, or Technology Updates.</p>
 <p>Updated versions will be published on this page. Continued use of the website constitutes acceptance of any revised Disclaimer.</p>
 </section>

 <section className="bg-background border-y border-border p-8 border mt-12 text-center sm:text-left">
 <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
 <p className="mb-6">Questions regarding this Disclaimer may be directed to:</p>
 <div className="grid sm:grid-cols-2 gap-6 mb-6">
 <div>
 <strong className="block text-foreground mb-1 uppercase text-sm tracking-wider">General Contact</strong>
 <a href="mailto:hello@renewableobserver.com" className="text-primary hover:underline font-bold">hello@renewableobserver.com</a>
 </div>
 <div>
 <strong className="block text-foreground mb-1 uppercase text-sm tracking-wider">Editorial Contact</strong>
 <a href="mailto:editor@renewableobserver.com" className="text-secondary hover:underline font-bold">editor@renewableobserver.com</a>
 </div>
 </div>
 <p className="font-semibold text-foreground pt-4 border-t border-border">
 Headquartered in Noida, India<br/>
 Serving a Global Audience
 </p>
 </section>

 <section className="mt-12 pt-8 border-t text-sm font-semibold flex flex-wrap gap-4 justify-center sm:justify-start">
 <span className="text-foreground w-full sm:w-auto">Related Pages:</span>
 <Link href="/about-us" className="text-primary hover:underline">About Us</Link>
 <Link href="/contact-us" className="text-primary hover:underline">Contact Us</Link>
 <Link href="/advertise-with-us" className="text-primary hover:underline">Advertise With Us</Link>
 <Link href="/editorial-policy" className="text-primary hover:underline">Editorial Policy</Link>
 <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
 <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link>
 <Link href="/authors" className="text-primary hover:underline">Authors & Contributors</Link>
 </section>

 <p className="text-center mt-12 text-lg font-bold text-foreground">Thank you for using Renewable Observer and supporting responsible renewable energy journalism, industry knowledge sharing, and informed decision-making across the global clean energy sector.</p>
 </div>
 </FadeIn>
 </div>
 </div>
 )
}
