"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gift, Heart, Star, Package, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { products, categories, type Product } from "@/data/products"
import { ProductDetailModal } from "./product-detail-modal"

export function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [displayCount, setDisplayCount] = useState(16)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const getProductCount = (category: string) => {
    if (category === "All") return products.length
    return products.filter(p => p.category === category).length
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    // Reset display count - show more for "All" category
    setDisplayCount(category === "All" ? 16 : 8)
  }

  const getImageSrc = (imagePath?: string) => {
    if (!imagePath) return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gSW1hZ2U8L3RleHQ+PC9zdmc+"
    // Ensure path starts with "/" and encode spaces
    const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`
    return cleanPath.replace(/ /g, '%20')
  }

  const filteredProducts = activeCategory === "All" 
    ? products.slice(0, displayCount) 
    : products.filter((p) => p.category === activeCategory).slice(0, displayCount)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section ref={sectionRef} id="products" className="py-16 lg:py-20 bg-background" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            Our Curated Selection
          </span>
          <h2
            className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4"
            style={{ animationDelay: "100ms" }}
          >
            Premium gifts for <span className="italic text-accent">every occasion</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ animationDelay: "200ms" }}
          >
            Discover our handpicked collection of luxury corporate gifts, designed to make lasting impressions.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className="animate-on-scroll opacity-0 flex flex-wrap justify-center gap-3 mb-12"
          style={{ animationDelay: "300ms" }}
          suppressHydrationWarning
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md border border-gray-300"
              }`}
              suppressHydrationWarning
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleProductClick(product)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 sm:mb-4 bg-white border border-gray-200">
                <img
                    src={getImageSrc(product.image)}
                    alt={product.name}
                    className="block w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Image failed to load:', getImageSrc(product.image))
                      // Just hide the broken image, don't replace with placeholder
                      e.currentTarget.style.display = 'none'
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', getImageSrc(product.image))
                    }}
                  />
                {product.featured && (
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-accent">{product.category}</span>
                  {product.capacity && (
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {product.capacity}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-serif font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                {product.model && (
                  <p className="text-xs text-accent font-medium">Model: {product.model}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProducts.length < (activeCategory === "All" ? products.length : products.filter(p => p.category === activeCategory).length) && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setDisplayCount(prev => prev + 8)}
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 bg-transparent"
            >
              Load More Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}

        {/* View All CTA */}
        <div className="animate-on-scroll opacity-0 text-center mt-12" style={{ animationDelay: "400ms" }}>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
            <Link href="#quote">
              Request Custom Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="animate-on-scroll opacity-0 mt-16 pt-16 border-t border-border" style={{ animationDelay: "600ms" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{products.length}+</h3>
              <p className="text-sm text-muted-foreground">Premium Products</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{categories.length - 1}</h3>
              <p className="text-sm text-muted-foreground">Categories</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">24h</h3>
              <p className="text-sm text-muted-foreground">Quick Response</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Gift className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">100%</h3>
              <p className="text-sm text-muted-foreground">Customizable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  )
}
