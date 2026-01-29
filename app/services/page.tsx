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

const talentAcquisitionServices = [
  {
    icon: MessageSquare,
    title: "Intake Consultation",
    description: "Understand hiring needs, role requirements, and organizational goals to build an effective recruitment strategy.",
  },
  {
    icon: Search,
    title: "Sourcing Candidates",
    description: "Actively source candidates online and through our network to find the best talent for your roles.",
  },
  {
    icon: FileText,
    title: "Resume Review",
    description: "Shortlist top candidates efficiently with thorough resume screening and qualification matching.",
  },
  {
    icon: Phone,
    title: "Pre-Screen Calls",
    description: "Conduct initial interviews to gauge fit and assess candidate qualifications before advancing.",
  },
  {
    icon: Calendar,
    title: "Interview Scheduling",
    description: "Manage scheduling and oversee the interview process to ensure a smooth candidate experience.",
  },
  {
    icon: CheckCircle,
    title: "Final Candidate Evaluation",
    description: "Support client decision-making for final selection with detailed candidate assessments.",
  },
  {
    icon: ClipboardList,
    title: "Biweekly Progress Reports",
    description: "Keep clients updated throughout the process with regular status reports and insights.",
  },
  {
    icon: Users,
    title: "Full-Cycle Support",
    description: "End-to-end recruiting support so you can focus on your core business while we deliver the right candidates.",
  },
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                HR & Safety Services
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Proactive, expert-led HR and Safety support tailored to your business needs, helping you manage risk, reduce liability, and focus on your core operations.
              </p>
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 px-16">
                <Link href="/contact">
                  Get Started
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {adminServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Talent Acquisition Services Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Talent Acquisition <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Streamline hiring with full-cycle recruiting and strategic talent sourcing tailored to your business needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {talentAcquisitionServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
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
            <div className="relative max-w-6xl mx-auto">
              {/* Continuous connector line - extends under the circles */}
              <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-muted-foreground/30" />
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((item) => (
                  <div key={item.step} className="text-center relative">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10 ring-4 ring-background">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
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
