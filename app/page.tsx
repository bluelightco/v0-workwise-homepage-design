import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { ProductFeaturesSection } from "@/components/product-features-section"

import { ROISection } from "@/components/roi-section"
import { ThreeTierSection } from "@/components/three-tier-section"
import { OnSiteSection } from "@/components/on-site-section"
import { RecognitionSection } from "@/components/recognition-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ResourcesSection } from "@/components/resources-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <GoogleReviewsSection />
        <ThreeTierSection />
        <ProductFeaturesSection />
        <ROISection />
        <OnSiteSection />
        <RecognitionSection />
        <NewsletterSection />
        <ResourcesSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
