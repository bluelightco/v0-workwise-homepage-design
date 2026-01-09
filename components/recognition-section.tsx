import { Star, Award, TrendingUp, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const awards = [
  {
    icon: Star,
    title: "1,500+ Reviews",
    rating: "4.8",
    platform: "Google Reviews",
  },
  {
    icon: Award,
    title: "#1",
    rating: "Best Compliance Solution",
    platform: "Industry Awards 2025",
  },
  {
    icon: TrendingUp,
    title: "2025",
    rating: "Top Rated",
    platform: "Business Excellence",
  },
  {
    icon: Shield,
    title: "2025",
    rating: "Trusted Provider",
    platform: "Safety Standards",
  },
]

export function RecognitionSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by users. Proven by experts.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <award.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{award.title}</div>
                  <div className="text-3xl font-bold text-primary mb-1">{award.rating}</div>
                  <div className="text-sm text-muted-foreground">{award.platform}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
