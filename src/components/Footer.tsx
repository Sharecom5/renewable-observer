import Link from 'next/link';
import { Share2, MessageCircle, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-16 mt-16 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & About */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-heading tracking-tight">Renewable Observer</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The premier source for news, market intelligence, and analysis in the global renewable energy sector. Trusted by industry leaders worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full">
                <Send className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Sectors</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/category/solar-news" className="hover:text-primary transition-colors">Solar Energy</Link></li>
              <li><Link href="/category/wind-energy" className="hover:text-primary transition-colors">Wind Power</Link></li>
              <li><Link href="/category/battery-storage" className="hover:text-primary transition-colors">Energy Storage</Link></li>
              <li><Link href="/category/green-hydrogen" className="hover:text-primary transition-colors">Green Hydrogen</Link></li>
              <li><Link href="/category/ev-infrastructure" className="hover:text-primary transition-colors">EV Infrastructure</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact & Support</Link></li>
              <li><Link href="/advertise" className="hover:text-primary transition-colors">Advertise with Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our daily newsletter for breaking industry news.</p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
              <Button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Renewable Observer Media. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/editorial-policy" className="hover:text-white transition-colors">Editorial Policy</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
