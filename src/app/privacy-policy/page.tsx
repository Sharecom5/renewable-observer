import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Privacy Policy | Renewable Observer Data Protection & Privacy Practices",
 description: "Read the Renewable Observer Privacy Policy to understand how we collect, use, protect, and manage personal information, cookies, analytics data, and communication preferences.",
}

export default function PrivacyPolicyPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-12 text-center">
 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-primary">Privacy Policy</h1>
 <p className="text-lg text-muted-foreground font-medium">Last Updated: June 2026</p>
 </div>
 </FadeIn>

 <div className="max-w-3xl mx-auto">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
 <section>
 <p className="text-xl leading-relaxed mb-6 font-medium text-foreground">Welcome to Renewable Observer.</p>
 <p>Your privacy is important to us. This Privacy Policy explains how Renewable Observer collects, uses, stores, protects, and manages information when visitors access our website, subscribe to newsletters, submit inquiries, engage with our content, or interact with our services.</p>
 <p>Renewable Observer is committed to maintaining transparency regarding our privacy practices and ensuring that personal information is handled responsibly.</p>
 <p>Headquartered in Noida, India and serving a global audience, Renewable Observer provides renewable energy news, market intelligence, sustainability insights, research content, industry analysis, and educational resources for readers worldwide.</p>
 <p className="font-semibold text-foreground">By using our website, you agree to the terms outlined in this Privacy Policy.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Introduction</h2>
 <p>Renewable Observer operates as a renewable energy media company covering developments across: Solar Energy, Wind Energy, Green Hydrogen, Energy Storage, Hydropower, Bioenergy, Geothermal Energy, Ocean Energy, Electric Mobility, Sustainability, ESG, Climate Technology, and Renewable Energy Finance.</p>
 <p>As part of providing these services, certain information may be collected to improve user experience, maintain website functionality, communicate with visitors, and support business operations. This Privacy Policy explains how that information is handled.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
 <p>Information may be collected in several ways.</p>
 
 <h3 className="text-xl font-bold text-foreground mt-6 mb-2">Information You Provide</h3>
 <p>You may voluntarily provide information when: Contacting us, Submitting inquiries, Subscribing to newsletters, Requesting reports, Participating in surveys, Submitting press releases, Exploring partnership opportunities, or Advertising with Renewable Observer.</p>
 <p>Information provided may include: Name, Email Address, Company Name, Job Title, Country or Region, Business Information, and Messages or Inquiries. Providing personal information is generally voluntary.</p>

 <h3 className="text-xl font-bold text-foreground mt-6 mb-2">Automatically Collected Information</h3>
 <p>When users visit Renewable Observer, certain technical information may be collected automatically. This information may include: IP Address, Browser Type, Device Information, Operating System, Referring Website, Pages Viewed, Session Duration, Traffic Sources, Geographic Region, and Website Usage Data.</p>
 <p>This information helps us understand how visitors interact with the website and supports ongoing improvements.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cookies and Similar Technologies</h2>
 <p>Renewable Observer may use cookies and related technologies to improve functionality and user experience. Cookies are small files stored on a user's device that help websites remember preferences and improve performance.</p>
 <p>Cookies may be used for: Website Functionality, Security, Analytics, Performance Monitoring, User Preferences, and Advertising Purposes.</p>
 <p>Users can manage cookie preferences through their browser settings. Disabling cookies may affect certain website features and functionality.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Information</h2>
 <p>Information collected through Renewable Observer may be used for several purposes:</p>
 <ul className="list-disc pl-5 space-y-2">
 <li><strong className="text-foreground">Website Operations:</strong> To maintain and improve website functionality and performance.</li>
 <li><strong className="text-foreground">Content Delivery:</strong> To provide renewable energy news, sustainability insights, research content, industry updates, and educational resources.</li>
 <li><strong className="text-foreground">Communication:</strong> To respond to inquiries, requests, and feedback submitted through the website.</li>
 <li><strong className="text-foreground">Newsletter Distribution:</strong> To send subscribers Industry News, Market Updates, Event Announcements, Research Reports, and Renewable Energy Insights. Users may unsubscribe from newsletters at any time.</li>
 <li><strong className="text-foreground">Analytics and Improvement:</strong> To better understand audience interests and improve the quality of content and services.</li>
 <li><strong className="text-foreground">Security:</strong> To help protect users, systems, and website infrastructure from unauthorized activity or misuse.</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Newsletter Communications</h2>
 <p>Visitors who subscribe to Renewable Observer newsletters may receive: Renewable Energy News, Industry Analysis, Sustainability Updates, Market Intelligence, Event Notifications, and Research Publications.</p>
 <p>Newsletter communications are intended to provide valuable industry information. Recipients may unsubscribe at any time using the unsubscribe link included in email communications.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Advertising and Third-Party Services</h2>
 <p>Renewable Observer may work with third-party service providers and advertising partners. These providers may assist with: Website Analytics, Advertising Services, Email Distribution, Performance Monitoring, and Security Services.</p>
 <p>Third-party providers may operate under their own privacy policies. Users are encouraged to review those policies when interacting with external services.</p>
 
 <h3 className="text-xl font-bold text-foreground mt-6 mb-2">Google AdSense and Advertising</h3>
 <p>Renewable Observer may display advertisements through advertising networks including Google AdSense. Advertising providers may use cookies and related technologies to deliver advertisements that may be relevant to users. These technologies may collect information regarding website interactions and browsing behavior.</p>
 <p>Users can manage advertising preferences through settings provided by advertising platforms. For additional information regarding advertising technologies, users should review the privacy policies of the relevant service providers.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Analytics Services</h2>
 <p>Renewable Observer may use analytics tools to understand website performance and visitor engagement. Analytics information may include: Traffic Sources, Visitor Behavior, Popular Content, Audience Trends, Geographic Distribution, and Device Usage.</p>
 <p>This information helps improve website quality and content relevance. Analytics data is generally used in an aggregated form and is not intended to personally identify visitors.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Security</h2>
 <p>Renewable Observer takes reasonable measures to protect information against unauthorized access, disclosure, alteration, or destruction. Security practices may include: Secure Hosting Infrastructure, SSL Encryption, Access Controls, Security Monitoring, Software Updates, and Data Protection Procedures.</p>
 <p>While reasonable safeguards are implemented, no online system can guarantee complete security. Users should also take appropriate precautions when sharing information online.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Retention & User Rights</h2>
 <p>Information is retained only as long as reasonably necessary for: Website Operations, Communication Purposes, Legal Compliance, Security Requirements, and Service Improvements. Retention periods may vary depending on the type of information involved.</p>
 <p>Depending on applicable laws and regulations, users may have rights regarding their personal information. These rights may include: Access Requests, Correction Requests, Deletion Requests, Withdrawal of Consent, Objections to Processing, and Data Portability Requests. Requests regarding personal information may be submitted using the contact information provided below.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">International Users & External Links</h2>
 <p>Renewable Observer serves readers across multiple regions worldwide. As a result, information may be processed or stored in jurisdictions where our service providers operate. By using Renewable Observer, users acknowledge that information may be transferred internationally where permitted by applicable laws.</p>
 <p>Renewable Observer may contain links to external websites and third-party resources. These links are provided for informational purposes. We are not responsible for: External Website Content, Third-Party Privacy Practices, Third-Party Security Measures, or External Website Policies. Users should review the privacy policies of external websites before sharing personal information.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Children's Privacy</h2>
 <p>Renewable Observer is intended primarily for industry professionals, businesses, researchers, and general audiences interested in renewable energy and sustainability. We do not knowingly collect personal information from children. If information is discovered to have been collected from a child in violation of applicable laws, appropriate action will be taken.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Updates to This Privacy Policy</h2>
 <p>Renewable Observer may update this Privacy Policy periodically. Updates may occur due to: Legal Requirements, Industry Developments, Technology Changes, Business Operations, or Service Improvements. Updated versions will be published on this page. Visitors are encouraged to review this policy regularly.</p>
 </section>

 <section className="bg-background border-y border-border p-8 border mt-12 text-center sm:text-left">
 <h2 className="text-2xl font-bold text-foreground mb-6">Contact Us</h2>
 <p className="mb-6">Questions regarding this Privacy Policy may be directed to Renewable Observer.</p>
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
 <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link>
 <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>
 <Link href="/authors" className="text-primary hover:underline">Authors & Contributors</Link>
 </section>

 <p className="text-center mt-12 text-lg font-bold text-foreground">Thank you for trusting Renewable Observer as your source for renewable energy news, market intelligence, sustainability insights, and clean energy information.</p>
 </div>
 </FadeIn>
 </div>
 </div>
 )
}
