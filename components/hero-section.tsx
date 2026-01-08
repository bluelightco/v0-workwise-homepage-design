import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-compliance-modern.jpg)" }}
      />

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl space-y-8 text-left">
          <h1 className="font-bold leading-tight text-balance text-white text-left text-5xl">
            {"Simplifying HR & Safety Compliance"}
          </h1>
          <p className="text-xl text-white/90 text-pretty leading-relaxed max-w-3xl md:text-2xl">
            Transforming workplaces powered by people and tools that deliver. A smarter, more responsive solution that’s affordable for every business owner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              Request a Demo
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 bg-gray-300 text-gray-800 hover:bg-violet-400">
              Take a Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
