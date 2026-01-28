import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const tiers = [
  {
    name: "Labor Law Posters",
    subtitle: "Stay Compliant with Required Postings",
    description: "The foundation of a compliant workplace. We track the changing laws; you simply post the updates.",
    price: "$19",
    priceNote: "/poster",
    features: [
      "Single or Multi-Location: Scalable for any business size",
      "Automatic Updates: When laws change, you're covered",
      "Subscribe & Save: Ongoing compliance made easy",
      "HR & Safety Newsletter: Stay informed on compliance updates",
    ],
    cta: "Shop Posters",
    ctaLink: "/shop-posters",
    variant: "light" as const,
  },
  {
    name: "Essentials",
    subtitle: "Foundational HR & Safety Support",
    description:
      "Give your internal team the professional-grade tools they need to manage compliance and mitigate risk.",
    price: "$89",
    priceNote: "/mo",
    features: [
      "1 Labor Law Poster Included: State & Federal compliance",
      "Employee Management System: Onboarding, time-off, docs & more",
      "LMS Training Modules: On-demand compliance courses",
      "Step-by-Step Compliance Guides: Clear, actionable resources",
    ],
    cta: "Get Started",
    ctaLink: "/contact",
    variant: "medium" as const,
  },
  {
    name: "Virtual +",
    subtitle: "Dedicated Virtual HR & Safety Partner",
    description:
      "Expert support without the overhead of a full-time hire. Your dedicated partner for all HR and Safety needs.",
    price: "$375",
    priceNote: "/mo",
    popular: true,
    features: [
      "Everything in Essentials included",
      "Dedicated Virtual Partner: Your HR & Safety business partner",
      "Compliance & Policy Guidance: Expert support on employee relations",
      "Unlimited Consultation: Proactive updates & recommendations",
    ],
    cta: "Schedule a Call",
    ctaLink: "/contact",
    variant: "dark" as const,
  },
]

export function ThreeTierSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            A Compliance Solution for Every Stage of Business
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col",
                tier.variant === "light" && "bg-secondary/30 border-secondary",
                tier.variant === "medium" && "bg-accent/20 border-accent",
                tier.variant === "dark" &&
                  "bg-gradient-to-br from-primary to-accent text-primary-foreground border-primary",
              )}
            >
              <CardHeader className="space-y-3">
                {tier.popular && (
                  <div className="inline-flex self-start bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-3xl font-bold", tier.variant === "dark" ? "text-primary-foreground" : "text-primary")}>
                    {tier.price}
                  </span>
                  <span className={cn("text-sm", tier.variant === "dark" ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {tier.priceNote}
                  </span>
                </div>
                <CardDescription
                  className={cn("leading-relaxed", tier.variant === "dark" && "text-primary-foreground/90")}
                >
                  {tier.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                <div className="font-semibold text-sm">Includes:</div>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <Check
                        className={cn(
                          "w-5 h-5 flex-shrink-0 mt-0.5",
                          tier.variant === "dark" ? "text-primary-foreground" : "text-primary",
                        )}
                      />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button variant={tier.variant === "dark" ? "secondary" : "outline"} className="w-full" asChild>
                  <Link href={tier.ctaLink}>
                    {tier.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
