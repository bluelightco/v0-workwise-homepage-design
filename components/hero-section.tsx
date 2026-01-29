import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      />

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance text-white text-left lg:text-6xl">
            Simplifying <span className="text-primary">HR & Safety Compliance</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-pretty leading-relaxed max-w-3xl text-left">
            Transforming workplaces powered by people and tools that deliver. A smarter, more responsive solution that's
            affordable for every business owner.
          </p>
          <div className="px-100">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full">
              <Link href="/pricing">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
