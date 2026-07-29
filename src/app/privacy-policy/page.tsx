import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Privacy Policy | Renewable Observer Data Protection & Privacy Practices',
  description: 'Read the Renewable Observer Privacy Policy to understand how we collect, use, store, and protect personal information, cookies, analytics data, and user preferences.',
  keywords: 'privacy policy, renewable observer privacy policy, data protection policy, cookie policy, renewable energy website privacy policy, user privacy policy, gdpr compliance, personal information protection',
};

export default function PrivacyPolicyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://renewableobserver.com/privacy-policy/#webpage",
        "url": "https://renewableobserver.com/privacy-policy",
        "name": "Privacy Policy | Renewable Observer Data Protection & Privacy Practices"
      },
      {
        "@type": "PrivacyPolicy",
        "name": "Renewable Observer Privacy Policy",
        "url": "https://renewableobserver.com/privacy-policy"
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
      <Script id="schema-privacy" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground font-medium">Last Updated: June 2026</p>
        </header>

        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 prose-a:font-medium">
          <p>Welcome to Renewable Observer.</p>
          <p>
            At Renewable Observer, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, process, store, and protect information when you access our website, read our content, subscribe to our newsletters, participate in our events, or interact with our services.
          </p>
          <p>
            By using Renewable Observer, you agree to the terms outlined in this Privacy Policy.
          </p>

          <h2>Introduction</h2>
          <p>
            Renewable Observer is a renewable energy media company providing news, industry analysis, market intelligence, research, events information, newsletters, and digital publishing services related to renewable energy, sustainability, climate technology, clean energy investments, and the global energy transition.
          </p>
          <p>
            We understand the importance of privacy and strive to maintain transparency regarding the information we collect and how it is used.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect information in several ways.</p>

          <h3>Information You Provide</h3>
          <p>You may voluntarily provide information when:</p>
          <ul>
            <li>Contacting us through forms</li>
            <li>Subscribing to newsletters</li>
            <li>Registering for events</li>
            <li>Downloading reports</li>
            <li>Requesting media kits</li>
            <li>Advertising with us</li>
            <li>Submitting press releases</li>
            <li>Participating in surveys</li>
            <li>Applying for partnerships</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Job title</li>
            <li>Phone number</li>
            <li>Country or region</li>
            <li>Any information voluntarily submitted through forms</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit Renewable Observer, certain information may be collected automatically, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages visited</li>
            <li>Session duration</li>
            <li>Click behavior</li>
            <li>Geographic location (general)</li>
            <li>Traffic sources</li>
          </ul>
          <p>
            This information helps us understand how visitors use our website and improve user experience.
          </p>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            Renewable Observer uses cookies and similar technologies to enhance website performance and functionality.
          </p>
          <p>Cookies may be used for:</p>
          <ul>
            <li>User preferences</li>
            <li>Security</li>
            <li>Analytics</li>
            <li>Performance monitoring</li>
            <li>Advertising</li>
            <li>Personalization</li>
            <li>Session management</li>
          </ul>
          <p>Users may manage cookie preferences through browser settings.</p>
          <p>Disabling cookies may impact certain website functions.</p>

          <h2>How We Use Information</h2>
          <p>Information collected may be used for the following purposes:</p>
          
          <h3>Website Operations</h3>
          <p>To operate, maintain, and improve our website and digital services.</p>
          
          <h3>Content Delivery</h3>
          <p>To provide news, reports, newsletters, event information, and industry updates.</p>
          
          <h3>Communication</h3>
          <p>To respond to inquiries, customer support requests, and business communications.</p>
          
          <h3>Marketing and Promotions</h3>
          <p>To share newsletters, event announcements, industry updates, promotional materials, and advertising opportunities when permitted.</p>
          
          <h3>Analytics and Research</h3>
          <p>To understand user behavior, improve content quality, and optimize website performance.</p>
          
          <h3>Security and Compliance</h3>
          <p>To detect fraud, protect users, enforce policies, and comply with legal obligations.</p>

          <h2>Newsletter Subscriptions</h2>
          <p>Users who subscribe to Renewable Observer newsletters may receive:</p>
          <ul>
            <li>Renewable energy news updates</li>
            <li>Industry reports</li>
            <li>Event announcements</li>
            <li>Market intelligence</li>
            <li>Sponsored content</li>
            <li>Partner communications</li>
          </ul>
          <p>
            Subscribers may unsubscribe at any time using links provided in email communications.
          </p>

          <h2>Advertising and Third-Party Services</h2>
          <p>Renewable Observer may display advertisements and sponsored content.</p>
          <p>
            Advertising partners may use cookies and tracking technologies to provide relevant advertisements.
          </p>
          <p>These partners may collect information according to their own privacy policies.</p>
          <p>Examples may include:</p>
          <ul>
            <li>Advertising networks</li>
            <li>Analytics providers</li>
            <li>Marketing platforms</li>
            <li>Social media platforms</li>
          </ul>
          <p>We encourage users to review the privacy policies of third-party services they interact with.</p>

          <h3>Google AdSense</h3>
          <p>Renewable Observer may use Google AdSense or other advertising platforms to display advertisements.</p>
          <p>Google and its partners may use cookies to serve ads based on user interests and previous website visits.</p>
          <p>Users may manage advertising preferences through Google's advertising settings.</p>
          <p>For more information, users should review Google's Privacy Policy.</p>

          <h2>Analytics Services</h2>
          <p>We may use analytics platforms to understand website performance and user engagement.</p>
          <p>Analytics tools help us measure:</p>
          <ul>
            <li>Traffic sources</li>
            <li>Popular content</li>
            <li>User interactions</li>
            <li>Audience demographics</li>
            <li>Website performance</li>
          </ul>
          <p>Collected data is generally aggregated and used for analytical purposes.</p>

          <h2>Data Security</h2>
          <p>
            Renewable Observer implements reasonable security measures to protect information from unauthorized access, misuse, disclosure, alteration, or destruction.
          </p>
          <p>Security measures may include:</p>
          <ul>
            <li>Secure hosting environments</li>
            <li>SSL encryption</li>
            <li>Access controls</li>
            <li>Security monitoring</li>
            <li>Regular updates and maintenance</li>
          </ul>
          <p>While we strive to protect information, no online system can guarantee absolute security.</p>

          <h2>Data Retention</h2>
          <p>We retain information only for as long as necessary to:</p>
          <ul>
            <li>Provide services</li>
            <li>Meet legal obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce policies</li>
            <li>Improve user experience</li>
          </ul>
          <p>Retention periods may vary depending on the nature of the information collected.</p>

          <h2>User Rights</h2>
          <p>Depending on applicable laws and regulations, users may have rights regarding their personal information.</p>
          <p>These rights may include:</p>
          <ul>
            <li>Access to personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion requests</li>
            <li>Objection to processing</li>
            <li>Withdrawal of consent</li>
            <li>Data portability requests</li>
          </ul>
          <p>Users may contact us to submit privacy-related requests.</p>

          <h2>International Visitors</h2>
          <p>Renewable Observer serves a global audience.</p>
          <p>Information may be processed and stored in countries where our service providers operate.</p>
          <p>
            By using our website, users understand that information may be transferred across jurisdictions where permitted by applicable law.
          </p>

          <h2>Children's Privacy</h2>
          <p>Renewable Observer is intended for general audiences and industry professionals.</p>
          <p>
            We do not knowingly collect personal information from children under the age required by applicable law.
          </p>
          <p>If such information is identified, appropriate action will be taken to remove it.</p>

          <h2>External Links</h2>
          <p>Our website may contain links to external websites, organizations, and resources.</p>
          <p>We are not responsible for the privacy practices, policies, or content of third-party websites.</p>
          <p>Users should review the privacy policies of external sites before sharing personal information.</p>

          <h2>Updates to This Privacy Policy</h2>
          <p>Renewable Observer may update this Privacy Policy periodically.</p>
          <p>Changes may be made to reflect:</p>
          <ul>
            <li>Legal requirements</li>
            <li>Industry standards</li>
            <li>Business operations</li>
            <li>Technology updates</li>
            <li>New services</li>
          </ul>
          <p>Updated versions will be published on this page.</p>

          <h2>Contact Us</h2>
          <p>Questions regarding this Privacy Policy may be directed to our team through our <Link href="/contact-us">Contact Us</Link> page.</p>
          <p>For additional information about Renewable Observer, please visit our <Link href="/about-us">About Us</Link> page.</p>
          <p>To understand our content standards, please review our <Link href="/editorial-policy">Editorial Policy</Link>.</p>
          <p>For advertising-related information, visit our <Link href="/advertise-with-us">Advertise With Us</Link> page.</p>
          <p>For website usage rules, please review our <Link href="/terms-and-conditions">Terms & Conditions</Link> and <Link href="/disclaimer">Disclaimer</Link> pages.</p>
          
          <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary mt-12">
            <p className="text-lg font-medium text-foreground mb-0">
              Thank you for trusting Renewable Observer as your source for renewable energy news, market intelligence, and industry insights.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
