import Image from "next/image"

const features = [
  {
    image: "/images/image-graph-up.jpeg",
    title: "Support That Scales",
    description:
      "We grow with you. Start with essential compliance tools and upgrade to a fully outsourced HR & Safety department whenever you're ready.",
  },
  {
    image: "/images/image-shield-grad.jpeg",
    title: "Proactive Training",
    description:
      "Reduce risk and improve culture with our comprehensive training platform. Access interactive training modules, track certifications, and manage records in one cloud-based hub.",
  },
  {
    image: "/images/image-bank-check.jpeg",
    title: "Regulatory Confidence",
    description:
      "Never worry about an audit again. Our resources are backed by industry-leading reimbursement guarantees, covering you against fines and penalties.",
  },
]

export function KeyFeatures() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
