"use client"

import * as React from "react"
import Link from 'next/link'
import { Menu, Search } from 'lucide-react'
import { ThemeToggle } from "./ThemeToggle"
import { BreakingNewsTicker } from "./BreakingNewsTicker"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <div className="flex flex-col w-full">
      <BreakingNewsTicker />
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter text-primary font-heading">Renewable Observer</span>
            </Link>
            
            <div className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Sectors</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover text-popover-foreground rounded-lg">
                        <ListItem href="/category/solar-news" title="Solar News">
                          Latest advancements in photovoltaic tech and large-scale solar farming.
                        </ListItem>
                        <ListItem href="/category/wind-energy" title="Wind Energy">
                          Offshore and onshore wind turbine developments and policies.
                        </ListItem>
                        <ListItem href="/category/battery-storage" title="Battery Storage">
                          Grid-scale storage and solid-state battery innovations.
                        </ListItem>
                        <ListItem href="/category/green-hydrogen" title="Green Hydrogen">
                          The future of industrial decarbonization and electrolyzers.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/market" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Market Intelligence
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/events" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Events
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-foreground/70 hover:text-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Newsletter
            </Button>
            
            <Sheet>
              <SheetTrigger className="lg:hidden text-foreground/70 p-2 hover:bg-accent rounded-md transition-colors" aria-label="Menu">
                  <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <Link href="/" className="text-xl font-bold text-primary font-heading">Renewable Observer</Link>
                  <nav className="flex flex-col space-y-4">
                    <Link href="/category/solar-news" className="text-lg font-medium hover:text-primary transition-colors">Solar News</Link>
                    <Link href="/category/wind-energy" className="text-lg font-medium hover:text-primary transition-colors">Wind Energy</Link>
                    <Link href="/category/battery-storage" className="text-lg font-medium hover:text-primary transition-colors">Battery Storage</Link>
                    <Link href="/market" className="text-lg font-medium hover:text-primary transition-colors">Market Intelligence</Link>
                    <Link href="/events" className="text-lg font-medium hover:text-primary transition-colors">Events</Link>
                  </nav>
                  <Button className="w-full bg-primary text-primary-foreground font-semibold">Subscribe to Newsletter</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
