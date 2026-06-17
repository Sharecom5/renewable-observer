import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MarketTicker } from "@/components/ui/market-ticker";
import { DynamicAd } from "@/components/ui/dynamic-ad";

import { getPosts } from "@/lib/api";

const inter = Inter({
 variable: "--font-sans",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title: {
 default: "Renewable Observer | Modern Renewable Energy News",
 template: "%s | Renewable Observer",
 },
 description: "Your trusted source for the latest news in renewable energy, solar, wind, green hydrogen, and market intelligence.",
 keywords: ["Renewable Energy", "Solar News", "Wind Energy", "Green Hydrogen", "Energy Finance"],
};

export default async function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
  const latestPosts = await getPosts(1);
  const latestPost = latestPosts?.[0];
  const breakingNewsText = latestPost ? latestPost.title.rendered : "Global renewable capacity additions set to double by 2030, new IEA report reveals.";
  const breakingNewsLink = latestPost ? `/${latestPost.slug}` : "#";

 return (
 <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
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
          <span className="uppercase font-bold tracking-wider text-yellow-400">Breaking</span>
          <a href={breakingNewsLink} className="hidden sm:inline hover:underline hover:text-yellow-400 transition-colors line-clamp-1">{breakingNewsText}</a>
        </div>
        <div>
          <a href="/newsletter" className="hover:text-yellow-400 transition-colors font-bold uppercase tracking-wider">Subscribe</a>
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
  </body>
 </html>
 );
}
