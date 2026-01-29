import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  FileText,
  UserPlus,
  ShieldAlert,
  MessageSquare,
  Users,
  GraduationCap,
  Heart,
  Search,
  ClipboardList,
  AlertTriangle,
  HardHat,
  MapPin,
  Scale,
  BookOpen,
  Flame,
  FileSearch,
  Gift,
  Calendar,
  DollarSign,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react"

const hrServices = [
  {
    icon: FileText,
    title: "Handbooks & Policy Creation",
    description: "Develop employee handbooks and required policies. Ensure compliance with federal and state HR laws. Update policies as regulations change.",
  },
  {
    icon: UserPlus,
    title: "Onboarding & Offboarding",
    description: "Streamline new hire onboarding and orientation. Exit interviews and offboarding processes. Ensure compliance and documentation for all employee lifecycle stages.",
  },
  {
    icon: ShieldAlert,
    title: "HR Risk Assessment",
    description: "Review current HR practices to identify gaps. Recommend strategies to reduce exposure. Support proactive HR decision-making.",
  },
  {
    icon: MessageSquare,
    title: "HR Consultation",
    description: "Unlimited access to HR & Safety Experts. Guidance on employee relations, performance, and compliance issues. Tailored advice aligned to your business goals.",
  },
  {
    icon: Users,
    title: "Employee Relations",
    description: "Manage workplace issues, investigations, and disputes. Support performance management and disciplinary actions. Protect your business from HR-related risk.",
  },
  {
    icon: GraduationCap,
    title: "Leadership Training",
    description: "Training for managers and leaders on HR best practices. Build compliance and strong workplace culture. Focus on accountability and effective supervision.",
  },
  {
    icon: Heart,
    title: "Culture Development",
    description: "Programs to strengthen company culture. Promote engagement, collaboration, and compliance. Align culture initiatives with business strategy.",
  },
  {
    icon: Search,
    title: "Company Investigations",
    description: "Conduct workplace investigations professionally. Ensure fair and compliant processes. Provide actionable recommendations.",
  },
]

const safetyServices = [
  {
    icon: ClipboardList,
    title: "Custom IIPP & Other Programs",
    description: "Develop required safety programs, including IIPP. Tailored to your industry and business operations. Ensure compliance with OSHA and state regulations.",
  },
  {
    icon: AlertTriangle,
    title: "Safety Risk Assessment",
    description: "Identify workplace hazards and exposure. Recommend actionable improvements. Support ongoing risk reduction.",
  },
  {
    icon: HardHat,
    title: "Safety Consultation",
    description: "Expert advice on safety best practices. Guidance on program implementation. Access to proactive safety strategies.",
  },
  {
    icon: MapPin,
    title: "Jobsite Inspections",
    description: "Onsite inspections to identify hazards. Recommend corrective actions. Ensure safety compliance across locations.",
  },
  {
    icon: Scale,
    title: "OSHA Response Guidance",
    description: "Support for OSHA inquiries and compliance issues. Document preparation and advisory services. Reduce potential fines and exposure.",
  },
  {
    icon: BookOpen,
    title: "Safety Training",
    description: "Manager and employee safety training programs. Promote awareness and accountability. Build a safety-first culture.",
  },
  {
    icon: Flame,
    title: "Safety Culture Development",
    description: "Programs to embed safety into your company culture. Encourage engagement and proactive compliance. Align culture with operational objectives.",
  },
  {
    icon: FileSearch,
    title: "Injury Investigations",
    description: "Conduct thorough investigations of incidents. Provide recommendations to prevent recurrence. Ensure proper documentation and compliance.",
  },
]

const adminServices = [
  {
    icon: Gift,
    title: "Employee & Benefits",
    description: "Enrollment support, benefits administration. Life event changes and vendor coordination. Ensure employee satisfaction and compliance.",
  },
  {
    icon: Calendar,
    title: "Leave Administration",
    description: "FMLA, state leave programs, ADA accommodations. PTO tracking and documentation. Reduce risk and administrative burden.",
  },
  {
    icon: DollarSign,
    title: "Payroll Administration",
    description: "Payroll coordination and time tracking. Ensure accuracy and compliance with labor laws. Reduce operational complexity.",
  },
  {
    icon: Briefcase,
    title: "Recruitment Administration",
    description: "Job posting, applicant tracking, and scheduling. Interview coordination and offer management. Streamline hiring workflow for HR teams.",
  },
]

const talentAcquisitionFeatures = [
  "Intake Consultation – Understand hiring needs, role requirements, and organizational goals.",
  "Sourcing Candidates – Actively source candidates online and through our network.",
  "Resume Review – Shortlist top candidates efficiently.",
  "Pre-Screen Calls – Conduct initial interviews to gauge fit.",
  "Interview Scheduling & Oversight – Manage scheduling and oversee process.",
  "Final Candidate Evaluation – Support client decision-making for final selection.",
  "Biweekly Progress Reports – Keep clients updated throughout the process.",
]

const howItWorks = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "Learn about your workforce, challenges, and goals.",
  },
  {
    step: "02",
    title: "Tailored Service Plan",
    description: "Services structured around your needs, with add-ons as required.",
  },
  {
    step: "03",
    title: "Ongoing Expert Support",
    description: "HR & Safety Experts provide guidance, execution, and proactive support.",
  },
  {
    step: "04",
    title: "Evolve as You Grow",
    description: "Services adapt as your business changes.",
  },
]

function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-4 font-medium">
                Your Cost-Effective All-Inclusive Solution
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                HR & Safety Services
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Proactive, expert-led HR and Safety support tailored to your business needs, helping you manage risk, reduce liability, and focus on your core operations.
              </p>
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 px-8">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* HR Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                HR <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Consult, train, and provide tools to manage your workforce, comply with regulations, and improve your bottom line.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {hrServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Safety Services Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Safety <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert-led programs, audits, and training to protect your workplace and employees while reducing risk.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {safetyServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Add-On Administrative Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Add-On <span className="text-primary">Administrative Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Operational HR support that complements core services to streamline compliance and internal processes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {adminServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Talent Acquisition Services Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Talent Acquisition <span className="text-primary">Services</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Streamline hiring with full-cycle recruiting and strategic talent sourcing tailored to your business needs.
                </p>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-xl font-semibold text-foreground mb-6">What We Provide:</h3>
                  <ul className="space-y-4 mb-8">
                    {talentAcquisitionFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                    <p className="text-foreground font-medium text-center">
                      Our Talent Acquisition Experts streamline your hiring process, so you can focus on your core business while we deliver the right candidates.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It <span className="text-primary">Works</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => (
                <div key={item.step} className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-muted-foreground/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                Build HR and Safety support that scales with your business.
              </p>
              <div className="flex justify-center pt-4">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 px-16">
                  <Link href="/contact">
                    Talk to an Expert
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
