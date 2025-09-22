"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold text-foreground">E-Comm</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-blue-500 hover:text-primary px-3 py-2 text-sm font-medium border-b-2 border-blue-500"
              >
                HOME
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                BAG
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                SNEAKERS
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                BELT
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                CONTACT
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-2 text-sm">Items</span>
              <span className="ml-1 text-sm font-medium">$0.00</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
