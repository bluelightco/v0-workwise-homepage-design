import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users, DollarSign, Handshake, TrendingUp, Gift, Award } from "lucide-react"

export const metadata = {
  title: "Resell & Refer - WorkWise Compliance",
  description:
    "Partner with WorkWise Compliance through our reseller and referral programs. Earn commissions while helping businesses stay compliant.",
}

export default function ResellReferPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Partner With Us</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-balance">
              Join our network of partners and earn revenue while helping businesses achieve compliance excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Choose Your Partnership Path</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you want to resell our services or refer clients, we have a program designed for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Reseller Program */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Handshake className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Reseller Program</h3>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    White-label our services and sell them under your own brand. Perfect for consultants, brokers, and
                    service providers.
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Competitive wholesale pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">White-label branding options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Dedicated partner support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Marketing materials and training</span>
                    </li>
                  </ul>

                  <Button className="w-full" size="lg">
                    Become a Reseller
                  </Button>
                </CardContent>
              </Card>

              {/* Referral Program */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Referral Program</h3>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    Simply refer clients to us and earn commissions. No overhead, no management required.
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Earn up to 20% commission</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Recurring revenue on subscriptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Easy tracking dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">No limit on referrals</span>
                    </li>
                  </ul>

                  <Button className="w-full" size="lg">
                    Join Referral Program
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Partner With WorkWise?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    Years of experience helping businesses achieve and maintain compliance with confidence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Your success is our success. We provide comprehensive support for you and your clients.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Competitive Earnings</h3>
                  <p className="text-muted-foreground">
                    Industry-leading commission structures and recurring revenue opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join our partner network today and start earning while helping businesses stay compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
