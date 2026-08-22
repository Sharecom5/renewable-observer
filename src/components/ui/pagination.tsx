import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

/**
 * Archive pagination.
 *
 * Real anchors, not buttons: crawlers follow links, and these are how the
 * older two thirds of the catalogue become reachable at all.
 *
 * Page one lives at /<category>; later pages at /<category>/page/<n>. Keeping
 * page one off the /page/1 form avoids two URLs serving identical content.
 */
export function Pagination({
  basePath,
  page,
  totalPages,
}: {
  basePath: string
  page: number
  totalPages: number
}) {
  if (totalPages <= 1) return null

  const href = (n: number) => (n === 1 ? basePath : `${basePath}/page/${n}`)

  // A window around the current page, always including first and last.
  const pages: (number | "gap")[] = []
  for (let n = 1; n <= totalPages; n++) {
    if (n === 1 || n === totalPages || Math.abs(n - page) <= 1) pages.push(n)
    else if (pages[pages.length - 1] !== "gap") pages.push("gap")
  }

  const linkBase =
    "inline-flex items-center justify-center h-9 min-w-9 px-3 rounded-md border text-sm font-medium transition-colors"

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1.5 mt-12 pt-8 border-t border-border">
      {page > 1 && (
        <Link href={href(page - 1)} rel="prev" className={`${linkBase} border-border hover:bg-muted gap-1`}>
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only sm:not-sr-only">Previous</span>
        </Link>
      )}

      {pages.map((n, i) =>
        n === "gap" ? (
          <span key={`gap-${i}`} className="px-1.5 text-muted-foreground" aria-hidden="true">…</span>
        ) : n === page ? (
          <span key={n} aria-current="page" className={`${linkBase} border-primary bg-primary text-primary-foreground`}>
            {n}
          </span>
        ) : (
          <Link key={n} href={href(n)} className={`${linkBase} border-border hover:bg-muted text-foreground`}>
            {n}
          </Link>
        )
      )}

      {page < totalPages && (
        <Link href={href(page + 1)} rel="next" className={`${linkBase} border-border hover:bg-muted gap-1`}>
          <span className="sr-only sm:not-sr-only">Next</span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </nav>
  )
}
