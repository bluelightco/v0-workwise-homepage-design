import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "HR Director",
    company: "Pacific Coast Manufacturing",
    image: "/images/reviews/sarah-mitchell.jpg",
    rating: 5,
    review:
      "WorkWise transformed our compliance process. What used to take days now takes hours. Their team is incredibly responsive and knowledgeable.",
  },
  {
    name: "Marcus Johnson",
    role: "Operations Manager",
    company: "Golden State Logistics",
    image: "/images/reviews/marcus-johnson.jpg",
    rating: 5,
    review:
      "The auto-update poster subscription is a game-changer. We never worry about outdated postings anymore. Highly recommend for multi-location businesses.",
  },
  {
    name: "Jennifer Chen",
    role: "Owner",
    company: "Bay Area Dental Group",
    image: "/images/reviews/jennifer-chen.jpg",
    rating: 5,
    review:
      "As a small business owner, I don't have time to keep up with changing regulations. WorkWise handles everything and gives me peace of mind.",
  },
  {
    name: "David Rodriguez",
    role: "Safety Coordinator",
    company: "Central Valley Construction",
    image: "/images/reviews/david-rodriguez.jpg",
    rating: 5,
    review:
      "Their safety training programs are top-notch. Our incident rates dropped significantly after implementing their recommendations.",
  },
  {
    name: "Amanda Peters",
    role: "VP of Human Resources",
    company: "TechStart Solutions",
    image: "/images/reviews/amanda-peters.jpg",
    rating: 5,
    review:
      "The HR & Safety Partner service is like having an expert on staff without the overhead. They've helped us scale from 20 to 200 employees seamlessly.",
  },
]

export function GoogleReviewsSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <svg viewBox="0 0 24 24" className="h-8 w-8" aria-label="Google">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-bold">5.0</span>
          </div>
          <p className="text-muted-foreground">Trusted by 60,000+ companies nationwide</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <p className="text-sm text-muted-foreground">{review.company}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.review}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {reviews.slice(3).map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <p className="text-sm text-muted-foreground">{review.company}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
