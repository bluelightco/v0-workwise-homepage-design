import { Button } from "@/components/ui/button"
import { FileText, Shield, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Simplify complex compliance processes",
    description: "Automate poster updates, centralize documents, and scale with confidence.",
    cta: "Request a Demo",
    link: "#",
    items: [
      "Attorney-reviewed labor law posters",
      "Smart compliance tracking",
      "eSign and document management",
      "Multi-location support",
      "Real-time compliance alerts",
    ],
  },
  {
    icon: Shield,
    title: "Protect without the pain",
    description: "Fast track safety programs, ensure accuracy, and stay compliant.",
    cta: "Request a Demo",
    link: "#",
    items: [
      "Workplace violence prevention (SB 553)",
      "IIPP development and maintenance",
      "Cal/OSHA compliance",
      "Safety training programs",
      "Custom safety frameworks",
    ],
  },
  {
    icon: Users,
    title: "Turn HR into your unfair advantage",
    description: "Drive performance, engagement, and growth at every stage of the employee journey.",
    cta: "Request a Demo",
    link: "#",
    items: [
      "Employee Management System (EMS)",
      "Interactive training modules",
      "Performance tracking",
      "Onboarding and offboarding",
      "HR policy development",
    ],
  },
  {
    icon: TrendingUp,
    title: "Craft a strategy that drives business performance",
    description: "Plan workforce compliance, reduce liability, and unlock risk-free growth.",
    cta: "Request a Demo",
    link: "#",
    items: [
      "Compliance audit support",
      "Risk assessment and mitigation",
      "Cost-saving strategies",
      "Compliance roadmap planning",
      "Expert HR and safety consultation",
    ],
  },
]

export function ProductFeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">All-in-one compliance, from hire to retire.</h2>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                  <div className="flex gap-4">
                    <Button size="lg">{feature.cta}</Button>
                    <Button size="lg" variant="ghost">
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="bg-muted/30 rounded-lg p-8 space-y-4">
                  {feature.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm md:text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
