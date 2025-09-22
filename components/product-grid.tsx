"use client"

import { useState } from "react"
import { ChevronDown, Grid3X3, List } from "lucide-react"
import { ProductCard } from "./product-card"
import type { Product } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"

interface ProductGridProps {
  products: Product[]
  selectedColor?: string
}

type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc" | "popularity"

export function ProductGrid({ products, selectedColor }: ProductGridProps) {
  const [sortBy, setSortBy] = useState<SortOption>("popularity")
  const [currentPage, setCurrentPage] = useState(1)
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [showItemsDropdown, setShowItemsDropdown] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(12)

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      case "price-asc":
        return (a.discountPrice || a.price) - (b.discountPrice || b.price)
      case "price-desc":
        return (b.discountPrice || b.price) - (a.discountPrice || a.price)
      case "popularity":
        return b.ratingCount - a.ratingCount
      default:
        return 0
    }
  })

  // Paginate products
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage)

  const sortOptions = [
    { value: "popularity", label: "Popularity" },
    { value: "name-asc", label: "Name A-Z" },
    { value: "name-desc", label: "Name Z-A" },
    { value: "price-asc", label: "Price Low to High" },
    { value: "price-desc", label: "Price High to Low" },
  ]

  const itemsPerPageOptions = [6, 12, 24, 48]

  return (
    <div className="flex-1 p-6">
      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          {/* Left side - Items count without avatar */}
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700">{sortedProducts.length} Items</span>
          </div>

          {/* Middle - Sort and Show controls */}
          <div className="flex items-center space-x-6">
            {/* Sort By Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Sort By</span>
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center space-x-2 px-3 py-1 bg-white border border-gray-300 rounded text-sm min-w-[100px] justify-between"
                >
                  <span>{sortOptions.find((opt) => opt.value === sortBy)?.label.split(" ")[0] || "Name"}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value as SortOption)
                          setShowSortDropdown(false)
                        }}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Show Items Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Show</span>
              <div className="relative">
                <button
                  onClick={() => setShowItemsDropdown(!showItemsDropdown)}
                  className="flex items-center space-x-2 px-3 py-1 bg-white border border-gray-300 rounded text-sm min-w-[60px] justify-between"
                >
                  <span>{itemsPerPage}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showItemsDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-20 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {itemsPerPageOptions.map((count) => (
                      <button
                        key={count}
                        onClick={() => {
                          setItemsPerPage(count)
                          setCurrentPage(1)
                          setShowItemsDropdown(false)
                        }}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side - View toggles only */}
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="p-2 text-cyan-600">
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 text-gray-400">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Grid - Updated to 3 columns layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} selectedColor={selectedColor} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center space-x-0">
          {[...Array(Math.min(5, totalPages))].map((_, index) => {
            const page = index + 1
            const isActive = currentPage === page
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 text-sm font-medium ${
                  isActive ? "bg-blue-400 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } ${index === 0 ? "rounded-l" : ""} ${index === Math.min(5, totalPages) - 1 ? "rounded-r" : ""}`}
              >
                {page}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
