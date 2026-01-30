import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const resources = [
  {
    image: "/compliance-expert-professional.jpg",
    title: "Expert insights: Building a culture of compliance in 2025",
    description: "Learn how to foster a compliance-first mindset across your organization with practical strategies and real-world examples.",
    href: "/blog",
  },
  {
    image: "/workplace-safety-checklist.jpg",
    title: "How to build a comprehensive workplace safety program",
    description: "A step-by-step guide to developing an effective safety program that protects your employees and reduces risk.",
    href: "/blog",
  },
  {
    image: "/workplace-safety-checklist.jpg",
    title: "Holiday Safety Tips: Keeping Your Workplace Safe This Season",
    description: "The holiday season brings unique workplace hazards. Discover essential safety practices for your team during festive celebrations.",
    href: "/blog",
  },
]

export function ResourcesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Recent <span className="text-primary">Articles</span>
          </h2>
          <p className="text-lg text-muted-foreground">Check Out Our Recent Posts</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-7xl mx-auto">
          {resources.map((resource, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col bg-card">
              <div className="aspect-video relative bg-secondary/20 w-full overflow-hidden">
                <Image 
                  src={resource.image || "/placeholder.svg"} 
                  alt={resource.title} 
                  fill 
                  className="object-cover w-full h-full" 
                />
              </div>
              <CardContent className="p-6 space-y-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold leading-snug text-foreground">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {resource.description}
                </p>
                <Link href={resource.href} className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="link" className="text-primary hover:text-primary/80 font-semibold">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
