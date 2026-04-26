import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

// Use a loose type so it works with both Payload Listing and legacy data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ListingDoc = any

interface PropertyCardProps {
  property: ListingDoc
  featured?: boolean
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const t = useTranslations()
  const isSold = property.category?.status === 'sold'
  const mainImage = (Array.isArray(property.Media) ? property.Media[0]?.url : null) || ''

  return (
    <Link
      href={`/properties/${property.url}`}
      className={`block bg-card rounded-xl overflow-hidden border hover:shadow-xl transition-all group ${
        featured ? 'border-accent shadow-lg ring-2 ring-accent/20' : 'border-border'
      } ${isSold ? 'opacity-75' : ''}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={mainImage}
          alt={property.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isSold ? 'grayscale' : 'group-hover:scale-110'
          }`}
        />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          {isSold ? (
            <div className="px-3 py-1.5 bg-muted/90 backdrop-blur-sm rounded-lg shadow-lg border border-border">
              <div className="text-xs text-muted-foreground">{t('propertyCard.sold')}</div>
            </div>
          ) : (
            featured && (
              <div className="px-3 py-1.5 bg-accent backdrop-blur-sm rounded-lg shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-foreground" />
                <div className="text-xs text-accent-foreground">{t('propertyCard.featured')}</div>
              </div>
            )
          )}
          <div className="ml-auto px-2.5 py-1 bg-primary/90 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="text-xs text-primary-foreground">{property.category?.objectType}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg mb-1 text-foreground line-clamp-1">{property.title}</h3>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-xs line-clamp-1">
              {property.address?.city}
              {property.address?.region?.name ? `, ${property.address.region.name}` : ''}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
          {property.areas?.bedroom != null && (
            <span>
              {property.areas.bedroom} {t('propertyCard.bed')}
            </span>
          )}
          {property.areas?.bedroom != null && property.areas?.livingSpace != null && <span>•</span>}
          {property.areas?.livingSpace != null && <span>{property.areas.livingSpace}m²</span>}
          {property.areas?.livingSpace != null && <span>•</span>}
          <span className="line-clamp-1">{property.category?.objectType}</span>
        </div>

        <div className="border-t border-border pt-3 mb-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-xs text-muted-foreground mb-0.5">
                {t('propertyCard.purchasePrice')}
              </div>
              <div className="text-lg text-foreground">
                {property.prices?.price != null
                  ? `€${(property.prices.price / 1000).toFixed(0)}K`
                  : t('propertyCard.onRequest')}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-0.5">
                {property.prices?.negotiable
                  ? t('propertyCard.negotiable')
                  : t('propertyCard.fixedPrice')}
              </div>
              <div className="text-sm text-accent">
                {property.additional?.rented ? t('propertyCard.rented') : t('propertyCard.vacant')}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg transition-colors text-sm ${
            isSold
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
        >
          {isSold ? t('propertyCard.propertySold') : t('propertyCard.viewDetails')}
          {!isSold && <ArrowRight className="w-3.5 h-3.5" />}
        </div>
      </div>
    </Link>
  )
}
