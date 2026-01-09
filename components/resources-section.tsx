import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

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
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Insights and inspiration</h2>
          <Button variant="link" className="hidden md:flex items-center gap-2 font-semibold">
            View All
            <ArrowRight className="w-4 h-4" />
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
          <Button variant="outline" className="w-full bg-transparent">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  )
}
