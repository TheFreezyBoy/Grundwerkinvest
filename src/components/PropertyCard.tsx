import { MapPin, Euro, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'
import { Property } from '@/data/properties'

interface PropertyCardProps {
  property: Property
  featured?: boolean
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className={`block bg-card rounded-2xl overflow-hidden border hover:shadow-xl transition-all group ${
        featured ? 'border-accent shadow-lg ring-2 ring-accent/20' : 'border-border'
      } ${property.isSold ? 'opacity-75' : ''}`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={property.images[0]?.url}
          alt={property.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            property.isSold ? 'grayscale' : 'group-hover:scale-110'
          }`}
        />

        {/* Status Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          {property.isSold ? (
            <div className="px-4 py-2 bg-muted/90 backdrop-blur-sm rounded-lg shadow-lg border border-border">
              <div className="text-sm text-muted-foreground font-medium">Sold</div>
            </div>
          ) : (
            featured && (
              <div className="px-4 py-2 bg-accent backdrop-blur-sm rounded-lg shadow-lg flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
                <div className="text-sm text-accent-foreground font-medium">Featured</div>
              </div>
            )
          )}

          <div className="ml-auto px-3 py-1.5 bg-accent rounded-lg shadow-lg">
            <div className="text-sm text-accent-foreground font-medium">{property.roi}% ROI</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl mb-1 text-foreground">{property.title}</h3>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                {property.location}, {property.city.name}
              </span>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <span>{property.bedrooms} bed</span>
          <span>•</span>
          <span>{property.size}m²</span>
          <span>•</span>
          <span>{property.type}</span>
        </div>

        {/* Pricing */}
        <div className="border-t border-border pt-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Purchase Price</div>
              <div className="text-2xl text-foreground">€{(property.price / 1000).toFixed(0)}K</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Monthly Income</div>
              <div className="text-2xl text-accent">
                €{`${property.monthlyIncome}`.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors ${
            property.isSold
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
        >
          {property.isSold ? 'Property Sold' : 'View Details'}
          {!property.isSold && <ArrowRight className="w-4 h-4" />}
        </div>
      </div>
    </Link>
  )
}
