import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/ww-home-banner-desk1-min.jpg)" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white text-left">
            Loved by businesses. Built for compliance.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-pretty leading-relaxed max-w-3xl text-left">
            The all-in-one platform that simplifies employment laws and workplace safety for growing businesses.
          </p>
          
        </div>
      </div>
    </section>
  )
}
