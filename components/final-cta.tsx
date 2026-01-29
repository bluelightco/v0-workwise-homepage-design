import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Let's build the right HR & Safety solution for your business
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Whether you want the tools, the experts, or both—we'll help you find the right fit.
          </p>

          <div className="flex justify-center pt-4">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 px-16">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
