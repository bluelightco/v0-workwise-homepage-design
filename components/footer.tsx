import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = {
  learnMore: [
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Webinars", href: "/webinars" },
    { name: "Affiliates", href: "/affiliates"}
  ],
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Leadership", href: "/about#meet-the-experts" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "Help Center", href: "/help" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/workwise-logo.png"
                alt="WorkWise Compliance"
                width={150}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1-800-817-8000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@workwisellc.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {navigation.learnMore.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 WorkWise Compliance. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span>Need Help?</span>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10 bg-transparent">
                Get Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
