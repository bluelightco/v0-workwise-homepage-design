import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const audiences = [
  "HR & Compliance Managers",
  "Multi-location employers",
  "Safety & Operations teams",
  "Businesses preparing for audits or inspections",
]

export function ComplianceTrainingSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image with floating badges */}
            <div className="relative">
              <div className="relative">
                <Image
                  src="/images/training-collaboration.png"
                  alt="Team collaboration on compliance training"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Compliance Training That Proves You're Audit-Ready
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deliver, track, and verify employee compliance training with the WorkWise
                Online Training Hub—built for labor law
                compliance, workplace safety, and HR audits
              </p>

              <Button size="lg" className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30" asChild>
                <Link href="/training">
                  Online Compliance Training Platform
                </Link>
              </Button>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {audiences.map((audience, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{audience}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
