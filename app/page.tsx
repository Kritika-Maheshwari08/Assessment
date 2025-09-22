"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { SidebarFilters } from "@/components/sidebar-filters"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { mockProducts } from "@/lib/mock-data"

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.category)) {
        return false
      }

      // Color filter
      if (selectedColors.length > 0) {
        const hasMatchingColor = product.colors.some((color) => selectedColors.includes(color))
        if (!hasMatchingColor) return false
      }

      // Price filter
      const productPrice = product.discountPrice || product.price
      if (productPrice < priceRange[0] || productPrice > priceRange[1]) {
        return false
      }

      return true
    })
  }, [selectedCategories, selectedBrands, selectedColors, priceRange])

  // Get the first selected color for visual feedback
  const selectedColor = selectedColors.length > 0 ? selectedColors[0] : undefined

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner />

      <div className="max-w-7xl mx-auto flex">
        <SidebarFilters
          selectedCategories={selectedCategories}
          selectedColors={selectedColors}
          selectedBrands={selectedBrands}
          priceRange={priceRange}
          onCategoryChange={setSelectedCategories}
          onColorChange={setSelectedColors}
          onBrandChange={setSelectedBrands}
          onPriceRangeChange={setPriceRange}
        />

        <ProductGrid products={filteredProducts} selectedColor={selectedColor} />
      </div>

      <Footer />
    </div>
  )
}
