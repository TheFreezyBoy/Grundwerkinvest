'use client'
import { useEffect, useState } from 'react'
import {
  MapPin,
  TrendingUp,
  ArrowRight,
  SlidersHorizontal,
  ArrowUpDown,
  Building2,
  Euro,
  Home,
  BarChart3,
  ChevronUp,
  ChevronDown,
  X
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import Link from 'next/link'
import { PropertyCard } from '@/components/PropertyCard'

interface Property {
  id: number
  title: string
  location: string
  city: string
  image: string
  price: number
  monthlyIncome: number
  roi: number
  bedrooms: number
  size: number
  type: string
  yearlyGrowth: number[]
}

type SortOption = 'roi-high' | 'roi-low' | 'price-low' | 'price-high' | 'income-high'

export default function PropertiesPage() {
  const [selectedCity, setSelectedCity] = useState<string>('All')
  const [selectedBudget, setSelectedBudget] = useState<string>('All')
  const [sortBy, setSortBy] = useState<SortOption>('roi-high')
  const [cities, setCities] = useState([])
  const [properties, setProperties] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedType, setSelectedType] = useState<string>('All')
  const [showSoldProperties, setShowSoldProperties] = useState(true)

  // Accordion states for desktop filters
  const [cityOpen, setCityOpen] = useState(true)
  const [budgetOpen, setBudgetOpen] = useState(true)
  const [typeOpen, setTypeOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(true)

  // Mobile filter drawer state
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const propertyTypes = [
    'All',
    'Apartment',
    'Penthouse',
    'House',
    'Villa',
    'Loft',
    'Studio',
    'Townhouse',
  ]

  const budgets = ['All', '< €300K', '€300K - €500K', '> €500K']

  const handleFilterChange = (callback: () => void) => {
    setIsLoading(true)
    callback()
    setTimeout(() => setIsLoading(false), 300)
  }
  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams()

      if (selectedCity !== 'All') params.append('city', selectedCity)

      if (selectedBudget !== 'All') {
        if (selectedBudget === '< €300K') params.append('minPrice', '0')
        else if (selectedBudget === '€300K - €500K') {
          params.append('minPrice', '300000')
          params.append('maxPrice', '500000')
        } else if (selectedBudget === '> €500K') params.append('minPrice', '500000')
      }

      const queryParts: string[] = []

      // фильтр по городу
      if (params.has('city')) {
        queryParts.push(`address.city = "${params.get('city')}"`)
      }

      // фильтр по цене
      if (params.has('minPrice')) {
        queryParts.push(`prices.price >= ${params.get('minPrice')}`)
      }
      if (params.has('maxPrice')) {
        queryParts.push(`prices.price <= ${params.get('maxPrice')}`)
      }

      const queryString = queryParts.length ? `?where[and]=[${queryParts.join(',')}]` : ''

      const res = await fetch(`/api/getAllProperties${queryString}`)
      const data = await res.json()

      setCities(['All', ...data.cities])
      setProperties(data.listings)
    }

    fetchData()
  }, [selectedCity, selectedBudget])

  let filteredProperties = properties.filter((property) => {
    let budgetMatch = true
    if (selectedBudget === '< €300K') {
      budgetMatch = property.price < 300000
    } else if (selectedBudget === '€300K - €500K') {
      budgetMatch = property.price >= 300000 && property.price <= 500000
    } else if (selectedBudget === '> €500K') {
      budgetMatch = property.price > 500000
    }

    return budgetMatch
  })

  // Sort properties
  filteredProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'roi-high':
        return b.roi - a.roi
      case 'roi-low':
        return a.roi - b.roi
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'income-high':
        return b.monthlyIncome - a.monthlyIncome
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Compact Modern Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left Side - Title & Subtitle */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                <h1 className="text-2xl md:text-3xl text-white">Investment Properties</h1>
              </div>
              <p className="text-sm md:text-base text-white/80">
                Curated selection across Germany's top markets
              </p>
            </div>

            {/* Right Side - Quick Stats */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-xs text-white/70">Available</div>
                <div className="text-xl md:text-2xl text-white font-semibold">
                  {properties.filter((p) => !p.isSold).length}
                </div>
              </div>
              <div className="hidden sm:block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-xs text-white/70">Cities</div>
                <div className="text-xl md:text-2xl text-white font-semibold">
                  {cities.length - 1}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-xl text-foreground hover:bg-muted transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 text-accent" />
              Filters & Sort
            </button>
          </div>

          <div className="flex gap-6 lg:gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="top-24 space-y-4">
                {/* Sort Options - Accordion */}
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <ArrowUpDown className="w-5 h-5 text-accent" />
                      <span className="text-lg text-foreground">Sort By</span>
                    </div>
                    {sortOpen ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>

                  {sortOpen && (
                    <div className="p-4 flex flex-col gap-2">
                      <button
                        onClick={() => handleFilterChange(() => setSortBy('date-updated'))}
                        className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          sortBy === 'date-updated'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        Recently Updated
                      </button>
                      <button
                        onClick={() => handleFilterChange(() => setSortBy('date-added'))}
                        className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          sortBy === 'date-added'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        Recently Added
                      </button>
                      <button
                        onClick={() => handleFilterChange(() => setSortBy('price-asc'))}
                        className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          sortBy === 'price-asc'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        Price: Low to High
                      </button>
                      <button
                        onClick={() => handleFilterChange(() => setSortBy('price-desc'))}
                        className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          sortBy === 'price-desc'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        Price: High to Low
                      </button>
                      <button
                        onClick={() => handleFilterChange(() => setSortBy('roi-desc'))}
                        className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          sortBy === 'roi-desc'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        ROI: High to Low
                      </button>
                      <button
                        onClick={() => handleFilterChange(() => setSortBy('roi-asc'))}
                        className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          sortBy === 'roi-asc'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        ROI: Low to High
                      </button>
                    </div>
                  )}
                </div>

                {/* Filters Card with Accordion */}
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className="flex items-center gap-2 p-4 border-b border-border">
                    <SlidersHorizontal className="w-5 h-5 text-accent" />
                    <h3 className="text-lg text-foreground">Filters</h3>
                  </div>

                  {/* City Filter - Accordion */}
                  <div className="border-b border-border">
                    <button
                      onClick={() => setCityOpen(!cityOpen)}
                      className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-sm text-foreground">City</span>
                      {cityOpen ? (
                        <ChevronUp className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                    {cityOpen && (
                      <div className="p-4 flex flex-col gap-2">
                        {cities.map((city) => (
                          <button
                            key={city}
                            onClick={() => handleFilterChange(() => setSelectedCity(city))}
                            className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                              selectedCity === city
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                            }`}
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Budget Filter - Accordion */}
                  <div className="border-b border-border">
                    <button
                      onClick={() => setBudgetOpen(!budgetOpen)}
                      className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-sm text-foreground">Budget</span>
                      {budgetOpen ? (
                        <ChevronUp className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                    {budgetOpen && (
                      <div className="p-4 flex flex-col gap-2">
                        {budgets.map((budget) => (
                          <button
                            key={budget}
                            onClick={() => handleFilterChange(() => setSelectedBudget(budget))}
                            className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                              selectedBudget === budget
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Property Type Filter - Accordion */}
                  <div className="border-b border-border">
                    <button
                      onClick={() => setTypeOpen(!typeOpen)}
                      className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-sm text-foreground">Property Type</span>
                      {typeOpen ? (
                        <ChevronUp className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                    {typeOpen && (
                      <div className="p-4 flex flex-col gap-2">
                        {propertyTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => handleFilterChange(() => setSelectedType(type))}
                            className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                              selectedType === type
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Show Sold Listings Toggle */}
                  <div className="p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showSoldProperties}
                        onChange={(e) =>
                          handleFilterChange(() => setShowSoldProperties(e.target.checked))
                        }
                        className="w-4 h-4 rounded border-border text-accent focus:ring-accent cursor-pointer"
                      />
                      <span className="text-sm text-foreground">Show sold properties</span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Listings Grid */}
            <div className="flex-1 min-w-0">
              {/* Results Count */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl md:text-2xl text-foreground">
                  {filteredProperties.length}{' '}
                  {filteredProperties.length === 1 ? 'Property' : 'Listings'} Found
                </h2>
              </div>

              {/* Loading State */}
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-card rounded-xl border border-border overflow-hidden animate-pulse"
                    >
                      <div className="h-48 bg-muted" />
                      <div className="p-4 space-y-3">
                        <div className="h-5 bg-muted rounded w-3/4" />
                        <div className="h-4 bg-muted rounded w-1/2" />
                        <div className="h-4 bg-muted rounded w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      featured={property.isFeatured}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 md:py-16 bg-card rounded-xl border border-border">
                  <Building2 className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg md:text-xl text-foreground mb-2">No properties found</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Try adjusting your filters to see more results
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowMobileFilters(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-accent" />
                <h2 className="text-lg text-foreground">Filters & Sort</h2>
              </div>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* City Filter */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setCityOpen(!cityOpen)}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm text-foreground">City</span>
                  {cityOpen ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
                {cityOpen && (
                  <div className="p-4 flex flex-col gap-2">
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          handleFilterChange(() => setSelectedCity(city))
                        }}
                        className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          selectedCity === city
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Budget Filter */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setBudgetOpen(!budgetOpen)}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm text-foreground">Budget</span>
                  {budgetOpen ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
                {budgetOpen && (
                  <div className="p-4 flex flex-col gap-2">
                    {budgets.map((budget) => (
                      <button
                        key={budget}
                        onClick={() => {
                          handleFilterChange(() => setSelectedBudget(budget))
                        }}
                        className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          selectedBudget === budget
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Type Filter */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setTypeOpen(!typeOpen)}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm text-foreground">Property Type</span>
                  {typeOpen ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
                {typeOpen && (
                  <div className="p-4 flex flex-col gap-2">
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          handleFilterChange(() => setSelectedType(type))
                        }}
                        className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          selectedType === type
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Show Sold Toggle */}
              <div className="bg-card rounded-xl border border-border p-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showSoldProperties}
                    onChange={(e) =>
                      handleFilterChange(() => setShowSoldProperties(e.target.checked))
                    }
                    className="w-4 h-4 rounded border-border text-accent focus:ring-accent cursor-pointer"
                  />
                  <span className="text-sm text-foreground">Show sold properties</span>
                </label>
              </div>

              {/* Sort Options */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">Sort By</span>
                  </div>
                  {sortOpen ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
                {sortOpen && (
                  <div className="p-4 flex flex-col gap-2">
                    <button
                      onClick={() => {
                        handleFilterChange(() => setSortBy('date-updated'))
                      }}
                      className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                        sortBy === 'date-updated'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      Recently Updated
                    </button>
                    <button
                      onClick={() => {
                        handleFilterChange(() => setSortBy('date-added'))
                      }}
                      className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                        sortBy === 'date-added'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      Recently Added
                    </button>
                    <button
                      onClick={() => {
                        handleFilterChange(() => setSortBy('price-asc'))
                      }}
                      className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                        sortBy === 'price-asc'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      Price: Low to High
                    </button>
                    <button
                      onClick={() => {
                        handleFilterChange(() => setSortBy('price-desc'))
                      }}
                      className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                        sortBy === 'price-desc'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      Price: High to Low
                    </button>
                    <button
                      onClick={() => {
                        handleFilterChange(() => setSortBy('roi-desc'))
                      }}
                      className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                        sortBy === 'roi-desc'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      ROI: High to Low
                    </button>
                    <button
                      onClick={() => {
                        handleFilterChange(() => setSortBy('roi-asc'))
                      }}
                      className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                        sortBy === 'roi-asc'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      ROI: Low to High
                    </button>
                  </div>
                )}
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
