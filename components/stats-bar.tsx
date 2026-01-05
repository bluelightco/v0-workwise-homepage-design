import { cn } from "@/lib/utils"

interface StatsBarProps {
  variant?: "light" | "dark"
}

const stats = [
  { value: "1.5 Million+", label: "Posters Supplied" },
  { value: "10 Million+", label: "Posters Supported" },
  { value: "35+ Years", label: "Excellence Delivered" },
]

export function StatsBar({ variant = "light" }: StatsBarProps) {
  return (
    <section
      className={cn("py-12 md:py-16", variant === "dark" ? "bg-primary text-primary-foreground" : "bg-secondary/50")}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div
                className={cn(
                  "text-3xl md:text-4xl font-bold",
                  variant === "dark" ? "text-primary-foreground" : "text-foreground",
                )}
              >
                {stat.value}
              </div>
              <div
                className={cn(
                  "text-sm md:text-base",
                  variant === "dark" ? "text-primary-foreground/90" : "text-muted-foreground",
                )}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
