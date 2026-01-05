import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Briefcase, HardHat } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Tier3Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PREMIUM
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Virtual Director</h1>
            <p className="text-2xl mb-4 text-slate-100">"We Do It"</p>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Gain a dedicated HR and Safety Business Partner who works virtually to build your infrastructure, manage
              liability, and handle complex employee relations.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
                <div className="text-sm">Custom</div>
                <div className="text-3xl font-bold">Pricing</div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included from Previous Tiers */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">Everything in You Post It & You Do It:</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                <span className="bg-white px-4 py-2 rounded-full">Auto-Update Service</span>
                <span className="bg-white px-4 py-2 rounded-full">Remote Coverage</span>
                <span className="bg-white px-4 py-2 rounded-full">$40K Guarantee</span>
                <span className="bg-white px-4 py-2 rounded-full">Training Tracker (LMS)</span>
                <span className="bg-white px-4 py-2 rounded-full">Digital Library</span>
                <span className="bg-white px-4 py-2 rounded-full">Resource Library</span>
                <span className="bg-white px-4 py-2 rounded-full">Digital Onboarding</span>
                <span className="bg-white px-4 py-2 rounded-full">AI Support</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-600">Plus:</h3>
            </div>
          </div>
        </section>

        {/* New Features - HR Consulting */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Briefcase className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">HR Consulting Services</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Your dedicated HR Business Partner handles the complex work so you can focus on running your business.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Handbook Development</h3>
                        <p className="text-muted-foreground mb-4">
                          Custom-written employee handbooks tailored to your culture and local laws. We draft policies
                          that protect your business while reflecting your values.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>State and industry-specific policies</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Annual reviews and updates</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Employee acknowledgment tracking</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Employee Relations</h3>
                        <p className="text-muted-foreground mb-4">
                          Guidance on disciplinary actions, terminations, and internal investigations. We coach you
                          through difficult conversations and document everything properly.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Performance improvement plans</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Termination scripting and support</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Harassment/discrimination investigations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Compensation Analysis</h3>
                        <p className="text-muted-foreground mb-4">
                          Benchmarking data to ensure competitive and compliant pay structures. We help you attract
                          talent while managing costs.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Market rate surveys by role</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Pay equity audits</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Benefits benchmarking</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Strategic HR Planning</h3>
                        <p className="text-muted-foreground mb-4">
                          Organizational design, succession planning, and workforce strategy. We help you build a
                          scalable HR infrastructure.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Org chart development</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Talent retention strategies</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Culture development initiatives</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Consulting */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <HardHat className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">Safety Consulting Services</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Your dedicated Safety Business Partner ensures OSHA compliance and builds a proactive safety culture.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">IIPP Development</h3>
                        <p className="text-muted-foreground mb-4">
                          Creation of your mandatory Injury & Illness Prevention Program. We write comprehensive,
                          site-specific safety plans.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Hazard assessment and control plans</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Emergency action procedures</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Annual program updates</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Risk Assessments</h3>
                        <p className="text-muted-foreground mb-4">
                          Virtual audits of your safety protocols and hazard identification. We identify gaps before
                          regulators do.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Job hazard analyses</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>PPE assessments</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Safety committee facilitation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">OSHA Response</h3>
                        <p className="text-muted-foreground mb-4">
                          Expert guidance and representation during regulatory inquiries. We handle inspections,
                          citations, and appeals.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Inspection preparation and walkthroughs</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Citation abatement strategies</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Recordkeeping compliance (300 Logs)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Incident Management</h3>
                        <p className="text-muted-foreground mb-4">
                          Post-incident investigations, root cause analysis, and corrective action planning. Turn
                          incidents into learning opportunities.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Accident investigation protocols</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Workers' comp coordination</span>
                          </li>
                          <li className="flex gap-2">
                            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>Return-to-work programs</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Perfect For</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="text-4xl mb-4">🏭</div>
                  <h3 className="font-semibold text-lg mb-2">High-Risk Industries</h3>
                  <p className="text-muted-foreground">
                    Manufacturing, construction, and warehousing businesses that need expert safety oversight.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="font-semibold text-lg mb-2">Complex HR Situations</h3>
                  <p className="text-muted-foreground">
                    Organizations dealing with investigations, restructuring, or regulatory challenges.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="font-semibold text-lg mb-2">Scaling Businesses</h3>
                  <p className="text-muted-foreground">
                    Growing companies that need strategic HR/Safety leadership without full-time C-suite hires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Partner with Experts?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Schedule a consultation to discuss your specific needs and get a custom proposal for Tier 3 services.
              </p>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
