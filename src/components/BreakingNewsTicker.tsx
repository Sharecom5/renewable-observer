"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

const newsItems = [
  "New 500MW Solar Park Approved in Rajasthan",
  "Offshore Wind Capacity Expected to Triple by 2030",
  "Green Hydrogen Subsidies Announced in EU",
  "Major Breakthrough in Solid-State Battery Tech"
]

export function BreakingNewsTicker() {
  return (
    <div className="w-full bg-primary text-primary-foreground py-2 overflow-hidden flex items-center border-b border-primary/80">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider whitespace-nowrap bg-primary z-10 pr-4">
          <AlertCircle className="w-4 h-4 text-accent" />
          Breaking News
        </div>
        <div className="flex-1 overflow-hidden relative flex">
          <motion.div
            className="flex whitespace-nowrap gap-8"
            animate={{ x: [0, -1035] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...newsItems, ...newsItems, ...newsItems].map((item, i) => (
              <span key={i} className="text-sm font-medium">
                {item}
                <span className="mx-4 text-accent/80">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
