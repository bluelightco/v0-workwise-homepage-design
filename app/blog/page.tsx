import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const topics = ["HR Strategy", "Payroll & Tax", "Talent & Recruiting", "Employee Engagement"]

  const hrArticles = [
    {
      title: "Understanding OSHA Recordkeeping Requirements",
      date: "March 15, 2026",
      readTime: "8 min read",
      excerpt: "A comprehensive guide to maintaining compliant safety records.",
    },
    {
      title: "Creating Effective Workplace Policies",
      date: "March 10, 2026",
      readTime: "6 min read",
      excerpt: "Best practices for developing clear, enforceable policies.",
    },
    {
      title: "Managing Remote Work Compliance",
      date: "March 5, 2026",
      readTime: "7 min read",
      excerpt: "Navigate the complexities of remote workforce regulations.",
    },
  ]

  const payrollArticles = [
    {
      title: "2026 Federal Minimum Wage Updates",
      date: "March 12, 2026",
      readTime: "5 min read",
      excerpt: "What employers need to know about the latest wage requirements.",
    },
    {
      title: "Overtime Calculation Best Practices",
      date: "March 8, 2026",
      readTime: "9 min read",
      excerpt: "Avoid costly mistakes with proper overtime computation methods.",
    },
    {
      title: "Tax Credit Opportunities for Small Business",
      date: "March 3, 2026",
      readTime: "6 min read",
      excerpt: "Maximize your savings with these often-overlooked tax credits.",
    },
  ]

  const talentArticles = [
    {
      title: "Building a Diverse Candidate Pipeline",
      date: "March 14, 2026",
      readTime: "7 min read",
      excerpt: "Strategies for attracting diverse talent to your organization.",
    },
    {
      title: "Effective Onboarding Programs That Stick",
      date: "March 9, 2026",
      readTime: "8 min read",
      excerpt: "Create onboarding experiences that drive long-term retention.",
    },
    {
      title: "Skills-Based Hiring: The Future is Here",
      date: "March 4, 2026",
      readTime: "6 min read",
      excerpt: "Why focusing on skills beats traditional degree requirements.",
    },
  ]

  const engagementArticles = [
    {
      title: "Recognition Programs That Actually Work",
      date: "March 13, 2026",
      readTime: "5 min read",
      excerpt: "Move beyond generic praise to meaningful employee recognition.",
    },
    {
      title: "Measuring Employee Satisfaction Effectively",
      date: "March 7, 2026",
      readTime: "7 min read",
      excerpt: "Tools and metrics to gauge and improve workplace happiness.",
    },
    {
      title: "The Power of Transparent Communication",
      date: "March 2, 2026",
      readTime: "6 min read",
      excerpt: "Building trust through open dialogue at every level.",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Featured Insight */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-sm font-semibold tracking-wider mb-4 text-primary-foreground/80">FEATURED INSIGHT</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">2026 Employment Law Survival Guide</h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              California's new wage and hour laws are here. From changes in the "Regular Rate of Pay" to the new SB 553
              Workplace Violence requirements, find out exactly what you need to update in your employee handbook this
              quarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Read Full Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                Explore HR Consulting Services
              </Button>
            </div>
          </div>
        </section>

        {/* Topic Navigation */}
        <section className="bg-muted/30 py-12 border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Browse by Topic</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {topics.map((topic) => (
                <Button key={topic} variant="outline" className="bg-card hover:bg-primary hover:text-primary-foreground">
                  {topic}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: HR Strategy */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-3 text-foreground">Human Resources & Compliance</h2>
              <p className="text-lg text-muted-foreground">
                Best practices for human resources management, regulatory compliance, and risk mitigation.
              </p>
            </div>

            {/* Featured Article */}
            <Card className="mb-8 p-8 bg-primary/5 border-l-4 border-l-primary">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="text-sm font-semibold text-primary mb-2">FEATURED</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Navigating the New Leave of Absence Laws</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Understanding the intersection of FMLA, CFRA, and PDL can be a nightmare. Here is your step-by-step
                    guide to managing employee leave without risking a lawsuit.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      March 18, 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      12 min read
                    </span>
                  </div>
                  <Button>Read Article</Button>
                </div>
                <div className="flex items-center justify-center bg-primary/10 rounded-lg p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium mb-3 text-foreground">Struggling with complex HR issues?</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Ask an HR Expert
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Articles */}
            <div className="grid md:grid-cols-3 gap-6">
              {hrArticles.map((article, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card">
                  <h4 className="text-lg font-bold mb-2 text-foreground">{article.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Payroll */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-3 text-foreground">Payroll & Tax Insights</h2>
              <p className="text-lg text-muted-foreground">
                Expert insights on payroll processing, wage-and-hour laws, and tax compliance.
              </p>
            </div>

            {/* Featured Article */}
            <Card className="mb-8 p-8 bg-primary/5 border-l-4 border-l-primary">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="text-sm font-semibold text-primary mb-2">FEATURED</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">The True Cost of Misclassification</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "Independent Contractor" vs. "Employee." The lines are blurring, and the penalties are rising. Learn
                    how to audit your payroll before the EDD does.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      March 16, 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      10 min read
                    </span>
                  </div>
                  <Button>Read Article</Button>
                </div>
                <div className="flex items-center justify-center bg-primary/10 rounded-lg p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium mb-3 text-foreground">Ensure your payroll is audit-proof</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Payroll Solutions
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Articles */}
            <div className="grid md:grid-cols-3 gap-6">
              {payrollArticles.map((article, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card">
                  <h4 className="text-lg font-bold mb-2 text-foreground">{article.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Talent */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-3 text-foreground">Talent Acquisition</h2>
              <p className="text-lg text-muted-foreground">
                Strategies for recruiting, retaining, and developing top-tier talent in a competitive market.
              </p>
            </div>

            {/* Featured Article */}
            <Card className="mb-8 p-8 bg-primary/5 border-l-4 border-l-primary">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="text-sm font-semibold text-primary mb-2">FEATURED</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Hiring in the Age of AI</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    How to use artificial intelligence to speed up your screening process without introducing bias—and
                    how to spot candidates using AI to write their resumes.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      March 17, 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      11 min read
                    </span>
                  </div>
                  <Button>Read Article</Button>
                </div>
                <div className="flex items-center justify-center bg-primary/10 rounded-lg p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium mb-3 text-foreground">Need to fill a role fast?</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Start a Recruiting Campaign
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Articles */}
            <div className="grid md:grid-cols-3 gap-6">
              {talentArticles.map((article, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card">
                  <h4 className="text-lg font-bold mb-2 text-foreground">{article.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Employee Engagement */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-3 text-foreground">Culture & Engagement</h2>
              <p className="text-lg text-muted-foreground">
                Tips for building company culture, boosting team performance, and driving retention.
              </p>
            </div>

            {/* Featured Article */}
            <Card className="mb-8 p-8 bg-primary/5 border-l-4 border-l-primary">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="text-sm font-semibold text-primary mb-2">FEATURED</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Why Safety Culture IS Company Culture</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A safe workplace is a happy workplace. Discover how our "Safety Committee" framework not only
                    reduces accidents but increases employee morale and ownership.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      March 19, 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />9 min read
                    </span>
                  </div>
                  <Button>Read Article</Button>
                </div>
                <div className="flex items-center justify-center bg-primary/10 rounded-lg p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium mb-3 text-foreground">Build a better workplace</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Demo Our EMS Platform
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Articles */}
            <div className="grid md:grid-cols-3 gap-6">
              {engagementArticles.map((article, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card">
                  <h4 className="text-lg font-bold mb-2 text-foreground">{article.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Compliant. Stay Informed.</h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Join 20,000+ business leaders receiving our weekly compliance alerts and leadership tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" className="bg-background text-foreground flex-1" />
              <Button type="submit" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-primary-foreground/70 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
