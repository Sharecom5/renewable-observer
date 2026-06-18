import { SubscribeForm } from "@/components/ui/subscribe-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe to Our Newsletter | Renewable Observer",
  description: "Get the latest renewable energy news, market trends, and exclusive insights delivered straight to your inbox.",
};

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-foreground">Stay Ahead in Renewable Energy</h1>
        <p className="text-base text-muted-foreground">
          Join thousands of industry leaders who rely on Renewable Observer for daily insights, market intelligence, and policy updates.
        </p>
      </div>

      <div className="w-full max-w-xl bg-card border border-border shadow-lg rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 text-left">
          <SubscribeForm 
            title="Get the daily briefing" 
            description="No spam. Just the facts you need to navigate the energy transition."
            variant="article" 
          />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl text-center">
        <div>
          <h3 className="font-bold text-lg mb-2">Daily Briefings</h3>
          <p className="text-sm text-muted-foreground">The most important news of the day, curated by our editorial team.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Market Data</h3>
          <p className="text-sm text-muted-foreground">Exclusive trends and data points from the solar, wind, and hydrogen sectors.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Policy Updates</h3>
          <p className="text-sm text-muted-foreground">Stay informed on regulations shaping the global energy transition.</p>
        </div>
      </div>
    </div>
  );
}
