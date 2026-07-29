import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Policy | Renewable Observer Standards for Accuracy, Independence & Transparency',
  description: "Learn about Renewable Observer's editorial policy, fact-checking standards, content guidelines, corrections process, sponsored content disclosures, and commitment to independent journalism.",
  keywords: "editorial policy, renewable energy journalism, renewable energy news standards, renewable observer editorial policy, fact checking policy, independent journalism, clean energy media standards, renewable energy publishing guidelines",
};

export default function EditorialPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="mb-12 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">Editorial Policy</h1>
      </header>

      <div className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 prose-a:font-medium">
        <p>
          At Renewable Observer, editorial integrity is the foundation of everything we publish.
        </p>
        <p>
          As a renewable energy media company, we recognize the importance of providing accurate, transparent, and trustworthy information to industry professionals, investors, policymakers, researchers, businesses, and readers worldwide.
        </p>
        <p>
          This Editorial Policy outlines the principles, standards, and processes that guide our journalism, analysis, industry reporting, and content creation activities.
        </p>
        <p>
          Our goal is to maintain the highest standards of credibility while delivering valuable information about renewable energy, sustainability, climate technology, and the global energy transition.
        </p>

        <h2>Our Editorial Mission</h2>
        <p>
          Renewable Observer exists to provide reliable renewable energy news, market intelligence, industry insights, and educational content that helps readers make informed decisions.
        </p>
        <p>We cover developments across:</p>
        <ul>
          <li>Solar Energy</li>
          <li>Wind Energy</li>
          <li>Energy Storage</li>
          <li>Green Hydrogen</li>
          <li>Hydropower</li>
          <li>Bioenergy</li>
          <li>Geothermal Energy</li>
          <li>Ocean Energy</li>
          <li>Electric Mobility</li>
          <li>Sustainability</li>
          <li>ESG</li>
          <li>Climate Technology</li>
          <li>Renewable Manufacturing</li>
          <li>Energy Finance</li>
          <li>Energy Policy</li>
        </ul>
        <p>
          Our editorial mission is to inform, educate, and connect stakeholders across the renewable energy ecosystem through responsible journalism and industry-focused reporting.
        </p>

        <h2>Commitment to Accuracy</h2>
        <p>Accuracy is one of our highest priorities.</p>
        <p>
          Before publication, our editorial team makes reasonable efforts to verify information using reliable and credible sources.
        </p>
        <p>These sources may include:</p>
        <ul>
          <li>Government agencies</li>
          <li>Regulatory authorities</li>
          <li>Industry associations</li>
          <li>Public company disclosures</li>
          <li>Research institutions</li>
          <li>Official press releases</li>
          <li>Industry experts</li>
          <li>Academic publications</li>
        </ul>
        <p>
          While we strive for accuracy, information can evolve rapidly, particularly in fast-moving sectors such as renewable energy and clean technology.
        </p>
        <p>
          If new information becomes available after publication, we may update articles accordingly.
        </p>

        <h2>Fact-Checking Process</h2>
        <p>Renewable Observer follows a structured fact-checking process whenever possible.</p>
        <p>This process may include:</p>
        <ul>
          <li>Verification of factual claims</li>
          <li>Confirmation of statistics and market data</li>
          <li>Cross-referencing information from multiple sources</li>
          <li>Validation of company announcements</li>
          <li>Review of regulatory developments</li>
          <li>Source attribution where appropriate</li>
        </ul>
        <p>
          Despite our efforts, errors may occasionally occur. When inaccuracies are identified, we take corrective action promptly.
        </p>

        <h2>Editorial Independence</h2>
        <p>Renewable Observer maintains complete editorial independence.</p>
        <p>Editorial decisions are made without influence from:</p>
        <ul>
          <li>Advertisers</li>
          <li>Sponsors</li>
          <li>Industry partners</li>
          <li>Political organizations</li>
          <li>Government entities</li>
          <li>Investors</li>
          <li>Advocacy groups</li>
        </ul>
        <p>Commercial relationships do not determine editorial coverage.</p>
        <p>
          Our readers can trust that editorial decisions are guided by journalistic standards rather than commercial interests.
        </p>

        <h2>Transparency and Disclosure</h2>
        <p>Transparency is essential to maintaining trust.</p>
        <p>Where appropriate, Renewable Observer may disclose:</p>
        <ul>
          <li>Sponsorship relationships</li>
          <li>Financial interests</li>
          <li>Affiliate relationships</li>
          <li>Event partnerships</li>
          <li>Sponsored content arrangements</li>
        </ul>
        <p>Such disclosures help readers understand the context of published content.</p>

        <h2>Sponsored Content Policy</h2>
        <p>
          Renewable Observer may publish sponsored content, branded content, promotional features, or partner-supported materials.
        </p>
        <p>To maintain transparency:</p>
        <ul>
          <li>Sponsored content will be clearly labeled.</li>
          <li>Promotional content will be distinguished from editorial content.</li>
          <li>Sponsored materials will not be presented as independent journalism.</li>
        </ul>
        <p>Readers should always be able to identify whether content is editorial or promotional.</p>
        <p>
          For partnership opportunities, please visit our <Link href="/advertise-with-us">Advertise With Us</Link> page.
        </p>

        <h2>Press Releases and Corporate Announcements</h2>
        <p>
          Renewable Observer receives press releases and announcements from companies, organizations, government agencies, and industry stakeholders.
        </p>
        <p>
          Publication of a press release does not imply endorsement of the information contained within it.
        </p>
        <p>Press releases may be:</p>
        <ul>
          <li>Published as submitted</li>
          <li>Edited for clarity</li>
          <li>Summarized for news coverage</li>
          <li>Incorporated into broader reporting</li>
        </ul>
        <p>We encourage organizations to provide accurate and verifiable information.</p>

        <h2>Opinion and Commentary</h2>
        <p>Opinion pieces provide valuable perspectives on industry developments.</p>
        <p>However:</p>
        <ul>
          <li>Opinions belong to the respective authors.</li>
          <li>Opinions do not necessarily reflect the views of Renewable Observer.</li>
          <li>Commentary content should be supported by facts and evidence whenever possible.</li>
        </ul>
        <p>Opinion content will generally be identified as such.</p>

        <h2>Corrections Policy</h2>
        <p>We are committed to correcting factual errors.</p>
        <p>
          If readers identify inaccurate information, they are encouraged to contact our editorial team.
        </p>
        <p>Corrections may include:</p>
        <ul>
          <li>Updating information</li>
          <li>Clarifying statements</li>
          <li>Correcting factual inaccuracies</li>
          <li>Removing inaccurate content when necessary</li>
        </ul>
        <p>Significant corrections may be noted within the article itself.</p>
        <p>
          Contact our editorial team through the <Link href="/contact-us">Contact Us</Link> page to report concerns.
        </p>

        <h2>Source Protection</h2>
        <p>Renewable Observer respects confidential sources when appropriate and lawful.</p>
        <p>We may protect the identity of sources when:</p>
        <ul>
          <li>Disclosure could create unnecessary risk.</li>
          <li>Confidentiality is necessary to obtain important information.</li>
          <li>The source provides information in good faith.</li>
        </ul>
        <p>Source confidentiality is handled responsibly and in accordance with applicable laws.</p>

        <h2>Artificial Intelligence and Content Creation</h2>
        <p>
          Renewable Observer may use technology tools to assist with research, data analysis, content organization, and editorial workflows.
        </p>
        <p>However:</p>
        <ul>
          <li>Human editorial oversight remains essential.</li>
          <li>Published content is reviewed before publication.</li>
          <li>AI-generated information is subject to verification.</li>
          <li>Editorial responsibility remains with Renewable Observer.</li>
        </ul>
        <p>
          We prioritize accuracy, transparency, and accountability regardless of the tools used during content creation.
        </p>

        <h2>User-Generated Content</h2>
        <p>
          Comments, submissions, guest contributions, and community interactions may be accepted on certain sections of the website.
        </p>
        <p>Renewable Observer reserves the right to:</p>
        <ul>
          <li>Moderate content</li>
          <li>Remove inappropriate submissions</li>
          <li>Reject content that violates our standards</li>
          <li>Prevent spam and misinformation</li>
        </ul>
        <p>User-generated content must remain respectful, lawful, and relevant.</p>

        <h2>Ethical Standards</h2>
        <p>Our editorial team is committed to:</p>
        <ul>
          <li>Accuracy</li>
          <li>Fairness</li>
          <li>Transparency</li>
          <li>Accountability</li>
          <li>Independence</li>
          <li>Professionalism</li>
        </ul>
        <p>
          We seek to avoid conflicts of interest and maintain public trust through responsible journalism.
        </p>

        <h2>Editorial Updates</h2>
        <p>
          This Editorial Policy may be updated periodically to reflect changes in industry standards, regulations, technologies, or company practices.
        </p>
        <p>Readers are encouraged to review this page periodically for updates.</p>

        <h2>Contact the Editorial Team</h2>
        <p>Questions regarding this Editorial Policy may be directed to our editorial team.</p>
        <p>
          For general inquiries, please visit our <Link href="/contact-us">Contact Us</Link> page.
        </p>
        <p>
          To learn more about Renewable Observer, please visit our <Link href="/about-us">About Us</Link> page.
        </p>
        <p>
          For information regarding advertising and sponsored content, please visit our <Link href="/advertise-with-us">Advertise With Us</Link> page.
        </p>
        <p>
          For details regarding personal information and cookies, please review our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
        <p>
          For website usage terms, please review our <Link href="/terms-and-conditions">Terms & Conditions</Link> and <Link href="/disclaimer">Disclaimer</Link> pages.
        </p>

        <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary mt-12 text-center md:text-left">
          <p className="text-lg font-medium text-foreground mb-0">
            Renewable Observer remains committed to delivering trustworthy renewable energy journalism that supports informed decision-making across the global clean energy industry.
          </p>
        </div>
      </div>
    </div>
  );
}
