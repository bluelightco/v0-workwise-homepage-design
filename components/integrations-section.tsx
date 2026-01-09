import Image from "next/image"

const integrationCategories = [
  {
    title: "Payroll / HRIS",
    logos: ["/integrations/adp.png", "/paychex-logo.jpg", "/gusto-logo.png"],
  },
  {
    title: "HR Platforms",
    logos: ["/integrations/bamboohr.png", "/integrations/workday.png", "/namely-logo.jpg"],
  },
  {
    title: "Time Tracking",
    logos: ["/tsheets-logo.jpg", "/clockify-logo.jpg", "/deputy-logo.jpg"],
  },
  {
    title: "Collaboration",
    logos: ["/slack-logo.png", "/microsoft-teams-logo.png", "/google-workspace-logo.png"],
  },
]

export function IntegrationsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">50+ integrations</h2>
          <p className="text-lg text-muted-foreground">
            See how WorkWise helps you solve your unique business needs at scale.
          </p>
        </div>

        <div className="space-y-12">
          {integrationCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-semibold text-center text-muted-foreground">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {category.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                  >
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`${category.title} integration`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
