import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MarketTicker } from "@/components/ui/market-ticker";
import Link from "next/link";

import { getPostsSafe } from "@/lib/api";
import { SITE_URL, SITE_NAME, decodeHtml } from "@/lib/site";
import { TWITTER_HANDLE, organizationSchema, websiteSchema } from "@/lib/seo";

// UI, labels and metadata.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Headlines and article body. `display: swap` keeps text paintable while the
// face loads, so the headline is never the thing holding up LCP.
const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const DEFAULT_DESCRIPTION =
  "Renewable energy news, market intelligence and policy analysis covering solar, wind, green hydrogen, storage and the global energy transition.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Renewable Observer | Renewable Energy News & Market Intelligence",
    template: "%s | Renewable Observer",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "renewable energy news",
    "solar energy news",
    "wind energy",
    "green hydrogen",
    "energy storage",
    "energy policy",
    "clean energy market intelligence",
  ],
  // Inherited by every page that does not set its own. Pages built through
  // pageMetadata() override these with their own canonical and card.
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
  // No title, description or url here on purpose. A page that doesn't declare
  // its own openGraph block inherits this one wholesale, so hardcoding them
  // gave all twenty static pages the same card title and an og:url pointing at
  // the homepage. Left absent, Next derives each from the page's own title,
  // description and canonical.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
};

import Script from "next/script";

export default async function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
  // Safe variant on purpose: this strip appears on every route, so letting a
  // backend error propagate here would 500 the entire site — including the
  // static policy pages that need no backend at all.
  const latestPosts = await getPostsSafe(1);
  const latestPost = latestPosts[0];

 return (
 <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}>
  <head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // Organization and WebSite emitted once site-wide. Articles reference
        // the organization by @id rather than restating the publisher block.
        __html: JSON.stringify([organizationSchema(), websiteSchema()])
      }}
    />
  </head>
  <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-background selection:bg-primary/30 text-foreground relative">
  {/* Dynamic Background Gradients */}
  <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(2,6,23,0))] pointer-events-none"></div>
  
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* Full Width Breaking News Bar */}
    <div className="w-full bg-[#0F5132] text-white py-1 px-4 text-xs font-medium flex justify-center">
      <div className="w-full max-w-[1200px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Only shown when there is a real headline to link to — no filler. */}
          {latestPost && (
            <>
              <span className="uppercase font-bold tracking-wider text-yellow-400">Breaking</span>
              <Link href={`/${latestPost.slug}`} className="hidden sm:inline hover:underline hover:text-yellow-400 transition-colors line-clamp-1">
                {decodeHtml(latestPost.title.rendered)}
              </Link>
            </>
          )}
        </div>
        <div>
          <Link href="/newsletter" className="hover:text-yellow-400 transition-colors font-bold uppercase tracking-wider">Subscribe</Link>
        </div>
      </div>
    </div>

    {/* Main App Container */}
    <div className="flex w-full justify-center mx-auto">
      {/* Main Content Area */}
      <div className="flex-1 min-w-0 w-full max-w-[1200px] min-h-screen flex flex-col overflow-hidden">
        <Header />
        <MarketTicker />
        <main className="flex-1 py-8">{children}</main>
        <Footer />
      </div>
    </div>
  </ThemeProvider>
  
  <Script src="https://www.googletagmanager.com/gtag/js?id=G-FNCGR6FWDD" strategy="afterInteractive" />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-FNCGR6FWDD');
    `}
  </Script>
  </body>
 </html>
 );
}
