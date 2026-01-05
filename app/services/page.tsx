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

          {/* Growth Staircase Visual */}
          <div className="mt-16 flex items-end justify-center gap-4 max-w-2xl mx-auto">
            <div className="flex flex-col items-center flex-1">
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 w-full h-24 flex items-center justify-center mb-2">
                <span className="font-semibold text-sm text-indigo-900">Tier 1</span>
              </div>
              <span className="text-xs text-white/70">You Post It</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 w-full h-32 flex items-center justify-center mb-2">
                <span className="font-semibold text-indigo-900">Tier 2</span>
              </div>
              <span className="text-xs text-white/70">You Do It</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 w-full h-40 flex items-center justify-center mb-2">
                <span className="font-semibold text-lg text-indigo-900">Tier 3</span>
              </div>
              <span className="text-xs text-white/70">We Do It</span>
            </div>
            <TrendingUp className="absolute right-0 w-32 h-32 text-white/20" />
          </div>
        </div>
      </section>

      {/* 3-Tier Service Model */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pick Your Lane</h2>
            <p className="text-xl text-muted-foreground">Choose the engagement level that fits your business</p>
          </div>

          {/* Tier 1: Compliance Essentials */}
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="overflow-hidden">
              <div className="bg-indigo-100 p-6 border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold text-indigo-600 mb-2">TIER 1</div>
                    <h3 className="text-3xl font-bold mb-2">Compliance Essentials</h3>
                    <p className="text-lg text-muted-foreground">"You Post It"</p>
                  </div>
                  <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                    <div className="text-xs">Starting at</div>
                    <div className="text-2xl font-bold">$99</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  The foundational layer of compliance. We handle the regulatory tracking and ensure your physical and
                  digital workspaces meet all state, federal, and local posting regulations.
                </p>

                <h4 className="font-semibold text-lg mb-4">What We Handle:</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Auto-Update Service</div>
                      <div className="text-sm text-muted-foreground">
                        We monitor over 22,000 jurisdictions. When a mandatory change occurs, we automatically ship your
                        replacement posters.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Remote Coverage</div>
                      <div className="text-sm text-muted-foreground">
                        Includes access to digital downloads for remote/hybrid staff.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">The Guarantee</div>
                      <div className="text-sm text-muted-foreground">
                        Backed by our $40,000 "We Pay The Fine" Guarantee.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Space Saver Posters</div>
                      <div className="text-sm text-muted-foreground">
                        All-in-One format for easy display and compliance.
                      </div>
                    </div>
                  </div>
                </div>

                <Button size="lg" asChild>
                  <Link href="/products">Shop Compliance Essentials</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Tier 2: HR & Safety Toolkit */}
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="overflow-hidden border-2 border-indigo-600">
              <div className="bg-indigo-600 text-white p-6 border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold mb-2 text-indigo-200">TIER 2 • MOST POPULAR</div>
                    <h3 className="text-3xl font-bold mb-2">HR & Safety Toolkit</h3>
                    <p className="text-lg text-indigo-100">"You Do It"</p>
                  </div>
                  <div className="bg-white text-indigo-600 px-4 py-2 rounded-lg">
                    <div className="text-xs">Starting at</div>
                    <div className="text-2xl font-bold">$299</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Empower your internal team with the Employee Management System (EMS)—our cloud-based platform that
                  centralizes your workflows and reduces administrative burden.
                </p>

                <h4 className="font-semibold text-lg mb-4">What You Get:</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex gap-3">
                    <GraduationCap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Training Tracker (LMS)</div>
                      <div className="text-sm text-muted-foreground">
                        Full access to our Learning Management System to assign and track mandatory courses like Sexual
                        Harassment Prevention.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Resource Library</div>
                      <div className="text-sm text-muted-foreground">
                        Unlimited downloads of attorney-reviewed HR forms, checklists, and compliance guides.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Digital Onboarding</div>
                      <div className="text-sm text-muted-foreground">
                        Paperless new-hire packets with e-signature capabilities.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">AI Support</div>
                      <div className="text-sm text-muted-foreground">
                        24/7 access to our compliance chatbot for instant answers.
                      </div>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Demo the Toolkit
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Tier 3: Virtual Director */}
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="bg-slate-800 text-white p-6 border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold mb-2 text-slate-300">TIER 3</div>
                    <h3 className="text-3xl font-bold mb-2">Virtual Director</h3>
                    <p className="text-lg text-slate-300">"We Do It"</p>
                  </div>
                  <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                    <div className="text-xs">Custom</div>
                    <div className="text-2xl font-bold">Pricing</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Gain a dedicated HR and Safety Business Partner who works virtually to build your infrastructure,
                  manage liability, and handle complex employee relations.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-indigo-600" />
                      HR Consulting Services
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Handbook Development</div>
                          <div className="text-sm text-muted-foreground">
                            Custom-written employee handbooks tailored to your culture and local laws.
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Employee Relations</div>
                          <div className="text-sm text-muted-foreground">
                            Guidance on disciplinary actions, terminations, and internal investigations.
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Compensation Analysis</div>
                          <div className="text-sm text-muted-foreground">
                            Benchmarking data to ensure competitive and compliant pay structures.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <HardHat className="w-5 h-5 text-indigo-600" />
                      Safety Consulting Services
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">IIPP Development</div>
                          <div className="text-sm text-muted-foreground">
                            Creation of your mandatory Injury & Illness Prevention Program.
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Risk Assessments</div>
                          <div className="text-sm text-muted-foreground">
                            Virtual audits of your safety protocols and hazard identification.
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">OSHA Response</div>
                          <div className="text-sm text-muted-foreground">
                            Expert guidance and representation during regulatory inquiries.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <Button size="lg" variant="outline">
                  Meet Your Virtual Partner
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
