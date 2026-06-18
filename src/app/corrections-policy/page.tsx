import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Corrections Policy | Renewable Observer",
 description: "Learn about Renewable Observer's commitment to accuracy, our process for handling corrections, and how to report an error.",
}

export default function CorrectionsPolicyPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-12 text-center">
 <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-primary">Corrections Policy</h1>
 <p className="text-lg text-muted-foreground font-medium">Accountability and Transparency in Renewable Energy Journalism</p>
 </div>
 </FadeIn>

 <div className="max-w-3xl mx-auto">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Commitment to Accuracy</h2>
 <p>At Renewable Observer, accuracy is fundamental to our editorial mission. As a leading renewable energy media company, we recognize the critical importance of delivering fact-checked, reliable, and trustworthy information to industry professionals, investors, policymakers, and researchers.</p>
 <p>Despite our rigorous editorial standards and fact-checking processes, errors can occasionally occur. When they do, we are committed to correcting them swiftly, transparently, and comprehensively.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to Report an Error</h2>
 <p>We actively encourage our readers to hold us accountable. If you believe you have identified a factual inaccuracy in our reporting, market intelligence, or data analysis, please bring it to our attention.</p>
 <p>You can report suspected errors directly to our editorial team at:</p>
 <p className="font-bold text-secondary">
 <a href="mailto:editor@renewableobserver.com" className="hover:underline">editor@renewableobserver.com</a>
 </p>
 <p>When reporting an error, please provide the following details:</p>
 <ul className="list-disc pl-5">
 <li>The URL (link) or headline of the article in question.</li>
 <li>The specific claim or data point that is incorrect.</li>
 <li>The correct information, accompanied by a credible source or supporting documentation if possible.</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Correction Process</h2>
 <p>Once a potential error is reported, our editorial team immediately initiates a review process. This involves consulting the original author, verifying the claims against source materials, and referencing authoritative industry data.</p>
 <p>If the information is found to be factually incorrect, we will:</p>
 <ul className="list-disc pl-5">
 <li><strong>Update the Content:</strong> The factual error within the body of the article will be corrected immediately.</li>
 <li><strong>Issue an Editor's Note:</strong> We will append a clear, dated correction statement to the article—typically at the bottom—explaining what was changed and why.</li>
 <li><strong>Social Media & Newsletters:</strong> If an error was propagated through our newsletters or social channels and significantly altered the understanding of a major story, we will issue a correction across those platforms as well.</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Types of Content Updates</h2>
 <p>We distinguish between factual corrections, clarifications, and content updates:</p>
 <ul className="list-disc pl-5 space-y-4">
 <li><strong>Corrections:</strong> Used when an article contains a factual error (e.g., incorrect financial figures, misstated technology capabilities, or wrong names/titles). These require a formal Editor's Note.</li>
 <li><strong>Clarifications:</strong> Used when the facts are technically correct, but the phrasing may inadvertently mislead readers or lack necessary context. A note may be added to clarify the context.</li>
 <li><strong>Updates:</strong> The renewable energy industry moves quickly. If a developing story changes (e.g., a policy is officially passed after we report it is being drafted), we will add the new information and mark the article as "Updated" with the new timestamp. This does not constitute an error, but rather ongoing coverage.</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Editorial Accountability</h2>
 <p>Our editorial leadership assumes full responsibility for the accuracy of our content. Factual integrity supersedes the speed of publication. We view corrections not as a failure, but as a crucial step in maintaining the trust of the global clean energy community.</p>
 <p>For more details on our publishing standards, please read our <Link href="/editorial-policy" className="text-primary hover:underline">Editorial Policy</Link>.</p>
 </section>
 </div>
 </FadeIn>
 </div>
 </div>
 )
}
