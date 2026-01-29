import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const resources = [
  {
    image: "/compliance-expert-professional.jpg",
    title: "Expert insights: Building a culture of compliance in 2025",
    author: "WorkWise Team",
    readTime: "5 MIN READ",
    category: "Expert Insights",
  },
  {
    image: "/workplace-safety-checklist.jpg",
    title: "How to build a comprehensive workplace safety program",
    author: "Safety Team",
    readTime: "7 MIN READ",
    category: "Safety Guide",
  },
]

export function ResourcesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Recent Articles</h2>
            <p className="text-lg text-primary font-medium">Insights that help you run a better workplace</p>
            <p className="text-muted-foreground max-w-2xl">Practical articles on HR, Safety, compliance, and people operations—written for real businesses, not legal textbooks.</p>
          </div>
          <Button asChild variant="link" className="hidden md:flex items-center gap-2 font-semibold shrink-0">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {resources.map((resource, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-secondary/20">
                <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {resource.category}
                </div>
                <h3 className="text-xl font-semibold leading-snug hover:text-primary transition-colors cursor-pointer">
                  {resource.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{resource.author}</span>
                  <span>•</span>
                  <span>{resource.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link href="/blog">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
