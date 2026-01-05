import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your HR Partner for Worry-Free Compliance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              We simplify the complex world of employment laws and workplace safety. From attorney-reviewed labor law
              posters to a dedicated HR and Safety team, we provide the right level of coverage for your business.
            </p>
            <div className="pt-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <Image
              src="/images/ww-home-banner-desk1-min.jpg"
              alt="Professional reviewing workplace compliance materials"
              fill
              className="object-cover rounded-lg"
              style={{ objectPosition: "calc(50% - 175px) center" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
