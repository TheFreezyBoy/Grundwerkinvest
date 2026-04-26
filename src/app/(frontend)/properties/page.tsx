import { getPayload } from 'payload'
import config from '@payload-config'
import { getTranslations, getLocale } from 'next-intl/server'
import { Building2 } from 'lucide-react'
import { PropertyCard } from '@/components/PropertyCard'
import { PropertiesFilters } from '@/components/PropertiesFilters'
import { PaginationControls } from '@/components/PaginationControls'
import type { Where } from 'payload'

const PAGE_SIZE = 12

type SearchParams = {
  city?: string
  budget?: string
  type?: string
  sort?: string
  showSold?: string
  page?: string
}

export const dynamic = 'force-dynamic'

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const t = await getTranslations('properties')
  const locale = await getLocale()
  const payload = await getPayload({ config })

  const city = params.city || ''
  const budget = params.budget || ''
  const sort = params.sort || 'date-updated'
  const showSold = params.showSold !== 'false'
  const page = Math.max(1, parseInt(params.page || '1', 10))

  // Build where clause
  const andClauses: Where[] = []

  if (city && city !== 'all') {
    andClauses.push({ 'address.region': { equals: city } })
  }

  if (!showSold) {
    andClauses.push({ 'category.status': { not_equals: 'sold' } })
  }

  if (budget === 'under300') {
    andClauses.push({ 'prices.price': { less_than: 300000 } })
  } else if (budget === '300to500') {
    andClauses.push({ 'prices.price': { greater_than: 300000 } })
    andClauses.push({ 'prices.price': { less_than: 500000 } })
  } else if (budget === 'over500') {
    andClauses.push({ 'prices.price': { greater_than: 500000 } })
  }

  const where: Where = andClauses.length > 0 ? { and: andClauses } : {}

  // Sort mapping
  const sortMap: Record<string, string> = {
    'date-updated': '-updatedAt',
    'date-added': '-createdAt',
    'price-asc': 'prices.price',
    'price-desc': '-prices.price',
  }

  try {
    const [listingsRes, citiesRes, totalAvailableRes] = await Promise.all([
      payload.find({
        collection: 'listings',
        where,
        sort: sortMap[sort] || '-updatedAt',
        limit: PAGE_SIZE,
        page,
        depth: 2,
      }),
      payload.find({ collection: 'cities', limit: 100, locale: locale as 'de' | 'en' }),
      // Total available count (not affected by filters)
      payload.find({
        collection: 'listings',
        where: { 'category.status': { not_equals: 'sold' } },
        limit: 0,
      }),
    ])

    const cities = citiesRes.docs.map((c: { id: string; name: string }) => ({ id: String(c.id), name: c.name }))
    const { docs: properties, totalDocs, totalPages } = listingsRes
    const totalAvailable = totalAvailableRes.totalDocs

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                <h1 className="text-2xl md:text-3xl text-white">{t('title')}</h1>
              </div>
              <p className="text-sm md:text-base text-white/80">{t('subtitle')}</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-xs text-white/70">{t('available')}</div>
                <div className="text-xl md:text-2xl text-white font-semibold">{totalAvailable}</div>
              </div>
              <div className="hidden sm:block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-xs text-white/70">{t('cities')}</div>
                <div className="text-xl md:text-2xl text-white font-semibold">{cities.length}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 lg:gap-8 lg:flex-row flex-col">
            {/* Sidebar filters */}
            <PropertiesFilters
              cities={cities}
              currentCity={city}
              currentBudget={budget}
              currentSort={sort}
              currentShowSold={showSold}
            />

            {/* Listings */}
            <div className="flex-1 min-w-0">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl md:text-2xl text-foreground">
                  {totalDocs} {totalDocs === 1 ? t('foundSingle') : t('found')}
                </h2>
              </div>

              {properties.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                    {properties.map((property) => (
                      <PropertyCard key={property.id} property={property} featured={false} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="mt-10">
                      <PaginationControls
                        currentPage={page}
                        totalPages={totalPages}
                        searchParams={params}
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12 md:py-16 bg-card rounded-xl border border-border">
                  <Building2 className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg md:text-xl text-foreground mb-2">{t('noResults')}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{t('noResultsHint')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
  } catch (error) {
    console.error('Error fetching properties:', error)
    return (
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary to-secondary py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl text-white">{t('title')}</h1>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16 bg-card rounded-xl border border-border">
              <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl text-foreground mb-2">{t('noResults')}</h3>
              <p className="text-muted-foreground">{t('noResultsHint')}</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
