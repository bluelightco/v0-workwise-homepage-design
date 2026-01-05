import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
            Loved by businesses. Built for compliance.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
            The all-in-one platform that simplifies employment laws and workplace safety for growing businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Take a Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
