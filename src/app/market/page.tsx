import { MarketInsightsWidget } from "@/components/MarketInsightsWidget";

export default function MarketPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <header className="mb-12 border-b border-border pb-8">
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-4 tracking-tight">Market Intelligence</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">Deep analysis, funding news, IPO tracking, and M&A activity across the global renewable energy sector.</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold font-heading">Latest Funding Rounds</h2>
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <div>
                  <h4 className="font-bold">NextGen SolidState</h4>
                  <p className="text-sm text-muted-foreground">Series B</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">$150M</p>
                  <p className="text-sm text-muted-foreground">Led by Sequoia</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <div>
                  <h4 className="font-bold">H2 Green Hub</h4>
                  <p className="text-sm text-muted-foreground">Project Finance</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">$1.2B</p>
                  <p className="text-sm text-muted-foreground">Led by EIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <MarketInsightsWidget />
        </div>
      </div>
    </div>
  )
}
