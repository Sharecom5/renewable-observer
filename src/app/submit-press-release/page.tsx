import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Submit a Press Release | Renewable Observer",
 description: "Learn how to submit your renewable energy press releases, product announcements, and corporate news to Renewable Observer.",
}

export default function SubmitPressReleasePage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-12 text-center">
 <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-primary">Submit a Press Release</h1>
 <p className="text-lg text-muted-foreground font-medium">Amplify your announcements to the global clean energy ecosystem</p>
 </div>
 </FadeIn>

 <div className="max-w-3xl mx-auto">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
 <section>
 <p className="text-base leading-relaxed mb-6 font-medium text-foreground">Renewable Observer is a leading destination for news, market intelligence, and industry updates across the renewable energy sector. We welcome press releases from companies, agencies, and organizations driving the global energy transition.</p>
 </section>

 <section className="bg-background border-y border-border p-8 border">
 <h2 className="text-2xl font-bold text-foreground mb-4">Submission Guidelines</h2>
 <p>To ensure your press release is reviewed and considered for publication, please adhere to the following guidelines:</p>
 <ul className="list-disc pl-5">
 <li><strong>Relevance:</strong> The content must directly relate to renewable energy, climate technology, sustainability, or related financial markets.</li>
 <li><strong>Formatting:</strong> Submit the text in the body of the email or as an attached Word document. Do not send PDFs.</li>
 <li><strong>Media:</strong> Include at least one high-resolution image (minimum 1200px wide) or logo. Ensure you have the rights to distribute the media.</li>
 <li><strong>Embargoes:</strong> If your news is under embargo, clearly state the date and time (including time zone) at the very top of your email.</li>
 <li><strong>Contact Info:</strong> Include the name, email, and phone number of the media contact at the bottom of the release.</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Accepted Industries</h2>
 <p>We actively review press releases from the following sectors:</p>
 <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 mb-4 text-sm font-semibold text-foreground">
 <ul className="list-disc pl-5 space-y-1">
 <li>Solar Energy</li>
 <li>Wind Energy</li>
 <li>Energy Storage</li>
 <li>Green Hydrogen</li>
 </ul>
 <ul className="list-disc pl-5 space-y-1">
 <li>Electric Mobility</li>
 <li>Smart Grids</li>
 <li>Climate Tech</li>
 <li>Hydropower</li>
 </ul>
 <ul className="list-disc pl-5 space-y-1">
 <li>Bioenergy</li>
 <li>ESG Initiatives</li>
 <li>Green Finance</li>
 <li>M&A Activity</li>
 </ul>
 </div>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Review Process</h2>
 <p>Due to the high volume of submissions, our editorial team reviews press releases on a daily basis but cannot guarantee publication of every submission. News is selected based on:</p>
 <ul className="list-disc pl-5">
 <li>Industry impact and significance</li>
 <li>Relevance to our core readership</li>
 <li>Clarity and factual accuracy</li>
 </ul>
 <p>We reserve the right to edit press releases for length, clarity, and adherence to our editorial style guide before publication.</p>
 </section>

 <section className="bg-background border-t-4 border-t-primary border-x border-b border-border border border-primary/20 p-8 text-center md:text-left mt-12">
 <h2 className="text-2xl font-bold text-foreground mb-4">Where to Send</h2>
 <p className="text-muted-foreground mb-6">Please email your press releases and media alerts directly to our news desk:</p>
 <div>
 <strong className="block text-sm uppercase tracking-wider text-muted-foreground mb-1">Press Desk</strong>
 <a href="mailto:press@renewableobserver.com" className="text-base font-bold text-primary hover:underline">press@renewableobserver.com</a>
 </div>
 <p className="mt-6 text-sm">For guaranteed placement, featured corporate profiles, or extensive media campaigns, please refer to our <Link href="/advertise-with-us" className="text-secondary hover:underline font-bold">Advertising Options</Link>.</p>
 </section>
 </div>
 </FadeIn>
 </div>
 </div>
 )
}
