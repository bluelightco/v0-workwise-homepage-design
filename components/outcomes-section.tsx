import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const outcomes = [
  {
    company: "TechStart Inc",
    logo: "/images/bell.jpg",
    story: "Why TechStart loves WorkWise for its ease of use",
    stat1: { value: "40+", label: "hours saved" },
    stat2: { value: "170+", label: "employees" },
    stat3: { value: "5", label: "locations" },
    image: "/business-professional-in-modern-office.jpg",
  },
  {
    company: "GrowthCo",
    logo: "/images/grin.jpg",
    story: "How GrowthCo scaled using WorkWise compliance solutions",
    stat1: { value: "50%+", label: "growth" },
    stat2: { value: "240+", label: "employees" },
    stat3: { value: "3", label: "states" },
    image: "/smiling-woman-professional-in-modern-office.jpg",
  },
  {
    company: "BuildRight",
    logo: "/images/cook-engineering.jpg",
    story: "How BuildRight scaled their compliance in under three months",
    stat1: { value: "300%+", label: "ROI" },
    stat2: { value: "500+", label: "employees" },
    stat3: { value: "25%", label: "risk decrease" },
    image: "/construction-business-executive.jpg",
  },
]

export function OutcomesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Real outcomes. Real fast.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read why companies of all sizes love WorkWise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative bg-secondary/20">
                <Image src={outcome.image || "/placeholder.svg"} alt={outcome.company} fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 relative">
                  <Image
                    src={outcome.logo || "/placeholder.svg"}
                    alt={outcome.company}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h3 className="font-semibold text-lg leading-snug">{outcome.story}</h3>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{outcome.stat1.value}</div>
                    <div className="text-xs text-muted-foreground">{outcome.stat1.label}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{outcome.stat2.value}</div>
                    <div className="text-xs text-muted-foreground">{outcome.stat2.label}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{outcome.stat3.value}</div>
                    <div className="text-xs text-muted-foreground">{outcome.stat3.label}</div>
                  </div>
                </div>
                <Button variant="link" className="p-0 h-auto font-semibold group">
                  Read their story
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
