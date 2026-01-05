import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, DollarSign, Shield, Users, UserCheck, Laptop } from "lucide-react"

const solutions = [
  {
    icon: Users,
    title: "HR",
    subtitle: "Streamline the employee lifecycle with a platform built for flexibility and ease.",
    points: [
      "Automate onboarding, training, and offboarding in one flow",
      "Track compliance, certifications, and documentation in real time",
      "Free HR to focus on culture, strategy, and impact",
    ],
  },
  {
    icon: DollarSign,
    title: "Finance",
    subtitle: "Plan workforce costs with clarity, accuracy, and confidence.",
    points: [
      "View compliance costs, risk trends, and prevention forecasts",
      "Connect workforce planning to budgeting in real time",
      "Eliminate shadow costs from fines, penalties, and legal fees",
    ],
  },
  {
    icon: Shield,
    title: "Safety",
    subtitle: "Integrate directly with operational changes and reduce costly incidents.",
    points: [
      "Automate safety training and policy enforcement",
      "Track workplace incidents and compliance violations",
      "Minimize manual oversight and improve audit readiness",
    ],
  },
  {
    icon: Building2,
    title: "Business leaders",
    subtitle: "Make faster, data-backed workforce decisions.",
    points: [
      "Access real-time dashboards on compliance, risk, and training",
      "Align hiring, retention, and safety to business goals",
      "Use compliance data to shape strategy, not just report it",
    ],
  },
  {
    icon: UserCheck,
    title: "People managers",
    subtitle: "Lead teams better with instant access to compliance data.",
    points: [
      "Approve training, review certifications, and manage policies from one place",
      "Track team compliance status, goals, and safety records",
      "Reduce reliance on HR by owning your team's full lifecycle",
    ],
  },
  {
    icon: Laptop,
    title: "IT",
    subtitle: "Accelerate onboarding with seamless setup and smart access provisioning.",
    points: [
      "Go live in weeks, not months, with minimal IT support",
      "Integrate SSO, HRIS, and payroll tools effortlessly",
      "Reduce system sprawl with one platform covering compliance needs",
    ],
  },
]

export function SolutionsByDepartment() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Tailored solutions by department.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">{solution.subtitle}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {solution.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
