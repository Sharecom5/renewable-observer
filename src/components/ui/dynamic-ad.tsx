import React from "react";
import { getAdSlot } from "@/lib/api";

interface DynamicAdProps {
  slotId: string;
  className?: string;
  fallbackLabel?: string;
}

export async function DynamicAd({ slotId, className, fallbackLabel = "Advertisement" }: DynamicAdProps) {
  const adContent = await getAdSlot(slotId);

  // If the backend returns ad code (HTML/JS), render it safely.
  if (adContent && adContent.trim() !== "") {
    return (
      <div 
        className={`w-full overflow-hidden flex items-center justify-center ${className || ""}`}
        dangerouslySetInnerHTML={{ __html: adContent }}
      />
    );
  }

  // Fallback styling if no ad is found in the backend (to maintain layout structure)
  return (
    <div className={`w-full bg-muted flex flex-col items-center justify-center border border-border relative group overflow-hidden ${className || ""}`}>
      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity"></div>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold z-10">
        {fallbackLabel}
      </span>
      <span className="text-[10px] text-muted-foreground/50 mt-1 z-10">Slot: {slotId}</span>
    </div>
  );
}
