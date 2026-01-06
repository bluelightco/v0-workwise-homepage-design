import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, GraduationCap, FileText, Users, Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Tier2Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MOST POPULAR
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Essential Toolkit</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Empower your internal team with the Employee Management System (EMS)—our cloud-based platform that
              centralizes your workflows and reduces administrative burden.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white text-indigo-600 px-6 py-3 rounded-lg">
                <div className="text-sm">Starting at</div>
                <div className="text-3xl font-bold">$149/mo.</div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included from Tier 1 */}
        <section className="py-12 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">Everything in You Post It:</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                <span className="bg-white px-4 py-2 rounded-full">3 Posters Included</span>
                <span className="bg-white px-4 py-2 rounded-full">Auto-Update Poster Service</span>
                <span className="bg-white px-4 py-2 rounded-full">Remote Coverage</span>
                <span className="bg-white px-4 py-2 rounded-full">$40K Guarantee</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-600">Plus:</h3>
            </div>
          </div>
        </section>

        {/* New Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Advanced Tools for Your Team</h2>

              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Proactive Training, Simplified.</h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Assign, track, and manage employee training with ease. Our cloud-based LMS helps you meet state
                      mandates (like Sexual Harassment Prevention) and build a culture of safety without the
                      administrative headache.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Robust Course Library</h4>
                          <p className="text-muted-foreground">
                            Access hundreds of interactive modules covering HR compliance, Cal/OSHA safety standards,
                            leadership skills, and cybersecurity.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Automated Tracking</h4>
                          <p className="text-muted-foreground">
                            Forget the spreadsheets. The system automatically notifies employees of due dates, tracks
                            progress, and stores completion certificates in their digital file.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Mobile-Ready</h4>
                          <p className="text-muted-foreground">
                            Employees can complete training on tablets or smartphones, making it perfect for field crews
                            and deskless workers.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Audit-Ready Reporting</h4>
                          <p className="text-muted-foreground">
                            Generate compliance reports in seconds to prove your workforce is trained and certified
                            during an inspection.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-slate-100 rounded-lg p-8 border border-slate-200">
                      <img
                        src="/images/bh-new-hris-mac-mockup.png"
                        alt="Learning Management System Interface"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-12 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <h5 className="font-semibold text-sm mb-1">HR Forms</h5>
                          <p className="text-xs text-muted-foreground">500+ Templates</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                              />
                            </svg>
                          </div>
                          <h5 className="font-semibold text-sm mb-1">Checklists</h5>
                          <p className="text-xs text-muted-foreground">Step-by-step</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13a2 2 0 002 2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <h5 className="font-semibold text-sm mb-1">Handbook</h5>
                          <p className="text-xs text-muted-foreground">Builder Tools</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          </div>
                          <h5 className="font-semibold text-sm mb-1">Safety Topics</h5>
                          <p className="text-xs text-muted-foreground">Meeting Agendas</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2">
                    <h3 className="text-3xl font-bold mb-6">Your On-Demand HR & Safety Knowledge Base</h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Stop Googling complex labor laws and hoping for the best. Our Digital Library gives you instant
                      access to thousands of attorney-reviewed documents, saving you time and reducing legal risk.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">HR Forms & Templates</h4>
                          <p className="text-muted-foreground">
                            Download professionally drafted offer letters, disciplinary write-up forms, termination
                            notices, and performance review templates.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Safety Meeting Topics</h4>
                          <p className="text-muted-foreground">
                            Access a year's worth of "Tailgate" safety meeting agendas and handouts to keep your safety
                            committee active and compliant.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Compliance Checklists</h4>
                          <p className="text-muted-foreground">
                            Step-by-step guides for complex processes like Onboarding, FMLA/CFRA Leave administration,
                            and Accident Investigations.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Handbook Builder Tools</h4>
                          <p className="text-muted-foreground">
                            Resources and policy updates to help you keep your Employee Handbook current with the latest
                            legislation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-8 mt-16">Additional Tools & Support</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-8">
                    <GraduationCap className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="font-bold text-xl mb-3">Training Tracker (LMS)</h3>
                    <p className="text-muted-foreground mb-4">
                      Full access to our Learning Management System to assign and track mandatory courses like Sexual
                      Harassment Prevention, diversity training, and safety modules.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>100+ compliance training courses</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Automated completion certificates</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Manager dashboard with progress tracking</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <FileText className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="font-bold text-xl mb-3">Resource Library</h3>
                    <p className="text-muted-foreground mb-4">
                      Unlimited downloads of attorney-reviewed HR forms, checklists, and compliance guides tailored to
                      your state and industry.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>2,000+ state-specific templates</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Job description builders</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Performance review templates</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <Users className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="font-bold text-xl mb-3">Digital Onboarding</h3>
                    <p className="text-muted-foreground mb-4">
                      Paperless new-hire packets with e-signature capabilities. Streamline your onboarding process and
                      reduce administrative time by 70%.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Customizable onboarding workflows</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>E-signature integration</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Automated reminders and notifications</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <Shield className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="font-bold text-xl mb-3">AI Support</h3>
                    <p className="text-muted-foreground mb-4">
                      24/7 access to our compliance chatbot for instant answers to HR and safety questions. Get guidance
                      without waiting for business hours.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Instant policy lookups</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>State-specific guidance</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>Document suggestions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ideal For</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="font-semibold text-lg mb-2">Growing Companies</h3>
                  <p className="text-muted-foreground">
                    Businesses scaling up who need HR systems but aren't ready for full-time HR staff.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="font-semibold text-lg mb-2">HR Teams of One</h3>
                  <p className="text-muted-foreground">
                    Solo HR professionals who need tools to manage everything efficiently.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-semibold text-lg mb-2">Compliance-Conscious Orgs</h3>
                  <p className="text-muted-foreground">
                    Companies in regulated industries needing documented training and processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upgrade Path */}
        <section className="py-20 bg-slate-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Need Strategic HR Partnership?</h2>
              <p className="text-xl text-slate-300 mb-8">
                You Do It gives you the tools. When you need expert consulting and hands-on support for complex HR and
                safety challenges, upgrade to We Do It.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-slate-800 hover:bg-gray-100" asChild>
                <Link href="/services/tier-3-we-do-it">
                  Explore We Do It <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
