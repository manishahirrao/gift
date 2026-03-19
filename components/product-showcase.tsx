"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const collections = [
  {
    id: 1,
    name: "Executive Collection",
    description: "Luxury gifts for C-suite and VIP clients",
    price: "From $150",
    image: "/luxury-leather-executive-gift-set-with-pen-wallet-.jpg",
    items: ["Leather goods", "Premium tech", "Fine spirits"],
  },
  {
    id: 2,
    name: "Team Appreciation",
    description: "Thoughtful gifts that boost morale",
    price: "From $50",
    image: "/elegant-employee-appreciation-gift-box-with-gourme.jpg",
    items: ["Gourmet snacks", "Wellness items", "Branded merch"],
  },
  {
    id: 3,
    name: "Client Welcome",
    description: "Make first impressions unforgettable",
    price: "From $75",
    image: "/premium-welcome-gift-basket-with-artisan-products-.jpg",
    items: ["Artisan products", "Welcome cards", "Custom boxes"],
  },
  {
    id: 4,
    name: "Holiday Celebration",
    description: "Seasonal gifts that spread joy",
    price: "From $60",
    image: "/festive-corporate-holiday-gift-with-elegant-season.jpg",
    items: ["Festive treats", "Seasonal items", "Gift cards"],
  },
]

export function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
    <section ref={sectionRef} id="collections" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4">
              Curated <span className="italic text-accent">collections</span>
            </h2>
            <p
              className="animate-on-scroll opacity-0 text-lg text-muted-foreground max-w-xl"
              style={{ animationDelay: "100ms" }}
            >
              Expertly assembled gift sets designed for every corporate occasion.
            </p>
          </div>
          <Button
            variant="outline"
            className="animate-on-scroll opacity-0 rounded-full self-start md:self-auto bg-transparent"
            style={{ animationDelay: "200ms" }}
          >
            View All Collections
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="animate-on-scroll opacity-0 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[5/6] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-card-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-medium text-foreground">{collection.name}</h3>
                  <span className="text-sm font-medium text-accent">{collection.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{collection.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {collection.items.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
