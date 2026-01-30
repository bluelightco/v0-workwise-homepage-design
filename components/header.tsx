"use client"

// Header component for site navigation
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/workwise-logo.png" 
              alt="WorkWise Compliance" 
              width={147}
              height={44}
              priority
              style={{ width: '147px', height: '44px' }}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/services"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </Link>

            <Link
              href="/pricing"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/training"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Training
            </Link>

            <Link
              href="/affiliates"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Affiliates
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
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/shop-posters">Shop Posters</Link>
          </Button>
          <Link href="/cart" className="relative p-2 hover:bg-accent rounded-md transition-colors">
            <ShoppingCart className="h-5 w-5 text-foreground/80" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
