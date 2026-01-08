import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "HR Director",
    company: "Pacific Coast Logistics",
    image: "/images/reviews/sarah-mitchell.jpg",
    rating: 5,
    text: "WorkWise has been a game-changer for our compliance. Their team is responsive, knowledgeable, and truly cares about our success.",
  },
  {
    name: "Marcus Johnson",
    role: "Operations Manager",
    company: "Golden State Manufacturing",
    image: "/images/reviews/marcus-johnson.jpg",
    rating: 5,
    text: "Finally, a compliance partner that understands small business. The poster auto-updates alone have saved us countless hours.",
  },
  {
    name: "Jennifer Chen",
    role: "CEO",
    company: "Bay Area Tech Solutions",
    image: "/images/reviews/jennifer-chen.jpg",
    rating: 5,
    text: "Professional, thorough, and always available when we need them. Our HR compliance has never been stronger.",
  },
  {
    name: "David Rodriguez",
    role: "Safety Manager",
    company: "Summit Construction",
    image: "/images/reviews/david-rodriguez.jpg",
    rating: 5,
    text: "The safety training programs are excellent. Our incident rates dropped significantly after partnering with WorkWise.",
  },
  {
    name: "Amanda Peters",
    role: "Office Manager",
    company: "Coastal Dental Group",
    image: "/images/reviews/amanda-peters.jpg",
    rating: 5,
    text: "As a multi-location practice, keeping up with compliance was overwhelming. WorkWise made it simple and stress-free.",
  },
]

export function GoogleReviewsSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <svg className="h-8 w-8" viewBox="0 0 24 24">
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
            <span className="text-lg font-semibold text-muted-foreground">Google Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-2xl font-bold">5.0</span>
            <span className="text-muted-foreground ml-1">from 270 reviews</span>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold">
            Trusted by <span className="font-bold">60,000+</span> companies across California
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 text-sm leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                    <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional reviews row - hidden on mobile */}
          <div className="hidden lg:grid grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {reviews.slice(3, 5).map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 text-sm leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                    <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
