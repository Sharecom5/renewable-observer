import Link from "next/link"
import { SubscribeForm } from "@/components/ui/subscribe-form"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 text-muted-foreground mt-12">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-5 border-b border-border pb-12 mb-8">
          
          {/* Logo & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-base font-bold tracking-tighter text-primary">Renewable</span>
              <span className="text-base font-light tracking-tighter text-foreground">Observer</span>
            </Link>
            <p className="text-sm mb-8 max-w-sm leading-relaxed">
              Your trusted source for the latest news, market intelligence, and insights in the global renewable energy sector.
            </p>
            <SubscribeForm 
              title="Subscribe to our daily briefing" 
              variant="footer" 
            />
          </div>

          {/* 4-Column Links Grid */}
          {/* Streamlined Links Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link href="/advertise-with-us" className="hover:text-primary transition-colors">Advertise With Us</Link></li>
              </ul>
            </div>

            {/* Editorial */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Editorial</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/authors" className="hover:text-primary transition-colors">Authors</Link></li>
                <li><Link href="/editorial-policy" className="hover:text-primary transition-colors">Editorial Policy</Link></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Renewable Observer. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/renewableobserver/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
