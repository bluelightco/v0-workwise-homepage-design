import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Search, User, Video } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WebinarsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Expert Insights, Delivered Live.</h1>
              <p className="text-xl opacity-90 mb-8 text-pretty leading-relaxed">
                Join our senior HR consultants and safety experts for interactive sessions on the latest regulatory
                changes, leadership strategies, and OSHA protocols. Stay ahead of the curve with Workwise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-slate-700 hover:bg-slate-50">
                  View Upcoming Schedule
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-slate-700 bg-transparent"
                >
                  Access Past Recordings
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg border-2 border-slate-600 overflow-hidden">
                <div className="bg-slate-600 text-white px-6 py-3">
                  <p className="text-sm font-semibold tracking-wide">UPCOMING MAJOR EVENT</p>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">2026 Employment Law & Legal Update</h2>
                      <div className="flex items-center gap-4 text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span>January 14, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          <span>10:00 AM PST</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Prepare your business for the new year. We will cover critical updates to California wage and
                        hour laws, the new SB 553 Workplace Violence requirements, and federal posting changes.
                      </p>
                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="w-5 h-5" />
                        <span>
                          <strong>Speaker:</strong> Sarah Mitchell, VP of Legal Affairs
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Button size="lg" className="bg-slate-600 hover:bg-slate-700 text-white w-full">
                        Reserve Your Spot Instantly
                      </Button>
                      <p className="text-sm text-gray-500 text-center mt-3">One-click registration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Calendar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Sessions</h2>

              {/* Filters */}
              <div className="bg-slate-50 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input placeholder="Search by topic or keyword..." className="pl-10" />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Topics</SelectItem>
                      <SelectItem value="hr">HR Compliance</SelectItem>
                      <SelectItem value="safety">Workplace Safety</SelectItem>
                      <SelectItem value="leadership">Leadership & Management</SelectItem>
                      <SelectItem value="payroll">Payroll</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Audiences</SelectItem>
                      <SelectItem value="owners">Business Owners</SelectItem>
                      <SelectItem value="hr">HR Managers</SelectItem>
                      <SelectItem value="employees">Employees</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="this-month">This Month</SelectItem>
                      <SelectItem value="next-month">Next Month</SelectItem>
                      <SelectItem value="2026">2026 Calendar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Calendar List */}
              <div className="space-y-4">
                {/* Session 1 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-slate-600">04</p>
                          <p className="text-sm text-gray-600">FEB</p>
                        </div>
                        <div>
                          <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                            Safety
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">
                            Heat Illness Prevention: Getting Ready for Summer
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 ml-16">
                        A refresher on Cal/OSHA requirements for outdoor workers and hydration protocols.
                      </p>
                      <p className="text-sm text-gray-500 ml-16 mt-2">11:00 AM PST</p>
                    </div>
                    <Button className="bg-slate-600 hover:bg-slate-700 text-white">Register Now</Button>
                  </div>
                </div>

                {/* Session 2 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-slate-600">18</p>
                          <p className="text-sm text-gray-600">FEB</p>
                        </div>
                        <div>
                          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                            HR Compliance
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">Navigating Leave of Absence Laws</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 ml-16">Understanding the intersection of FMLA, CFRA, and PDL.</p>
                      <p className="text-sm text-gray-500 ml-16 mt-2">1:00 PM PST</p>
                    </div>
                    <Button className="bg-slate-600 hover:bg-slate-700 text-white">Register Now</Button>
                  </div>
                </div>

                {/* Session 3 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-slate-600">05</p>
                          <p className="text-sm text-gray-600">MAR</p>
                        </div>
                        <div>
                          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                            Leadership
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">Effective Performance Reviews</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 ml-16">
                        How to conduct reviews that drive growth and reduce liability.
                      </p>
                      <p className="text-sm text-gray-500 ml-16 mt-2">10:00 AM PST</p>
                    </div>
                    <Button className="bg-slate-600 hover:bg-slate-700 text-white">Register Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Recordings */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Watch On-Demand</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Missed a session? Browse our archive of past webinars to catch up on the topics that matter to your
                  business.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Category 1 */}
                <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors">
                  <Video className="w-12 h-12 text-slate-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Safety Stand-downs</h3>
                  <p className="text-gray-300 mb-4">
                    Monthly safety focus topics including Forklift, HazCom, and Ergonomics.
                  </p>
                  <Link href="#" className="text-slate-400 hover:text-slate-300 font-semibold">
                    Browse Collection →
                  </Link>
                </div>

                {/* Category 2 */}
                <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors">
                  <Video className="w-12 h-12 text-slate-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Legal Updates</h3>
                  <p className="text-gray-300 mb-4">
                    Quarterly reviews of state and federal law changes that impact your business.
                  </p>
                  <Link href="#" className="text-slate-400 hover:text-slate-300 font-semibold">
                    Browse Collection →
                  </Link>
                </div>

                {/* Category 3 */}
                <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors">
                  <Video className="w-12 h-12 text-slate-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">HR Masterclass</h3>
                  <p className="text-gray-300 mb-4">
                    Deep dives into hiring, firing, and culture building for modern workplaces.
                  </p>
                  <Link href="#" className="text-slate-400 hover:text-slate-300 font-semibold">
                    Browse Collection →
                  </Link>
                </div>
              </div>

              {/* Access Control Note */}
              <div className="bg-slate-700 rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Access Full Library</h4>
                    <p className="text-gray-300">
                      <strong>Public Access:</strong> Select clips and high-level overviews available to all.
                      <br />
                      <strong>Client Access:</strong> Full 60-minute recordings and slide decks available via login.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="border-white text-white hover:bg-slate-600 bg-transparent">
                      Browse Public Clips
                    </Button>
                    <Button className="bg-slate-600 hover:bg-slate-700 text-white">Log In to Watch Full Library</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription & Notifications */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Never Miss a Regulatory Update</h2>
              <p className="text-xl text-gray-600 mb-8">
                Sign up for our webinar alerts. We'll notify you when new training sessions and legal updates are
                scheduled.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input type="email" placeholder="Enter Work Email Address" className="flex-1" />
                <Button className="bg-slate-600 hover:bg-slate-700 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Support */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">
              Having trouble registering?{" "}
              <Link href="/contact" className="text-slate-600 hover:text-slate-700 font-semibold">
                Contact Support
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
