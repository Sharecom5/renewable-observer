import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Briefcase, FileText, Globe, Headset } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Renewable Observer | Editorial, Advertising & Partnership Inquiries',
  description: 'Contact Renewable Observer for editorial inquiries, advertising opportunities, press releases, partnerships, events, media collaborations, and general support.',
};

export default function ContactUsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <header className="mb-16 border-b border-border pb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6 tracking-tight">Contact Renewable Observer</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Thank you for your interest in Renewable Observer. We welcome communication from readers, industry professionals, renewable energy companies, government agencies, investors, researchers, event organizers, technology providers, and sustainability advocates worldwide.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Column: Main Content */}
        <div className="lg:w-2/3 prose prose-slate dark:prose-invert prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80">
          <p>
            Whether you would like to submit a press release, discuss advertising opportunities, share industry insights, explore media partnerships, or provide feedback about our content, our team is here to assist you.
          </p>
          <p>
            Renewable Observer is committed to fostering meaningful conversations across the renewable energy ecosystem and supporting the exchange of knowledge that drives the global energy transition.
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">General Inquiries</h2>
          <p>
            For general questions about Renewable Observer, website feedback, content suggestions, or business inquiries, please contact our team through the contact form available on this page. We strive to respond to all legitimate inquiries as quickly as possible.
          </p>
          <p>
            <strong>General Inquiries:</strong> <a href="mailto:contact@renewableobserver.com">contact@renewableobserver.com</a><br/>
            <strong>Business Development:</strong> <a href="mailto:business@renewableobserver.com">business@renewableobserver.com</a>
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Editorial Department</h2>
          <p>
            Renewable Observer welcomes story ideas, expert opinions, research findings, industry insights, and news tips from professionals across the renewable energy sector. Our editorial team covers a broad range of industries including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 not-prose mb-8">
            <ul className="list-disc list-inside space-y-1 text-muted-foreground font-medium">
              <li>Solar Energy</li>
              <li>Wind Energy</li>
              <li>Green Hydrogen</li>
              <li>Energy Storage</li>
              <li>Hydropower</li>
              <li>Bioenergy</li>
              <li>Geothermal Energy</li>
              <li>Electric Mobility</li>
            </ul>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground font-medium">
              <li>Charging Infrastructure</li>
              <li>Sustainability</li>
              <li>ESG</li>
              <li>Climate Technology</li>
              <li>Energy Finance</li>
              <li>Renewable Manufacturing</li>
              <li>Renewable Energy Policy</li>
            </ul>
          </div>
          <p>
            If you have information that may be relevant to our audience, please contact our editorial team.<br/>
            <strong>Editorial Contact:</strong> <a href="mailto:editor@renewableobserver.com">editor@renewableobserver.com</a>
          </p>
          <p>
            For information regarding our publishing standards and content guidelines, please visit our <Link href="/editorial-policy">Editorial Policy page</Link>.
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Press Releases and News Announcements</h2>
          <p>
            Renewable Observer accepts press releases from companies, organizations, industry associations, technology providers, research institutions, and government agencies operating within the renewable energy sector. We encourage organizations to provide accurate and complete information to facilitate editorial review.
          </p>
          <p>Examples of accepted announcements include:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 font-medium">
            <li>Project Launches</li>
            <li>Investment Announcements</li>
            <li>Funding Rounds</li>
            <li>Product Launches</li>
            <li>Technology Innovations</li>
            <li>Strategic Partnerships</li>
            <li>Industry Reports</li>
            <li>Event Announcements</li>
            <li>Sustainability Initiatives</li>
            <li>Policy Updates</li>
          </ul>
          <p>
            <strong>Press Release Submissions:</strong> <a href="mailto:press@renewableobserver.com">press@renewableobserver.com</a>
          </p>
          <p className="text-sm italic text-muted-foreground mt-4">
            Please note that submission of a press release does not guarantee publication.
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Advertising Opportunities</h2>
          <p>
            Renewable Observer offers a variety of advertising solutions designed to help renewable energy companies reach highly targeted industry audiences.
          </p>
          <p>
            Advertising opportunities may include Display Advertising, Sponsored Content, Industry Reports, Newsletter Sponsorships, Event Sponsorships, Brand Awareness Campaigns, Product Promotion, and Lead Generation Campaigns.
          </p>
          <p>
            We work with manufacturers, EPC companies, technology providers, project developers, consultants, investors, and service providers across the renewable energy industry.
          </p>
          <p>
            <strong>For advertising inquiries, please contact:</strong> <a href="mailto:advertising@renewableobserver.com">advertising@renewableobserver.com</a>
          </p>
          <p>
            For additional information, visit our <Link href="/advertise-with-us">Advertise With Us page</Link>.
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Partnerships and Collaborations</h2>
          <p>
            Renewable Observer actively collaborates with organizations that support innovation, sustainability, renewable energy deployment, and industry education. Potential partnership opportunities include Media Partnerships, Event Partnerships, Research Collaborations, Industry Association Partnerships, Educational Initiatives, Webinar Programs, and Knowledge Sharing Programs.
          </p>
          <p>
            <strong>Partnership Inquiries:</strong> <a href="mailto:partnerships@renewableobserver.com">partnerships@renewableobserver.com</a>
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Event and Conference Inquiries</h2>
          <p>
            Renewable Observer supports conferences, exhibitions, trade shows, webinars, and networking events throughout the renewable energy sector. Event organizers interested in media partnerships, event promotion, speaker opportunities, sponsorship opportunities, or industry collaboration are encouraged to contact our events team.
          </p>
          <p>
            <strong>Events Contact:</strong> <a href="mailto:events@renewableobserver.com">events@renewableobserver.com</a>
          </p>
          <p>
            You can also explore upcoming opportunities through our <Link href="/events">Events section</Link>.
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Report and Research Inquiries</h2>
          <p>
            Organizations seeking industry insights, market intelligence, whitepapers, or custom research opportunities can connect with our research and intelligence team. Our focus areas include Renewable Energy Markets, Clean Energy Investments, Technology Trends, ESG and Sustainability, Green Hydrogen, Energy Storage, Electric Mobility, and Climate Technology.
          </p>
          <p>
            <strong>Research Contact:</strong> <a href="mailto:research@renewableobserver.com">research@renewableobserver.com</a>
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Technical Support</h2>
          <p>
            If you experience technical issues while using Renewable Observer, including website functionality concerns, accessibility issues, broken links, or account-related questions, please contact our support team.
          </p>
          <p>
            <strong>Support Contact:</strong> <a href="mailto:support@renewableobserver.com">support@renewableobserver.com</a>
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Privacy and Data Protection</h2>
          <p>
            Renewable Observer respects user privacy and is committed to protecting personal information. For questions related to privacy practices, data protection, cookies, or information requests, please review our <Link href="/privacy-policy">Privacy Policy</Link> or contact:
          </p>
          <p>
            <strong>Privacy Contact:</strong> <a href="mailto:privacy@renewableobserver.com">privacy@renewableobserver.com</a>
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 mt-16 mb-8 text-center shadow-sm">
            <h2 className="font-heading text-3xl font-bold mt-0 mb-6 text-foreground">Connect With Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Renewable Observer is dedicated to building a strong and informed renewable energy community. We encourage industry professionals, businesses, researchers, policymakers, students, and readers to engage with us, share ideas, and contribute to meaningful discussions about the future of renewable energy.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-8">
              For additional information about our organization, please visit our <Link href="/about-us">About Us page</Link>. To understand our editorial standards, please review our <Link href="/editorial-policy">Editorial Policy</Link>. For website terms and usage information, please review our <Link href="/terms-and-conditions">Terms & Conditions</Link> and <Link href="/disclaimer">Disclaimer</Link> pages.
            </p>
            <p className="text-xl font-bold font-heading text-primary">
              We appreciate your interest in Renewable Observer and look forward to hearing from you.
            </p>
          </div>
        </div>

        {/* Right Column: Form & Quick Contacts */}
        <div className="lg:w-1/3 space-y-8">
          <div className="sticky top-24 space-y-8">
            <Card className="shadow-xl border-primary/10 bg-card overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
                <CardTitle className="font-heading text-2xl text-foreground">Send a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll route it to the appropriate department.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
                    <input id="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">Business Email</label>
                    <input id="email" type="email" placeholder="john@company.com" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-semibold text-foreground">Department</label>
                    <div className="relative">
                      <select id="department" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                        <option>General Inquiry</option>
                        <option>Editorial & Story Tips</option>
                        <option>Advertising & Sponsorship</option>
                        <option>Press Release Submission</option>
                        <option>Partnerships</option>
                        <option>Technical Support</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                    <textarea id="message" rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" required></textarea>
                  </div>
                  <Button type="button" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-lg text-lg">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-slate-950 text-white border-slate-800 shadow-xl">
              <CardHeader className="border-b border-slate-800 pb-5">
                <CardTitle className="font-heading flex items-center gap-3 text-xl">
                  <Globe className="w-5 h-5 text-primary" />
                  Quick Directory
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6 text-sm">
                <div className="flex flex-col gap-1.5">
                  <span className="text-slate-400 font-medium uppercase tracking-wider text-xs flex items-center gap-2"><Mail className="w-3.5 h-3.5"/> General Info</span>
                  <a href="mailto:contact@renewableobserver.com" className="text-primary hover:text-white transition-colors text-base">contact@renewableobserver.com</a>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-slate-400 font-medium uppercase tracking-wider text-xs flex items-center gap-2"><FileText className="w-3.5 h-3.5"/> Editorial Desk</span>
                  <a href="mailto:editor@renewableobserver.com" className="text-primary hover:text-white transition-colors text-base">editor@renewableobserver.com</a>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-slate-400 font-medium uppercase tracking-wider text-xs flex items-center gap-2"><Briefcase className="w-3.5 h-3.5"/> Advertising Sales</span>
                  <a href="mailto:advertising@renewableobserver.com" className="text-primary hover:text-white transition-colors text-base">advertising@renewableobserver.com</a>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-slate-400 font-medium uppercase tracking-wider text-xs flex items-center gap-2"><Headset className="w-3.5 h-3.5"/> Tech Support</span>
                  <a href="mailto:support@renewableobserver.com" className="text-primary hover:text-white transition-colors text-base">support@renewableobserver.com</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
