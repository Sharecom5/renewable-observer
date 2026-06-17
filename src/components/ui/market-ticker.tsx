"use client"

import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

type TickerData = {
  symbol: string
  name: string
  price: string
  change: string
  isPositive: boolean
}

const FALLBACK_TICKERS: TickerData[] = [
  { symbol: "ADANIGREEN", name: "Adani Green", price: "1485.70", change: "+1.2%", isPositive: true },
  { symbol: "TATAPOWER", name: "Tata Power", price: "393.55", change: "-2.4%", isPositive: false },
  { symbol: "SUZLON", name: "Suzlon", price: "55.08", change: "+3.5%", isPositive: true },
  { symbol: "BORORENEW", name: "Borosil", price: "412.30", change: "-5.1%", isPositive: false },
  { symbol: "INOXWIND", name: "Inox Wind", price: "154.20", change: "+2.1%", isPositive: true },
]

export function MarketTicker() {
  const [tickers, setTickers] = useState<TickerData[]>(FALLBACK_TICKERS)

  useEffect(() => {
    async function fetchTickers() {
      try {
        const res = await fetch('/api/stocks')
        if (res.ok) {
          const data = await res.json()
          if (data && data.length > 0) {
            setTickers(data)
          }
        }
      } catch (err) {
        console.error("Failed to fetch live stock data", err)
      }
    }

    // Fetch immediately on mount
    fetchTickers()

    // Then fetch every 15 seconds for near real-time updates
    const interval = setInterval(fetchTickers, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-muted/30 border-b border-border overflow-hidden py-2 flex items-center whitespace-nowrap relative">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
        {[...tickers, ...tickers].map((ticker, i) => (
          <div key={`${ticker.symbol}-${i}`} className="flex items-center gap-2 mx-6 text-sm font-medium transition-colors duration-500">
            <span className="text-foreground/80">{ticker.symbol.replace('.NS', '')}</span>
            <span className="text-foreground">₹{ticker.price}</span>
            <span className={`flex items-center ${ticker.isPositive ? 'text-secondary' : 'text-destructive'}`}>
              {ticker.isPositive ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
              {ticker.change}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  )
}
