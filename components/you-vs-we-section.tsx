import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              You do it <span className="text-primary">vs.</span> We do it
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Two ways to stay compliant—only one gives you back your time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* You Do It Card */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">You Do It</h3>
                <p className="text-muted-foreground mb-6">
                  Self-service HR & Safety compliance made simple with the right tools and guidance.
                </p>

                <ul className="space-y-3 mb-8">
                  {youDoItFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-medium text-muted-foreground mb-6">
                  Best for businesses that want control—with support in their corner.
                </p>

                <Button className="w-full" size="lg" asChild>
                  <Link href="/pricing">View Self-Service Plans</Link>
                </Button>
              </CardContent>
            </Card>

            {/* We Do It Card */}
            <Card className="border-2 border-primary hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">We Do It</h3>
                <p className="text-muted-foreground mb-6">
                  Partner with a dedicated HR & Safety compliance team who does the work for you.
                </p>

                <ul className="space-y-3 mb-8">
                  {weDoItFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-medium text-muted-foreground mb-6">
                  Best for businesses that want peace of mind and expert execution.
                </p>

                <Button className="w-full" size="lg" asChild>
                  <Link href="/pricing">View Full-Service Plans</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
