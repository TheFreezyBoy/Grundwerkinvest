import { Home, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PropertyCard } from '@/components/PropertyCard'
import { useTranslations } from 'next-intl'

export function PropertyListings({ properties: featuredProperties }: { properties: any[] }) {
  const t = useTranslations()

  return (
    <section id="properties" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Home className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent-foreground">{t('listings.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            {t('listings.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('listings.subtitle')}
          </p>
        </div>

        {/* Featured Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} featured={true} />
          ))}
          {/* 4th item - only visible on md (2x2 grid) */}
          {featuredProperties[3] && (
            <div className="hidden md:block lg:hidden">
              <PropertyCard property={featuredProperties[3]} featured={true} />
            </div>
          )}
        </div>

        {/* View All Listings CTA */}
        <div className="text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl text-lg"
          >
            {t('listings.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
