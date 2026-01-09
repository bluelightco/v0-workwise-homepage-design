"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, ArrowRight, Phone, Monitor, Users, FileText, Briefcase } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [employeeCount, setEmployeeCount] = useState(10)

  const getEssentialsPrice = () => {
    if (employeeCount <= 25) return 89
    return 89 + (employeeCount - 25) * 6
  }

  const getVirtualPlusPrice = () => {
    if (employeeCount <= 10) return 375
    if (employeeCount <= 25) return 575
    if (employeeCount <= 50) return 750
    if (employeeCount <= 99) return 1000
    return "schedule" // 100+
  }

  const essentialsPrice = getEssentialsPrice()
  const essentialsAnnual = Math.round(essentialsPrice * 12 * 0.8)
  const virtualPlusPrice = getVirtualPlusPrice()
  const virtualPlusAnnual = typeof virtualPlusPrice === "number" ? Math.round(virtualPlusPrice * 12 * 0.8) : null

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{"Let Us Simplify Your HR & Safety"}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From posters to full-service support — find the right level for your business
            </p>
          </div>
        </section>

        <section className="py-8 bg-slate-50 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <label className="text-sm font-semibold text-foreground block mb-3 text-center">
                How many employees do you have?
              </label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-8">1</span>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-sm text-muted-foreground w-8">100</span>
              </div>
              <div className="text-center mt-2">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-1.5 rounded-full">
                  <Users className="w-4 h-4" />
                  {employeeCount} employee{employeeCount !== 1 ? "s" : ""}
                  {employeeCount === 100 && "+"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-6 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3">
              <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${isAnnual ? "bg-primary" : "bg-muted"}`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 rounded-full transition-all bg-white ${
                    isAnnual ? "left-6" : "left-0.5"
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Annual
              </span>
              <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">Save 20%</span>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Labor Law Posters */}
                <Card className="border-2 hover:shadow-lg transition-shadow gap-0">
                  <CardHeader className="bg-white p-6 text-center min-h-[200px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <FileText className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold">Labor Law Posters</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Stay compliant with required postings</p>
                    </div>
                    <div className="flex flex-col items-center w-full mx-0 my-2">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-primary">$19</span>
                        <span className="text-muted-foreground text-sm">/poster</span>
                      </div>
                      <div className="h-5"></div>
                      <Button className="w-full mt-2" size="lg" asChild>
                        <Link href="/shop-posters">
                          Shop Posters
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">WHAT YOU GET</p>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Single or Multi-Location</p>
                          <p className="text-xs text-muted-foreground">Scalable for any business size</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Automatic Updates</p>
                          <p className="text-xs text-muted-foreground">When laws change, you're covered</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Subscribe & Save</p>
                          <p className="text-xs text-muted-foreground">Ongoing compliance made easy</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-center text-xs text-muted-foreground mt-4 pt-4 border-t">
                      Low-friction entry point or add-on
                    </p>
                  </CardContent>
                </Card>

                {/* Workplace Essentials */}
                <Card className="border-2 hover:shadow-lg transition-shadow gap-0">
                  <CardHeader className="bg-white p-6 text-center min-h-[200px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold">Workplace Essentials</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Foundational HR & Safety support</p>
                    </div>
                    <div className="flex flex-col items-center w-full mx-0 my-2">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-primary">
                          ${isAnnual ? Math.round(essentialsAnnual / 12) : essentialsPrice}
                        </span>
                        <span className="text-muted-foreground text-sm">/mo</span>
                      </div>
                      <div className="h-5">
                        {isAnnual && (
                          <p className="text-xs text-green-600 font-medium text-center">
                            Save ${(essentialsPrice * 12 - essentialsAnnual).toLocaleString()}/yr
                          </p>
                        )}
                      </div>
                      <Button className="w-full mt-2" size="lg" asChild>
                        <Link href="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">WHAT YOU GET</p>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">1 Labor Law Poster Included</p>
                          <p className="text-xs text-muted-foreground">State & Federal compliance</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Employee Management System </p>
                          <p className="text-xs text-muted-foreground">Onboarding, time-off, docs & more</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">LMS Training Modules</p>
                          <p className="text-xs text-muted-foreground">On-demand compliance courses</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Step-by-Step Compliance Guides</p>
                          <p className="text-xs text-muted-foreground">Clear, actionable resources</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-center text-xs text-muted-foreground mt-4 pt-4 border-t">
                      Perfect for small businesses
                    </p>
                  </CardContent>
                </Card>

                {/* Virtual + */}
                <Card className="border-2 border-primary shadow-lg relative gap-0">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                  <CardHeader className="bg-white p-6 text-center rounded-t-lg min-h-[200px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Monitor className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold">Virtual +</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Dedicated virtual HR & Safety partner</p>
                    </div>
                    <div className="flex flex-col items-center w-full mx-0 my-2">
                      {virtualPlusPrice === "schedule" ? (
                        <>
                          <div className="flex items-baseline justify-center gap-1">
                            <Phone className="w-5 h-5 text-primary" />
                            <span className="text-3xl font-bold text-primary">Let's Talk</span>
                          </div>
                          <div className="h-5">
                            <p className="text-xs text-muted-foreground text-center">Custom Pricing</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-3xl font-bold text-primary">
                              ${isAnnual && virtualPlusAnnual ? Math.round(virtualPlusAnnual / 12) : virtualPlusPrice}
                            </span>
                            <span className="text-muted-foreground text-sm">/mo</span>
                          </div>
                          <div className="h-5">
                            {isAnnual && virtualPlusAnnual && (
                              <p className="text-xs text-green-600 font-medium text-center">
                                Save ${(virtualPlusPrice * 12 - virtualPlusAnnual).toLocaleString()}/yr
                              </p>
                            )}
                          </div>
                        </>
                      )}
                      <Button className="w-full mt-2" size="lg" asChild>
                        <Link href="/contact">
                          Schedule a Call
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">WHAT YOU GET</p>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">Everything in Workplace Essentials</p>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Dedicated Virtual Partner</p>
                          <p className="text-xs text-muted-foreground">Your HR & Safety business partner</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Compliance & Policy Guidance</p>
                          <p className="text-xs text-muted-foreground">Expert support on employee relations</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Custom Solutions</p>
                          <p className="text-xs text-muted-foreground">Policies, SOPs & employee relations</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Unlimited Consultation</p>
                          <p className="text-xs text-muted-foreground">Proactive updates & recommendations</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Flexible, Scalable Support</p>
                          <p className="text-xs text-muted-foreground">Grows with your business</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-center text-xs text-muted-foreground mt-4 pt-4 border-t">
                      The sweet spot between DIY and full-service
                    </p>
                  </CardContent>
                </Card>

                {/* Onsite Pro */}
                <Card className="border-2 hover:shadow-lg transition-shadow gap-0">
                  <CardHeader className="bg-white p-6 text-center min-h-[200px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold">Onsite Pro</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Premium, fully personalized service</p>
                    </div>
                    <div className="flex flex-col items-center w-full mx-0 my-2">
                      <div className="flex items-baseline justify-center gap-1">
                        <Phone className="w-5 h-5 text-primary" />
                        <span className="text-3xl font-bold text-primary">Let's Talk</span>
                      </div>
                      <div className="h-5">
                        <p className="text-xs text-muted-foreground text-center">Custom Pricing</p>
                      </div>
                      <Button className="w-full mt-2" size="lg" asChild>
                        <Link href="/contact">
                          Schedule a Call
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">WHAT YOU GET</p>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">Everything in Virtual +</p>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Onsite HR & Safety Partner</p>
                          <p className="text-xs text-muted-foreground">Audits, training & ongoing guidance</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Hands-On Implementation</p>
                          <p className="text-xs text-muted-foreground">We execute, not just advise</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Dedicated Onsite Presence</p>
                          <p className="text-xs text-muted-foreground">Regular visits & ongoing support</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-center text-xs text-muted-foreground mt-4 pt-4 border-t">
                      White-glove service for your business
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table - Updated for 4 tiers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Compare Plans</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-center p-4 font-bold">Labor Law Posters</th>
                      <th className="text-center p-4 font-bold">Workplace Essentials</th>
                      <th className="text-center p-4 font-bold bg-primary/5">Virtual +</th>
                      <th className="text-center p-4 font-bold">Onsite Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4">Labor Law Posters</td>
                      <td className="text-center p-4">
                        <div className="text-sm">A la carte</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-sm">1 included</div>
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Automatic Updates</td>
                      <td className="text-center p-4">
                        <div className="text-sm">Subscribe & Save</div>
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Employee Management System </td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">LMS Training Modules</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Compliance Guides</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Digital Tools & Templates</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Dedicated HR & Safety Partner</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-primary/5">
                        <div className="text-sm font-medium">Virtual</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-sm font-medium">Onsite</div>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Policy & Compliance Guidance</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Employee Relations Support</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Custom SOPs & Policies</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Unlimited Consultation</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Onsite Audits & Training</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4 bg-primary/5">-</td>
                      <td className="text-center p-4">
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
                  <h3 className="font-bold text-xl mb-2">
                    What&apos;s the difference between Virtual + and Onsite Pro?
                  </h3>
                  <p className="text-muted-foreground">
                    Virtual + provides dedicated remote HR & Safety support, perfect for growing businesses. Onsite Pro
                    includes all that plus in-person visits for audits, training, and hands-on guidance — ideal for
                    businesses needing a physical presence.
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
                    Monthly plans are month-to-month with no long-term commitment required. Annual plans offer 20%
                    savings and can be canceled with 30 days notice.
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
