"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

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
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay ahead of HR & Safety changes
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
            Get practical insights, compliance updates, and workplace best practices—delivered straight to your inbox.
          </p>

          {isSubmitted ? (
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <p className="text-lg font-semibold">Thank you for subscribing!</p>
              <p className="text-primary-foreground/80 mt-2">
                You&apos;ll receive our next newsletter in your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 h-12"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 h-12"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-background text-foreground hover:bg-background/90 h-12 px-8 whitespace-nowrap"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}

          <p className="text-sm text-primary-foreground/60 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
