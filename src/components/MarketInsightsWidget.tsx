import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, TrendingUp, DollarSign } from "lucide-react"

const insights = [
  { title: "Global Solar Investment Hits Record $500B", trend: "+12%", icon: DollarSign },
  { title: "EU Carbon Permits Price Surge", trend: "+5.4%", icon: TrendingUp },
  { title: "NextEra Energy Stock Upgraded to Buy", trend: "+2.1%", icon: ArrowUpRight },
  { title: "Solid-state Battery Startup IPO", trend: "Announced", icon: TrendingUp },
]

export function MarketInsightsWidget() {
  return (
    <Card className="bg-card shadow-sm border-border">
      <CardHeader>
        <CardTitle className="text-lg font-heading border-b border-border pb-2 uppercase tracking-wider text-muted-foreground text-xs">Market Intelligence</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {insights.map((item, i) => (
          <div key={i} className="flex items-start justify-between gap-4 group cursor-pointer">
            <div className="flex gap-3">
              <div className="p-2 bg-primary/10 rounded-md text-primary shrink-0 mt-0.5">
                <item.icon className="w-4 h-4" />
              </div>
              <p className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">{item.title}</p>
            </div>
            <span className={`text-xs font-bold shrink-0 ${item.trend.startsWith('+') ? 'text-secondary' : 'text-primary'}`}>{item.trend}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
