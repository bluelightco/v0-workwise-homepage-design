import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, Shield, Truck, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PosterDetailPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Product Header */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-sm text-muted-foreground mb-2">
              <Link href="/shop-posters" className="hover:text-primary">
                Posters
              </Link>
              {" / "}
              <span>State-Only Labor Law Posters</span>
            </div>
          </div>
        </section>

        {/* Product Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div>
                <div className="bg-gray-100 rounded-lg p-8 aspect-square flex items-center justify-center">
                  <img
                    src="/images/poster-email.jpeg"
                    alt="State-Only Labor Law Posters"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">State-Only Labor Law Posters</h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  WorkWise Compliance's State-Only Labor Law Posters are designed for employers who display state and
                  federal employment laws, occupational safety and health, and limited regulations individually. These
                  labor law compliance posters are updated individually. Please note that both state and federal labor
                  law posters are required at every worksite. Employers seeking a consolidated option prefer 351 All-On-
                  One labor law poster.
                </p>

                {/* State Selector */}
                <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">Choose Your State To Order</h3>
                  </div>
                  <div className="space-y-3">
                    <Select>
                      <SelectTrigger className="w-full bg-background">
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="california">California</SelectItem>
                        <SelectItem value="texas">Texas</SelectItem>
                        <SelectItem value="new-york">New York</SelectItem>
                        <SelectItem value="florida">Florida</SelectItem>
                        <SelectItem value="illinois">Illinois</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button size="lg" className="w-full">
                      Shop Now
                    </Button>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Fully Compliant & Attorney-Reviewed</p>
                      <p className="text-sm text-muted-foreground">
                        Meet all mandatory posting requirements for your state
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Durable & Professional</p>
                      <p className="text-sm text-muted-foreground">Laminated for long-lasting display</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Free Shipping</p>
                      <p className="text-sm text-muted-foreground">Delivered to your door at no extra cost</p>
                    </div>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Free Shipping</p>
                  </div>
                  <div className="text-center">
                    <RefreshCw className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Easy Returns</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">100% Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-gray-50">
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
                  value="obligations"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Compliance Obligations
                </TabsTrigger>
                <TabsTrigger
                  value="penalties"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Penalties
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-8 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold mb-4">When Are State-Only Labor Law Posters Required?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    State and federal laws require employers to display government labor law posters in the workplace.
                    The purpose of these labor law posters is to inform employees of their rights under the applicable
                    laws and regulations, including wage and hour violations, and other civil rights infringements to
                    the government.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If your business has employees working in a particular state, you must display that state's required
                    employment law posters, even if you already post Federal notices. Posting federal labor law posters
                    alone does not satisfy state compliance obligations.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="requirements" className="mt-8 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold mb-4">
                    What Compliance Obligations Do Employers Have for State-Only Labor Law Posters?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Employers are responsible for ensuring that all applicable state labor law posters are:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Displayed conspicuously at all employee work locations</li>
                    <li>Current and accurate, reflecting the latest state law requirements</li>
                    <li>Posted in every physical location where the state mandates posting</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="obligations" className="mt-8 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold mb-4">How Often Do State-Only Labor Law Posters Change?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    State-only labor law posters change frequently. In many states, posting updates occur multiple times
                    per year due to new legislation, wage increases, or regulatory changes.
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">Annual minimum wage increases (often January 1)</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">New or expanded paid leave laws</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">
                          Workplace health and safety regulation updates like the Safe at Home law
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">Anti-discrimination or retaliation law changes</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="penalties" className="mt-8 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold mb-4">
                    What Penalties Apply if a State-Only Labor Law Poster is Missing or Outdated?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Penalties for missing or incorrect state-only labor law posters vary by state but can include:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold shrink-0">•</span>
                      <div>
                        <p className="font-medium">
                          Monetary fines assessed per missing or incorrect labor compliance notice
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold shrink-0">•</span>
                      <div>
                        <p className="font-medium">Citations issued during labor inspections or audits</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold shrink-0">•</span>
                      <div>
                        <p className="font-medium">Increased scrutiny during wage, discrimination investigations</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Need Automatic Updates?</h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our poster update service and never worry about compliance again. We'll automatically send
              you new posters whenever regulations change.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">View Subscription Plans</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
