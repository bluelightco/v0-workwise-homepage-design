import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const tiers = [
  {
    name: "You Post It",
    subtitle: "Labor Law Posters",
    description: "Stay compliant with required federal and state postings. We track law changes so you don't have to.",
    features: [
      "Automatic poster updates when laws change",
      "Single or multi-location coverage",
      "Subscribe & save with ongoing compliance",
    ],
    cta: "Shop Posters",
    ctaLink: "/shop-posters",
    variant: "light" as const,
  },
  {
    name: "You Do It",
    subtitle: "Essentials",
    description:
      "Foundational HR & Safety support with the tools your team needs to manage compliance confidently.",
    features: [
      "Employee Management System included",
      "Online Training Hub with compliance courses",
      "Step-by-step guides & digital templates",
    ],
    cta: "Learn More",
    ctaLink: "/pricing",
    variant: "medium" as const,
  },
  {
    name: "We Do It",
    subtitle: "Virtual & Onsite Pro",
    description:
      "Expert HR & Safety support without the overhead. Get a dedicated partner for virtual or onsite needs.",
    features: [
      "Dedicated HR & Safety business partner",
      "Unlimited consultation & policy guidance",
      "Onsite training & inspections available",
    ],
    cta: "Learn More",
    ctaLink: "/pricing",
    variant: "dark" as const,
  },
]

export function ThreeTierSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Choose the level of support that works for you
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple options. Scalable support. No unnecessary complexity.
          </p>
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
                <div className="text-sm font-semibold uppercase tracking-wide">{tier.name}</div>
                <CardTitle className="text-xl">{tier.subtitle}</CardTitle>
                <CardDescription
                  className={cn("leading-relaxed", tier.variant === "dark" && "text-primary-foreground/90")}
                >
                  {tier.description}
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
