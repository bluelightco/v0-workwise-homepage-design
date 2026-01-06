import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Check, Calendar, DollarSign, FileText, Briefcase } from "lucide-react"
import Image from "next/image"

export default function EssentialAddOnsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Administrative Add-Ons</h1>
              <p className="text-xl text-slate-200 mb-8">
                Enhance your compliance platform with powerful tools for workforce management and talent acquisition
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Request Demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* EMS Advanced Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Advanced EMS Administration</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Unlock the full potential of your Employee Management System with premium administrative features that
                  streamline payroll, benefits, and leave management.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <Image
                    src="/images/bh-new-hris-mac-mockup.png"
                    alt="EMS Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Comprehensive Workforce Administration</h3>
                  <p className="text-muted-foreground mb-6">
                    Upgrade your EMS platform with advanced administrative capabilities that give you complete control
                    over employee data, compensation, and time off management.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 mt-1">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Payroll Tracking</h4>
                        <p className="text-sm text-muted-foreground">
                          Monitor compensation, bonuses, and salary changes with detailed payroll history and reporting
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 mt-1">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Benefits Management</h4>
                        <p className="text-sm text-muted-foreground">
                          Track employee benefits, enrollment status, and benefit changes throughout the year
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 mt-1">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Leave Administration</h4>
                        <p className="text-sm text-muted-foreground">
                          Manage PTO, sick leave, and time-off requests with automated accrual tracking and approval
                          workflows
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-gray-50 border-primary/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Real-time compensation tracking and reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Benefits enrollment management and tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Automated leave accrual calculations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Custom approval workflows for time-off requests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Historical data tracking for audits and compliance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Reduce manual data entry and errors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Maintain accurate compensation records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Streamline benefits administration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Improve leave request approval efficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Ensure compliance with leave policies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Talent Acquisition Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-12 text-center">
                    <Briefcase className="h-24 w-24 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Talent Acquisition Services</h3>
                    <p className="text-muted-foreground">Professional recruiting and hiring support</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-4">Talent Acquisition Add-On</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Partner with our expert recruiting team to find, attract, and hire the best talent for your
                    organization. From job postings to final offers, we support your entire hiring process.
                  </p>

                  <h4 className="font-semibold mb-4">What's Included:</h4>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Job Posting Optimization</span>
                        <p className="text-sm text-muted-foreground">
                          Craft compelling job descriptions and post to top job boards
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Candidate Sourcing</span>
                        <p className="text-sm text-muted-foreground">
                          Access our network and recruiting tools to find qualified candidates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Resume Screening</span>
                        <p className="text-sm text-muted-foreground">
                          Expert review and ranking of candidate applications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Interview Coordination</span>
                        <p className="text-sm text-muted-foreground">
                          Schedule interviews and manage candidate communication
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Offer Management</span>
                        <p className="text-sm text-muted-foreground">
                          Support with offer letters, negotiation, and onboarding coordination
                        </p>
                      </div>
                    </div>
                  </div>

                  <Card className="p-6 bg-white border-primary/20">
                    <h4 className="font-semibold mb-2">Perfect For:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Growing companies without dedicated HR staff</li>
                      <li>• Organizations expanding into new markets</li>
                      <li>• Businesses with high-volume or specialized hiring needs</li>
                      <li>• Companies looking to reduce time-to-hire</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & CTA Section */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Compliance Platform?</h2>
              <p className="text-xl text-slate-200 mb-8">
                Add these powerful features to any of our service tiers and streamline your HR operations today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get Custom Pricing</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
              <p className="text-sm text-slate-300 mt-6">
                These add-ons can be combined with any service tier. Contact us for a customized quote.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
