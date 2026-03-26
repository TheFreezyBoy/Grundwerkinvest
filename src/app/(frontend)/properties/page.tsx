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

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern City Apartment',
    location: 'Prenzlauer Berg',
    city: 'Berlin',
    image:
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 320000,
    monthlyIncome: 2400,
    roi: 9.0,
    bedrooms: 2,
    size: 75,
    type: 'Apartment',
    yearlyGrowth: [28800, 29800, 30900, 32100, 33400],
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    location: 'Schwabing',
    city: 'Munich',
    image:
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 580000,
    monthlyIncome: 4200,
    roi: 8.7,
    bedrooms: 3,
    size: 120,
    type: 'Penthouse',
    yearlyGrowth: [50400, 52200, 54100, 56100, 58200],
  },
  {
    id: 3,
    title: 'Renovated Family Home',
    location: 'Westend',
    city: 'Frankfurt',
    image:
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 420000,
    monthlyIncome: 3100,
    roi: 8.9,
    bedrooms: 3,
    size: 95,
    type: 'House',
    yearlyGrowth: [37200, 38500, 39900, 41400, 42900],
  },
  {
    id: 4,
    title: 'Contemporary Loft',
    location: 'Mitte',
    city: 'Berlin',
    image:
      'https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVzaWRlbnRpYWwlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 285000,
    monthlyIncome: 2200,
    roi: 9.3,
    bedrooms: 1,
    size: 60,
    type: 'Loft',
    yearlyGrowth: [26400, 27400, 28400, 29500, 30600],
  },
  {
    id: 5,
    title: 'Riverside Apartment',
    location: 'Sachsenhausen',
    city: 'Frankfurt',
    image:
      'https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTM0MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 390000,
    monthlyIncome: 2850,
    roi: 8.8,
    bedrooms: 2,
    size: 85,
    type: 'Apartment',
    yearlyGrowth: [34200, 35400, 36700, 38000, 39400],
  },
  {
    id: 6,
    title: 'Garden Villa',
    location: 'Bogenhausen',
    city: 'Munich',
    image:
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 750000,
    monthlyIncome: 5200,
    roi: 8.3,
    bedrooms: 4,
    size: 150,
    type: 'Villa',
    yearlyGrowth: [62400, 64700, 67100, 69600, 72200],
  },
  {
    id: 7,
    title: 'Urban Studio',
    location: 'Kreuzberg',
    city: 'Berlin',
    image:
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 240000,
    monthlyIncome: 1900,
    roi: 9.5,
    bedrooms: 1,
    size: 45,
    type: 'Studio',
    yearlyGrowth: [22800, 23700, 24600, 25500, 26500],
  },
  {
    id: 8,
    title: 'Executive Suite',
    location: 'Lehel',
    city: 'Munich',
    image:
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 480000,
    monthlyIncome: 3500,
    roi: 8.8,
    bedrooms: 2,
    size: 90,
    type: 'Apartment',
    yearlyGrowth: [42000, 43500, 45100, 46800, 48500],
  },
  {
    id: 9,
    title: 'Downtown Residence',
    location: 'Innenstadt',
    city: 'Frankfurt',
    image:
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 360000,
    monthlyIncome: 2700,
    roi: 9.0,
    bedrooms: 2,
    size: 80,
    type: 'Apartment',
    yearlyGrowth: [32400, 33600, 34800, 36100, 37400],
  },
]

type SortOption = 'roi-high' | 'roi-low' | 'price-low' | 'price-high' | 'income-high'

