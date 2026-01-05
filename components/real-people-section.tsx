import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

const highlights = [
  "Job Site Inspections: Regular physical walkthroughs to identify risks and ensure compliance",
  "HR & Safety Hotline: Get answers from our CAL/HR, CEBS, SPHR, PHR, and SCP-certified staff",
  "First Aid Kit & Posters: Scheduled onsite hours for first aid management and poster audits",
]

export function RealPeopleSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-white">Real People. On Site.</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Upgrade your protection with our on-site HR & Safety team. We don't just offer virtual support—we'll visit
              your business, meet your staff, and drive your safety culture personally.
            </p>

            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 text-primary mt-1" />
                  <span className="leading-relaxed text-slate-200">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Full Coverage
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <Image
              src="/images/generated-20image-20december-2031-2c-202025-20-203-24pm.jpeg"
              alt="HR professionals meeting with business team"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
