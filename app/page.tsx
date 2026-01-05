import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { KeyFeatures } from "@/components/key-features"
import { StatsBar } from "@/components/stats-bar"
import { ThreeTierSection } from "@/components/three-tier-section"
import { RealPeopleSection } from "@/components/real-people-section"
import { ToolsSection } from "@/components/tools-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <KeyFeatures />
        <StatsBar />
        <ThreeTierSection />
        <RealPeopleSection />
        <ToolsSection />
        <TrustedBySection />
        <TestimonialSection />
        <StatsBar variant="dark" />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
