"use client"

import { CheckCircle, Award, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Premium products sourced from trusted manufacturers with rigorous quality control standards."
  },
  {
    icon: Award,
    title: "Expert Curation",
    description: "Handpicked corporate gifts that reflect excellence and sophistication for your brand."
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "15+ years of experience serving Fortune 500 companies and leading businesses."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Guaranteed delivery timelines with dedicated project management for every order."
  }
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Surya Traders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine quality, expertise, and reliability to deliver exceptional corporate gifting experiences that strengthen your business relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-primary font-medium">500+ Happy Corporate Clients</span>
            <span className="text-primary">•</span>
            <span className="text-primary font-medium">10,000+ Gifts Delivered</span>
            <span className="text-primary">•</span>
            <span className="text-primary font-medium">98% Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}
