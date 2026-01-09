import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Tier1Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              STARTER
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Compliance Essentials</h1>
            <p className="text-2xl mb-4 text-indigo-100">"You Post It"</p>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              The foundational layer of compliance. We handle the regulatory tracking and ensure your physical and
              digital workspaces meet all state, federal, and local posting regulations.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white text-indigo-600 px-6 py-3 rounded-lg">
                <div className="text-sm">Starting at</div>
                <div className="text-3xl font-bold">$99</div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">What We Handle For You</h2>

              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  The Industry Standard for Posting Compliance
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
                  Don't let a missing notice cost you thousands in fines. Our "Space Saver" All-In-One posters combine
                  every mandatory state and federal notice into a single, laminated solution.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-3">Auto-Update Service</h3>
                        <p className="text-muted-foreground">
                          We monitor over 22,000 jurisdictions. When a mandatory change occurs, we automatically ship
                          your replacement posters—no action needed from you.
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
                        <h3 className="font-bold text-xl mb-3">$40,000 "We Pay The Fine" Guarantee</h3>
                        <p className="text-muted-foreground">
                          We stand behind our work with an industry-leading reimbursement guarantee if you are fined for
                          improper posting content.
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
                        <h3 className="font-bold text-xl mb-3">Remote Coverage</h3>
                        <p className="text-muted-foreground">
                          Includes digital downloads for your remote or hybrid employees. Email your posters instantly
                          or provide secure online access.
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
                        <h3 className="font-bold text-xl mb-3">City & County Options</h3>
                        <p className="text-muted-foreground">
                          Add specific local ordinance posters to ensure full coverage for your specific zip code.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/shop-posters">Shop Posters</Link>
                </Button>
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
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="font-semibold text-lg mb-2">Small Businesses</h3>
                  <p className="text-muted-foreground">
                    Startups and small companies that need basic compliance without HR overhead.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="font-semibold text-lg mb-2">Multi-Location Businesses</h3>
                  <p className="text-muted-foreground">
                    Organizations with multiple sites that need jurisdiction-specific posters.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="font-semibold text-lg mb-2">Remote Teams</h3>
                  <p className="text-muted-foreground">
                    Companies with distributed workforces needing digital poster access.
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
              <h2 className="text-4xl font-bold mb-6">Ready for More?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Tier 1 provides the foundation. When you're ready to streamline HR processes and access training tools,
                upgrade to Tier 2.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-slate-800 hover:bg-gray-100" asChild>
                <Link href="/services/tier-2-you-do-it">
                  Explore Tier 2: You Do It <ArrowRight className="ml-2 h-5 w-5" />
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
