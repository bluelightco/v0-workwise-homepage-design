import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const featuredArticle = {
    image: "/compliance-expert-professional.jpg",
    title: "Navigating the New Leave of Absence Laws",
    date: "March 18, 2026",
    readTime: "12 min read",
    excerpt: "Understanding the intersection of FMLA, CFRA, and PDL can be a nightmare. Here is your step-by-step guide to managing employee leave without risking a lawsuit.",
  }

  const articles = [
    {
      image: "/compliance-expert-professional.jpg",
      title: "Understanding OSHA Recordkeeping Requirements",
      date: "March 15, 2026",
      readTime: "8 min read",
      description: "A comprehensive guide to maintaining compliant safety records and avoiding costly penalties.",
    },
    {
      image: "/workplace-safety-checklist.jpg",
      title: "Creating Effective Workplace Policies",
      date: "March 10, 2026",
      readTime: "6 min read",
      description: "Best practices for developing clear, enforceable policies that protect your business.",
    },
    {
      image: "/workplace-safety-checklist.jpg",
      title: "Managing Remote Work Compliance",
      date: "March 5, 2026",
      readTime: "7 min read",
      description: "Navigate the complexities of remote workforce regulations and keep your team compliant.",
    },
    {
      image: "/compliance-expert-professional.jpg",
      title: "2026 Federal Minimum Wage Updates",
      date: "March 12, 2026",
      readTime: "5 min read",
      description: "What employers need to know about the latest wage requirements and how to stay compliant.",
    },
    {
      image: "/workplace-safety-checklist.jpg",
      title: "Overtime Calculation Best Practices",
      date: "March 8, 2026",
      readTime: "9 min read",
      description: "Avoid costly mistakes with proper overtime computation methods and documentation.",
    },
    {
      image: "/compliance-expert-professional.jpg",
      title: "The True Cost of Misclassification",
      date: "March 16, 2026",
      readTime: "10 min read",
      description: "Independent Contractor vs. Employee—the lines are blurring, and the penalties are rising.",
    },
    {
      image: "/workplace-safety-checklist.jpg",
      title: "Building a Diverse Candidate Pipeline",
      date: "March 14, 2026",
      readTime: "7 min read",
      description: "Strategies for attracting diverse talent to your organization and building inclusive teams.",
    },
    {
      image: "/compliance-expert-professional.jpg",
      title: "Effective Onboarding Programs That Stick",
      date: "March 9, 2026",
      readTime: "8 min read",
      description: "Create onboarding experiences that drive long-term retention and employee success.",
    },
    {
      image: "/workplace-safety-checklist.jpg",
      title: "Why Safety Culture IS Company Culture",
      date: "March 19, 2026",
      readTime: "9 min read",
      description: "A safe workplace is a happy workplace. Discover how safety frameworks increase employee morale.",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Simple Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HR & Compliance <span className="text-primary-foreground/90">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Stay informed with the latest news, trends, and best practices in HR, workplace safety, and regulatory compliance.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Link href="/blog" className="block">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-[4/3] md:aspect-auto relative bg-muted">
                      <Image
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {featuredArticle.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredArticle.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* All Articles Grid */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                More Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col bg-card border-0 shadow-md rounded-lg p-0">
                    <div className="aspect-[4/3] relative bg-muted w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="px-6 pt-6 pb-4 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold leading-tight text-foreground mb-3">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                        {article.description}
                      </p>
                      <Link 
                        href="/blog" 
                        className="text-primary font-semibold hover:text-primary/80 transition-colors"
                      >
                        Read More
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
