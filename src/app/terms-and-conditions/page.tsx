import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Terms & Conditions | Renewable Observer Website Terms of Use",
 description: "Read the Terms & Conditions governing the use of Renewable Observer, including content usage, intellectual property rights, user responsibilities, disclaimers, and website policies.",
}

export default function TermsAndConditionsPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-12 text-center">
 <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-primary">Terms & Conditions</h1>
 <p className="text-lg text-muted-foreground font-medium">Last Updated: June 2026</p>
 </div>
 </FadeIn>

 <div className="max-w-3xl mx-auto">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
 <section>
 <p className="text-base leading-relaxed mb-6 font-medium text-foreground">Welcome to Renewable Observer.</p>
 <p>These Terms & Conditions govern your access to and use of Renewable Observer, including our website, content, newsletters, reports, industry insights, events information, and related services.</p>
 <p>By accessing, browsing, or using Renewable Observer, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, you should discontinue use of the website.</p>
 <p>Renewable Observer is a renewable energy media company headquartered in Noida, India and serving a global audience. Our platform provides renewable energy news, sustainability insights, market intelligence, research content, industry analysis, and educational information covering the global clean energy sector.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Acceptance of Terms</h2>
 <p>By using Renewable Observer, you acknowledge and agree that:</p>
 <ul className="list-disc pl-5 space-y-2">
 <li>You have read and understood these Terms & Conditions.</li>
 <li>You agree to comply with all applicable laws and regulations.</li>
 <li>You accept responsibility for your use of the website.</li>
 <li>You understand that continued use of the website constitutes acceptance of these terms.</li>
 </ul>
 <p>These Terms apply to all visitors, readers, contributors, advertisers, partners, and users of Renewable Observer.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">About Renewable Observer</h2>
 <p>Renewable Observer provides content and information related to:</p>
 <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 mb-4 text-sm font-medium">
 <ul className="list-disc pl-5">
 <li>Solar Energy</li>
 <li>Wind Energy</li>
 <li>Energy Storage</li>
 <li>Green Hydrogen</li>
 <li>Hydropower</li>
 </ul>
 <ul className="list-disc pl-5">
 <li>Bioenergy</li>
 <li>Geothermal Energy</li>
 <li>Ocean Energy</li>
 <li>Electric Mobility</li>
 <li>Sustainability</li>
 </ul>
 <ul className="list-disc pl-5">
 <li>ESG</li>
 <li>Climate Technology</li>
 <li>Renewable Energy Finance</li>
 <li>Energy Policy</li>
 <li>Renewable Manufacturing</li>
 </ul>
 </div>
 <p>The information available on the website is intended for informational and educational purposes only.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Website Access</h2>
 <p>Renewable Observer strives to provide reliable access to its website and services. However, we do not guarantee:</p>
 <ul className="list-disc pl-5 mb-4">
 <li>Continuous availability</li>
 <li>Uninterrupted service</li>
 <li>Error-free operation</li>
 <li>Compatibility with every device or browser</li>
 </ul>
 <p>We reserve the right to: Modify website features, Update content, Perform maintenance, Restrict access when necessary, and Discontinue services without prior notice.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Intellectual Property Rights</h2>
 <p>Unless otherwise stated, all content published on Renewable Observer is protected by intellectual property laws. This includes: Articles, Reports, Research Publications, Graphics, Logos, Images, Videos, Audio Content, Website Design, Databases, and Newsletters. All rights are reserved.</p>
 <p>Users may access and view content for personal, non-commercial use only. Unauthorized copying, reproduction, redistribution, modification, sale, republication, or commercial use of content is prohibited without written permission.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Permitted Use</h2>
 <p>Users may: Read published content, Share article links, Reference content with proper attribution, Subscribe to newsletters, Contact our team, and Participate in events and webinars.</p>
 <p>Permitted use must comply with applicable laws and these Terms & Conditions.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Prohibited Activities</h2>
 <p>Users agree not to:</p>
 <ul className="list-disc pl-5 space-y-1">
 <li>Copy or republish content without authorization</li>
 <li>Misrepresent content ownership</li>
 <li>Distribute malware or malicious software</li>
 <li>Attempt unauthorized access to systems</li>
 <li>Interfere with website operations</li>
 <li>Use automated scraping tools excessively</li>
 <li>Submit misleading information</li>
 <li>Engage in unlawful activities</li>
 <li>Violate intellectual property rights</li>
 <li>Post harmful, abusive, or offensive content</li>
 </ul>
 <p className="mt-4 font-semibold text-foreground">Violation of these terms may result in restricted access and potential legal action.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Content Accuracy</h2>
 <p>Renewable Observer strives to provide accurate and reliable information. However, we do not guarantee that all information published on the website is: Complete, Accurate, Current, or Error-Free.</p>
 <p>Industry conditions, regulations, technologies, market data, and business developments may change over time. Readers are encouraged to independently verify information before making business, investment, legal, technical, or operational decisions.</p>
 <p>For additional information regarding our editorial standards, please review our <Link href="/editorial-policy" className="text-primary hover:underline">Editorial Policy</Link>.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Press Releases and Third-Party Content</h2>
 <p>Renewable Observer may publish: Press Releases, Guest Articles, Sponsored Content, Industry Announcements, and Partner Materials. Such content may originate from third parties.</p>
 <p>Publication does not necessarily imply endorsement, verification, or approval of the information contained within such materials. Readers should independently evaluate third-party information before relying upon it.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Sponsored Content and Advertising</h2>
 <p>Renewable Observer may publish advertising and sponsored materials. Sponsored content may include: Promotional Articles, Industry Features, Event Promotions, Partner Content, and Product Announcements.</p>
 <p>Sponsored materials will be identified where appropriate. Advertising relationships do not influence editorial decision-making. Additional information can be found on our <Link href="/advertise-with-us" className="text-primary hover:underline">Advertise With Us page</Link>.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">User Submissions</h2>
 <p>Users may voluntarily submit: Press Releases, Event Information, Feedback, Story Ideas, Business Inquiries, and Guest Contributions.</p>
 <p>By submitting content, users grant Renewable Observer the right to review, edit, publish, distribute, or remove submitted materials at our discretion.</p>
 <p>Users are responsible for ensuring submitted content: Is accurate, Does not violate laws, Does not infringe third-party rights, and Does not contain misleading information.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Events and Webinars</h2>
 <p>Renewable Observer may organize, support, promote, or participate in: Conferences, Exhibitions, Webinars, Industry Forums, Awards Programs, and Educational Events.</p>
 <p>Event schedules, speakers, sponsors, locations, and agendas may change without notice. Participation in events may be subject to additional terms.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Research and Reports</h2>
 <p>Renewable Observer may publish: Market Reports, Industry Studies, Research Publications, Forecasts, White Papers, and Analytical Content. These materials are intended solely for informational purposes.</p>
 <p>They should not be considered: Investment Advice, Financial Advice, Legal Advice, Engineering Advice, or Professional Consulting Services. Users should consult qualified professionals before making important decisions.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
 <p>To the fullest extent permitted by applicable law, Renewable Observer shall not be liable for:</p>
 <ul className="list-disc pl-5 mb-4">
 <li>Direct Damages</li>
 <li>Indirect Damages</li>
 <li>Consequential Damages</li>
 <li>Business Losses</li>
 <li>Revenue Losses</li>
 <li>Data Losses</li>
 <li>Service Interruptions</li>
 <li>Lost Opportunities</li>
 </ul>
 <p>arising from: Website Usage, Reliance on Published Information, Technical Issues, External Links, or Third-Party Content. Users assume responsibility for how they use information obtained through the website.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">External Links</h2>
 <p>Renewable Observer may provide links to third-party websites and resources. These links are offered for convenience and informational purposes.</p>
 <p>We do not control or guarantee: Third-Party Content, Third-Party Services, Third-Party Policies, or Third-Party Security. Users access external websites at their own risk.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Privacy</h2>
 <p>Use of Renewable Observer is also governed by our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. By using the website, users acknowledge and agree to our privacy practices as described in that policy.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Modifications to These Terms</h2>
 <p>Renewable Observer reserves the right to modify these Terms & Conditions at any time. Changes may occur due to: Legal Requirements, Regulatory Changes, Industry Developments, Business Operations, or Technology Updates.</p>
 <p>Updated versions will be published on this page. Continued use of the website after updates constitutes acceptance of revised terms.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Governing Principles</h2>
 <p>These Terms & Conditions shall be interpreted in accordance with applicable laws and accepted business practices. If any provision is found to be unenforceable, the remaining provisions shall continue in full force and effect.</p>
 </section>

 <section className="bg-background border-y border-border p-8 border mt-12 text-center sm:text-left">
 <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
 <p className="mb-6">Questions regarding these Terms & Conditions may be directed to:</p>
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
 <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>
 <Link href="/authors" className="text-primary hover:underline">Authors & Contributors</Link>
 </section>

 <p className="text-center mt-12 text-lg font-bold text-foreground">Thank you for using Renewable Observer and supporting responsible renewable energy journalism and industry knowledge sharing.</p>
 </div>
 </FadeIn>
 </div>
 </div>
 )
}
