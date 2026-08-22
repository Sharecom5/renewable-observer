import { ReactNode } from "react"

/**
 * Scroll-reveal wrapper — now a server component.
 *
 * This used framer-motion's `whileInView`, which meant every wrapped section
 * shipped and hydrated JavaScript to fade itself in. On the homepage that was
 * dozens of hydration roots for an effect CSS does natively, and it delayed
 * first paint of content search engines and readers both want immediately.
 *
 * The CSS version animates off `animation-timeline: view()` where supported and
 * simply renders visible everywhere else, so content is never hidden behind a
 * script that has not run. `delay` is kept so call sites do not change.
 */
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <div
      className={`ro-fade-in ${className ?? ""}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
