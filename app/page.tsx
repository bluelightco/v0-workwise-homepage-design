import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { ProductFeaturesSection } from "@/components/product-features-section"
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
        <ProductFeaturesSection />
        <NewsletterSection />
        <ResourcesSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
