import { cn } from '@/lib/utils';

interface AdSlotProps {
  className?: string;
  format?: 'banner' | 'rectangle' | 'sidebar';
}

export function AdSlot({ className, format = 'banner' }: AdSlotProps) {
  return (
    <div className={cn(
      "w-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 text-sm font-medium rounded overflow-hidden my-6",
      format === 'banner' && "min-h-[90px] md:min-h-[120px]",
      format === 'rectangle' && "aspect-video md:aspect-[4/3]",
      format === 'sidebar' && "min-h-[250px] md:min-h-[600px]",
      className
    )}>
      {/* Google Ads Code will go here later */}
      <div className="text-center">
        <span className="block text-xs uppercase tracking-widest text-slate-300 mb-1">Advertisement</span>
        <span className="opacity-50">[ Ad Slot: {format} ]</span>
      </div>
    </div>
  );
}
