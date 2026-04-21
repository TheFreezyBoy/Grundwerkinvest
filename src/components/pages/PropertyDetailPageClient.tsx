'use client'
import { useState } from 'react'
import {
  MapPin,
  Euro,
  Home,
  Users,
  Calendar,
  CheckCircle2,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  AlertCircle,
  Ruler,
  Zap,
  Train,
  Tag,
  FileText,
  Info,
  MapPinned,
  CheckCircle,
  Building2,
  Car,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { properties } from '@/data/properties'
import { ScheduleCallModal } from '@/components/ScheduleCallModal'

export default function PropertyDetailPage({ property }) {
  const [showModal, setShowModal] = useState(false)
  const [showLightbox, setShowLightbox] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  // Find property by ID

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index)
    setShowLightbox(true)
  }

  const nextImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % property.Media.length)
  }

  const prevImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + property.Media.length) % property.Media.length)
  }

  // Helper component for data rows
  const DataRow = ({
    label,
    value,
  }: {
    label: string
    value: string | number | null | undefined
  }) => (
    <div className="flex justify-between py-2 border-b border-border">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm text-foreground font-medium">{value || 'N/A'}</span>
    </div>
  )

  // Helper to format energy class
  const formatEnergyClass = (className: string) => {
    return className
      .replace('aPlusPlusPlus', 'A+++')
      .replace('aPlusPlus', 'A++')
      .replace('aPlus', 'A+')
      .toUpperCase()
  }

  // Helper to format quality
  const formatQuality = (quality: string) => {
    return quality
      .replace('high-end', 'High-End')
      .replace('luxurious', 'Luxurious')
      .replace('standard', 'Standard')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Compact Header */}
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
              <span className="text-sm text-white">Status: {property.category.status}</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl text-white mb-2">{property.title}</h1>
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              ID: {property.id} • {property.address.address} {property.address.houseNumber},{' '}
              {property.address.zip} {property.address.city}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Images & Main Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Photo Gallery */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-4 gap-2 p-4">
                  {/* Main Image */}
                  <button
                    onClick={() => openLightbox(0)}
                    className="col-span-4 md:col-span-2 row-span-2 relative group rounded-lg overflow-hidden"
                  >
                    <ImageWithFallback
                      src={property.Media[0]?.url || ''}
                      alt={property.Media[0]?.alt || property.title}
                      className="w-full h-full object-cover aspect-video"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-accent-foreground rounded-full p-2">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </button>

                  {/* Thumbnail Images */}
                  {property.Media.slice(1, 5).map((media, index) => (
                    <button
                      key={media.id}
                      onClick={() => openLightbox(index + 1)}
                      className="relative group rounded-lg overflow-hidden"
                    >
                      <ImageWithFallback
                        src={media.url}
                        alt={media.alt}
                        className="w-full h-full object-cover aspect-video"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-accent-foreground rounded-full p-2">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>
                    </button>
                  ))}

                  {property.Media.length > 5 && (
                    <button
                      onClick={() => openLightbox(0)}
                      className="relative group rounded-lg overflow-hidden bg-gradient-to-br from-primary to-secondary"
                    >
                      <div className="w-full h-full aspect-video flex flex-col items-center justify-center text-white">
                        <Maximize2 className="w-5 h-5 text-accent mb-1" />
                        <span className="text-xs">+{property.Media.length - 5}</span>
                      </div>
                    </button>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-2xl text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-accent" />
                  Description
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {property.description.description}
                </p>
              </div>

              {/* Features */}
              {property.description.features && (
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="text-2xl text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                    Features & Amenities
                  </h2>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {property.description.features}
                  </p>
                </div>
              )}

              {/* Address Information */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-2xl text-foreground mb-4 flex items-center gap-2">
                  <MapPinned className="w-6 h-6 text-accent" />
                  Address Details
                </h2>
                <div className="space-y-2">
                  <DataRow
                    label="Street Address"
                    value={`${property.address.address} ${property.address.houseNumber}`}
                  />
                  <DataRow label="ZIP Code" value={property.address.zip} />
                  <DataRow label="City" value={property.address.city} />
                  <DataRow label="Region" value={property.address.region.name} />
                </div>
              </div>

              {/* Areas & Spaces */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Ruler className="w-6 h-6 text-accent" />
                  Areas & Spaces
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <DataRow label="Living Space" value={`${property.areas.livingSpace} m²`} />
                    {property.areas.landArea && (
                      <DataRow label="Land Area" value={`${property.areas.landArea} m²`} />
                    )}
                    {property.areas.gardenArea && (
                      <DataRow label="Garden Area" value={`${property.areas.gardenArea} m²`} />
                    )}
                    {property.areas.balconyArea && (
                      <DataRow label="Balcony Area" value={`${property.areas.balconyArea} m²`} />
                    )}
                  </div>
                  <div className="space-y-2">
                    <DataRow label="Rooms" value={property.areas.room} />
                    <DataRow label="Bedrooms" value={property.areas.bedroom} />
                    <DataRow label="Bathrooms" value={property.areas.bathroom} />
                    {property.areas.floor && (
                      <DataRow label="Floors" value={property.areas.floor} />
                    )}
                    {property.areas.floorNumber && (
                      <DataRow label="Floor Number" value={property.areas.floorNumber} />
                    )}
                  </div>
                </div>
              </div>

              {/* Building Information */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-accent" />
                  Building Information
                </h2>
                <div className="space-y-2">
                  <DataRow label="Year Built" value={property.additional.construction} />
                  {property.additional.lastModernization && (
                    <DataRow
                      label="Last Modernization"
                      value={property.additional.lastModernization}
                    />
                  )}
                  <DataRow label="Quality" value={formatQuality(property.additional.quality)} />
                  <DataRow
                    label="Currently Rented"
                    value={property.additional.rented ? 'Yes' : 'No'}
                  />
                </div>
              </div>

              {/* Energy Certificate */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-accent" />
                  Energy Certificate
                </h2>
                <div className="space-y-2">
                  <DataRow
                    label="Energy Efficiency Class"
                    value={formatEnergyClass(property.energy.efficiencyClass)}
                  />
                  <DataRow
                    label="Certificate Created"
                    value={new Date(property.energy.created).toLocaleDateString()}
                  />
                  <DataRow
                    label="Valid Until"
                    value={new Date(property.energy.until).toLocaleDateString()}
                  />
                </div>
              </div>

              {/* Location & Transport */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-2xl text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-accent" />
                  Location & Transport
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Public Transport</div>
                      <div className="text-sm text-foreground">
                        {property.locationDescription.publicTransportMinutes} min (
                        {property.locationDescription.publicTransportDistance}m)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Autobahn</div>
                      <div className="text-sm text-foreground">
                        {property.locationDescription.autobahnMinutes} min (
                        {(property.locationDescription.autobahnDistance / 1000).toFixed(1)}km)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Main Station</div>
                      <div className="text-sm text-foreground">
                        {property.locationDescription.mainStationMinutes} min (
                        {(property.locationDescription.mainStationDistance / 1000).toFixed(1)}km)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="text-2xl text-foreground mb-4 flex items-center gap-2">
                    <Euro className="w-6 h-6 text-accent" />
                    Pricing
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Purchase Price</div>
                      <div className="text-3xl text-foreground font-bold">
                        €{property.prices.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {property.prices.negotiable && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm">
                          <Tag className="w-4 h-4" />
                          Negotiable
                        </div>
                      )}
                      {property.prices.onRequest && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm">
                          <Mail className="w-4 h-4" />
                          Price on Request
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                {property.category.status !== 'sold' && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Schedule Call
                  </button>
                )}
                {property.category.status === 'sold' && (
                  <div className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-muted text-muted-foreground rounded-xl cursor-not-allowed">
                    <AlertCircle className="w-5 h-5" />
                    Property Sold
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Call Modal */}
      <ScheduleCallModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        propertyTitle={property.title}
      />

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md">
          <div className="relative h-full flex flex-col">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-xl mb-1">{property.title}</h3>
                  <p className="text-sm text-white/70">
                    Photo {lightboxImageIndex + 1} of {property.Media.length}
                  </p>
                </div>
                <button
                  onClick={() => setShowLightbox(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Main Image Container */}
            <div className="flex-1 flex items-center justify-center p-20">
              <div className="relative max-w-6xl max-h-full">
                <ImageWithFallback
                  src={property.Media[lightboxImageIndex].url}
                  alt={property.Media[lightboxImageIndex].alt}
                  className="w-full h-full object-contain max-h-[80vh] rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm shadow-xl"
            >
              <ChevronLeft className="w-7 h-7 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm shadow-xl"
            >
              <ChevronRight className="w-7 h-7 text-white" />
            </button>

            {/* Bottom Thumbnail Strip */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex gap-3 justify-center overflow-x-auto pb-2 scrollbar-hide">
                {property.Media.map((media, index) => (
                  <button
                    key={media.id}
                    onClick={() => setLightboxImageIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      lightboxImageIndex === index
                        ? 'border-accent shadow-xl scale-110'
                        : 'border-white/20 hover:border-white/50 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback
                      src={media.url}
                      alt={media.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