export default function PropertiesPage() {
  const [selectedCity, setSelectedCity] = useState<string>('All')
  const [selectedBudget, setSelectedBudget] = useState<string>('All')
  const [sortBy, setSortBy] = useState<SortOption>('roi-high')
  const [cities, setCities] = useState([]);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('All')
  const [showSoldProperties, setShowSoldProperties] = useState(true)


  const propertyTypes = [
    'All',
    'Apartment',
    'Penthouse',
    'House',
    'Villa',
    'Loft',
    'Studio',
    'Townhouse',
  ];

  // const cities = ['All', 'Berlin', 'Munich', 'Frankfurt']
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
        if (selectedBudget === '< €300K') params.append('budget', '<300')
        else if (selectedBudget === '€300K - €500K') params.append('budget', '300-500')
        else if (selectedBudget === '> €500K') params.append('budget', '>500')
      }

      const res = await fetch(`/api/getAllProperties?${params.toString()}`)
      const data = await res.json()

      console.log(541231, data.properties)
      setCities(['All', ...data.cities])
      setProperties(data.properties)
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
      {/* Compact Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-4">
            <Building2 className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Investment Properties</span>
          </div>
          <h1 className="text-5xl text-white mb-4">Available Properties</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Browse our curated selection of ready-made investment properties across Germany
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className="w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Filter Header */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <SlidersHorizontal className="w-5 h-5 text-accent" />
                    <h3 className="text-xl text-foreground">Filters</h3>
                  </div>

                  {/* City Filter */}
                  <div className="mb-6">
                    <label className="text-sm text-muted-foreground mb-3 block">City</label>
                    <div className="flex flex-col gap-2">
                      {cities.map((city) => (
                        <button
                          key={city}
                          onClick={() => handleFilterChange(() => setSelectedCity(city))}
                          className={`px-4 py-2.5 rounded-lg text-left transition-all ${
                            selectedCity === city
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Filter */}
                  <div className="mb-6">
                    <label className="text-sm text-muted-foreground mb-3 block">Budget</label>
                    <div className="flex flex-col gap-2">
                      {budgets.map((budget) => (
                        <button
                          key={budget}
                          onClick={() => handleFilterChange(() => setSelectedBudget(budget))}
                          className={`px-4 py-2.5 rounded-lg text-left transition-all ${
                            selectedBudget === budget
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Property Type Filter */}
                  <div className="mb-6">
                    <label className="text-sm text-muted-foreground mb-3 block">
                      Property Type
                    </label>
                    <div className="flex flex-col gap-2">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => handleFilterChange(() => setSelectedType(type))}
                          className={`px-4 py-2.5 rounded-lg text-left transition-all ${
                            selectedType === type
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Show Sold Properties Toggle */}
                  <div className="pt-4 border-t border-border">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showSoldProperties}
                        onChange={(e) =>
                          handleFilterChange(() => setShowSoldProperties(e.target.checked))
                        }
                        className="w-5 h-5 rounded border-border text-accent focus:ring-accent cursor-pointer"
                      />
                      <span className="text-sm text-foreground">Show sold properties</span>
                    </label>
                  </div>
                </div>

                {/* Sort Options */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <ArrowUpDown className="w-5 h-5 text-accent" />
                    <h3 className="text-xl text-foreground">Sort By</h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleFilterChange(() => setSortBy('date-updated'))}
                      className={`px-4 py-2.5 rounded-lg text-left transition-all ${
                        sortBy === 'date-updated'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      Recently Updated
                    </button>
                    <button
                      onClick={() => handleFilterChange(() => setSortBy('date-added'))}
                      className={`px-4 py-2.5 rounded-lg text-left transition-all ${
                        sortBy === 'date-added'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      Recently Added
                    </button>
                    <button
                      onClick={() => handleFilterChange(() => setSortBy('price-asc'))}
                      className={`px-4 py-2.5 rounded-lg text-left transition-all ${
                        sortBy === 'price-asc'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      Price: Low to High
                    </button>
                    <button
                      onClick={() => handleFilterChange(() => setSortBy('price-desc'))}
                      className={`px-4 py-2.5 rounded-lg text-left transition-all ${
                        sortBy === 'price-desc'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      Price: High to Low
                    </button>
                    <button
                      onClick={() => handleFilterChange(() => setSortBy('roi-desc'))}
                      className={`px-4 py-2.5 rounded-lg text-left transition-all ${
                        sortBy === 'roi-desc'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      ROI: High to Low
                    </button>
                    <button
                      onClick={() => handleFilterChange(() => setSortBy('roi-asc'))}
                      className={`px-4 py-2.5 rounded-lg text-left transition-all ${
                        sortBy === 'roi-asc'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      ROI: Low to High
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Properties Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl text-foreground">
                  {filteredProperties.length}{' '}
                  {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
                </h2>
              </div>

              {/* Loading State */}
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-card rounded-2xl border border-border overflow-hidden animate-pulse"
                    >
                      <div className="h-64 bg-muted" />
                      <div className="p-6 space-y-4">
                        <div className="h-6 bg-muted rounded w-3/4" />
                        <div className="h-4 bg-muted rounded w-1/2" />
                        <div className="h-4 bg-muted rounded w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      featured={property.isFeatured}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card rounded-2xl border border-border">
                  <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl text-foreground mb-2">No properties found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters to see more results
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
    // <div className="min-h-screen bg-background">
    //   {/* Hero Section */}
    //   <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-24">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="max-w-3xl">
    //         <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6">
    //           <Building2 className="w-4 h-4 text-accent" />
    //           <span className="text-sm text-accent">Investment Opportunities</span>
    //         </div>
    //         <h1 className="text-5xl sm:text-6xl tracking-tight mb-6">
    //           Available Investment Properties
    //         </h1>
    //         <p className="text-xl text-primary-foreground/80 mb-8">
    //           Explore our curated selection of ready-made real estate investment businesses in
    //           Germany's top cities. Each property is fully renovated, tenanted, and generating
    //           income from day one.
    //         </p>
    //         <div className="flex flex-wrap gap-8">
    //           <div>
    //             <div className="text-4xl mb-1">{filteredProperties.length}</div>
    //             <div className="text-sm text-primary-foreground/70">Available Properties</div>
    //           </div>
    //           <div>
    //             <div className="text-4xl mb-1">
    //               €
    //               {(filteredProperties.reduce((sum, p) => sum + p.monthlyIncome, 0) / 1000).toFixed(
    //                 0,
    //               )}
    //               K
    //             </div>
    //             <div className="text-sm text-primary-foreground/70">Total Monthly Income</div>
    //           </div>
    //           <div>
    //             <div className="text-4xl mb-1">
    //               {(
    //                 filteredProperties.reduce((sum, p) => sum + p.roi, 0) /
    //                 filteredProperties.length
    //               ).toFixed(1)}
    //               %
    //             </div>
    //             <div className="text-sm text-primary-foreground/70">Average ROI</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //
    //   {/* Main Content */}
    //   <section className="py-12 bg-background">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       {/* Filters & Sorting */}
    //       <div className="bg-card rounded-2xl border border-border p-6 mb-8 shadow-sm">
    //         <div className="flex flex-col lg:flex-row gap-6">
    //           {/* Filters */}
    //           <div className="flex-1">
    //             <div className="flex items-center gap-2 mb-4">
    //               <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
    //               <span className="text-sm text-muted-foreground">Filter by:</span>
    //             </div>
    //
    //             <div className="space-y-4">
    //               {/* City Filter */}
    //               <div>
    //                 <label className="text-sm text-muted-foreground mb-2 block">City</label>
    //                 <div className="flex flex-wrap gap-2">
    //                   {cities.map((city) => (
    //                     <button
    //                       key={city}
    //                       onClick={() => setSelectedCity(city)}
    //                       className={`px-4 py-2 rounded-lg transition-all text-sm ${
    //                         selectedCity === city
    //                           ? 'bg-primary text-primary-foreground shadow-md'
    //                           : 'bg-muted text-muted-foreground hover:bg-muted/80'
    //                       }`}
    //                     >
    //                       {city}
    //                     </button>
    //                   ))}
    //                 </div>
    //               </div>
    //
    //               {/* Budget Filter */}
    //               <div>
    //                 <label className="text-sm text-muted-foreground mb-2 block">Budget</label>
    //                 <div className="flex flex-wrap gap-2">
    //                   {budgets.map((budget) => (
    //                     <button
    //                       key={budget}
    //                       onClick={() => setSelectedBudget(budget)}
    //                       className={`px-4 py-2 rounded-lg transition-all text-sm ${
    //                         selectedBudget === budget
    //                           ? 'bg-primary text-primary-foreground shadow-md'
    //                           : 'bg-muted text-muted-foreground hover:bg-muted/80'
    //                       }`}
    //                     >
    //                       {budget}
    //                     </button>
    //                   ))}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //
    //           {/* Sorting */}
    //           <div className="lg:border-l lg:border-border lg:pl-6">
    //             <div className="flex items-center gap-2 mb-4">
    //               <ArrowUpDown className="w-5 h-5 text-muted-foreground" />
    //               <span className="text-sm text-muted-foreground">Sort by:</span>
    //             </div>
    //             <div className="space-y-2">
    //               {[
    //                 { value: 'roi-high' as const, label: 'Highest ROI' },
    //                 { value: 'roi-low' as const, label: 'Lowest ROI' },
    //                 { value: 'price-low' as const, label: 'Lowest Price' },
    //                 { value: 'price-high' as const, label: 'Highest Price' },
    //                 { value: 'income-high' as const, label: 'Highest Income' },
    //               ].map((option) => (
    //                 <button
    //                   key={option.value}
    //                   onClick={() => setSortBy(option.value)}
    //                   className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm ${
    //                     sortBy === option.value
    //                       ? 'bg-accent text-accent-foreground'
    //                       : 'bg-muted/50 text-muted-foreground hover:bg-muted'
    //                   }`}
    //                 >
    //                   {option.label}
    //                 </button>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //
    //       {/* Properties Grid */}
    //       {filteredProperties.length > 0 ? (
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //           {filteredProperties?.map((property) => (
    //             <PropertyCard key={property.id} property={property} />
    //           ))}
    //         </div>
    //       ) : (
    //         <div className="text-center py-20">
    //           <Home className="w-20 h-20 text-muted-foreground mx-auto mb-6 opacity-50" />
    //           <h3 className="text-2xl text-foreground mb-3">No properties found</h3>
    //           <p className="text-muted-foreground mb-6">
    //             Try adjusting your filters to see more results
    //           </p>
    //           <button
    //             onClick={() => {
    //               setSelectedCity('All')
    //               setSelectedBudget('All')
    //             }}
    //             className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
    //           >
    //             Clear Filters
    //           </button>
    //         </div>
    //       )}
    //     </div>
    //   </section>
    // </div>
  )
}
//
// function PropertyCard({ property }: { property: Property }) {
//   console.log(412312, property)
//   // TODO: update yearly income
//   // const chartData = property.yearlyGrowth.map((value, index) => ({
//   //   year: `Y${index + 1}`,
//   //   income: value,
//   // }))
//
//   return (
//     <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:border-accent/20 transition-all duration-300 group">
//       {/* Image */}
//       <div className="relative h-64 overflow-hidden">
//         <ImageWithFallback
//           src={property.images[0]?.url}
//           alt={property.title}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//
//         {/* ROI Badge */}
//         <div className="absolute top-4 right-4 px-4 py-2 bg-accent rounded-xl shadow-lg backdrop-blur-sm">
//           <div className="flex items-center gap-1.5">
//             <TrendingUp className="w-4 h-4 text-accent-foreground" />
//             <span className="text-sm text-accent-foreground">{property.roi}% ROI</span>
//           </div>
//         </div>
//
//         {/* Property Type Badge */}
//         <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg">
//           <span className="text-xs text-foreground">{property.type}</span>
//         </div>
//       </div>
//
//       {/* Content */}
//       <div className="p-6">
//         <div className="mb-4">
//           <h3 className="text-xl text-foreground mb-2">{property.title}</h3>
//           <div className="flex items-center gap-1.5 text-muted-foreground">
//             <MapPin className="w-4 h-4" />
//             <span className="text-sm">
//               {property.location}, {property.city.name}
//             </span>
//           </div>
//         </div>
//
//         {/* Property Details */}
//         <div className="flex items-center gap-4 mb-5 text-sm text-muted-foreground pb-4 border-b border-border">
//           <div className="flex items-center gap-1.5">
//             <Home className="w-4 h-4" />
//             <span>{property.bedrooms} bed</span>
//           </div>
//           <span>•</span>
//           <span>{property.size}m²</span>
//         </div>
//
//         {/* Pricing Grid */}
//         <div className="grid grid-cols-2 gap-4 mb-5">
//           <div className="bg-muted/50 rounded-xl p-4">
//             <div className="flex items-center gap-2 mb-1">
//               <Euro className="w-4 h-4 text-muted-foreground" />
//               <div className="text-xs text-muted-foreground">Purchase Price</div>
//             </div>
//             <div className="text-2xl text-foreground">€{(property.price / 1000).toFixed(0)}K</div>
//           </div>
//           <div className="bg-accent/10 rounded-xl p-4">
//             <div className="flex items-center gap-2 mb-1">
//               <TrendingUp className="w-4 h-4 text-accent" />
//               <div className="text-xs text-accent-foreground/70">Monthly Income</div>
//             </div>
//             <div className="text-2xl text-accent">
//               €{`${property.monthlyIncome}`.toLocaleString()}
//             </div>
//           </div>
//         </div>
//
//         {/* Projected Income Chart */}
//         <div className="mb-5">
//           <div className="flex items-center gap-2 mb-3">
//             <BarChart3 className="w-4 h-4 text-muted-foreground" />
//             <span className="text-xs text-muted-foreground">5-Year Income Projection</span>
//           </div>
//           {/*TODO: update yearly income */}
//           {/*<div className="h-20 bg-muted/30 rounded-lg p-2">*/}
//           {/*  <ResponsiveContainer width="100%" height="100%">*/}
//           {/*    <AreaChart data={chartData}>*/}
//           {/*      <defs>*/}
//           {/*        <linearGradient id={`gradient-${property.id}`} x1="0" y1="0" x2="0" y2="1">*/}
//           {/*          <stop offset="0%" stopColor="#d4a574" stopOpacity={0.4} />*/}
//           {/*          <stop offset="100%" stopColor="#d4a574" stopOpacity={0.05} />*/}
//           {/*        </linearGradient>*/}
//           {/*      </defs>*/}
//           {/*      <XAxis*/}
//           {/*        dataKey="year"*/}
//           {/*        tick={{ fontSize: 10, fill: '#6c757d' }}*/}
//           {/*        axisLine={false}*/}
//           {/*        tickLine={false}*/}
//           {/*      />*/}
//           {/*      <YAxis hide />*/}
//           {/*      <Tooltip*/}
//           {/*        contentStyle={{*/}
//           {/*          backgroundColor: '#1a2332',*/}
//           {/*          border: 'none',*/}
//           {/*          borderRadius: '8px',*/}
//           {/*          fontSize: '12px',*/}
//           {/*          color: '#ffffff',*/}
//           {/*          padding: '8px 12px',*/}
//           {/*        }}*/}
//           {/*        formatter={(value: number) => [`€${value.toLocaleString()}`, 'Annual Income']}*/}
//           {/*      />*/}
//           {/*      <Area*/}
//           {/*        type="monotone"*/}
//           {/*        dataKey="income"*/}
//           {/*        stroke="#d4a574"*/}
//           {/*        strokeWidth={2}*/}
//           {/*        fill={`url(#gradient-${property.id})`}*/}
//           {/*      />*/}
//           {/*    </AreaChart>*/}
//           {/*  </ResponsiveContainer>*/}
//           {/*</div>*/}
//         </div>
//
//         {/* CTA Button */}
//         <Link href={`/properties/${property.slug}`}>
//           <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all group-hover:shadow-lg">
//             View Full Details
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </Link>
//       </div>
//     </div>
//   )
// }
