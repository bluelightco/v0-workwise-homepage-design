import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. Scale up as you grow.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Essential Toolkit */}
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-white p-8 text-center">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">Essential Toolkit</h3>
                      <p className="text-muted-foreground">Self-service compliance tools</p>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-primary">$149</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-muted-foreground mb-4">CORE FEATURES</p>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Auto-Update Poster Subscription</p>
                            <p className="text-sm text-muted-foreground">1 poster included; additional a la carte</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Digital Library</p>
                            <p className="text-sm text-muted-foreground">
                              HR templates, workflows, checklists, placement guides
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">LMS Training Modules</p>
                            <p className="text-sm text-muted-foreground">Up to 2 select courses included</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Newsletter Updates</p>
                            <p className="text-sm text-muted-foreground">Compliance news and regulatory changes</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">10% Discount on Webinar Trainings</p>
                            <p className="text-sm text-muted-foreground">Exclusive savings on live sessions</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-8">
                      <p className="text-sm font-semibold text-muted-foreground mb-4">ADDITIONAL OPTIONS</p>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Additional posters at 10% discount</span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Additional LMS courses at 10% discount</span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Specialty guides and resources</span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Compliance tracking tools</span>
                        </li>
                      </ul>
                    </div>

                    <Button className="w-full" size="lg" asChild>
                      <Link href="/services/tier-2-you-do-it">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>

                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Perfect for small businesses and DIY HR teams
                    </p>
                  </CardContent>
                </Card>

                {/* HR & Safety Partner */}
                <Card className="border-2 border-primary shadow-lg relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                  <CardHeader className="bg-gradient-to-br from-slate-700 to-slate-900 text-white p-8 text-center rounded-t-lg">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">HR & Safety Partner</h3>
                      <p className="text-slate-200">We Do It For You</p>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-lg text-slate-300">Starting at</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold">$349</span>
                      <span className="text-slate-200">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-slate-50 rounded-lg p-4 mb-6">
                      <p className="text-sm font-semibold mb-2">DEDICATED EXPERTS WHO DO THE WORK FOR YOU</p>
                      <p className="text-xs text-muted-foreground">
                        Proactive HR & Safety solution that lowers your liability and maximizes human capital
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-muted-foreground mb-4">WHAT YOU GET</p>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Dedicated HR & Safety Professional</p>
                            <p className="text-sm text-muted-foreground">
                              Your strategic business partner for policies, compliance, and day-to-day operations
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Same-Day Support</p>
                            <p className="text-sm text-muted-foreground">
                              Real responses when you need them for HR questions, safety concerns, or employee issues
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Policies, SOPs & Compliance Programs</p>
                            <p className="text-sm text-muted-foreground">
                              Custom-developed HR regulations, workplace safety, OSHA & DOT guidance
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Employee Relations & Investigations</p>
                            <p className="text-sm text-muted-foreground">
                              Direct handling of conflicts, complaints, and HR risk mitigation
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Training Delivery</p>
                            <p className="text-sm text-muted-foreground">
                              In-person or virtual HR and Safety training, tailored to your team
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Proactive Risk Identification</p>
                            <p className="text-sm text-muted-foreground">
                              Monitoring and guidance to prevent compliance gaps before they become problems
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Salary Benchmarking & Analysis</p>
                            <p className="text-sm text-muted-foreground">
                              Market-aligned compensation guidance to support HR decisions
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Document Management & Digital Tools</p>
                            <p className="text-sm text-muted-foreground">
                              Access to forms, templates, checklists, and posters
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-muted-foreground mb-4">TRAINING CATALOG INCLUDED</p>
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-4">
                        <p className="text-sm font-semibold text-primary">Live Webinar or Onsite Delivery</p>
                        <p className="text-xs text-muted-foreground">
                          All training sessions are delivered live by our experts — virtually or at your location
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-primary mb-2">HR TRAINING</p>
                          <ul className="space-y-1 text-xs text-muted-foreground">
                            <li>Onboarding & Orientation</li>
                            <li>Harassment & Workplace Conduct</li>
                            <li>Performance Management</li>
                            <li>Leadership Development</li>
                            <li>Diversity, Equity & Inclusion</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary mb-2">SAFETY TRAINING</p>
                          <ul className="space-y-1 text-xs text-muted-foreground">
                            <li>OSHA Compliance</li>
                            <li>Emergency Preparedness</li>
                            <li>First Aid & CPR</li>
                            <li>Hazard Awareness</li>
                            <li>PPE Training</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="text-sm font-semibold text-muted-foreground mb-4">OPTIONAL ADD-ON SERVICES</p>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Payroll Administration - Accurate processing & tax compliance</span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Benefits Administration - Health, dental, vision, retirement</span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Leaves Management - FMLA, ADA, and other leave policies</span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Recruitment Administration - Job postings & applicant flow</span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">
                            Talent Acquisition - Full-cycle, end-to-end recruiting with dedicated support for candidate
                            sourcing, hiring, and strategic talent consulting
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Button className="w-full bg-slate-800 hover:bg-slate-900" size="lg" asChild>
                      <Link href="/services/tier-3-we-do-it">
                        Schedule Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>

                    <p className="text-center text-sm text-muted-foreground mt-4">
                      We do the work — you focus on your business
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Compare Plans</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-center p-4 font-bold">Essential Toolkit</th>
                      <th className="text-center p-4 font-bold bg-slate-50">HR & Safety Partner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4">Poster Auto-Updates</td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Digital Library</td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-slate-50">
                        <div className="font-semibold">All-Access</div>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">LMS Training Courses</td>
                      <td className="text-center p-4">Up to 2</td>
                      <td className="text-center p-4 bg-slate-50">
                        <div className="font-semibold">All-Access</div>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Newsletter Updates</td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Webinar Discount</td>
                      <td className="text-center p-4">10%</td>
                      <td className="text-center p-4 bg-slate-50">
                        <div className="font-semibold">2 Free/Year</div>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Dedicated HR & Safety Professional</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Same-Day Support</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Policies, SOPs & Compliance Programs</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Employee Relations & Investigations</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Training Delivery</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Proactive Risk Identification</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Salary Benchmarking & Analysis</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Document Management & Digital Tools</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Payroll Administration</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Benefits Administration</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Leaves Management</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Recruitment Administration</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Talent Acquisition</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-slate-50">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Can I switch plans later?</h3>
                  <p className="text-muted-foreground">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your
                    next billing cycle.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">What's included in the poster auto-update subscription?</h3>
                  <p className="text-muted-foreground">
                    Your posters are automatically updated whenever labor laws change, ensuring continuous compliance.
                    Essential Toolkit includes 1 poster, while HR & Safety Partner includes all necessary posters for
                    your locations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Do you offer custom enterprise plans?</h3>
                  <p className="text-muted-foreground">
                    Yes! For organizations with 100+ employees or specialized needs, we offer custom enterprise
                    solutions. Contact us for a tailored quote.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Is there a contract commitment?</h3>
                  <p className="text-muted-foreground">
                    Both plans are month-to-month with no long-term commitment required. Cancel anytime with 30 days
                    notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Not sure which plan is right for you?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Schedule a consultation with our compliance experts to find the perfect fit for your business
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
