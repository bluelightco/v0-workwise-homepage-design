import { Check } from "lucide-react"

export function YouVsWeSection() {
  const youDoItFeatures = [
    "Clear, step-by-step compliance guides you can actually follow",
    "Digital HR & Safety tools and templates ready to use",
    "Regular newsletter updates so you don't miss important changes",
    "Training courses you can complete on your schedule",
  ]

  const weDoItFeatures = [
    "Unlimited access to HR & Safety Business Partners",
    "Proactive guidance tailored to your business and industry",
    "Support aligned with state and federal employment laws",
    "Help navigating audits, employee issues, and compliance risks",
    "More time to focus on running and growing your business",
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              You do it <span className="text-primary">vs.</span> We do it
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Two ways to stay compliant—only one gives you back your time.
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* You Do It */}
            <div className="flex-1 md:pr-12 pb-10 md:pb-0">
              <h3 className="text-2xl font-bold text-foreground mb-3">You Do It</h3>
              <p className="text-muted-foreground mb-6">
                Self-service HR & Safety compliance made simple with the right tools and guidance.
              </p>

              <ul className="space-y-3 mb-6">
                {youDoItFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm font-medium text-muted-foreground italic">
                Best for businesses that want control—with support in their corner.
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-border mx-4" />
            <div className="md:hidden h-px bg-border my-6" />

            {/* We Do It */}
            <div className="flex-1 md:pl-12 pt-10 md:pt-0">
              <h3 className="text-2xl font-bold text-foreground mb-3">We Do It</h3>
              <p className="text-muted-foreground mb-6">
                Partner with a dedicated HR & Safety compliance team who does the work for you.
              </p>

              <ul className="space-y-3 mb-6">
                {weDoItFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm font-medium text-muted-foreground italic">
                Best for businesses that want peace of mind and expert execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
