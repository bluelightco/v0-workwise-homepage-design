"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/workwise-logo.png" alt="WorkWise Compliance" className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-80 bg-white border rounded-lg shadow-lg py-2">
                    <Link
                      href="/services/tier-3-we-do-it"
                      className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-foreground">HR & Safety</div>
                    </Link>
                    <Link
                      href="/services/tier-2-you-do-it"
                      className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-foreground">Digital</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

                        <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
              >
                Affiliates
                <ChevronDown className="h-4 w-4" />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-80 bg-white border rounded-lg shadow-lg py-2">
                    <Link
                      href="/services/tier-3-we-do-it"
                      className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-foreground">Resell Posters</div>
                    </Link>
                    <Link
                      href="/services/tier-2-you-do-it"
                      className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-foreground">Refer Clients</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/webinars"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Webinars
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative p-2 hover:bg-accent rounded-md transition-colors">
            <ShoppingCart className="h-5 w-5 text-foreground/80" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
