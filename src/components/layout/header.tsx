"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, Search, Flame } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Header() {
  const { setTheme, theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="w-full bg-transparent relative z-50">
      {/* Big Logo Area (Desktop Only) */}
      <div className="hidden md:flex px-6 py-8 flex-col items-center justify-center border-b border-border/50 bg-background/40 backdrop-blur-md relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 z-10">
          <div className="flex flex-col items-center w-full">
            <span className="text-[36px] font-extrabold tracking-wide text-[#0F5132] leading-none font-sans">
              RENEWABLE
            </span>
            <div className="flex items-center gap-3 w-full mt-1.5">
              <div className="h-[2px] flex-1 bg-[#0F5132]/40"></div>
              <span className="text-[12px] font-bold tracking-[0.3em] whitespace-nowrap text-[#0F5132]">
                OBSERVER
              </span>
              <div className="h-[2px] flex-1 bg-[#0F5132]/40"></div>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation Menu (Sticky) */}
      <div className="px-4 h-16 flex items-center justify-between border-b border-border/50 bg-background/90 backdrop-blur-xl sticky top-0 shadow-sm transition-all duration-300 z-50">
        
        {/* Mobile: Hamburger Menu (Left) */}
        <div className="flex md:hidden flex-1 justify-start">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>

        {/* Mobile: Centered Compact Logo */}
        <div className="flex md:hidden items-center justify-center shrink-0">
          <Link href="/" className="flex flex-col items-center">
            <span className="text-[20px] font-extrabold tracking-widest text-[#0F5132] leading-none font-sans">
              RENEWABLE
            </span>
            <span className="text-[8px] font-bold tracking-[0.3em] whitespace-nowrap text-[#0F5132] mt-1 uppercase">
              Observer
            </span>
          </Link>
        </div>

        {/* Desktop: Left Spacer */}
        <div className="hidden md:flex flex-1"></div>

        {/* Desktop: Centered Navigation */}
        <div className="hidden md:flex flex-none">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  HOME
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/solar" className={navigationMenuTriggerStyle()}>
                  SOLAR
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/wind" className={navigationMenuTriggerStyle()}>
                  WIND
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/hydrogen" className={navigationMenuTriggerStyle()}>
                  HYDROGEN
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/market" className={navigationMenuTriggerStyle()}>
                  MARKETS
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/storage" className={navigationMenuTriggerStyle()}>
                  STORAGE
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/policy" className={navigationMenuTriggerStyle()}>
                  POLICY
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/interview" className={navigationMenuTriggerStyle()}>
                  INTERVIEWS
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Icons (Search & Theme) */}
        <div className="flex items-center gap-1 flex-1 justify-end">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background p-4 flex flex-col space-y-4">
          <Link href="/solar" className="text-sm font-bold tracking-wider uppercase py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>Solar</Link>
          <Link href="/wind" className="text-sm font-bold tracking-wider uppercase py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>Wind</Link>
          <Link href="/hydrogen" className="text-sm font-bold tracking-wider uppercase py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>Hydrogen</Link>
          <Link href="/market" className="text-sm font-bold tracking-wider uppercase py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>Markets</Link>
          <Link href="/storage" className="text-sm font-bold tracking-wider uppercase py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>Storage</Link>
          <Link href="/policy" className="text-sm font-bold tracking-wider uppercase py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>Policy</Link>
          <Link href="/interview" className="text-sm font-bold tracking-wider uppercase py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>Interviews</Link>
          <Link href="/ev" className="text-sm font-bold tracking-wider uppercase py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>EV</Link>
        </div>
      )}
    </header>
  )
}
