import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { ProductFeaturesSection } from "@/components/product-features-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { InnovationSection } from "@/components/innovation-section"
import { ROISection } from "@/components/roi-section"
import { ThreeTierSection } from "@/components/three-tier-section"
import { OnSiteSection } from "@/components/on-site-section"
import { RecognitionSection } from "@/components/recognition-section"
import { ResourcesSection } from "@/components/resources-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ProductFeaturesSection />
        <OutcomesSection />
        <InnovationSection />
        <ROISection />
        <ThreeTierSection />
        <OnSiteSection />
        <RecognitionSection />
        <ResourcesSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
