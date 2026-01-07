import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, FileText, BookOpen, GraduationCap, Bell, Percent } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Tier2Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Essential Toolkit</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Self-service access to compliance tools and resources
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">$149</div>
                <div className="text-sm">per month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">Core Features</h2>
              <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
                Everything you need to maintain workplace compliance with self-service tools and resources
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Poster Auto-Updates */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Auto-Update Poster Subscription</h3>
                        <p className="text-muted-foreground">
                          Automatically enroll all poster purchases in our Auto-Update Subscription
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 ml-16">
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">1 poster included with subscription</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Additional posters available a la carte</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Automatic updates when laws change</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Digital Library */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Digital Library</h3>
                        <p className="text-muted-foreground">
                          Comprehensive collection of compliance resources at your fingertips
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 ml-16">
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">HR compliance templates</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Sample workflows and checklists</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Guides for poster placement & multi-location compliance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* LMS Training */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">LMS Training Modules</h3>
                        <p className="text-muted-foreground">Access to select compliance training courses</p>
                      </div>
                    </div>
                    <ul className="space-y-3 ml-16">
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Up to 2 select courses included</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Self-paced learning modules</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Completion certificates provided</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Newsletter Updates */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Bell className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Newsletter Updates</h3>
                        <p className="text-muted-foreground">Stay informed with regular compliance news</p>
                      </div>
                    </div>
                    <ul className="space-y-3 ml-16">
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Compliance news and changes</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Regulatory updates</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Best practice tips</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Webinar Discount Badge */}
              <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6 flex items-center justify-between max-w-2xl mx-auto">
                <div className="flex items-center gap-4">
                  <Percent className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="font-bold text-lg">10% Discount on Webinar Trainings</h4>
                    <p className="text-sm text-muted-foreground">Exclusive savings on all live webinar sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Options Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">Additional Options</h2>
              <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
                Expand your toolkit with optional add-ons and a la carte services
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Optional A La Carte Items */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-bold text-2xl mb-6">Optional / A La Carte Items</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Additional Compliance Posters</p>
                          <p className="text-sm text-muted-foreground">10% discount on extra poster purchases</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Additional LMS Courses</p>
                          <p className="text-sm text-muted-foreground">
                            Expand training library at 10% discounted rate
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Specialty Guides & Resources</p>
                          <p className="text-sm text-muted-foreground">
                            Industry-specific resources not in standard library
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Self-Service Tools */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-bold text-2xl mb-6">Self-Service Tools</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Compliance Tracking Tools</p>
                          <p className="text-sm text-muted-foreground">Track and manage compliance workflows</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Sample Checklists</p>
                          <p className="text-sm text-muted-foreground">Ready-to-use compliance checklists</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button size="lg" className="text-lg">
                  Get Started with Essential Toolkit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ideal For</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Small Businesses</h3>
                  <p className="text-muted-foreground">
                    Companies with 10-50 employees who need compliance basics without full HR support
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">DIY HR Teams</h3>
                  <p className="text-muted-foreground">
                    In-house HR professionals who prefer self-service tools and downloadable resources
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Budget-Conscious Organizations</h3>
                  <p className="text-muted-foreground">
                    Companies looking for cost-effective compliance solutions with essential features
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Access the tools and resources you need to stay compliant with our Essential Toolkit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                Start Your Subscription
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white/30 hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
