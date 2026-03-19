"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Choose Your Collection",
    description: "Browse our curated collections or work with our gifting concierge to create something custom.",
  },
  {
    number: "02",
    title: "Personalize & Brand",
    description: "Add your logo, include personalized messages, and select premium packaging options.",
  },
  {
    number: "03",
    title: "Schedule Delivery",
    description: "Set delivery dates for individuals or bulk orders. We handle the logistics seamlessly.",
  },
  {
    number: "04",
    title: "Track & Celebrate",
    description: "Monitor deliveries in real-time and receive recipient reactions and thank-you notes.",
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section ref={sectionRef} id="how-it-works" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="animate-on-scroll opacity-0 relative order-2 lg:order-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/elegant-gift-wrapping-process-hands-tying-ribbon-o.jpg" alt="Gift wrapping process" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              <Image src="/beautifully-wrapped-corporate-gift-with-custom-bra.jpg" alt="Branded gift" fill className="object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
              How <span className="italic text-accent">gifting</span> works
            </h2>
            <p
              className="animate-on-scroll opacity-0 text-lg text-muted-foreground mb-12"
              style={{ animationDelay: "100ms" }}
            >
              Four simple steps to create unforgettable gifting experiences.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="animate-on-scroll opacity-0 flex gap-6 group"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                    <span className="text-sm font-semibold text-muted-foreground group-hover:text-accent transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
