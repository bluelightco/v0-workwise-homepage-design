import Image from "next/image"

const tools = [
  {
    title: "Intelligent Poster Updates",
    description:
      'Compliance isn\'t a one-time event. Our "Set & Forget" service monitors over 22,000 jurisdictions and automatically ships replacement laminated posters the moment a mandatory change occurs.',
    image: "/images/poster-email.jpeg",
  },
  {
    title: "Digital Document Management",
    description:
      "Ditch the spreadsheets. Our digital document system allows you to onboard employees, assign mandatory training (like Sexual Harassment Prevention), and store e-signed documents securely in the cloud.",
    image: "/images/bh-new-hris-mac-mockup.png",
  },
  {
    title: "Custom Safety Programs",
    description:
      "From SB 553 Workplace Violence Prevention plans to Cal/OSHA requirements, our experts build custom safety frameworks tailored to your specific industry and location.",
    image: "/images/safety-checklist.jpeg",
  },
]

export function ToolsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Tools Built for Modern Business</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {tools.map((tool, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-square relative bg-secondary/50 rounded-lg overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={tool.image || "/placeholder.svg"}
                  alt={tool.title}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{tool.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
