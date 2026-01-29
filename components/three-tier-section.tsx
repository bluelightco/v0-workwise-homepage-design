import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "You Post It",
    subtitle: "Compliance Essentials",
    description: "The foundation of a compliant workplace. We track the changing laws; you simply post the updates.",
    features: [
      "Automatic State & Federal Poster updates for 1 year",
      "City & County specific posters",
      'Backed by our $40,000+ "We Pay The Fine" Guarantee',
    ],
    cta: "Shop Posters",
    variant: "light" as const,
  },
  {
    name: "You Do It",
    subtitle: "Self-Service HR & Safety Tools",
    description:
      "Give your internal team the professional-grade tools they need to manage compliance and mitigate risk.",
    features: [
      "EMS Platform Access: Training trackers, document center, and newsletters",
      "Library: Access to attorney-reviewed checklists and forms",
      "A La Carte: Add-ons for AI Chatbot support and custom forms",
    ],
    cta: "Explore Tools",
    variant: "medium" as const,
  },
  {
    name: "We Do It",
    subtitle: "Remote Full-Service HR & Safety",
    description:
      "A complete virtual department. We lower your liability and overhead by managing your HR and Safety programs for you.",
    features: [
      "Virtual Service Model: Unlimited support from a dedicated HR & Safety Business Partner",
      "Strategic Support: Handbook creation, compensation analysis, and IIPP development",
      "Full EMS Access: Included",
    ],
    cta: "Go Virtual",
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
                <Button variant={tier.variant === "dark" ? "secondary" : "outline"} className="w-full">
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
