import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle, Users, Zap, Shield, Heart } from "lucide-react"

export const metadata = {
  title: "About Us - WorkWise Compliance",
  description:
    "Learn about WorkWise Compliance - combining cutting-edge HR technology with real experts for comprehensive compliance solutions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 to-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">We Make Compliance Human.</h1>
            <p className="text-xl md:text-2xl text-slate-100 leading-relaxed text-balance">
              Workwise Compliance has created the most comprehensive compliance partner in the industry. We combine
              cutting-edge HR technology with a team of real experts who care about your business as much as you do.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Our Mission.</h2>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              <p className="text-lg leading-relaxed">
                For over 35 years, Workwise Compliance has been the silent guardian for businesses across America,
                supplying over 10 million labor law posters and providing the essential regulatory tracking that keeps
                companies audit-ready. We built our reputation on reliability and our "We Pay The Fine" guarantee.
              </p>
              <p className="text-lg leading-relaxed">
                At WorkWise Compliance, our mission is to empower businesses with effortless workplace compliance solutions and essential workplace resources, enabling them to thrive in today's dynamic regulatory landscape.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mt-8">
                <p className="text-lg font-semibold text-slate-900">
                  Our Mission: To empower businesses with effortless compliance solutions, allowing owners to focus on
                  growth while we reduce their liability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">What Drives Us</h2>
            <p className="text-xl text-slate-600 mb-12 text-center">Our core values guide everything we do</p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Integrity */}
              <Card className="border-t-4 border-t-purple-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                      <Shield className="w-8 h-8 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Integrity</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Do what you say, say what you mean. We uphold the highest ethical standards. If we make a
                        mistake, we own it and we fix it.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Synergy */}
              <Card className="border-t-4 border-t-purple-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                      <Users className="w-8 h-8 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Synergy</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Better together. We believe in the power of collaboration—between our internal teams and with
                        you, our clients. It's not "my way" or "your way," it's our way.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Innovation */}
              <Card className="border-t-4 border-t-purple-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                      <Zap className="w-8 h-8 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Innovation</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Building the new. We don't just follow regulations; we anticipate them. From our digital EMS
                        platform to AI-driven updates, we are constantly evolving to keep you ahead.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service */}
              <Card className="border-t-4 border-t-purple-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                      <Heart className="w-8 h-8 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Service</h3>
                      <p className="text-slate-600 leading-relaxed">
                        It's everyone's job. Service isn't a department at Workwise; it's a mindset. We are here to
                        serve our clients, our community, and each other.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="meet-the-experts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Meet the Experts</h2>
            <p className="text-xl text-slate-600 mb-12 text-center">
              The strategists, attorneys, and safety nerds driving your success.
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
              {[
                { name: "John Smith", title: "Chief Executive Officer" },
                { name: "Sarah Johnson", title: "Chief Compliance Officer" },
                { name: "Michael Chen", title: "VP of Operations" },
                { name: "Emily Rodriguez", title: "VP of Product / Technology" },
                { name: "David Martinez", title: "Head of Safety Services" },
                { name: "Lisa Thompson", title: "Director of HR Services" },
                { name: "Robert Wilson", title: "General Counsel" },
                { name: "Jennifer Lee", title: "VP of Client Success" },
              ].map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{member.name}</h3>
                    <p className="text-sm text-slate-600">{member.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                View Full Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Impact */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Recognized for Excellence</h2>

            {/* Stats Bar */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">35+</div>
                <div className="text-xl text-slate-300">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">20,000+</div>
                <div className="text-xl text-slate-300">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-xl text-slate-300">Audit Success Rate</div>
              </div>
            </div>

            {/* Awards */}
            <div className="border-t border-slate-700 pt-12">
              <h3 className="text-2xl font-bold mb-8 text-center">Awards & Recognition</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-slate-700 border-slate-600">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">Inc. 5000</h4>
                    <p className="text-slate-300 text-sm">Fastest Growing Private Companies</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700 border-slate-600">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">SHRM</h4>
                    <p className="text-slate-300 text-sm">Preferred Provider</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700 border-slate-600">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">Safety Council</h4>
                    <p className="text-slate-300 text-sm">Excellence in Safety Training</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Love Where You Work</h2>
            <p className="text-2xl text-purple-600 mb-8 text-center font-semibold">
              "A Company is Only as Good as the People it Keeps."
            </p>
            <p className="text-lg text-slate-700 mb-8 text-center leading-relaxed">
              We are always looking for passionate HR Business Partners, Safety Consultants, and Sales professionals to
              join our family. At Workwise, you can be yourself, love your work, and make a tangible difference for
              business owners every day.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Remote-First Culture</h3>
                  <p className="text-sm text-slate-600">Work from anywhere with flexibility</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Professional Development</h3>
                  <p className="text-sm text-slate-600">Grow your skills and career</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Comprehensive Benefits</h3>
                  <p className="text-sm text-slate-600">Health, wellness, and more</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white">
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Stay Connected</h2>
            <p className="text-xl text-slate-600 mb-12">
              Follow us for daily HR tips, safety memes, and behind-the-scenes culture.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="https://youtube.com" target="_blank" className="group">
                <Card className="hover:shadow-lg transition-all hover:border-purple-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">YouTube</h3>
                    <p className="text-sm text-slate-600">Weekly Legal Updates & Training Clips</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://linkedin.com" target="_blank" className="group">
                <Card className="hover:shadow-lg transition-all hover:border-purple-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">LinkedIn</h3>
                    <p className="text-sm text-slate-600">Industry News & Thought Leadership</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://instagram.com" target="_blank" className="group">
                <Card className="hover:shadow-lg transition-all hover:border-purple-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.07-4.849-.07-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.057 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Instagram</h3>
                    <p className="text-sm text-slate-600">Company Culture & Team Spotlights</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://facebook.com" target="_blank" className="group">
                <Card className="hover:shadow-lg transition-all hover:border-purple-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Facebook</h3>
                    <p className="text-sm text-slate-600">Community Discussions</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://tiktok.com" target="_blank" className="group">
                <Card className="hover:shadow-lg transition-all hover:border-purple-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-6.95a8.16 8.16 0 004.65 1.46v-3.4a4.84 4.84 0 01-1.2-.5z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">TikTok</h3>
                    <p className="text-sm text-slate-600">Quick HR Tips & "Safety Fails"</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://twitter.com" target="_blank" className="group">
                <Card className="hover:shadow-lg transition-all hover:border-purple-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">X (Twitter)</h3>
                    <p className="text-sm text-slate-600">Real-time Updates & Insights</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
