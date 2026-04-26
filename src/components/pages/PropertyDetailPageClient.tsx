'use client'
import { useState } from 'react'
import {
  MapPin,
  Euro,
  Phone,
  AlertCircle,
  Ruler,
  Zap,
  Train,
  Tag,
  FileText,
  MapPinned,
  Building2,
  Car,
  CheckCircle2,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { useScheduleCall } from '@/context/ScheduleCallContext'
import { useTranslations } from 'next-intl'
import Lightbox from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'

interface MediaItem {
  id: string
  url: string
  alt?: string
}

interface Property {
  id: number
  title: string
  category: {
    categoryType: string
    objectType: string
    status: string
  }
  address: {
    address: string
    houseNumber: string
    zip: string
    city: string
    region: { name: string }
  }
  prices: {
    price: number
    negotiable?: boolean
    onRequest?: boolean
  }
  areas: {
    livingSpace?: number
    landArea?: number
    gardenArea?: number
    balconyArea?: number
    room?: number
    bedroom?: number
    bathroom?: number
    floor?: number
    floorNumber?: number
  }
  additional: {
    construction?: number
    lastModernization?: number
    quality?: string
    rented?: boolean
  }
  energy: {
    efficiencyClass?: string
    created?: string
    until?: string
  }
  description: {
    description?: string
    features?: string
    other?: string
  }
  locationDescription: {
    publicTransportMinutes?: number
    publicTransportDistance?: number
    autobahnMinutes?: number
    autobahnDistance?: number
    mainStationMinutes?: number
    mainStationDistance?: number
  }
  Media: MediaItem[]
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PropertyDetailPageClient({ property }: { property: Property }) {
  const t = useTranslations('propertyDetail')
  const { open: openScheduleCall } = useScheduleCall()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const formatEnergyClass = (cls: string) =>
    cls.replace('aPlusPlusPlus', 'A+++').replace('aPlusPlus', 'A++').replace('aPlus', 'A+').toUpperCase()

  const formatQuality = (q: string) =>
    q.replace('high-end', 'High-End').replace('luxurious', 'Luxurious').replace('standard', 'Standard')

  const DataRow = ({ label, value }: { label: string; value?: string | number | null }) => (
    <div className="flex justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm text-foreground font-medium">{value ?? 'N/A'}</span>
    </div>
  )

  const media = property.Media ?? []

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 backdrop-blur-sm rounded-lg">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent">{property.category.categoryType}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg">
              <Tag className="w-4 h-4 text-white" />
              <span className="text-sm text-white">{property.category.objectType}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="text-sm text-white">
                {t('status')}: {property.category.status}
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl text-white mb-2">{property.title}</h1>
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              {property.address.address} {property.address.houseNumber},{' '}
              {property.address.zip} {property.address.city}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Right sticky sidebar - first in DOM for mobile, positioned right on desktop */}
            <div className="lg:col-start-3 lg:row-start-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                {/* Price */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="text-xl text-foreground mb-4 flex items-center gap-2">
                    <Euro className="w-5 h-5 text-accent" />
                    {t('pricing')}
                  </h2>
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-1">{t('purchasePrice')}</div>
                    <div className="text-3xl text-foreground font-bold">
                      €{property.prices.price?.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.prices.negotiable && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm">
                        <Tag className="w-3.5 h-3.5" />
                        {t('negotiable')}
                      </div>
                    )}
                    {property.prices.onRequest && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm">
                        {t('priceOnRequest')}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                {property.category.status !== 'sold' ? (
                  <button
                    onClick={() => openScheduleCall(property.title)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all shadow-lg text-base font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    {t('scheduleCall')}
                  </button>
                ) : (
                  <div className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-muted text-muted-foreground rounded-xl cursor-not-allowed">
                    <AlertCircle className="w-5 h-5" />
                    {t('propertySold')}
                  </div>
                )}
              </div>
            </div>

            {/* Left column - positioned first on desktop */}
            <div className="lg:col-start-1 lg:col-span-2 lg:row-start-1 space-y-6">
              {/* Gallery */}
              {media.length > 0 && (
                <div className="bg-card rounded-xl border border-border overflow-hidden p-4">
                  <div className="grid grid-cols-4 gap-2">
                    {media.slice(0, 8).map((img, i) => (
                      <button
                        key={img.id}
                        onClick={() => {
                          setLightboxIndex(i)
                          setLightboxOpen(true)
                        }}
                        className={`relative group rounded-lg overflow-hidden ${
                          i === 0 ? 'col-span-4 md:col-span-2 row-span-2' : ''
                        }`}
                      >
                        <ImageWithFallback
                          src={img.url}
                          alt={img.alt || property.title}
                          className="w-full h-full object-cover aspect-video"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                      </button>
                    ))}
                  </div>
                  {media.length > 8 && (
                    <button
                      onClick={() => {
                        setLightboxIndex(0)
                        setLightboxOpen(true)
                      }}
                      className="mt-2 w-full py-2 text-sm text-accent hover:text-accent/80 transition-colors"
                    >
                      + {media.length - 8} more photos
                    </button>
                  )}
                </div>
              )}

              {/* Description */}
              {property.description.description && (
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="text-xl text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-accent" />
                    {t('description')}
                  </h2>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {property.description.description}
                  </p>
                </div>
              )}

              {/* Features */}
              {property.description.features && (
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="text-xl text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {t('features')}
                  </h2>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {property.description.features}
                  </p>
                </div>
              )}

              {/* Other */}
              {property.description.other && (
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="text-xl text-foreground mb-4">{t('other')}</h2>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {property.description.other}
                  </p>
                </div>
              )}

              {/* Address */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-xl text-foreground mb-4 flex items-center gap-2">
                  <MapPinned className="w-5 h-5 text-accent" />
                  {t('addressDetails')}
                </h2>
                <DataRow
                  label={t('streetAddress')}
                  value={`${property.address.address} ${property.address.houseNumber}`}
                />
                <DataRow label={t('zipCode')} value={property.address.zip} />
                <DataRow label={t('city')} value={property.address.city} />
                <DataRow label={t('region')} value={property.address.region?.name} />
              </div>

              {/* Areas */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-xl text-foreground mb-4 flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-accent" />
                  {t('areasSpaces')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <div>
                    {property.areas.livingSpace != null && (
                      <DataRow label={t('livingSpace')} value={`${property.areas.livingSpace} m²`} />
                    )}
                    {property.areas.landArea != null && (
                      <DataRow label={t('landArea')} value={`${property.areas.landArea} m²`} />
                    )}
                    {property.areas.gardenArea != null && (
                      <DataRow label={t('gardenArea')} value={`${property.areas.gardenArea} m²`} />
                    )}
                    {property.areas.balconyArea != null && (
                      <DataRow label={t('balconyArea')} value={`${property.areas.balconyArea} m²`} />
                    )}
                  </div>
                  <div>
                    {property.areas.room != null && (
                      <DataRow label={t('rooms')} value={property.areas.room} />
                    )}
                    {property.areas.bedroom != null && (
                      <DataRow label={t('bedrooms')} value={property.areas.bedroom} />
                    )}
                    {property.areas.bathroom != null && (
                      <DataRow label={t('bathrooms')} value={property.areas.bathroom} />
                    )}
                    {property.areas.floor != null && (
                      <DataRow label={t('floors')} value={property.areas.floor} />
                    )}
                    {property.areas.floorNumber != null && (
                      <DataRow label={t('floorNumber')} value={property.areas.floorNumber} />
                    )}
                  </div>
                </div>
              </div>

              {/* Building info */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-xl text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  {t('buildingInfo')}
                </h2>
                {property.additional.construction != null && (
                  <DataRow label={t('yearBuilt')} value={property.additional.construction} />
                )}
                {property.additional.lastModernization != null && (
                  <DataRow label={t('lastModernization')} value={property.additional.lastModernization} />
                )}
                {property.additional.quality && (
                  <DataRow label={t('quality')} value={formatQuality(property.additional.quality)} />
                )}
                <DataRow
                  label={t('currentlyRented')}
                  value={property.additional.rented ? t('yes') : t('no')}
                />
              </div>

              {/* Energy */}
              {(property.energy.efficiencyClass || property.energy.created) && (
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="text-xl text-foreground mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    {t('energyCertificate')}
                  </h2>
                  {property.energy.efficiencyClass && (
                    <DataRow
                      label={t('energyClass')}
                      value={formatEnergyClass(property.energy.efficiencyClass)}
                    />
                  )}
                  {property.energy.created && (
                    <DataRow
                      label={t('certificateCreated')}
                      value={new Date(property.energy.created).toLocaleDateString()}
                    />
                  )}
                  {property.energy.until && (
                    <DataRow
                      label={t('validUntil')}
                      value={new Date(property.energy.until).toLocaleDateString()}
                    />
                  )}
                </div>
              )}

              {/* Location & Transport */}
              {(property.locationDescription.publicTransportMinutes != null ||
                property.locationDescription.autobahnMinutes != null) && (
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="text-xl text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    {t('locationTransport')}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {property.locationDescription.publicTransportMinutes != null && (
                      <div className="flex items-start gap-3">
                        <Train className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">{t('publicTransport')}</div>
                          <div className="text-sm text-foreground">
                            {property.locationDescription.publicTransportMinutes} {t('min')}
                            {property.locationDescription.publicTransportDistance != null &&
                              ` (${property.locationDescription.publicTransportDistance}m)`}
                          </div>
                        </div>
                      </div>
                    )}
                    {property.locationDescription.autobahnMinutes != null && (
                      <div className="flex items-start gap-3">
                        <Car className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">{t('autobahn')}</div>
                          <div className="text-sm text-foreground">
                            {property.locationDescription.autobahnMinutes} {t('min')}
                            {property.locationDescription.autobahnDistance != null &&
                              ` (${(property.locationDescription.autobahnDistance / 1000).toFixed(1)}km)`}
                          </div>
                        </div>
                      </div>
                    )}
                    {property.locationDescription.mainStationMinutes != null && (
                      <div className="flex items-start gap-3">
                        <Train className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">{t('mainStation')}</div>
                          <div className="text-sm text-foreground">
                            {property.locationDescription.mainStationMinutes} {t('min')}
                            {property.locationDescription.mainStationDistance != null &&
                              ` (${(property.locationDescription.mainStationDistance / 1000).toFixed(1)}km)`}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={media.map((img) => ({ src: img.url, alt: img.alt }))}
        plugins={[Counter]}
      />
    </div>
  )
}
