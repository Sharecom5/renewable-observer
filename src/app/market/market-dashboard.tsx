"use client"
import { useState, useEffect } from "react"
import { ArrowDownRight, ArrowUpRight, TrendingUp, Activity } from "lucide-react"

type TickerData = {
 symbol: string
 name: string
 price: string
 change: string
 isPositive: boolean
}

export function MarketDashboard({ initialData }: { initialData: TickerData[] }) {
 const [stocks, setStocks] = useState<TickerData[]>(initialData)

 useEffect(() => {
 const interval = setInterval(async () => {
 try {
 const res = await fetch('/api/stocks')
 if (res.ok) {
 const data = await res.json()
 if (data && data.length > 0) setStocks(data)
 }
 } catch (e) {
 console.error("Failed to fetch live stock data", e)
 }
 }, 15000)
 return () => clearInterval(interval)
 }, [])

 return (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {stocks.map((stock) => (
 <div key={stock.symbol} className="bg-background border p-6 hover:border-primary/50 transition-all group relative overflow-hidden">
 <div className="flex justify-between items-start mb-6">
 <div>
 <h3 className="font-bold text-lg text-foreground leading-none mb-1">{stock.name}</h3>
 <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stock.symbol.replace('.NS', '')}</p>
 </div>
 <div className={`p-2 rounded-lg transition-colors ${stock.isPositive ? 'bg-secondary/10 text-secondary group-hover:bg-secondary/20' : 'bg-destructive/10 text-destructive group-hover:bg-destructive/20'}`}>
 {stock.isPositive ? <TrendingUp className="h-5 w-5" /> : <Activity className="h-5 w-5" />}
 </div>
 </div>
 
 <div className="flex items-end gap-3">
 <span className="text-3xl font-black tracking-tight">₹{stock.price}</span>
 <span className={`flex items-center text-sm font-bold mb-1 ${stock.isPositive ? 'text-secondary' : 'text-destructive'}`}>
 {stock.isPositive ? <ArrowUpRight className="h-4 w-4 mr-0.5" /> : <ArrowDownRight className="h-4 w-4 mr-0.5" />}
 {stock.change}
 </span>
 </div>
 </div>
 ))}
 </div>
 )
}
