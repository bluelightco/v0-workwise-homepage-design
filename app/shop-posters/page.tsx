"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const posters = [
  {
    id: "ca-state-only",
    title: "California State-Only Labor Law Poster",
    price: 49.99,
    state: "California",
    category: "State-Only",
    image: "/images/ca-labor-law-poster.webp",
  },
  {
    id: "ca-combo",
    title: "California All-in-One (State + Federal)",
    price: 79.99,
    state: "California",
    category: "All-in-One",
    image: "/images/ca-labor-law-poster.webp",
  },
  {
    id: "tx-state-only",
    title: "Texas State-Only Labor Law Poster",
    price: 49.99,
    state: "Texas",
    category: "State-Only",
    image: "/images/ca-labor-law-poster.webp",
  },
  {
    id: "tx-combo",
    title: "Texas All-in-One (State + Federal)",
    price: 79.99,
    state: "Texas",
    category: "All-in-One",
    image: "/images/ca-labor-law-poster.webp",
  },
  {
    id: "ny-state-only",
    title: "New York State-Only Labor Law Poster",
    price: 49.99,
    state: "New York",
    category: "State-Only",
    image: "/images/ca-labor-law-poster.webp",
  },
  {
    id: "ny-combo",
    title: "New York All-in-One (State + Federal)",
    price: 79.99,
    state: "New York",
    category: "All-in-One",
    image: "/images/ca-labor-law-poster.webp",
  },
  {
    id: "fl-state-only",
    title: "Florida State-Only Labor Law Poster",
    price: 49.99,
    state: "Florida",
    category: "State-Only",
    image: "/images/ca-labor-law-poster.webp",
  },
  {
    id: "fl-combo",
    title: "Florida All-in-One (State + Federal)",
    price: 79.99,
    state: "Florida",
    category: "All-in-One",
    image: "/images/ca-labor-law-poster.webp",
  },
  {
    id: "federal-only",
    title: "Federal-Only Labor Law Poster",
    price: 39.99,
    state: "All States",
    category: "Federal-Only",
    image: "/images/ca-labor-law-poster.webp",
  },
]

export default function ShopPostersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedState, setSelectedState] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosters = posters.filter((poster) => {
    const matchesSearch = poster.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesState = selectedState === "all" || poster.state === selectedState
    const matchesCategory = selectedCategory === "all" || poster.category === selectedCategory
    return matchesSearch && matchesState && matchesCategory
  })

  const states = ["all", ...Array.from(new Set(posters.map((p) => p.state)))]
  const categories = ["all", ...Array.from(new Set(posters.map((p) => p.category)))]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-center">Shop Labor Law Posters</h1>
            <p className="text-lg md:text-xl opacity-90 text-balance text-center max-w-3xl mx-auto">
              Find the right compliance poster for your state and industry. All posters are attorney-reviewed and
              guaranteed compliant.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search posters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by State" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state === "all" ? "All States" : state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Poster Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredPosters.length} of {posters.length} posters
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosters.map((poster) => (
                <Card key={poster.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/shop-posters/${poster.id}`}>
                    <div className="aspect-[3/4] bg-gray-100 relative">
                      <img
                        src={poster.image || "/placeholder.svg"}
                        alt={poster.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <Link href={`/shop-posters/${poster.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                        {poster.title}
                      </h3>
                    </Link>
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{poster.state}</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{poster.category}</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">${poster.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" asChild>
                      <Link href={`/shop-posters/${poster.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredPosters.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No posters found matching your filters.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedState("all")
                    setSelectedCategory("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-slate-800 text-slate-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-lg text-slate-200 mb-8">
              Not sure which poster is right for your business? Our compliance experts can help you determine exactly
              what you need based on your locations and industry.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
