import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Search, User, Video } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Expert Insights, Delivered Live.</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
                Join our senior HR consultants and safety experts for interactive sessions on the latest regulatory
                changes, leadership strategies, and OSHA protocols. Stay ahead of the curve with Workwise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  View Upcoming Schedule
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Access Past Recordings
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-primary overflow-hidden">
                <div className="bg-primary text-primary-foreground px-6 py-3">
                  <p className="text-sm font-semibold tracking-wide">UPCOMING MAJOR EVENT</p>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h2 className="text-3xl font-bold text-foreground mb-4">2026 Employment Law & Legal Update</h2>
                      <div className="flex items-center gap-4 text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span>January 14, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          <span>10:00 AM PST</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Prepare your business for the new year. We will cover critical updates to California wage and
                        hour laws, the new SB 553 Workplace Violence requirements, and federal posting changes.
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-5 h-5" />
                        <span>
                          <strong className="text-foreground">Speaker:</strong> Sarah Mitchell, VP of Legal Affairs
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Button size="lg" className="w-full">
                        Reserve Your Spot Instantly
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Calendar */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Upcoming <span className="text-primary">Sessions</span>
              </h2>

              {/* Filters */}
              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
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
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-primary">04</p>
                            <p className="text-sm text-muted-foreground">FEB</p>
                          </div>
                          <div>
                            <span className="inline-block bg-destructive/10 text-destructive text-xs font-semibold px-3 py-1 rounded-full mb-2">
                              Safety
                            </span>
                            <h3 className="text-xl font-bold text-foreground">
                              Heat Illness Prevention: Getting Ready for Summer
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground ml-16">
                          A refresher on Cal/OSHA requirements for outdoor workers and hydration protocols.
                        </p>
                        <p className="text-sm text-muted-foreground ml-16 mt-2">11:00 AM PST</p>
                      </div>
                      <Button>Register Now</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Session 2 */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-primary">18</p>
                            <p className="text-sm text-muted-foreground">FEB</p>
                          </div>
                          <div>
                            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                              HR Compliance
                            </span>
                            <h3 className="text-xl font-bold text-foreground">Navigating Leave of Absence Laws</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground ml-16">Understanding the intersection of FMLA, CFRA, and PDL.</p>
                        <p className="text-sm text-muted-foreground ml-16 mt-2">1:00 PM PST</p>
                      </div>
                      <Button>Register Now</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Session 3 */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-primary">05</p>
                            <p className="text-sm text-muted-foreground">MAR</p>
                          </div>
                          <div>
                            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-2">
                              Leadership
                            </span>
                            <h3 className="text-xl font-bold text-foreground">Effective Performance Reviews</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground ml-16">
                          How to conduct reviews that drive growth and reduce liability.
                        </p>
                        <p className="text-sm text-muted-foreground ml-16 mt-2">10:00 AM PST</p>
                      </div>
                      <Button>Register Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Past Recordings */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Watch <span className="text-primary">On-Demand</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Missed a session? Browse our archive of past training sessions to catch up on the topics that matter to your
                  business.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Category 1 */}
                <Card className="hover:shadow-lg transition-shadow hover:border-primary">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Safety Stand-downs</h3>
                    <p className="text-muted-foreground mb-4">
                      Monthly safety focus topics including Forklift, HazCom, and Ergonomics.
                    </p>
                    <Link href="#" className="text-primary hover:text-primary/80 font-semibold">
                      Browse Collection →
                    </Link>
                  </CardContent>
                </Card>

                {/* Category 2 */}
                <Card className="hover:shadow-lg transition-shadow hover:border-primary">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Legal Updates</h3>
                    <p className="text-muted-foreground mb-4">
                      Quarterly reviews of state and federal law changes that impact your business.
                    </p>
                    <Link href="#" className="text-primary hover:text-primary/80 font-semibold">
                      Browse Collection →
                    </Link>
                  </CardContent>
                </Card>

                {/* Category 3 */}
                <Card className="hover:shadow-lg transition-shadow hover:border-primary">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">HR Masterclass</h3>
                    <p className="text-muted-foreground mb-4">
                      Deep dives into hiring, firing, and culture building for modern workplaces.
                    </p>
                    <Link href="#" className="text-primary hover:text-primary/80 font-semibold">
                      Browse Collection →
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Access Control Note */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">Access Full Library</h4>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Public Access:</strong> Select clips and high-level overviews available to all.
                        <br />
                        <strong className="text-foreground">Client Access:</strong> Full 60-minute recordings and slide decks available via login.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline">
                        Browse Public Clips
                      </Button>
                      <Button>Log In to Watch Full Library</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Subscription & Notifications */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Never Miss a Regulatory Update</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sign up for our training alerts. We'll notify you when new training sessions and legal updates are
                scheduled.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <Input type="text" placeholder="Your Name" className="w-32 shrink-0" />
                <Input type="email" placeholder="Your Work Email" className="flex-1" />
                <Button className="shrink-0">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                Have questions or need help registering? Our team is here to help.
              </p>
              <div className="flex justify-center pt-4">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-16" asChild>
                  <Link href="/contact">
                    Talk to an Expert
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
