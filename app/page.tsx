import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { ThreeTierSection } from "@/components/three-tier-section"
import { YouVsWeSection } from "@/components/you-vs-we-section"
import { ComplianceTrainingSection } from "@/components/compliance-training-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ResourcesSection } from "@/components/resources-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <GoogleReviewsSection />
        <ThreeTierSection />
        <YouVsWeSection />
        <ComplianceTrainingSection />
        <NewsletterSection />
        <ResourcesSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
