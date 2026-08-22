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

/**
 * Live prices for Indian renewable-energy stocks.
 *
 * Starts empty and renders nothing until real quotes arrive. It previously
 * seeded state with a hardcoded price list, so every visitor was shown invented
 * figures — presented identically to live ones — until the first fetch resolved,
 * and indefinitely if it failed.
 */
export function MarketTicker() {
  const [tickers, setTickers] = useState<TickerData[]>([])

  useEffect(() => {
    let cancelled = false

    async function fetchTickers() {
      try {
        const res = await fetch("/api/stocks")
        if (!res.ok) return
        const data = await res.json()
        if (!cancelled && Array.isArray(data) && data.length > 0) setTickers(data)
      } catch (err) {
        console.error("Failed to fetch live stock data", err)
      }
    }

    fetchTickers()
    // Eight upstream quotes per poll, so once a minute rather than every 15s.
    const interval = setInterval(fetchTickers, 60_000)

    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  // Reserves its own height even while empty. Returning null and then
  // appearing once the fetch resolved pushed the entire page down — a
  // guaranteed layout shift on every load, and CLS is a ranking signal.
  if (tickers.length === 0) {
    return <div className="w-full h-9 bg-muted/30 border-b border-border" aria-hidden="true" />
  }

  return (
    <div className="w-full h-9 bg-muted/30 border-b border-border overflow-hidden flex items-center whitespace-nowrap relative">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="flex animate-marquee hover:[animation-play-state:paused] w-max motion-reduce:animate-none">
        {[...tickers, ...tickers].map((ticker, i) => (
          <div key={`${ticker.symbol}-${i}`} className="flex items-center gap-2 mx-6 text-sm font-medium transition-colors duration-500">
            <span className="text-foreground/80">{ticker.symbol.replace('.NS', '')}</span>
            <span className="text-foreground tabular-nums">₹{ticker.price}</span>
            <span className={`flex items-center tabular-nums ${ticker.isPositive ? 'text-secondary' : 'text-destructive'}`}>
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
