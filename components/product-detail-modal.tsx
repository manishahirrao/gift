"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Ruler, Palette, Info, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Product } from "@/data/products"

interface ProductDetailModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  if (!product) return null

  const getImageSrc = (imagePath?: string) => {
    if (!imagePath) return "/placeholder.svg"
    // Ensure path starts with "/"
    return imagePath.startsWith("/") ? imagePath : `/${imagePath}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Product Image */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary">
            <img
              src={getImageSrc(product.image)}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Modal image failed to load silently
              }}
            />
          </div>

          {/* Quick Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-xs">
                {product.category}
              </Badge>
              {product.featured && (
                <Badge variant="default" className="text-xs">
                  Featured
                </Badge>
              )}
              {product.capacity && (
                <Badge variant="outline" className="text-xs">
                  {product.capacity}
                </Badge>
              )}
            </div>
            
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {/* Detailed Specifications */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="text-xs">
                <Info className="w-4 h-4 mr-1" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="specs" className="text-xs">
                <Ruler className="w-4 h-4 mr-1" />
                Specs
              </TabsTrigger>
              <TabsTrigger value="features" className="text-xs">
                <Package className="w-4 h-4 mr-1" />
                Features
              </TabsTrigger>
              <TabsTrigger value="colors" className="text-xs">
                <Palette className="w-4 h-4 mr-1" />
                Colors
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium mb-2">Product Description</h4>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                  {product.specifications && ` ${product.specifications}`}
                </p>
              </div>
              
              {product.model && (
                <div>
                  <h4 className="font-medium mb-2">Model Number</h4>
                  <p className="text-sm text-muted-foreground">{product.model}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="specs" className="space-y-4 mt-4">
              {product.size && (
                <div>
                  <h4 className="font-medium mb-2">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">{product.size}</p>
                </div>
              )}
              
              {product.capacity && (
                <div>
                  <h4 className="font-medium mb-2">Capacity</h4>
                  <p className="text-sm text-muted-foreground">{product.capacity}</p>
                </div>
              )}
              
              <div>
                <h4 className="font-medium mb-2">Category</h4>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Premium quality materials</li>
                  <li>• Custom logo branding available</li>
                  <li>• Ideal for corporate gifting</li>
                  <li>• Durable and long-lasting</li>
                  {product.category.includes("Combo") && <li>• Multi-item gift set</li>}
                  {product.category.includes("Diary") && <li>• High-quality paper</li>}
                  {product.category.includes("Flask") && <li>• Temperature retention</li>}
                  {product.category.includes("Pen") && <li>• Smooth writing experience</li>}
                </ul>
              </div>
              
              {product.specifications && (
                <div>
                  <h4 className="font-medium mb-2">Additional Specifications</h4>
                  <p className="text-sm text-muted-foreground">{product.specifications}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="colors" className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium mb-2">Available Colors</h4>
                {product.colors && product.colors.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Multiple color options available. Contact us for specific color requirements.
                  </p>
                )}
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Branding Options</h4>
                <p className="text-sm text-muted-foreground">
                  Custom logo printing and engraving available on most products.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button asChild className="flex-1">
              <Link href="#quote" onClick={onClose}>
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
