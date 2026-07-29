import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Renewable Observer Website Usage Terms',
  description: 'Read the Terms and Conditions of Renewable Observer governing website access, content usage, intellectual property rights, user responsibilities, and legal disclaimers.',
  keywords: 'terms and conditions, website terms of use, renewable observer terms, renewable energy media terms, website usage policy, content usage rights, intellectual property policy',
};

export default function TermsAndConditionsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://renewableobserver.com/terms-and-conditions/#webpage",
        "url": "https://renewableobserver.com/terms-and-conditions",
        "name": "Terms & Conditions | Renewable Observer Website Usage Terms"
      },
      {
        "@type": "TermsOfService",
        "name": "Renewable Observer Terms & Conditions",
        "url": "https://renewableobserver.com/terms-and-conditions"
      },
      {
        "@type": "Organization",
        "@id": "https://renewableobserver.com/#organization",
        "name": "Renewable Observer",
        "url": "https://renewableobserver.com/"
      }
    ]
  };

  return (
    <>
      <Script id="schema-terms" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 tracking-tight">Terms & Conditions</h1>
          <p className="text-muted-foreground font-medium">Last Updated: June 2026</p>
        </header>

        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 prose-a:font-medium">
          <p>Welcome to Renewable Observer.</p>
          <p>
            These Terms & Conditions govern your access to and use of Renewable Observer, including all content, services, publications, newsletters, reports, events, directories, and digital platforms operated by Renewable Observer.
          </p>
          <p>
            By accessing or using this website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the website.
          </p>

          <h2>About Renewable Observer</h2>
          <p>
            Renewable Observer is a renewable energy media company that provides news, market intelligence, research, reports, interviews, event information, industry analysis, and educational content related to renewable energy, sustainability, climate technology, clean energy investments, and the global energy transition.
          </p>
          <p>
            Our content is intended for informational and educational purposes only.
          </p>
          <p>
            For additional information about our organization, please visit our <Link href="/about-us">About Us</Link> page.
          </p>

          <h2>Acceptance of Terms</h2>
          <p>By accessing Renewable Observer, users confirm that they:</p>
          <ul>
            <li>Have read these Terms & Conditions.</li>
            <li>Agree to comply with these terms.</li>
            <li>Will use the website lawfully.</li>
            <li>Accept responsibility for their use of the website and its content.</li>
          </ul>
          <p>
            Continued use of the website constitutes acceptance of any updates or modifications to these Terms.
          </p>

          <h2>Website Access</h2>
          <p>We strive to ensure that Renewable Observer remains available and accessible at all times.</p>
          <p>However, we do not guarantee:</p>
          <ul>
            <li>Continuous availability</li>
            <li>Uninterrupted service</li>
            <li>Error-free operation</li>
            <li>Compatibility with all devices and browsers</li>
          </ul>
          <p>
            We reserve the right to modify, suspend, restrict, or discontinue any part of the website without prior notice.
          </p>

          <h2>Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, all content published on Renewable Observer is protected by applicable intellectual property and copyright laws.
          </p>
          <p>This includes:</p>
          <ul>
            <li>Articles</li>
            <li>Reports</li>
            <li>Research publications</li>
            <li>Graphics</li>
            <li>Logos</li>
            <li>Website design</li>
            <li>Images</li>
            <li>Videos</li>
            <li>Audio content</li>
            <li>Databases</li>
            <li>Newsletters</li>
          </ul>
          <p>
            Users may view and share content for personal, non-commercial purposes, provided proper attribution is maintained.
          </p>
          <p>
            Unauthorized reproduction, redistribution, modification, sale, or commercial use of content is prohibited without written permission.
          </p>

          <h2>Permitted Use</h2>
          <p>Users may:</p>
          <ul>
            <li>Read articles and reports.</li>
            <li>Share links to published content.</li>
            <li>Reference content with proper attribution.</li>
            <li>Subscribe to newsletters.</li>
            <li>Participate in events and webinars.</li>
            <li>Contact our editorial and business teams.</li>
          </ul>
          <p>All use must comply with applicable laws and regulations.</p>

          <h2>Prohibited Activities</h2>
          <p>Users agree not to:</p>
          <ul>
            <li>Copy large portions of content without permission.</li>
            <li>Republish articles as their own work.</li>
            <li>Distribute malicious software.</li>
            <li>Attempt unauthorized access to systems.</li>
            <li>Interfere with website operations.</li>
            <li>Use automated tools to scrape content excessively.</li>
            <li>Submit false information.</li>
            <li>Engage in fraudulent activities.</li>
            <li>Violate intellectual property rights.</li>
            <li>Post harmful, offensive, or unlawful content.</li>
          </ul>
          <p>
            Violation of these terms may result in restricted access or legal action where appropriate.
          </p>

          <h2>Editorial Content</h2>
          <p>
            Renewable Observer publishes news, analysis, interviews, research, opinions, market intelligence, and industry-related information.
          </p>
          <p>
            While we strive for accuracy, we do not guarantee that all information is complete, current, or free from errors.
          </p>
          <p>
            Readers should independently verify information before making business, investment, engineering, legal, financial, or operational decisions.
          </p>
          <p>
            For information regarding our publishing standards, please review our <Link href="/editorial-policy">Editorial Policy</Link>.
          </p>

          <h2>Third-Party Content</h2>
          <p>Our website may contain:</p>
          <ul>
            <li>External links</li>
            <li>Press releases</li>
            <li>Guest contributions</li>
            <li>Sponsored content</li>
            <li>Advertisements</li>
            <li>Embedded media</li>
          </ul>
          <p>
            Renewable Observer is not responsible for the accuracy, reliability, or practices of third-party websites, organizations, or services.
          </p>
          <p>Users access third-party resources at their own risk.</p>

          <h2>Sponsored Content and Advertising</h2>
          <p>
            Renewable Observer may publish sponsored articles, promotional content, and advertising materials.
          </p>
          <p>Sponsored content will be identified where appropriate.</p>
          <p>Advertising relationships do not influence editorial decisions.</p>
          <p>
            For marketing opportunities, please visit our <Link href="/advertise-with-us">Advertise With Us</Link> page.
          </p>

          <h2>User Submissions</h2>
          <p>Users may submit:</p>
          <ul>
            <li>Press releases</li>
            <li>Event announcements</li>
            <li>Guest articles</li>
            <li>Feedback</li>
            <li>Comments</li>
            <li>Business inquiries</li>
          </ul>
          <p>
            By submitting content, users grant Renewable Observer the right to review, edit, publish, distribute, or remove submitted materials at our discretion.
          </p>
          <p>Users are responsible for ensuring submitted content:</p>
          <ul>
            <li>Is accurate.</li>
            <li>Does not violate laws.</li>
            <li>Does not infringe intellectual property rights.</li>
            <li>Does not contain misleading information.</li>
          </ul>

          <h2>Events and Webinars</h2>
          <p>
            Renewable Observer may organize or promote conferences, webinars, awards programs, industry forums, and educational events.
          </p>
          <p>
            Participation in events may be subject to additional terms and registration requirements.
          </p>
          <p>
            Event schedules, speakers, sponsors, and programs may change without notice.
          </p>
          <p>
            Information regarding upcoming programs can be found on our <Link href="/events">Events</Link> page.
          </p>

          <h2>Research Reports and Market Intelligence</h2>
          <p>
            Reports, forecasts, research publications, and market intelligence provided by Renewable Observer are intended for informational purposes only.
          </p>
          <p>Such materials should not be interpreted as:</p>
          <ul>
            <li>Investment advice</li>
            <li>Financial advice</li>
            <li>Legal advice</li>
            <li>Engineering advice</li>
            <li>Professional consulting services</li>
          </ul>
          <p>
            Readers should consult qualified professionals before making significant decisions.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Renewable Observer shall not be liable for:
          </p>
          <ul>
            <li>Direct damages</li>
            <li>Indirect damages</li>
            <li>Incidental damages</li>
            <li>Consequential damages</li>
            <li>Loss of profits</li>
            <li>Loss of business opportunities</li>
            <li>Data loss</li>
            <li>Operational interruptions</li>
          </ul>
          <p>arising from the use of this website or reliance upon its content.</p>
          <p>
            Users assume responsibility for how they interpret and use information published on the platform.
          </p>

          <h2>Indemnification</h2>
          <p>
            Users agree to indemnify and hold harmless Renewable Observer, its owners, employees, contributors, partners, and affiliates from claims, damages, liabilities, expenses, or losses resulting from:
          </p>
          <ul>
            <li>Violation of these Terms.</li>
            <li>Misuse of the website.</li>
            <li>Infringement of third-party rights.</li>
            <li>Unlawful activities conducted through the platform.</li>
          </ul>

          <h2>Privacy</h2>
          <p>
            Use of Renewable Observer is also governed by our <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
          <p>
            Users are encouraged to review that policy to understand how personal information is collected, processed, and protected.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            Renewable Observer reserves the right to update or modify these Terms & Conditions at any time.
          </p>
          <p>Changes may be implemented to reflect:</p>
          <ul>
            <li>Legal requirements</li>
            <li>Industry developments</li>
            <li>Business operations</li>
            <li>Technology updates</li>
            <li>New services</li>
          </ul>
          <p>Updated versions will be published on this page.</p>
          <p>
            Continued use of the website following updates constitutes acceptance of the revised Terms.
          </p>

          <h2>Governing Principles</h2>
          <p>
            These Terms shall be interpreted in accordance with applicable laws and regulations.
          </p>
          <p>
            If any provision of these Terms is determined to be unenforceable, the remaining provisions shall continue in full force and effect.
          </p>

          <h2>Contact Information</h2>
          <p>
            Questions regarding these Terms & Conditions may be directed to our team through the <Link href="/contact-us">Contact Us</Link> page.
          </p>
          <p>For additional information, please visit:</p>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/editorial-policy">Editorial Policy</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/advertise-with-us">Advertise With Us</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
          </ul>

          <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary mt-12">
            <p className="text-lg font-medium text-foreground mb-0">
              Thank you for using Renewable Observer and supporting independent renewable energy journalism.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
