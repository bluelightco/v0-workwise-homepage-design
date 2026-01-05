import { Button } from "@/components/ui/button"

const metrics = [
  {
    label: "Return",
    value: "$3.50",
    suffix: "for every $1 spent.",
    description: "Customers report an average ROI of 350% with payback in under 6 months.",
  },
  {
    label: "Avoid",
    value: "$200K-$500K",
    suffix: "in potential fines.",
    description: "Stay protected by automating compliance and preventing costly penalties.",
  },
  {
    label: "Save",
    value: "$10K-$25K",
    suffix: "on HR admin alone.",
    description: "WorkWise automates HR workflows, reducing time spent by 3–5 hours per week.",
  },
]

export function ROISection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We let results speak for themselves.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-sm font-semibold uppercase tracking-wide opacity-90">{metric.label}</div>
              <div className="space-y-1">
                <div className="text-4xl md:text-5xl font-bold">{metric.value}</div>
                <div className="text-xl font-medium">{metric.suffix}</div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
