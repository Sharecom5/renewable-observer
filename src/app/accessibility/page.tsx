import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Accessibility Statement | Renewable Observer",
 description: "Read Renewable Observer's Accessibility Statement. We are committed to ensuring our website is accessible and inclusive to all individuals.",
}

export default function AccessibilityPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-12 text-center">
 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-primary">Accessibility Statement</h1>
 <p className="text-lg text-muted-foreground font-medium">Our Commitment to Inclusive Design</p>
 </div>
 </FadeIn>

 <div className="max-w-3xl mx-auto">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
 <section>
 <p className="text-xl leading-relaxed mb-6 font-medium text-foreground">Renewable Observer is committed to making our digital platform accessible and inclusive to everyone, regardless of ability or technology.</p>
 <p>As a global media company reporting on the future of energy, we believe that access to crucial industry information, market intelligence, and educational content should be universally available. We are continuously working to improve the user experience for all our readers and applying the relevant accessibility standards.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Measures to Support Accessibility</h2>
 <p>Renewable Observer takes the following measures to ensure the accessibility of our website:</p>
 <ul className="list-disc pl-5">
 <li>Integrating accessibility into our procurement and web development practices.</li>
 <li>Utilizing modern frontend frameworks and semantic HTML to ensure compatibility with assistive technologies.</li>
 <li>Providing clear, consistent navigation and structural layouts.</li>
 <li>Ensuring adequate color contrast between text and backgrounds (such as our Forest Green and Charcoal text against Off-White backgrounds).</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conformance Status</h2>
 <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.</p>
 <p>Renewable Observer aims to conform to <strong>WCAG 2.1 Level AA</strong>. While we strive to adhere to these accepted guidelines and standards for accessibility and usability, it is not always possible to do so in all areas of the website immediately.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Known Limitations</h2>
 <p>Despite our best efforts to ensure accessibility of Renewable Observer, there may be some limitations. Please note the following potential issues:</p>
 <ul className="list-disc pl-5">
 <li><strong>Third-Party Content:</strong> Some third-party embeds, advertisements (e.g., Google AdSense units), or interactive data widgets may not be fully accessible, as we do not control the codebase for these external elements.</li>
 <li><strong>Archived Documents:</strong> Older reports, PDFs, or downloadable media kits may not be fully optimized for screen readers.</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Feedback and Reporting Issues</h2>
 <p>We welcome your feedback on the accessibility of Renewable Observer. If you encounter any accessibility barriers on our website, please let us know so we can address the issue.</p>
 <p>You can contact our support team at:</p>
 <ul className="list-none space-y-2 mt-4 font-semibold text-foreground">
 <li>Email: <a href="mailto:hello@renewableobserver.com" className="text-primary hover:underline">hello@renewableobserver.com</a></li>
 </ul>
 <p className="mt-4">Please be sure to specify the web page or URL in your email, and describe the specific difficulties you have encountered. We try to respond to feedback within 2-3 business days.</p>
 </section>
 </div>
 </FadeIn>
 </div>
 </div>
 )
}
