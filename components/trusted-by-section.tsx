import Image from "next/image"

const clients = [
  { name: "Bell Pest Control", logo: "/images/bell.jpg" },
  { name: "Cali Virgin", logo: "/images/calvirgin.jpg" },
  { name: "Cook Engineering", logo: "/images/cook-engineering.jpg" },
  { name: "Downtown Sacramento Partnership", logo: "/images/downtown.jpg" },
  { name: "Grin", logo: "/images/grin.jpg" },
  { name: "Big Brothers Big Sisters", logo: "/images/big-brothers.jpg" },
  { name: "Flatstick Pub", logo: "/images/flatstick.jpg" },
]

export function TrustedBySection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold">
            Join <span className="font-bold">5,000+</span> companies and <span className="font-bold">50,000</span>{" "}
            employees staying compliant right now.
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
              {clients.map((client, index) => (
                <div key={index} className="h-16 md:h-20 w-32 md:w-40 flex-shrink-0 relative">
                  <div className="bg-white rounded-lg p-3 h-full flex items-center justify-center shadow-sm">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      fill
                      className="object-contain !relative !h-full !w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
