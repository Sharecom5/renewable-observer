import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

export const metadata = {
 title: "Ethics Policy | Renewable Observer",
 description: "Read Renewable Observer's Ethics Policy regarding editorial independence, conflicts of interest, transparency standards, and source handling.",
}

export default function EthicsPolicyPage() {
 return (
 <div className="container mx-auto px-4 py-16 min-h-screen">
 <FadeIn>
 <div className="max-w-4xl mx-auto mb-12 text-center">
 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-primary">Ethics Policy</h1>
 <p className="text-lg text-muted-foreground font-medium">Our Standards for Independent, Trustworthy Journalism</p>
 </div>
 </FadeIn>

 <div className="max-w-3xl mx-auto">
 <FadeIn delay={0.1}>
 <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
 <section>
 <p className="text-xl leading-relaxed mb-6 font-medium text-foreground">Renewable Observer is dedicated to providing independent, unbiased, and authoritative reporting on the global clean energy transition.</p>
 <p>To maintain the trust of our readers—which include industry professionals, policymakers, and investors—our editorial team operates under a strict code of ethics. This policy outlines our standards for independence, conflict of interest management, transparency, and source protection.</p>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Editorial Independence</h2>
 <p>Editorial decisions at Renewable Observer are made entirely independent of commercial, political, or corporate influence. The separation between our editorial team and our advertising/business operations is absolute.</p>
 <ul className="list-disc pl-5">
 <li><strong>No Pay-for-Play:</strong> We do not accept payment in exchange for editorial coverage. Any content that is sponsored or paid for by an advertiser is explicitly and clearly marked as "Sponsored Content" or "Advertisement."</li>
 <li><strong>No Outside Approvals:</strong> Subjects of our reporting—including companies, government bodies, and PR representatives—are not permitted to review or approve articles prior to publication. We may verify quotes or technical data, but the final editorial direction rests solely with our editors.</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conflict of Interest</h2>
 <p>Our authors, editors, and analysts must avoid conflicts of interest, both real and perceived, that could compromise the integrity of our reporting.</p>
 <ul className="list-disc pl-5">
 <li><strong>Financial Interests:</strong> Editorial staff members are prohibited from holding direct financial interests (e.g., individual stocks, direct investments) in the specific renewable energy companies they cover. Broadly diversified mutual funds or index funds are permitted.</li>
 <li><strong>Gifts and Hospitality:</strong> Our journalists do not accept gifts, favors, travel, or hospitality from organizations they cover that could be construed as influencing their reporting. When covering industry events, Renewable Observer pays its own way, unless pressing logistical realities dictate otherwise (in which case, such arrangements are disclosed).</li>
 <li><strong>Outside Engagements:</strong> Staff members may not engage in freelance work, consulting, or advisory roles for companies operating within the clean energy sectors we cover.</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Transparency Standards</h2>
 <p>We believe in being transparent about our reporting methods and the nature of our content.</p>
 <ul className="list-disc pl-5">
 <li><strong>Clear Labeling:</strong> Opinion pieces, analysis, and editorial commentary are clearly labeled to distinguish them from standard news reporting.</li>
 <li><strong>Affiliate Links and Sponsorships:</strong> Any commercial relationships, including affiliate partnerships or sponsored research reports, are explicitly disclosed within the relevant content.</li>
 <li><strong>AI and Technology Use:</strong> While we may use technology and AI to assist in data aggregation, transcription, and workflow efficiency, all final editorial content is written, reviewed, and approved by human editors. AI is not used to autonomously generate reporting.</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Source Handling and Attribution</h2>
 <p>Respect for our sources and accurate attribution are cornerstones of our journalistic integrity.</p>
 <ul className="list-disc pl-5">
 <li><strong>On-the-Record First:</strong> Our default stance is to pursue on-the-record interviews. We believe readers have a right to know who is speaking.</li>
 <li><strong>Anonymous Sources:</strong> We only grant anonymity to sources when they risk severe professional or personal retaliation, and when the information they provide is vital to the public interest and cannot be obtained elsewhere. The identity of anonymous sources is always known to at least one senior editor.</li>
 <li><strong>Proper Attribution:</strong> We strictly prohibit plagiarism. Information, quotes, and data gathered from external publications, research bodies, or competitors are always clearly attributed and, where possible, linked to the original source.</li>
 </ul>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Accountability</h2>
 <p>If you believe our staff or contributors have violated these ethical guidelines, please contact our editorial leadership directly at <a href="mailto:editor@renewableobserver.com" className="text-secondary font-bold hover:underline">editor@renewableobserver.com</a>. We take all ethical concerns seriously and will investigate them thoroughly.</p>
 </section>
 </div>
 </FadeIn>
 </div>
 </div>
 )
}
