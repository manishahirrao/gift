"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "Surya Traders transformed how we appreciate our clients. The quality is exceptional, and our recipients always reach out to thank us personally.",
    author: "Rajesh Sharma",
    title: "VP of Client Relations",
    company: "TechCorp India",
  },
  {
    id: 2,
    quote:
      "The team made our holiday gifting campaign effortless. 500 personalized gifts delivered on time with beautiful presentation. Incredible service.",
    author: "Priya Nair",
    title: "Head of People Operations",
    company: "Growth Dynamics",
  },
  {
    id: 3,
    quote:
      "We've tried many corporate gifting services, but Surya Traders stands apart. The attention to detail and customization options are unmatched.",
    author: "Amit Patel",
    title: "Marketing Director",
    company: "Innovate Solutions",
  },
  {
    id: 4,
    quote:
      "Their executive gift collection helped us strengthen key business relationships. The premium quality and thoughtful presentation exceeded our expectations.",
    author: "Anjali Reddy",
    title: "CEO",
    company: "Digital Ventures",
  },
  {
    id: 5,
    quote:
      "Outstanding service and exceptional products. Our team appreciation program has never been more successful. Highly recommend their services.",
    author: "Vikram Malhotra",
    title: "Operations Manager",
    company: "Global Enterprises",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 lg:py-20 bg-primary text-primary-foreground" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
            Loved by <span className="italic">industry leaders</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 text-lg text-primary-foreground/70 max-w-2xl mx-auto"
            style={{ animationDelay: "100ms" }}
          >
            See what our clients say about their gifting experiences.
          </p>
        </div>

        <div className="animate-on-scroll opacity-0 relative max-w-4xl mx-auto" style={{ animationDelay: "200ms" }}>
          <Quote className="absolute -top-8 -left-4 w-16 h-16 text-primary-foreground/10" />

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed text-center mb-10">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="inline-block">
                      <p className="text-lg font-semibold">{testimonial.author}</p>
                      <p className="text-primary-foreground/70">{testimonial.title}</p>
                      <p className="text-primary-foreground/60 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary-foreground w-6" : "bg-primary-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
