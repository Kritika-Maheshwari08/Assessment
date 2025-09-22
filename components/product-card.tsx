"use client"

import { Star } from "lucide-react"
import type { Product } from "@/lib/mock-data"

interface ProductCardProps {
  product: Product
  selectedColor?: string
}

export function ProductCard({ product, selectedColor }: ProductCardProps) {
  const displayPrice = product.discountPrice || product.price
  const originalPrice = product.discountPrice ? product.price : null

  // Get the background color based on selected color
  const getBackgroundColor = () => {
    if (selectedColor && product.colors.includes(selectedColor)) {
      return selectedColor
    }
    return "#f1f5f9" // Updated to match the light gray background from the design
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
      {/* Product Image */}
      <div
        className="relative aspect-square p-6 flex items-center justify-center bg-gray-100"
        style={{ backgroundColor: selectedColor && product.colors.includes(selectedColor) ? selectedColor : "#f1f5f9" }}
      >
        <img src={product.imageUrl || "/placeholder.svg"} alt={product.name} className="w-full h-full object-contain" />
        {product.isHot && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">HOT</div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 bg-white">
        <h3 className="font-medium text-gray-900 mb-3 text-sm">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.ratingValue) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-blue-500">${displayPrice.toFixed(2)}</span>
          {originalPrice && (
            <>
              <span className="text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
              {product.discountPercent && (
                <span className="text-sm text-red-500 font-medium">{product.discountPercent}% Off</span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
