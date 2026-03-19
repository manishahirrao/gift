"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-muted rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Now serving 500+ enterprises
              </span>
            </div>

            <h1
              className="animate-on-scroll opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance"
              style={{ animationDelay: "100ms" }}
            >
              Thoughtful gifts that <span className="italic text-accent">strengthen</span> business relationships
            </h1>

            <p
              className="animate-on-scroll opacity-0 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-none sm:max-w-xl"
              style={{ animationDelay: "200ms" }}
            >
              Curate premium corporate gifts that leave lasting impressions. From executive appreciation to client
              celebrations, we make gifting effortless and meaningful.
            </p>

            <div
              className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-3 sm:gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 group"
              >
                <Link href="#quote">
                  Request a Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 group bg-transparent">
                <Link href="#products">
                  <Sparkles className="mr-2 w-4 h-4" />
                  Explore Products
                </Link>
              </Button>
            </div>

            <div
              className="animate-on-scroll opacity-0 flex items-center gap-6 pt-4"
              style={{ animationDelay: "400ms" }}
            >
              
             
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative animate-on-scroll opacity-0 order-1 lg:order-2" style={{ animationDelay: "200ms" }}>
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/Bag_video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card - hidden on mobile */}
            <div className="absolute -left-4 sm:-left-6 lg:-left-8 bottom-16 sm:bottom-18 lg:bottom-20 bg-card p-3 sm:p-4 rounded-xl shadow-lg animate-float hidden sm:block lg:block">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">Gift Delivered!</p>
                  <p className="text-xs text-muted-foreground">Just now - Mumbai</p>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="absolute -right-4 top-20 bg-card p-4 rounded-xl shadow-lg hidden lg:block">
              <p className="text-3xl font-serif font-semibold text-card-foreground">98%</p>
              <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
