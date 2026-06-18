import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Cookie Policy | Renewable Observer",
 description: "Learn how Renewable Observer uses cookies, analytics, and advertising technologies to improve your experience and deliver relevant content.",
}

export default function CookiePolicyPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-12 text-center">
 <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-primary">Cookie Policy</h1>
 <p className="text-lg text-muted-foreground font-medium">Last Updated: June 2026</p>
 </div>
 </FadeIn>

 <div className="max-w-3xl mx-auto">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
 <section>
 <p className="text-base leading-relaxed mb-6 font-medium text-foreground">This Cookie Policy explains how Renewable Observer uses cookies and similar tracking technologies when you visit our website.</p>
 <p>It explains what these technologies are, why we use them, and your rights to control our use of them. This policy should be read in conjunction with our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Are Cookies?</h2>
 <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information and personalized experiences.</p>
 <p>Cookies set by the website owner (in this case, Renewable Observer) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Do We Use Cookies?</h2>
 <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate—we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our site and to deliver relevant advertising.</p>
 
 <h3 className="text-base font-bold text-foreground mt-6 mb-2">Types of Cookies We Use</h3>
 <ul className="list-disc pl-5 space-y-4">
 <li>
 <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
 </li>
 <li>
 <strong>Performance and Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used, how effective our marketing campaigns are, or to help us customize our website for you. We utilize Google Analytics to gather data on site traffic and interactions.
 </li>
 <li>
 <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests. We use platforms like Google AdSense to serve programmatic advertising.
 </li>
 <li>
 <strong>Functional Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences (for example, your choice of language or region).
 </li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Google AdSense and Analytics</h2>
 <p>Renewable Observer uses Google Analytics to analyze website usage and Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits to our website or other websites.</p>
 <p>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google's <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ads Settings</a>.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How Can I Control Cookies?</h2>
 <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser.</p>
 <p>Because the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information. Note that if you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.</p>
 <p>For more information on how to manage cookies, you can visit comprehensive resources like <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AllAboutCookies.org</a>.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Updates to This Cookie Policy</h2>
 <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
 <p>If you have any questions about our use of cookies, please email us at <a href="mailto:hello@renewableobserver.com" className="text-secondary font-bold hover:underline">hello@renewableobserver.com</a>.</p>
 </section>
 </div>
 </FadeIn>
 </div>
 </div>
 )
}
