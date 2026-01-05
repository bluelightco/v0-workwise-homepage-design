import { Button } from "@/components/ui/button"
import { MapPin, Users, Building2 } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Business partners who understand your state's unique compliance landscape",
  },
  {
    icon: Users,
    title: "Face-to-Face Support",
    description: "Build real relationships with experts who visit your workplace",
  },
  {
    icon: Building2,
    title: "On-Site Assessments",
    description: "Hands-on evaluations and recommendations tailored to your facility",
  },
]

export function OnSiteSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Real People. On Site.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike purely virtual services, we believe in the power of in-person connection. Our HR and Safety
                professionals are available to visit your workplace, conduct assessments, and provide hands-on guidance
                that makes a real difference.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              Schedule a Site Visit
            </Button>
          </div>

          <div className="relative lg:order-first">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/business-professional-in-modern-office.jpg"
                alt="HR professional conducting on-site workplace assessment"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
