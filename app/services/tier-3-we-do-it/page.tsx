import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Users, BookOpen, Calendar, Bell, FileText, TrendingUp, HeadphonesIcon } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProSupportPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pro Support</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Everything in the Essential Toolkit, plus fully managed compliance (Virtual and Onsite)
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
                <div className="text-sm">Starting at</div>
                <div className="text-3xl font-bold">
                  $349<span className="text-lg font-normal">/mo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included from Essential Toolkit */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">Everything in Essential Toolkit:</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                <span className="bg-white px-4 py-2 rounded-full">Poster Auto-Updates</span>
                <span className="bg-white px-4 py-2 rounded-full">Digital Library</span>
                <span className="bg-white px-4 py-2 rounded-full">Online Training Hub</span>
                <span className="bg-white px-4 py-2 rounded-full">Newsletter Updates</span>
                <span className="bg-white px-4 py-2 rounded-full">10% Webinar Discount</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-600">Plus:</h3>
            </div>
          </div>
        </section>

        {/* Managed Compliance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">Managed Compliance</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Expert-led compliance management with virtual or onsite support
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <BookOpen className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">
                          Employee tracking for compliance and training
                        </h3>
                        <p className="text-muted-foreground">
                          Complete tracking system to monitor all compliance requirements, training certifications, and deadlines for your workforce.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <FileText className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">All-Access Digital library</h3>
                        <p className="text-muted-foreground">
                          Unlimited access to resources, templates, and guidance documents for comprehensive compliance
                          management.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Users className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">All-Access Online Training Hub</h3>
                        <p className="text-muted-foreground">
                          Full library of training courses for all employees across your organization.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Calendar className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">2 Free Webinars / Year</h3>
                        <p className="text-muted-foreground">
                          Complimentary access to two expert-led webinar trainings annually on critical compliance
                          topics.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <HeadphonesIcon className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Expert-led compliance management</h3>
                        <p className="text-muted-foreground">
                          Dedicated compliance professionals managing your regulatory requirements and keeping you
                          audit-ready.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Virtual or onsite support</h3>
                        <p className="text-muted-foreground">
                          Flexible service delivery with both remote assistance and in-person site visits when needed.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Handling multi-location compliance postings</h3>
                        <p className="text-muted-foreground">
                          Expert management of poster compliance across all your locations with proper state and local
                          variations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Bell className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Notifications/reminders for compliance deadlines</h3>
                        <p className="text-muted-foreground">
                          Proactive alerts and reminders ensure you never miss critical filing dates or renewal
                          requirements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Bell className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Newsletter updates (optional)</h3>
                        <p className="text-muted-foreground">
                          Regular updates on compliance news, regulatory changes, and best practices delivered to your
                          inbox.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Fractional HR & Safety Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Users className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">Fractional HR & Safety Services</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We do it for you - comprehensive HR and safety management handled by our expert team
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">SOPs and HR/Safety policies</h3>
                        <p className="text-muted-foreground">
                          Fully created, maintained, and implemented by our team. We develop comprehensive standard
                          operating procedures and policies tailored to your organization.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Employee training programs</h3>
                        <p className="text-muted-foreground">
                          Fully designed, delivered, and tracked by our experts. Custom training programs created and
                          executed for your workforce.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Unlimited consultation & advisory</h3>
                        <p className="text-muted-foreground">
                          Proactively identify issues, provide recommendations, and execute solutions. Ongoing strategic
                          guidance for your HR and safety needs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Employee relations support</h3>
                        <p className="text-muted-foreground">
                          We act on behalf of the company handling investigations, disciplinary actions, and sensitive
                          employee matters professionally.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <TrendingUp className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Salary benchmarking and analysis</h3>
                        <p className="text-muted-foreground">
                          Performed and reported by us. Comprehensive market analysis to ensure competitive compensation
                          structures.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Bell className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Proactive updates and recommendations</h3>
                        <p className="text-muted-foreground">
                          We lead implementation of compliance changes, keeping you ahead of regulatory requirements and
                          industry best practices.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Other HR/Safety services</h3>
                        <p className="text-muted-foreground">
                          Led by our team. Comprehensive support for audits, risk assessments, handbook development, and
                          any specialized HR or safety needs your organization requires.
                        </p>
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
              <h2 className="text-4xl font-bold mb-6">Ready for Pro Support?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Schedule a consultation to discuss how our fully managed compliance services can protect and grow your
                business.
              </p>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
