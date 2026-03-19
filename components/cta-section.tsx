"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-card-foreground">
              Ready to elevate your <span className="italic text-accent">corporate gifting</span>?
            </h2>
            <p
              className="animate-on-scroll opacity-0 text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
              style={{ animationDelay: "100ms" }}
            >
              Join 500+ companies creating memorable moments with Surya Traders. Start with a free consultation.
            </p>

            {isSubmitted ? (
              <div
                className="animate-on-scroll opacity-0 flex items-center justify-center gap-3 text-accent"
                style={{ animationDelay: "200ms" }}
              >
                <CheckCircle2 className="w-6 h-6" />
                <span className="text-lg font-medium">Thank you! We'll be in touch soon.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                style={{ animationDelay: "200ms" }}
              >
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 rounded-full px-6 bg-background border-border"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}

            <p
              className="animate-on-scroll opacity-0 text-sm text-muted-foreground mt-6"
              style={{ animationDelay: "300ms" }}
            >
              No credit card required • Free consultation • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
