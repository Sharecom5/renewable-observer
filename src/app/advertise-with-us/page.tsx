import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Globe, Target, BarChart3, Users, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advertise With Renewable Observer | Renewable Energy Marketing & Media Solutions',
  description: 'Promote your renewable energy business with Renewable Observer. Explore advertising, sponsored content, lead generation, event promotion, newsletter sponsorships, and media partnership opportunities.',
};

export default function AdvertisePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <header className="mb-16 text-center max-w-4xl mx-auto border-b border-border pb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6 tracking-tight">Advertise With Renewable Observer</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Renewable Observer is a leading renewable energy media platform connecting businesses, investors, policymakers, technology providers, manufacturers, EPC companies, consultants, and sustainability professionals across the global clean energy ecosystem.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3 prose prose-slate dark:prose-invert prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80">
          <p>
            As the renewable energy industry continues to expand, organizations require trusted channels to reach decision-makers, generate qualified leads, build brand awareness, and establish industry authority.
          </p>
          <p>
            Renewable Observer offers a range of advertising, sponsorship, content marketing, and partnership opportunities designed specifically for companies operating within the renewable energy, sustainability, climate technology, and clean energy sectors.
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Why Advertise With Renewable Observer?</h2>
          <p>
            Renewable Observer serves a highly targeted audience interested in renewable energy technologies, industry developments, sustainability initiatives, investment opportunities, and energy transition strategies.
          </p>
          <p>Our readers include:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 not-prose mb-8">
            <ul className="list-disc list-inside space-y-1 text-muted-foreground font-medium">
              <li>Renewable Energy Developers</li>
              <li>Solar EPC Companies</li>
              <li>Wind Energy Companies</li>
              <li>Battery Manufacturers</li>
              <li>Green Hydrogen Developers</li>
              <li>Utility Companies</li>
              <li>Investors and Financial Institutions</li>
            </ul>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground font-medium">
              <li>Government Agencies</li>
              <li>Policy Makers</li>
              <li>Sustainability Professionals</li>
              <li>Engineering Consultants</li>
              <li>Technology Providers</li>
              <li>Researchers and Academics</li>
            </ul>
          </div>
          <p>
            Advertising with Renewable Observer enables your organization to reach professionals actively seeking industry information and business opportunities.
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Display Advertising Solutions</h2>
          <p>Display advertising remains one of the most effective methods for increasing brand visibility within the renewable energy industry.</p>
          <p>Available placements may include:</p>
          
          <h3 className="font-heading text-xl mt-6">Homepage Banner Advertising</h3>
          <p>Prominently position your brand in front of visitors exploring renewable energy news, market updates, and industry insights.</p>
          
          <h3 className="font-heading text-xl mt-6">Category Sponsorships</h3>
          <p>Target specific audiences through dedicated sponsorship opportunities across categories such as:</p>
          <ul className="grid grid-cols-2 gap-2 font-medium">
            <li>Solar Energy</li>
            <li>Wind Energy</li>
            <li>Energy Storage</li>
            <li>Green Hydrogen</li>
            <li>Sustainability</li>
            <li>Electric Mobility</li>
            <li>Renewable Manufacturing</li>
            <li>Energy Finance</li>
          </ul>

          <h3 className="font-heading text-xl mt-6">Article-Level Advertising</h3>
          <p>Place your message alongside relevant industry content viewed by highly engaged readers.</p>

          <h3 className="font-heading text-xl mt-6">Newsletter Sponsorship</h3>
          <p>Promote your products, services, events, or campaigns directly to subscribers through sponsored newsletter placements.</p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Sponsored Content Programs</h2>
          <p>Renewable Observer offers professionally managed sponsored content solutions designed to educate, engage, and inform industry audiences.</p>
          <p>Sponsored content opportunities include:</p>
          <ul className="grid grid-cols-2 gap-2 font-medium">
            <li>Industry Insights</li>
            <li>Product Announcements</li>
            <li>Technology Features</li>
            <li>Case Studies</li>
            <li>Success Stories</li>
            <li>Market Perspectives</li>
            <li>Thought Leadership Articles</li>
          </ul>
          <p className="text-sm italic text-muted-foreground mt-4">
            All sponsored content is clearly labeled to maintain transparency and trust with our audience.
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Lead Generation Solutions</h2>
          <p>Renewable Observer helps renewable energy companies connect with qualified prospects through targeted lead generation campaigns.</p>
          <p>Lead generation programs may include:</p>
          <ul className="grid grid-cols-2 gap-2 font-medium">
            <li>Sponsored Reports</li>
            <li>Whitepaper Downloads</li>
            <li>Webinar Registrations</li>
            <li>Product Demonstrations</li>
            <li>Consultation Requests</li>
            <li>Event Registrations</li>
          </ul>
          <p>
            Our goal is to help advertisers generate measurable business outcomes while delivering valuable information to our audience.
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Event Promotion Services</h2>
          <p>Renewable Observer actively supports industry events, conferences, exhibitions, awards programs, and webinars.</p>
          <p>Event promotion opportunities include:</p>
          <ul className="grid grid-cols-2 gap-2 font-medium">
            <li>Event Listings</li>
            <li>Featured Event Placement</li>
            <li>Newsletter Promotion</li>
            <li>Sponsored Articles</li>
            <li>Social Media Promotion</li>
            <li>Media Partnerships</li>
          </ul>
          <p>
            Whether you are organizing a renewable energy conference, sustainability summit, hydrogen forum, battery storage event, or industry exhibition, our platform can help increase visibility and attendance.
          </p>
          <p>
            Visit our <Link href="/events" className="text-primary font-medium hover:underline">Events page</Link> to learn more about upcoming industry opportunities.
          </p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Media Partnerships</h2>
          <p>Renewable Observer collaborates with organizations committed to advancing renewable energy, sustainability, and clean technology innovation.</p>
          <p>Partnership opportunities may include:</p>
          <ul className="grid grid-cols-2 gap-2 font-medium">
            <li>Conference Partnerships</li>
            <li>Research Partnerships</li>
            <li>Industry Association Partnerships</li>
            <li>Educational Programs</li>
            <li>Webinar Collaborations</li>
            <li>Awards Programs</li>
            <li>Content Collaborations</li>
          </ul>
          <p>We welcome discussions with organizations seeking long-term strategic relationships.</p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Industries We Serve</h2>
          <p>Our advertising and partnership programs support organizations operating in:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-6">
            <Card className="bg-muted/30 shadow-none border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Renewable Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-muted-foreground font-medium">
                  <li>• Solar Energy</li>
                  <li>• Wind Energy</li>
                  <li>• Hydropower</li>
                  <li>• Bioenergy</li>
                  <li>• Geothermal Energy</li>
                  <li>• Ocean Energy</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 shadow-none border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Clean Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-muted-foreground font-medium">
                  <li>• Green Hydrogen</li>
                  <li>• Energy Storage</li>
                  <li>• Smart Grids</li>
                  <li>• Climate Technology</li>
                  <li>• Electric Mobility</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 shadow-none border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-muted-foreground font-medium">
                  <li>• ESG Services</li>
                  <li>• Carbon Management</li>
                  <li>• Environmental Consulting</li>
                  <li>• Sustainable Infrastructure</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 shadow-none border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-muted-foreground font-medium">
                  <li>• Solar Manufacturing</li>
                  <li>• Battery Manufacturing</li>
                  <li>• Renewable Equipment Manufacturing</li>
                  <li>• Industrial Technology Providers</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Custom Campaign Solutions</h2>
          <p>Every organization has unique objectives.</p>
          <p>Renewable Observer offers customized marketing and communication programs tailored to specific goals, including:</p>
          <ul className="grid grid-cols-2 gap-2 font-medium">
            <li>Brand Awareness</li>
            <li>Product Launches</li>
            <li>Market Education</li>
            <li>Industry Positioning</li>
            <li>Lead Generation</li>
            <li>Thought Leadership</li>
            <li>Event Promotion</li>
          </ul>
          <p>Our team works closely with partners to develop campaigns aligned with their business objectives.</p>

          <h2 className="font-heading text-3xl mt-12 border-b border-border pb-2">Editorial Independence</h2>
          <p>Renewable Observer maintains strict editorial independence. Advertising relationships do not influence editorial decisions, news coverage, or reporting practices.</p>
          <p>All sponsored materials are clearly identified to ensure transparency and maintain reader trust.</p>
          <p>
            To learn more about our content standards, please review our <Link href="/editorial-policy" className="text-primary font-medium hover:underline">Editorial Policy</Link>.
          </p>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-8">
          <div className="sticky top-24 space-y-8">
            <Card className="shadow-xl border-primary/10 bg-card overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
                <CardTitle className="font-heading text-2xl text-foreground">Request a Media Kit</CardTitle>
                <CardDescription>Get comprehensive audience metrics, ad specifications, and pricing packages.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Work Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
                  </div>
                  <Button type="button" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-lg text-lg mt-2">Download Media Kit</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-slate-950 text-white border-slate-800 shadow-xl">
              <CardHeader className="border-b border-slate-800 pb-5">
                <CardTitle className="font-heading flex items-center gap-3 text-xl">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Contact Sales Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6 text-sm">
                <p className="text-slate-300">
                  Organizations interested in advertising opportunities, sponsorship packages, event partnerships, or custom marketing programs are encouraged to contact our team.
                </p>
                <div className="flex flex-col gap-1.5">
                  <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">Advertising Inquiries</span>
                  <a href="mailto:advertising@renewableobserver.com" className="text-primary hover:text-white transition-colors text-base font-medium">advertising@renewableobserver.com</a>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">Partnership Inquiries</span>
                  <a href="mailto:partnerships@renewableobserver.com" className="text-primary hover:text-white transition-colors text-base font-medium">partnerships@renewableobserver.com</a>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">Event Partnerships</span>
                  <a href="mailto:events@renewableobserver.com" className="text-primary hover:text-white transition-colors text-base font-medium">events@renewableobserver.com</a>
                </div>
                <div className="pt-4 border-t border-slate-800 mt-4">
                  <p className="text-slate-400 text-xs">
                    For additional information about Renewable Observer, please visit our <Link href="/about-us" className="text-primary hover:underline">About Us page</Link>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
