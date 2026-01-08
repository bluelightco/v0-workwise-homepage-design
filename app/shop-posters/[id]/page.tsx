"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Shield, Truck, RefreshCw, Plus, Minus, Upload } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function PosterDetailPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedPurchaseType, setSelectedPurchaseType] = useState<"subscription" | "buy-once">("subscription")
  const [showLogoUpload, setShowLogoUpload] = useState(false)

  const basePrice = 49.99
  const subscriptionPrice = basePrice * 0.9 // 10% discount
  const pricePerUnit = selectedPurchaseType === "subscription" ? subscriptionPrice : basePrice
  const totalPrice = pricePerUnit * quantity

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-sm text-muted-foreground mb-2">
              <Link href="/shop-posters" className="hover:text-primary">
                Posters
              </Link>
              {" / "}
              <Link href="/shop-posters" className="hover:text-primary">
                State-Only Labor Law Posters
              </Link>
              {" / "}
              <span>California</span>
            </div>
          </div>
        </section>

        {/* Product Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div>
                <div className="bg-gray-100 rounded-lg p-8 aspect-[3/4] flex items-center justify-center sticky top-8">
                  <img
                    src="/images/ca-labor-law-poster.webp"
                    alt="California State-Only Labor Law Poster"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  California State-Only Labor Law Poster
                </h1>
                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="secondary">State-Only</Badge>
                  <Badge variant="outline">California</Badge>
                </div>

                <div className="text-3xl font-bold text-primary mb-6">${totalPrice.toFixed(2)}</div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Stay compliant with California's labor law requirements. This poster includes all mandatory state
                  employment notices that must be displayed in your workplace.
                </p>

                <div className="space-y-3 mb-6">
                  <label className="text-sm font-medium">Choose Your Purchase Option:</label>
                  <div className="grid gap-3">
                    <Card
                      className={`cursor-pointer transition-all ${
                        selectedPurchaseType === "subscription"
                          ? "border-primary border-2 bg-primary/5"
                          : "border-gray-200 hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedPurchaseType("subscription")}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                              selectedPurchaseType === "subscription" ? "border-primary bg-primary" : "border-gray-300"
                            }`}
                          >
                            {selectedPurchaseType === "subscription" && (
                              <div className="w-2 h-2 bg-white rounded-full" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-semibold">Auto-Update</p>
                              <Badge className="bg-green-600 hover:bg-green-700">Save 10%</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              ${subscriptionPrice.toFixed(2)}/year per poster
                            </p>
                            <ul className="space-y-1 text-sm">
                              <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span>Free updates when laws change mid-year</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span>$40,000 penalty coverage included</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span>Automatic compliance monitoring</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all ${
                        selectedPurchaseType === "buy-once"
                          ? "border-primary border-2 bg-primary/5"
                          : "border-gray-200 hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedPurchaseType("buy-once")}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                              selectedPurchaseType === "buy-once" ? "border-primary bg-primary" : "border-gray-300"
                            }`}
                          >
                            {selectedPurchaseType === "buy-once" && <div className="w-2 h-2 bg-white rounded-full" />}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold mb-1">Buy Once</p>
                            <p className="text-sm text-muted-foreground mb-2">
                              ${basePrice.toFixed(2)} one-time purchase
                            </p>
                            <ul className="space-y-1 text-sm">
                              <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span>Current poster delivered immediately</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">No automatic updates</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Quantity:</label>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={decrementQuantity}
                        disabled={quantity <= 1}
                        className="rounded-r-none"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <div className="w-16 text-center font-semibold border-x py-2">{quantity}</div>
                      <Button variant="ghost" size="icon" onClick={incrementQuantity} className="rounded-l-none">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ${pricePerUnit.toFixed(2)} each
                      {selectedPurchaseType === "subscription" && " per year"}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => setShowLogoUpload(!showLogoUpload)}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Add Your Company Logo
                  </Button>
                  {showLogoUpload && (
                    <div className="mt-3 p-4 border rounded-lg bg-gray-50">
                      <p className="text-sm text-muted-foreground mb-3">
                        Upload your company logo to customize your poster. Accepted formats: PNG, JPG, SVG
                      </p>
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg,.svg"
                        className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                      />
                    </div>
                  )}
                </div>

                <Button size="lg" className="w-full mb-6">
                  Add to Cart - ${totalPrice.toFixed(2)}
                </Button>

                {/* Key Features */}
                <div className="space-y-3 mb-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Attorney-Reviewed & Compliant</p>
                      <p className="text-sm text-muted-foreground">Meets all California posting requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Durable Laminated Material</p>
                      <p className="text-sm text-muted-foreground">
                        Tear-resistant and waterproof for long-lasting use
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Professional Design</p>
                      <p className="text-sm text-muted-foreground">Clear, easy-to-read layout</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Fast Shipping</p>
                      <p className="text-sm text-muted-foreground">Ships within 4 business days</p>
                    </div>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg border">
                  <div className="text-center">
                    <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Fast Shipping</p>
                  </div>
                  <div className="text-center">
                    <RefreshCw className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Easy Returns</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Guaranteed Accurate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-y">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">California Required Labor Law Notices</h2>
                <p className="text-muted-foreground mb-4">
                  California employers are required to post the following mandatory state labor law notices. They must
                  be displayed in a conspicuous and accessible place.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Minimum Wage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Payday Notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Healthy Workplaces/Healthy Families Act</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Safety and Health Protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Emergency Phone Numbers</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Poster Specifications</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Size:</span>
                    <span className="text-muted-foreground">18" W x 48" H</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Material:</span>
                    <span className="text-muted-foreground">Laminated Poly</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Design:</span>
                    <span className="text-muted-foreground">Full-Color Professional</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Compliance:</span>
                    <span className="text-muted-foreground">2025 Current</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Product Description
                </TabsTrigger>
                <TabsTrigger
                  value="requirements"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Requirements
                </TabsTrigger>
                <TabsTrigger
                  value="updates"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Updates & Changes
                </TabsTrigger>
                <TabsTrigger
                  value="penalties"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Penalties
                </TabsTrigger>
                <TabsTrigger
                  value="customization"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Customization
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-8 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold mb-4">California State-Only Labor Law Poster Requirements</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    California law requires employers to display state-specific labor law posters in the workplace. The
                    purpose of these posters is to inform employees of their rights under California labor laws,
                    including wage and hour requirements, health and safety regulations, and anti-discrimination
                    protections.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This poster includes all mandatory California employment notices in one convenient,
                    professionally-designed format. It measures 18" x 48" and features a clean, full-color design that
                    makes efficient use of space while ensuring readability.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="requirements" className="mt-8 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Who Must Display California Labor Law Posters?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All employers with employees working in California must display the required state labor law
                    posters, regardless of company size. This includes:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Private businesses of any size</li>
                    <li>Non-profit organizations</li>
                    <li>Government agencies</li>
                    <li>Temporary staffing agencies</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Posters must be displayed in a conspicuous location where employees can easily read them, such as
                    break rooms, time clock areas, or near entrances.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="updates" className="mt-8 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold mb-4">How Often Do California Labor Law Posters Change?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    California labor law posters change frequently, often multiple times per year. Common updates
                    include:
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">Minimum wage increases (typically January 1)</p>
                        <p className="text-sm text-muted-foreground">
                          Both state and local minimum wages can change annually
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">New or expanded paid leave laws</p>
                        <p className="text-sm text-muted-foreground">
                          California frequently updates sick leave and family leave requirements
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">Workplace safety regulation updates</p>
                        <p className="text-sm text-muted-foreground">Cal/OSHA regularly updates safety requirements</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="font-semibold text-primary mb-2">Subscribe for Automatic Updates</p>
                    <p className="text-sm text-muted-foreground">
                      With our You-Post-It Auto-Updates subscription, you'll automatically receive new posters whenever
                      California labor laws change - at no additional cost.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="penalties" className="mt-8 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold mb-4">
                    Penalties for Missing or Outdated California Labor Law Posters
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    California employers who fail to display required labor law posters may face significant penalties:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold shrink-0">•</span>
                      <div>
                        <p className="font-medium">Fines up to $10,000 per violation</p>
                        <p className="text-sm text-muted-foreground">
                          Each missing or outdated poster can be considered a separate violation
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold shrink-0">•</span>
                      <div>
                        <p className="font-medium">Citations during Labor Commissioner audits</p>
                        <p className="text-sm text-muted-foreground">
                          Poster compliance is checked during workplace inspections
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold shrink-0">•</span>
                      <div>
                        <p className="font-medium">Liability in employee lawsuits</p>
                        <p className="text-sm text-muted-foreground">
                          Missing posters can strengthen employee claims in wage and hour disputes
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="font-semibold text-green-800 mb-2">$40,000 Penalty Coverage Included</p>
                    <p className="text-sm text-green-700">
                      You-Post-It Auto-Updates subscribers receive up to $40,000 in penalty coverage if you're fined for
                      an outdated poster we provided.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="customization" className="mt-8 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Customize Your Labor Law Posters</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Personalize your labor law posters by adding your company logo. It's a simple way to brand your
                    compliance materials while ensuring your business stays fully compliant.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">How Customization Works:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                        <li>Upload your company logo during checkout</li>
                        <li>We'll create a custom design with your logo professionally placed</li>
                        <li>Review and approve the design before we print</li>
                        <li>Receive your custom posters within 4 business days</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Accepted File Formats:</h4>
                      <p className="text-muted-foreground">
                        PNG, JPG, or SVG files. For best results, use high-resolution images (300 DPI or higher).
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">What's included in the California State-Only poster?</h3>
                <p className="text-muted-foreground">
                  This all-in-one poster includes all mandatory California state labor law notices required for general
                  employers. Federal notices are sold separately or as part of our All-in-One (State + Federal) poster.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Do I need both state and federal posters?</h3>
                <p className="text-muted-foreground">
                  Yes, California employers must display both state and federal labor law notices. You can purchase them
                  separately or get our All-in-One poster that includes both.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">What's the difference between subscription and buy once?</h3>
                <p className="text-muted-foreground">
                  The subscription option (You-Post-It Auto-Updates) automatically sends you updated posters whenever
                  California labor laws change, includes $40,000 penalty coverage, and saves you 10%. The buy-once
                  option provides the current poster with no automatic updates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Can I add my company logo?</h3>
                <p className="text-muted-foreground">
                  Yes! Simply click "Add Your Company Logo" during checkout and upload your logo file. We'll create a
                  custom design for your review before printing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Need Additional Compliance Support?</h2>
            <p className="text-lg opacity-90 mb-8">
              Explore our full suite of compliance services including multi-state poster management, safety training,
              and virtual HR support.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
