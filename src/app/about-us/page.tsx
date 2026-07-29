import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Wind, Battery, Droplet, Waves, Leaf, Zap, Car, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Renewable Observer | Renewable Energy News, Insights & Industry Intelligence',
  description: 'Learn about Renewable Observer, a leading renewable energy media company covering solar, wind, hydrogen, energy storage, sustainability, clean technology, market intelligence, reports, and industry events.',
};

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <header className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6 tracking-tight">About Renewable Observer</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Welcome to Renewable Observer, a leading renewable energy media company dedicated to delivering trusted renewable energy news, clean energy insights, market intelligence, industry reports, and sustainability-focused content for professionals worldwide.
        </p>
      </header>

      <div className="prose prose-slate dark:prose-invert prose-lg md:prose-xl max-w-none">
        <p>
          Renewable Observer serves as a comprehensive information platform for the global renewable energy sector, covering solar energy, wind power, energy storage, green hydrogen, hydropower, bioenergy, geothermal energy, electric mobility, climate technology, ESG initiatives, and sustainable infrastructure developments.
        </p>
        <p>
          As the global transition toward clean energy accelerates, businesses, investors, policymakers, project developers, manufacturers, EPC companies, consultants, and technology providers require reliable information to make informed decisions. Renewable Observer bridges this gap by providing timely reporting, expert analysis, exclusive interviews, industry research, and market intelligence that helps stakeholders understand the rapidly evolving renewable energy landscape.
        </p>

        <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary rounded-r-xl">
          <h2 className="text-3xl font-bold font-heading mt-0 mb-4 text-primary">Our Mission</h2>
          <p className="mb-4">
            Our mission is to become one of the most trusted renewable energy news platforms and clean energy media brands globally by providing accurate, independent, and actionable information.
          </p>
          <p className="mb-4">
            We believe that access to quality information accelerates innovation, supports investment decisions, strengthens policy development, and encourages sustainable growth across the renewable energy industry.
          </p>
          <p className="mb-0">
            Through our news coverage, research publications, events, and digital media initiatives, we aim to connect industry stakeholders and contribute to the global energy transition.
          </p>
        </div>

        <h2 className="text-4xl font-bold font-heading mb-8">What We Cover</h2>
        <p>Renewable Observer delivers comprehensive coverage across the entire renewable energy value chain.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose my-12">
          <Card>
            <CardHeader className="pb-3">
              <Sun className="w-8 h-8 text-amber-500 mb-2" />
              <CardTitle className="text-xl">Solar Energy News</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Our solar energy news section covers utility-scale solar projects, rooftop solar installations, photovoltaic technologies, solar module manufacturing, solar inverters, energy generation trends, government incentives, and emerging innovations shaping the future of solar power.
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <Wind className="w-8 h-8 text-sky-500 mb-2" />
              <CardTitle className="text-xl">Wind Energy News</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We provide extensive coverage of onshore and offshore wind energy developments, turbine technologies, project investments, transmission infrastructure, policy changes, and market trends driving growth in the wind sector.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Battery className="w-8 h-8 text-emerald-500 mb-2" />
              <CardTitle className="text-xl">Energy Storage News</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Energy storage plays a critical role in modern power systems. Renewable Observer covers battery energy storage systems (BESS), grid-scale storage projects, lithium-ion batteries, emerging storage technologies, and energy management solutions.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Droplet className="w-8 h-8 text-cyan-500 mb-2" />
              <CardTitle className="text-xl">Green Hydrogen News</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Green hydrogen is becoming a key component of future energy systems. Our green hydrogen coverage includes electrolyzer technology, hydrogen production projects, policy initiatives, infrastructure investments, industrial applications, and international market developments.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Waves className="w-8 h-8 text-blue-500 mb-2" />
              <CardTitle className="text-xl">Hydropower & Pumped Storage</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Hydropower remains one of the largest renewable energy sources globally. We cover hydroelectric projects, pumped storage facilities, modernization initiatives, and emerging opportunities in water-based renewable energy generation.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Leaf className="w-8 h-8 text-green-500 mb-2" />
              <CardTitle className="text-xl">Bioenergy & Waste-to-Energy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Our bioenergy coverage includes biomass power generation, biogas projects, biofuels, waste-to-energy technologies, circular economy initiatives, and sustainable resource utilization strategies.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Zap className="w-8 h-8 text-orange-500 mb-2" />
              <CardTitle className="text-xl">Geothermal & Ocean Energy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Renewable Observer also tracks emerging renewable technologies, including geothermal energy systems, tidal power, wave energy projects, and marine renewable energy innovations.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Car className="w-8 h-8 text-purple-500 mb-2" />
              <CardTitle className="text-xl">Electric Mobility & Charging</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              The electrification of transportation is transforming global mobility. We report on electric vehicles, charging infrastructure, battery advancements, fleet electrification programs, and mobility technologies supporting sustainable transportation.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Globe className="w-8 h-8 text-teal-500 mb-2" />
              <CardTitle className="text-xl">Sustainability and ESG</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Environmental, Social, and Governance (ESG) considerations are increasingly important for organizations worldwide. Our sustainability coverage includes net-zero initiatives, corporate sustainability strategies, carbon reduction programs, ESG reporting, and climate technology innovations.
            </CardContent>
          </Card>
        </div>

        <h2>Industry Intelligence and Research</h2>
        <p>Beyond daily renewable energy news, Renewable Observer provides valuable market intelligence and industry insights.</p>
        <p>Through our Reports section, readers can access market analysis, industry forecasts, technology assessments, investment trends, and sector-specific research designed to support strategic decision-making.</p>
        <p>Explore our latest research through the <Link href="/reports" className="text-primary font-medium hover:underline">Reports page</Link>.</p>

        <h2>Events and Industry Engagement</h2>
        <p>Renewable Observer actively supports knowledge sharing and industry collaboration through conferences, webinars, virtual events, leadership summits, and renewable energy awards programs.</p>
        <p>Our <Link href="/events" className="text-primary font-medium hover:underline">Events section</Link> helps industry professionals stay informed about upcoming opportunities for networking, learning, and business development.</p>

        <h2>Editorial Integrity</h2>
        <p>Trust is the foundation of quality journalism.</p>
        <p>Our editorial team is committed to producing accurate, balanced, and transparent content that adheres to professional journalistic standards. We strive to verify information through credible sources and present objective reporting that supports informed decision-making.</p>
        <p>Learn more about our publishing standards through our <Link href="/editorial-policy" className="text-primary font-medium hover:underline">Editorial Policy page</Link>.</p>

        <h2>Advertising and Partnerships</h2>
        <p>Renewable Observer works with renewable energy companies, technology providers, EPC contractors, investors, consultants, manufacturers, and industry organizations to create meaningful advertising and partnership opportunities.</p>
        <p>For sponsorships, media partnerships, lead generation campaigns, branded content, and advertising solutions, please visit our <Link href="/advertise-with-us" className="text-primary font-medium hover:underline">Advertise With Us page</Link>.</p>

        <h2>Connect With Renewable Observer</h2>
        <p>We welcome contributions, press releases, partnership proposals, story ideas, and industry insights from organizations and professionals across the renewable energy ecosystem.</p>
        <p>To reach our editorial team, advertising department, or business development team, please visit our <Link href="/contact-us" className="text-primary font-medium hover:underline">Contact Us page</Link>.</p>
        <p>You can also learn more about how we handle personal information through our <Link href="/privacy-policy" className="text-primary font-medium hover:underline">Privacy Policy</Link>, review our website <Link href="/terms-and-conditions" className="text-primary font-medium hover:underline">Terms & Conditions</Link>, and read our <Link href="/disclaimer" className="text-primary font-medium hover:underline">Disclaimer</Link> for additional information.</p>

        <div className="my-16 p-8 md:p-12 bg-slate-900 text-white rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-0 mb-6 text-white border-b-0">Our Vision</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Our vision is to become a globally recognized renewable energy media company that informs, connects, and empowers stakeholders across the clean energy industry.
          </p>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            By delivering trusted renewable energy news, insightful analysis, comprehensive market intelligence, and valuable industry engagement opportunities, Renewable Observer aims to support the transition toward a cleaner, more sustainable, and energy-secure future.
          </p>
          <p className="text-2xl font-semibold text-primary font-heading">
            Thank you for being part of the Renewable Observer community.
          </p>
        </div>
      </div>
    </div>
  );
}
