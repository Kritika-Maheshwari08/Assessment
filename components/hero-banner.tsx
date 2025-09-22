export function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">Adidas Men Running</h1>
            <h2 className="text-4xl font-bold mb-4">Sneakers</h2>
            <p className="text-lg opacity-90 mb-6">Performance and design. Taken right to the edge.</p>
            <button className="text-white font-semibold hover:opacity-80 transition-opacity border-b-2 border-white pb-1">
              SHOP NOW
            </button>
          </div>
          <div className="flex-1 flex justify-end relative">
            <div className="relative">
              <img src="/blue-sneaker-hero.png" alt="Blue Running Sneaker" className="w-80 h-48 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
