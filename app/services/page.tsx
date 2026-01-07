import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, TrendingUp, Users, Briefcase, HardHat, FileText, GraduationCap, Shield } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Compliance Solutions That Scale With You
            </h1>
            <p className="text-xl opacity-90 text-pretty">
              From automated regulatory updates to fully outsourced HR & Safety departments, we provide the specific
              support your business needs to mitigate risk and grow.
            </p>
          </div>

          <div className="mt-16 flex items-end justify-center gap-4 max-w-2xl mx-auto">
            <div className="flex flex-col items-center flex-1">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 w-full h-32 flex items-center justify-center mb-2">
                <span className="font-semibold text-indigo-900">Essential Toolkit</span>
              </div>
              <span className="text-xs text-white/70">Self-Service</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 w-full h-40 flex items-center justify-center mb-2">
                <span className="font-semibold text-lg text-indigo-900">Pro Support</span>
              </div>
              <span className="text-xs text-white/70">Fully Managed</span>
            </div>
            <TrendingUp className="absolute right-0 w-32 h-32 text-white/20" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pick Your Lane</h2>
            <p className="text-xl text-muted-foreground">Choose the engagement level that fits your business</p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <Card className="bg-indigo-50 border-indigo-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Just Need Posters?</h4>
                    <p className="text-muted-foreground mb-4">
                      Purchase compliance posters individually with optional auto-update subscription service. Get free
                      replacement posters when laws change mid-year, backed by our $40,000 "We Pay The Fine" guarantee.
                    </p>
                    <Button asChild>
                      <Link href="/shop-posters">Shop Compliance Posters</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <Card className="overflow-hidden border-2 border-indigo-600">
              <div className="bg-indigo-600 text-white p-6 border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold mb-2 text-indigo-200">TIER 1</div>
                    <h3 className="text-3xl font-bold mb-2">Essential Toolkit</h3>
                    <p className="text-lg text-indigo-100">Self-service access to compliance tools and resources</p>
                  </div>
                  <div className="bg-white text-indigo-600 px-4 py-2 rounded-lg">
                    <div className="text-xs">Starting at</div>
                    <div className="text-2xl font-bold">$199</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Self-service toolkit with automatic poster updates, digital library access, and foundational
                  compliance training. Perfect for businesses that want to manage compliance internally with quality
                  resources.
                </p>

                <h4 className="font-semibold text-lg mb-4">Core Features:</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Auto-Update Poster Subscription</div>
                      <div className="text-sm text-muted-foreground">
                        1 poster included with automatic replacements when laws change
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Digital Library</div>
                      <div className="text-sm text-muted-foreground">
                        HR templates, workflows, checklists, and compliance guides
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <GraduationCap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">LMS Training (2 Courses)</div>
                      <div className="text-sm text-muted-foreground">Access to select compliance training modules</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">10% Discount on Add-Ons</div>
                      <div className="text-sm text-muted-foreground">
                        Additional posters, courses, and webinars at discounted rates
                      </div>
                    </div>
                  </div>
                </div>

                <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/services/tier-2-you-do-it">Explore Essential Toolkit</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="bg-slate-800 text-white p-6 border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold mb-2 text-slate-300">TIER 2 • MOST POPULAR</div>
                    <h3 className="text-3xl font-bold mb-2">Pro Support</h3>
                    <p className="text-lg text-slate-300">Fully managed compliance (Virtual and Onsite)</p>
                  </div>
                  <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                    <div className="text-xs">Starting at</div>
                    <div className="text-2xl font-bold">$349</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Everything in Essential Toolkit, plus fully managed compliance with expert-led support. We handle the
                  heavy lifting while you focus on growing your business.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-indigo-600" />
                      Managed Compliance
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">EMS Tracking System</div>
                          <div className="text-sm text-muted-foreground">
                            Track employee compliance and training with our management system
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">All-Access Library & LMS</div>
                          <div className="text-sm text-muted-foreground">
                            Unlimited access to resources, templates, and training modules
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Virtual or Onsite Support</div>
                          <div className="text-sm text-muted-foreground">
                            Expert-led compliance management with multi-location coverage
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">2 Free Webinars/Year</div>
                          <div className="text-sm text-muted-foreground">
                            Live training sessions on critical compliance topics
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-indigo-600" />
                      Fractional HR & Safety
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Policies & SOPs</div>
                          <div className="text-sm text-muted-foreground">
                            We create, maintain, and implement all HR and safety policies
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Training Programs</div>
                          <div className="text-sm text-muted-foreground">
                            Fully designed, delivered, and tracked by our team
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Employee Relations</div>
                          <div className="text-sm text-muted-foreground">
                            We act on behalf of your company for HR issues
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Salary Benchmarking</div>
                          <div className="text-sm text-muted-foreground">
                            Comprehensive analysis performed and reported by us
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/services/tier-3-we-do-it">Learn About Pro Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Add-On: Onsite Partnership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                FEATURED ADD-ON
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Onsite Partnership <span className="text-indigo-600">("We Do It+")</span>
              </h2>
              <p className="text-xl text-muted-foreground text-balance">
                The premium upgrade for businesses requiring hands-on, face-to-face support
              </p>
            </div>

            <Card className="border-2 border-indigo-600 shadow-lg">
              <CardHeader className="bg-indigo-50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <HardHat className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Physical Extension of Your Team</CardTitle>
                    <CardDescription>Comprehensive onsite safety and compliance support</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg mb-8 leading-relaxed">
                  <strong>Overview:</strong> We become a physical extension of your team. Our experts visit your
                  facility to conduct inspections, train your staff, and drive your safety culture personally.
                </p>

                <h4 className="font-semibold text-xl mb-6">Key Deliverables:</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HardHat className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-2">Jobsite Inspections</h5>
                      <p className="text-muted-foreground">
                        Regular physical walkthroughs to identify and correct OSHA hazards before they become citations.
                        Our certified safety professionals conduct comprehensive site assessments and provide detailed
                        remediation plans.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-2">Live Training</h5>
                      <p className="text-muted-foreground">
                        In-person instruction for forklifts, CPR/First Aid, and HazCom. Hands-on training sessions
                        ensure your team not only understands compliance requirements but can apply them confidently in
                        real-world scenarios.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-2">Face-to-Face Advisory</h5>
                      <p className="text-muted-foreground">
                        Scheduled onsite hours for leadership coaching and strategy. Work directly with our experts to
                        develop safety culture initiatives, address complex compliance challenges, and build long-term
                        risk management strategies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Custom Pricing Available</div>
                      <div className="font-semibold text-lg">Schedule a consultation to discuss your needs</div>
                    </div>
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap">
                      Request Onsite Partnership
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Add-Ons */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customize Your Coverage</h2>
            <p className="text-xl text-slate-300">
              Add these specialized services to any subscription tier to enhance your protection
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Onsite Partnership */}
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <HardHat className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Onsite Partnership</CardTitle>
                <CardDescription className="text-slate-300">"We Do It+"</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-200 mb-4">
                  We become a physical extension of your team. Our experts visit your facility to conduct inspections,
                  train your staff, and drive your safety culture personally.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Jobsite Inspections</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Live Training Sessions</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Face-to-Face Advisory</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Talent Acquisition */}
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Talent Acquisition</CardTitle>
                <CardDescription className="text-slate-300">Recruiting Made Simple</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-200 mb-4">
                  Full-cycle recruitment without the traditional high-percentage agency fees. We handle sourcing,
                  screening, and interview scheduling to find you the right talent.
                </p>
                <div className="bg-slate-600 rounded-lg p-4 mb-6">
                  <div className="text-sm text-slate-300 mb-1">Pricing Model</div>
                  <div className="font-semibold">Flat-rate or Monthly Subscription</div>
                </div>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Payroll Administration */}
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Payroll Administration</CardTitle>
                <CardDescription className="text-slate-300">Seamless Processing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-200 mb-4">
                  Seamless payroll processing integrated with your HR data to ensure accuracy and wage-and-hour
                  compliance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Automated tax calculations</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Direct deposit management</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Compliance reporting</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-700 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Level is Right for You?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to assess your compliance gaps.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Book Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
