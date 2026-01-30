"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setName("")
    setEmail("")
  }

  return (
    <section className="py-16 md:py-20 bg-muted/50 relative overflow-hidden">
      {/* Decorative arc pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-30">
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/30" />
          <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/20" />
          <circle cx="300" cy="300" r="300" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/10" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Heading and subtitle */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Monthly <span className="text-primary">HR Newsletter</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Stay One Step Ahead By Signing Up To Our Monthly Newsletter!
              </p>
            </div>

            {/* Right side - Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <p className="text-lg font-semibold text-foreground">Thank you for subscribing!</p>
                  <p className="text-muted-foreground mt-2">
                    You&apos;ll receive our next newsletter in your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background text-foreground placeholder:text-muted-foreground border-0 h-12 rounded-full shadow-sm"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background text-foreground placeholder:text-muted-foreground border-0 h-12 rounded-full shadow-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#3EBAB2] hover:bg-[#35a39c] text-white h-12 rounded-full font-semibold tracking-wide"
                  >
                    {isSubmitting ? "SIGNING UP..." : "SIGN UP HERE"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
