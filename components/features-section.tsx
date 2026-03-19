"use client"

import { useEffect, useRef } from "react"
import { Gift, Truck, Sparkles, Users, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Gift,
    title: "Curated Collections",
    description: "Handpicked luxury items from premium brands, tailored for every occasion and budget.",
  },
  {
    icon: Sparkles,
    title: "Custom Branding",
    description: "Add your company logo and personalized messages to create memorable branded experiences.",
  },
  {
    icon: Truck,
    title: "Global Delivery",
    description: "Ship to 150+ countries with reliable tracking and guaranteed delivery windows.",
  },
  {
    icon: Users,
    title: "Bulk Ordering",
    description: "Effortlessly manage large orders with our enterprise dashboard and team collaboration tools.",
  },
  {
    icon: Clock,
    title: "Same-Day Options",
    description: "Last-minute gifting needs? We've got you covered with express delivery services.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Every gift comes with our satisfaction guarantee. If it's not perfect, we'll make it right.",
  },
]

export function FeaturesSection() {
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
    <section ref={sectionRef} className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-balance">
            Everything you need for <span className="italic text-accent">exceptional</span> gifting
          </h2>
          <p className="animate-on-scroll opacity-0 text-lg text-muted-foreground" style={{ animationDelay: "100ms" }}>
            From selection to delivery, we handle every detail so you can focus on what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-on-scroll opacity-0 group p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
