import { Sparkles, TrendingUp, Target, Navigation } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Productivity booster",
    description:
      "WorkWise helps you automate compliance tasks, track deadlines, and manage updates instantly and in context.",
  },
  {
    icon: TrendingUp,
    title: "Risk analyzer",
    description:
      "WorkWise makes sense of complex compliance data—just ask and get clear insights to act fast and smart.",
  },
  {
    icon: Target,
    title: "Compliance coach",
    description: "WorkWise suggests confident, clear guidance rooted in your industry, location, and company culture.",
  },
  {
    icon: Navigation,
    title: "Platform navigator",
    description: "Ask WorkWise to take you to the right resource—posters, training, policies—no clicks, no searching.",
  },
]

export function InnovationSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Meet the WorkWise AI Assistant.</h2>
          <p className="text-lg text-muted-foreground">
            Your AI assistant securely connects to compliance data to deliver sharper insights, driving clearer
            decisions and faster, better outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
