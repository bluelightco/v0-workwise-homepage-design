import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, TrendingUp, Users, Shield, Zap, Award } from "lucide-react"

export default function ResellReferPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Grow Your Revenue. Protect Your Clients.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto text-balance">
              Partner with Workwise to offer industry-leading HR and Safety compliance solutions. Whether you are a
              content creator, a payroll bureau, or an enterprise consultant, we have a partnership model tailored to
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50">
                Become a Partner
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Browse Partner Marketplace
              </Button>
            </div>
          </div>
        </section>

        {/* Partnership Paths */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Two Ways to Partner</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the partnership model that aligns with your business goals
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Affiliate Program */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-700" />
                  </div>
                  <CardTitle>Affiliate Program</CardTitle>
                  <CardDescription>Best for: Publishers, Associations, and Digital Marketers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Monetize your audience by promoting essential compliance tools. It's simple: you share the link, we
                    handle the fulfillment, you get paid.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Benefits:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Generous Commission:</strong> Earn on every poster or subscription sold
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Marketing Assets:</strong> Access high-converting banners and email swipe copy
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Real-Time Tracking:</strong> Monitor clicks and conversions via our partner dashboard
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full mt-4">Apply to Affiliate Program</Button>
                </CardContent>
              </Card>

              {/* Channel Partners */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-purple-700 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-700" />
                  </div>
                  <CardTitle>Channel Partners</CardTitle>
                  <CardDescription>
                    Best for: HR Consultants, PEOs, Payroll Providers, and Insurance Brokers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Enhance your client value proposition. Provide your clients with a referral code for a discount, or
                    resell our 4-Tier Subscription packages directly as part of your service bundle.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Benefits:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Recurring Revenue:</strong> Earn ongoing commissions on subscription renewals
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Client Retention:</strong> Sticky services like "Virtual HR" keep clients with you
                          longer
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Lead Routing:</strong> We refer our clients to you when they need specialized payroll
                          or insurance support
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full mt-4">Become a Channel Partner</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Marketplace */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Ecosystem</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We partner with the best in the business to bring you a holistic HR stack
              </p>
            </div>

            {/* Featured Partners */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-blue-700">PAYCOR</div>
                  </div>
                  <CardTitle className="text-lg">Paycor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Human Capital Management & Payroll solutions for businesses of all sizes
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-purple-700">CRITERIA CORP</div>
                  </div>
                  <CardTitle className="text-lg">Criteria Corp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Talent Acquisition & Pre-Employment Testing to hire the right people
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-red-700">UNIFIRST</div>
                  </div>
                  <CardTitle className="text-lg">UniFirst</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Uniforms, Facility Services, and Safety Products for workplace protection
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Partner Directory */}
            <Card className="bg-gray-50 border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Find a Certified Partner</CardTitle>
                <CardDescription>
                  Need help beyond compliance? Search our network of verified Channel Partners for help with Payroll,
                  Insurance, or Legal defense.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Select>
                    <SelectTrigger className="w-full sm:w-64 bg-white">
                      <SelectValue placeholder="Filter by Service Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="payroll">Payroll Services</SelectItem>
                      <SelectItem value="insurance">Insurance Brokers</SelectItem>
                      <SelectItem value="legal">Legal Defense</SelectItem>
                      <SelectItem value="hr">HR Consulting</SelectItem>
                      <SelectItem value="all">All Partners</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>Search Partner Directory</Button>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  Want to be listed here?{" "}
                  <a href="#application" className="text-purple-700 font-semibold hover:underline">
                    Apply to become a Strategic Partner today
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Partner with Workwise */}
        <section className="py-20 px-4 bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Partner with Workwise?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">The Full Spectrum</h3>
                <p className="text-slate-300">
                  Unlike other programs that only sell posters, you can now earn on everything from $40 posters to
                  $5,000/month Virtual HR subscriptions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Zero Friction</h3>
                <p className="text-slate-300">
                  We handle the logistics. From shipping physical posters to staffing the HR hotline, we deliver the
                  service while you own the client relationship.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Brand Trust</h3>
                <p className="text-slate-300">
                  With over 35 years of experience and a 100% audit success rate, you can refer your clients with total
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application" className="py-20 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Start Your Application</h2>
            <p className="text-center text-muted-foreground mb-8">
              Join our partner network and start growing your business today
            </p>

            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="partnership-type">I am interested in...</Label>
                    <Select>
                      <SelectTrigger id="partnership-type">
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="affiliate">Affiliate Program</SelectItem>
                        <SelectItem value="channel">Channel Partner</SelectItem>
                        <SelectItem value="enterprise">Enterprise Alliance</SelectItem>
                        <SelectItem value="marketplace">Marketplace Listing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Contact Name</Label>
                    <Input id="contact-name" placeholder="Your full name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL</Label>
                    <Input id="website" type="url" placeholder="https://yourcompany.com" />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    Questions? Contact us at{" "}
                    <a
                      href="mailto:affiliatepartners@workwisecompliance.com"
                      className="text-purple-700 hover:underline"
                    >
                      affiliatepartners@workwisecompliance.com
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
