import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { 
  Users, 
  DollarSign, 
  Handshake, 
  TrendingUp, 
  Gift, 
  Award, 
  CheckCircle2, 
  FileText, 
  MonitorPlay, 
  Shield, 
  UserCheck, 
  Headphones, 
  ClipboardList,
  ArrowRight
} from "lucide-react"

export const metadata = {
  title: "Affiliates - Resell & Refer - WorkWise Compliance",
  description:
    "Resell our digital products or refer our HR and Safety services. Earn commissions while helping businesses stay compliant.",
}

const resellBenefits = [
  "Resell posters, digital libraries, and Online Training Hub",
  "Keep 25% of every sale",
  "White-label and wholesale options available",
  "Dedicated support and onboarding",
  "Access to marketing resources and client-ready materials",
  "Recurring revenue on subscriptions",
]

const referralBenefits = [
  "Keep 20% of each recurring customer, up to one year",
  "Easy tracking via your referral dashboard",
  "No limits on referrals",
  "Quick setup with a unique referral code for each referrer",
  "Fully supported by WorkWise experts",
]

const digitalProducts = [
  {
    icon: FileText,
    title: "Required Labor Law Posters",
    description: "Always up-to-date for compliance",
  },
  {
    icon: ClipboardList,
    title: "Digital Library",
    description: "Templates, guides, and ready-to-use SOPs",
  },
  {
    icon: MonitorPlay,
    title: "Online Training Hub",
    description: "Unlimited HR & Safety training for employees",
  },
]

const hrSafetyServices = [
  {
    icon: Users,
    title: "Virtual Onsite Pro HR Administrative Services",
    description: "Full-service support for HR operations",
  },
  {
    icon: UserCheck,
    title: "Talent Acquisition Services",
    description: "Recruiting and hiring support",
  },
  {
    icon: Shield,
    title: "Dedicated HR & Safety Experts",
    description: "Subject matter experts for guidance",
  },
  {
    icon: Headphones,
    title: "Unlimited Consultation & Training",
    description: "Continuous support for your clients",
  },
  {
    icon: TrendingUp,
    title: "Process Improvement & Risk Assessment Support",
    description: "Identify risks and optimize HR & Safety processes",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Sign Up and Get Approved",
    description: "Quick application, reviewed and accepted.",
  },
  {
    step: "02",
    title: "Access Resources",
    description: "Links, banners, and ready-to-share content for promotion.",
  },
  {
    step: "03",
    title: "Share With Your Clients",
    description: "Offer WorkWise digital HR and Safety solutions or refer companies using your unique code.",
  },
  {
    step: "04",
    title: "Earn and Grow",
    description: "Recurring revenue on subscriptions or wholesale margins automatically tracked.",
  },
]

export default function AffiliatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Resell Our Products or Refer Our Services
            </h1>
            <div className="space-y-4 text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto">
              <p>Resell our digital products and get paid, all while enhancing the products you offer.</p>
              <p>Refer our HR and Safety services to the companies you serve and build a recurring revenue system, helping them mitigate exposure and better their bottom line.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Ways to Work With WorkWise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Two Ways to Work With <span className="text-primary">WorkWise</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Resell Program */}
              <Card className="border-2 hover:border-primary transition-colors flex flex-col">
                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Handshake className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Resell Program</h3>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    White-label our digital products and sell them under your own brand.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {resellBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Button className="flex-1" size="lg" asChild>
                      <Link href="/contact">Signup Now</Link>
                    </Button>
                    <Button variant="outline" className="flex-1" size="lg" asChild>
                      <Link href="/contact">Talk to an Expert</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Referral Program */}
              <Card className="border-2 hover:border-primary transition-colors flex flex-col">
                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Referral Program</h3>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    Simply refer businesses to us for HR & Safety and earn commissions.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {referralBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Button className="flex-1" size="lg" asChild>
                      <Link href="/contact">Signup Now</Link>
                    </Button>
                    <Button variant="outline" className="flex-1" size="lg" asChild>
                      <Link href="/contact">Talk to an Expert</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our <span className="text-primary">Offerings</span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* Digital Products Card */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    <div className="md:w-64 shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Gift className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">Digital Products</h3>
                          <span className="text-sm font-medium text-primary">Reseller Program</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {digitalProducts.map((product, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <product.icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-foreground">{product.title}</h4>
                            <p className="text-muted-foreground">{product.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* HR & Safety Services Card */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    <div className="md:w-64 shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">HR & Safety Services</h3>
                          <span className="text-sm font-medium text-primary">Referral Program</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 grid sm:grid-cols-2 gap-6">
                      {hrSafetyServices.map((service, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <service.icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-foreground">{service.title}</h4>
                            <p className="text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
          </div>
          <div className="relative max-w-6xl mx-auto">
            {/* Continuous connector line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-muted-foreground/30" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10 ring-4 ring-background">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Help the companies you serve stay protected and grow your business while doing it.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 px-12" asChild>
                <Link href="/contact">Signup Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
