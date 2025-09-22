"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { categories, colors, brands } from "@/lib/mock-data"
import { mockProducts } from "@/lib/mock-data"

interface SidebarFiltersProps {
  selectedCategories: string[]
  selectedColors: string[]
  selectedBrands: string[]
  priceRange: [number, number]
  onCategoryChange: (categories: string[]) => void
  onColorChange: (colors: string[]) => void
  onBrandChange: (brands: string[]) => void
  onPriceRangeChange: (range: [number, number]) => void
}

export function SidebarFilters({
  selectedCategories,
  selectedColors,
  selectedBrands,
  priceRange,
  onCategoryChange,
  onColorChange,
  onBrandChange,
  onPriceRangeChange,
}: SidebarFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    prices: true,
    colors: true,
    brands: true,
  })

  const [showAllCategories, setShowAllCategories] = useState(false)
  const [showAllBrands, setShowAllBrands] = useState(false)

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const getVisibleCategories = () => {
    const minItems = 6
    const actualItems = categories.length
    if (actualItems < minItems) {
      // Add placeholder items to reach minimum 6
      const placeholders = Array.from({ length: minItems - actualItems }, (_, i) => `Category ${actualItems + i + 1}`)
      return [...categories, ...placeholders]
    }
    return showAllCategories ? categories : categories.slice(0, 6)
  }

  const getVisibleBrands = () => {
    const minItems = 6
    const actualItems = brands.length
    if (actualItems < minItems) {
      // Add placeholder items to reach minimum 6
      const placeholders = Array.from({ length: minItems - actualItems }, (_, i) => `Brand ${actualItems + i + 1}`)
      return [...brands, ...placeholders]
    }
    return showAllBrands ? brands : brands.slice(0, 6)
  }

  const handleCategoryToggle = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]
    onCategoryChange(updated)
  }

  const handleColorToggle = (color: string) => {
    const updated = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color]
    onColorChange(updated)
  }

  const handleBrandToggle = (brand: string) => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand]
    onBrandChange(updated)
  }

  return (
    <div className="w-64 bg-white border-r border-border p-6 h-full">
      <h2 className="text-lg font-semibold mb-6">Product List-Grid</h2>

      {/* Categories */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full text-left font-medium mb-3 hover:text-primary transition-colors"
          aria-expanded={expandedSections.categories}
          aria-controls="categories-content"
        >
          <span>Categories</span>
          {expandedSections.categories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.categories && (
          <div id="categories-content" className="space-y-2">
            {getVisibleCategories().map((category, index) => {
              const isPlaceholder = !categories.includes(category)
              return (
                <label
                  key={`${category}-${index}`}
                  className={`flex items-center space-x-2 ${isPlaceholder ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50 p-1 rounded"}`}
                >
                  <input
                    type="checkbox"
                    checked={!isPlaceholder && selectedCategories.includes(category)}
                    onChange={() => !isPlaceholder && handleCategoryToggle(category)}
                    disabled={isPlaceholder}
                    className="rounded border-border"
                    aria-describedby={`${category}-count`}
                  />
                  <span className="text-sm">{category}</span>
                  <span id={`${category}-count`} className="text-xs text-muted-foreground ml-auto">
({isPlaceholder ? "0" : mockProducts.filter(p => p.category === category).length})
                  </span>
                </label>
              )
            })}
            {categories.length > 6 && (
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="text-sm text-primary hover:text-primary/80 font-medium mt-2"
              >
                {showAllCategories ? "View Less" : `View More (${categories.length - 6} more)`}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("prices")}
          className="flex items-center justify-between w-full text-left font-medium mb-3 hover:text-primary transition-colors"
          aria-expanded={expandedSections.prices}
          aria-controls="prices-content"
        >
          <span>PRICES</span>
          {expandedSections.prices ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.prices && (
          <div id="prices-content">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground">
                Range: ${priceRange[0]} - ${priceRange[1]}
              </span>
            </div>
            <Slider
              value={priceRange}
              onValueChange={(value) => onPriceRangeChange(value as [number, number])}
              max={500}
              min={0}
              step={10}
              className="mb-4"
              aria-label="Price range"
            />
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("colors")}
          className="flex items-center justify-between w-full text-left font-medium mb-3 hover:text-primary transition-colors"
          aria-expanded={expandedSections.colors}
          aria-controls="colors-content"
        >
          <span>COLOR</span>
          {expandedSections.colors ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.colors && (
          <div id="colors-content" className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorToggle(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                  selectedColors.includes(color)
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
                style={{ backgroundColor: color }}
                title={color}
                aria-label={`Select color ${color}`}
                aria-pressed={selectedColors.includes(color)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("brands")}
          className="flex items-center justify-between w-full text-left font-medium mb-3 hover:text-primary transition-colors"
          aria-expanded={expandedSections.brands}
          aria-controls="brands-content"
        >
          <span>BRAND</span>
          {expandedSections.brands ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.brands && (
          <div id="brands-content" className="space-y-2">
            {getVisibleBrands().map((brand, index) => {
              const isPlaceholder = !brands.includes(brand)
              return (
                <label
                  key={`${brand}-${index}`}
                  className={`flex items-center space-x-2 ${isPlaceholder ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50 p-1 rounded"}`}
                >
                  <input
                    type="checkbox"
                    checked={!isPlaceholder && selectedBrands.includes(brand)}
                    onChange={() => !isPlaceholder && handleBrandToggle(brand)}
                    disabled={isPlaceholder}
                    className="rounded border-border"
                    aria-describedby={`${brand}-count`}
                  />
                  <span className="text-sm">{brand}</span>
                  <span id={`${brand}-count`} className="text-xs text-muted-foreground ml-auto">
({isPlaceholder ? "0" : mockProducts.filter(p => p.brand === brand).length})
                  </span>
                </label>
              )
            })}
            {brands.length > 6 && (
              <button
                onClick={() => setShowAllBrands(!showAllBrands)}
                className="text-sm text-primary hover:text-primary/80 font-medium mt-2"
              >
                {showAllBrands ? "View Less" : `View More (${brands.length - 6} more)`}
              </button>
            )}
          </div>
        )}
      </div>

      <Button className="w-full bg-transparent" variant="outline">
        MORE
      </Button>
    </div>
  )
}
