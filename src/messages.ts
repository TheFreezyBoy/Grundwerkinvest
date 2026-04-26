/**
 * Central message definitions.
 *
 * All UI strings live here. Run `npm run extract:messages` to regenerate
 * translations/en.json, then copy/translate into translations/de.json.
 *
 * next-intl reads from translations/{locale}.json at runtime.
 * The `id` fields here must match the flat keys used in those JSON files
 * (namespace.key format).
 */

type MessageDescriptor = { id: string; defaultMessage: string }
type Messages = Record<string, MessageDescriptor>
// Identity function — exists only as a marker for `formatjs extract`
function defineMessages<T extends Messages>(msgs: T): T {
  return msgs
}

export const messages = defineMessages({
  // ── Navigation ──────────────────────────────────────────────────────────
  'nav.allObjects': {
    id: 'nav.allObjects',
    defaultMessage: 'All Objects'
  },
  'nav.scheduleCall': {
    id: 'nav.scheduleCall',
    defaultMessage: 'Schedule Call',
  },
  'nav.impressum': {
    id: 'nav.impressum',
    defaultMessage: 'Impressum',
  },
  'nav.menu': {
    id: 'nav.menu',
    defaultMessage: 'Menu',
  },
  'nav.language': {
    id: 'nav.language',
    defaultMessage: 'Language',
  },

  // ── Hero Section ────────────────────────────────────────────────────────
  'hero.badge': {
    id: 'hero.badge',
    defaultMessage: 'EU Regulated & Licensed',
  },
  'hero.title1': {
    id: 'hero.title1',
    defaultMessage: 'Buy a Ready-Made',
  },
  'hero.title2': {
    id: 'hero.title2',
    defaultMessage: 'Real Estate Business',
  },
  'hero.subtitle': {
    id: 'hero.subtitle',
    defaultMessage: 'Invest in fully packaged residential rental businesses in Germany. Generate passive income from day one with our proven model.',
  },
  'hero.benefit1Title': {
    id: 'hero.benefit1Title',
    defaultMessage: 'Stable Monthly Income',
  },
  'hero.benefit1Desc': {
    id: 'hero.benefit1Desc',
    defaultMessage: 'Predictable cash flow',
  },
  'hero.benefit2Title': {
    id: 'hero.benefit2Title',
    defaultMessage: '7-12% Annual ROI',
  },
  'hero.benefit2Desc': {
    id: 'hero.benefit2Desc',
    defaultMessage: 'Long-term growth',
  },
  'hero.benefit3Title': {
    id: 'hero.benefit3Title',
    defaultMessage: 'Fully Managed',
  },
  'hero.benefit3Desc': {
    id: 'hero.benefit3Desc',
    defaultMessage: 'Zero operational hassle',
  },
  'hero.benefit4Title': {
    id: 'hero.benefit4Title',
    defaultMessage: 'EU Market Access',
  },
  'hero.benefit4Desc': {
    id: 'hero.benefit4Desc',
    defaultMessage: 'Secure & regulated',
  },
  'hero.ctaViewBusinesses': {
    id: 'hero.ctaViewBusinesses',
    defaultMessage: 'View Available Businesses',
  },
  'hero.ctaCalculate': {
    id: 'hero.ctaCalculate',
    defaultMessage: 'Calculate Your Profit',
  },
  'hero.quickFacts': {
    id: 'hero.quickFacts',
    defaultMessage: 'Quick Facts',
  },
  'hero.avgInvestment': {
    id: 'hero.avgInvestment',
    defaultMessage: 'Average Investment Size',
  },
  'hero.avgOccupancy': {
    id: 'hero.avgOccupancy',
    defaultMessage: 'Average Occupancy Rate',
  },
  'hero.avgMonthlyIncome': {
    id: 'hero.avgMonthlyIncome',
    defaultMessage: 'Average Monthly Income',
  },
  'hero.avgROITimeline': {
    id: 'hero.avgROITimeline',
    defaultMessage: 'Average ROI Timeline',
  },

  // ── Property Listings ───────────────────────────────────────────────────
  'listings.badge': {
    id: 'listings.badge',
    defaultMessage: 'Featured Properties',
  },
  'listings.title': {
    id: 'listings.title',
    defaultMessage: 'Ready-Made Investment Properties',
  },
  'listings.subtitle': {
    id: 'listings.subtitle',
    defaultMessage: 'Handpicked premium properties - fully renovated, tenanted, and generating income from day one',
  },
  'listings.viewAll': {
    id: 'listings.viewAll',
    defaultMessage: 'View All Properties',
  },

  // ── Contact Section ─────────────────────────────────────────────────────
  'contact.badge': {
    id: 'contact.badge',
    defaultMessage: 'Get Started',
  },
  'contact.title': {
    id: 'contact.title',
    defaultMessage: 'Schedule Your Consultation',
  },
  'contact.subtitle': {
    id: 'contact.subtitle',
    defaultMessage: 'Speak with our investment specialists to explore opportunities tailored to your goals',
  },
  'contact.fullName': {
    id: 'contact.fullName',
    defaultMessage: 'Full Name',
  },
  'contact.email': {
    id: 'contact.email',
    defaultMessage: 'Email Address',
  },
  'contact.phone': {
    id: 'contact.phone',
    defaultMessage: 'Phone Number',
  },
  'contact.investmentRange': {
    id: 'contact.investmentRange',
    defaultMessage: 'Investment Range',
  },
  'contact.message': {
    id: 'contact.message',
    defaultMessage: 'Message',
  },
  'contact.submit': {
    id: 'contact.submit',
    defaultMessage: 'Send Request',
  },
  'contact.successTitle': {
    id: 'contact.successTitle',
    defaultMessage: 'Request Received!',
  },
  'contact.successMessage': {
    id: 'contact.successMessage',
    defaultMessage: 'Your consultation request has been received. Our team will contact you within 24 hours.',
  },
  'contact.infoTitle': {
    id: 'contact.infoTitle',
    defaultMessage: 'Contact Information',
  },
  'contact.infoSubtitle': {
    id: 'contact.infoSubtitle',
    defaultMessage: 'Prefer to reach out directly? Use any of the methods below.',
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  'footer.tagline': {
    id: 'footer.tagline',
    defaultMessage:
      'Your trusted partner for ready-made real estate investment businesses in Germany. Secure, profitable, and fully managed.',
  },
  'footer.licensed': {
    id: 'footer.licensed',
    defaultMessage: 'Licensed & Regulated',
  },
  'footer.quickLinks': {
    id: 'footer.quickLinks',
    defaultMessage: 'Quick Links',
  },
  'footer.allProperties': {
    id: 'footer.allProperties',
    defaultMessage: 'All Properties',
  },
  'footer.contact': {
    id: 'footer.contact',
    defaultMessage: 'Contact',
  },
  'footer.rights': {
    id: 'footer.rights',
    defaultMessage: '© 2026 Grundwerkinvest. All rights reserved.',
  },
  'footer.impressum': {
    id: 'footer.impressum',
    defaultMessage: 'Impressum',
  },

  // ── Properties list ──────────────────────────────────────────────────────
  'properties.title': {
    id: 'properties.title',
    defaultMessage: 'Investment Properties',
  },
  'properties.subtitle': {
    id: 'properties.subtitle',
    defaultMessage: "Curated selection across Germany's top markets",
  },
  'properties.available': {
    id: 'properties.available',
    defaultMessage: 'Available',
  },
  'properties.cities': {
    id: 'properties.cities',
    defaultMessage: 'Cities',
  },
  'properties.found': {
    id: 'properties.found',
    defaultMessage: 'Listings Found',
  },
  'properties.foundSingle': {
    id: 'properties.foundSingle',
    defaultMessage: 'Property Found',
  },
  'properties.noResults': {
    id: 'properties.noResults',
    defaultMessage: 'No properties found',
  },
  'properties.noResultsHint': {
    id: 'properties.noResultsHint',
    defaultMessage: 'Try adjusting your filters to see more results',
  },
  'properties.filtersAndSort': {
    id: 'properties.filtersAndSort',
    defaultMessage: 'Filters & Sort',
  },
  'properties.applyFilters': {
    id: 'properties.applyFilters',
    defaultMessage: 'Apply Filters',
  },
  'properties.sortBy': {
    id: 'properties.sortBy',
    defaultMessage: 'Sort By',
  },
  'properties.recentlyUpdated': {
    id: 'properties.recentlyUpdated',
    defaultMessage: 'Recently Updated',
  },
  'properties.recentlyAdded': {
    id: 'properties.recentlyAdded',
    defaultMessage: 'Recently Added',
  },
  'properties.priceLowHigh': {
    id: 'properties.priceLowHigh',
    defaultMessage: 'Price: Low to High',
  },
  'properties.priceHighLow': {
    id: 'properties.priceHighLow',
    defaultMessage: 'Price: High to Low',
  },
  'properties.roiHighLow': {
    id: 'properties.roiHighLow',
    defaultMessage: 'ROI: High to Low',
  },
  'properties.roiLowHigh': {
    id: 'properties.roiLowHigh',
    defaultMessage: 'ROI: Low to High',
  },
  'properties.filters': {
    id: 'properties.filters',
    defaultMessage: 'Filters',
  },
  'properties.city': {
    id: 'properties.city',
    defaultMessage: 'City',
  },
  'properties.budget': {
    id: 'properties.budget',
    defaultMessage: 'Budget',
  },
  'properties.propertyType': {
    id: 'properties.propertyType',
    defaultMessage: 'Property Type',
  },
  'properties.showSold': {
    id: 'properties.showSold',
    defaultMessage: 'Show sold properties',
  },
  'properties.all': {
    id: 'properties.all',
    defaultMessage: 'All',
  },
  'properties.budgetUnder300': {
    id: 'properties.budgetUnder300',
    defaultMessage: '< €300K',
  },
  'properties.budget300to500': {
    id: 'properties.budget300to500',
    defaultMessage: '€300K – €500K',
  },
  'properties.budgetOver500': {
    id: 'properties.budgetOver500',
    defaultMessage: '> €500K',
  },
  'properties.previous': {
    id: 'properties.previous',
    defaultMessage: 'Previous',
  },
  'properties.next': {
    id: 'properties.next',
    defaultMessage: 'Next',
  },

  // ── Property card ────────────────────────────────────────────────────────
  'propertyCard.sold': {
    id: 'propertyCard.sold',
    defaultMessage: 'Sold',
  },
  'propertyCard.featured': {
    id: 'propertyCard.featured',
    defaultMessage: 'Featured',
  },
  'propertyCard.bed': {
    id: 'propertyCard.bed',
    defaultMessage: 'bed',
  },
  'propertyCard.purchasePrice': {
    id: 'propertyCard.purchasePrice',
    defaultMessage: 'Purchase Price',
  },
  'propertyCard.onRequest': {
    id: 'propertyCard.onRequest',
    defaultMessage: 'On request',
  },
  'propertyCard.negotiable': {
    id: 'propertyCard.negotiable',
    defaultMessage: 'Negotiable',
  },
  'propertyCard.fixedPrice': {
    id: 'propertyCard.fixedPrice',
    defaultMessage: 'Fixed Price',
  },
  'propertyCard.rented': {
    id: 'propertyCard.rented',
    defaultMessage: 'Rented',
  },
  'propertyCard.vacant': {
    id: 'propertyCard.vacant',
    defaultMessage: 'Vacant',
  },
  'propertyCard.propertySold': {
    id: 'propertyCard.propertySold',
    defaultMessage: 'Property Sold',
  },
  'propertyCard.viewDetails': {
    id: 'propertyCard.viewDetails',
    defaultMessage: 'View Details',
  },

  // ── Property detail ──────────────────────────────────────────────────────
  'propertyDetail.description': {
    id: 'propertyDetail.description',
    defaultMessage: 'Description',
  },
  'propertyDetail.features': {
    id: 'propertyDetail.features',
    defaultMessage: 'Features & Amenities',
  },
  'propertyDetail.other': {
    id: 'propertyDetail.other',
    defaultMessage: 'Other',
  },
  'propertyDetail.addressDetails': {
    id: 'propertyDetail.addressDetails',
    defaultMessage: 'Address Details',
  },
  'propertyDetail.streetAddress': {
    id: 'propertyDetail.streetAddress',
    defaultMessage: 'Street Address',
  },
  'propertyDetail.zipCode': {
    id: 'propertyDetail.zipCode',
    defaultMessage: 'ZIP Code',
  },
  'propertyDetail.city': {
    id: 'propertyDetail.city',
    defaultMessage: 'City',
  },
  'propertyDetail.region': {
    id: 'propertyDetail.region',
    defaultMessage: 'Region',
  },
  'propertyDetail.areasSpaces': {
    id: 'propertyDetail.areasSpaces',
    defaultMessage: 'Areas & Spaces',
  },
  'propertyDetail.livingSpace': {
    id: 'propertyDetail.livingSpace',
    defaultMessage: 'Living Space',
  },
  'propertyDetail.landArea': {
    id: 'propertyDetail.landArea',
    defaultMessage: 'Land Area',
  },
  'propertyDetail.gardenArea': {
    id: 'propertyDetail.gardenArea',
    defaultMessage: 'Garden Area',
  },
  'propertyDetail.balconyArea': {
    id: 'propertyDetail.balconyArea',
    defaultMessage: 'Balcony Area',
  },
  'propertyDetail.rooms': {
    id: 'propertyDetail.rooms',
    defaultMessage: 'Rooms',
  },
  'propertyDetail.bedrooms': {
    id: 'propertyDetail.bedrooms',
    defaultMessage: 'Bedrooms',
  },
  'propertyDetail.bathrooms': {
    id: 'propertyDetail.bathrooms',
    defaultMessage: 'Bathrooms',
  },
  'propertyDetail.floors': {
    id: 'propertyDetail.floors',
    defaultMessage: 'Floors',
  },
  'propertyDetail.floorNumber': {
    id: 'propertyDetail.floorNumber',
    defaultMessage: 'Floor Number',
  },
  'propertyDetail.buildingInfo': {
    id: 'propertyDetail.buildingInfo',
    defaultMessage: 'Building Information',
  },
  'propertyDetail.yearBuilt': {
    id: 'propertyDetail.yearBuilt',
    defaultMessage: 'Year Built',
  },
  'propertyDetail.lastModernization': {
    id: 'propertyDetail.lastModernization',
    defaultMessage: 'Last Modernization',
  },
  'propertyDetail.quality': {
    id: 'propertyDetail.quality',
    defaultMessage: 'Quality',
  },
  'propertyDetail.currentlyRented': {
    id: 'propertyDetail.currentlyRented',
    defaultMessage: 'Currently Rented',
  },
  'propertyDetail.yes': {
    id: 'propertyDetail.yes',
    defaultMessage: 'Yes',
  },
  'propertyDetail.no': {
    id: 'propertyDetail.no',
    defaultMessage: 'No',
  },
  'propertyDetail.energyCertificate': {
    id: 'propertyDetail.energyCertificate',
    defaultMessage: 'Energy Certificate',
  },
  'propertyDetail.energyClass': {
    id: 'propertyDetail.energyClass',
    defaultMessage: 'Energy Efficiency Class',
  },
  'propertyDetail.certificateCreated': {
    id: 'propertyDetail.certificateCreated',
    defaultMessage: 'Certificate Created',
  },
  'propertyDetail.validUntil': {
    id: 'propertyDetail.validUntil',
    defaultMessage: 'Valid Until',
  },
  'propertyDetail.locationTransport': {
    id: 'propertyDetail.locationTransport',
    defaultMessage: 'Location & Transport',
  },
  'propertyDetail.publicTransport': {
    id: 'propertyDetail.publicTransport',
    defaultMessage: 'Public Transport',
  },
  'propertyDetail.autobahn': {
    id: 'propertyDetail.autobahn',
    defaultMessage: 'Autobahn',
  },
  'propertyDetail.mainStation': {
    id: 'propertyDetail.mainStation',
    defaultMessage: 'Main Station',
  },
  'propertyDetail.min': {
    id: 'propertyDetail.min',
    defaultMessage: 'min',
  },
  'propertyDetail.pricing': {
    id: 'propertyDetail.pricing',
    defaultMessage: 'Pricing',
  },
  'propertyDetail.purchasePrice': {
    id: 'propertyDetail.purchasePrice',
    defaultMessage: 'Purchase Price',
  },
  'propertyDetail.negotiable': {
    id: 'propertyDetail.negotiable',
    defaultMessage: 'Negotiable',
  },
  'propertyDetail.priceOnRequest': {
    id: 'propertyDetail.priceOnRequest',
    defaultMessage: 'Price on Request',
  },
  'propertyDetail.scheduleCall': {
    id: 'propertyDetail.scheduleCall',
    defaultMessage: 'Schedule Call',
  },
  'propertyDetail.propertySold': {
    id: 'propertyDetail.propertySold',
    defaultMessage: 'Property Sold',
  },
  'propertyDetail.status': {
    id: 'propertyDetail.status',
    defaultMessage: 'Status',
  },
  'propertyDetail.id': {
    id: 'propertyDetail.id',
    defaultMessage: 'ID',
  },

  // ── Schedule Call modal ──────────────────────────────────────────────────
  'scheduleCall.title': {
    id: 'scheduleCall.title',
    defaultMessage: 'Schedule a Call',
  },
  'scheduleCall.titleWithProperty': {
    id: 'scheduleCall.titleWithProperty',
    defaultMessage: 'Request Information',
  },
  'scheduleCall.subtitle': {
    id: 'scheduleCall.subtitle',
    defaultMessage:
      'Fill out the form below and our investment team will contact you within 24 hours.',
  },
  'scheduleCall.subtitleWithProperty': {
    id: 'scheduleCall.subtitleWithProperty',
    defaultMessage:
      "Interested in {property}? Fill out the form below and we'll contact you within 24 hours.",
  },
  'scheduleCall.fullName': {
    id: 'scheduleCall.fullName',
    defaultMessage: 'Full Name',
  },
  'scheduleCall.email': {
    id: 'scheduleCall.email',
    defaultMessage: 'Email Address',
  },
  'scheduleCall.phone': {
    id: 'scheduleCall.phone',
    defaultMessage: 'Phone Number',
  },
  'scheduleCall.message': {
    id: 'scheduleCall.message',
    defaultMessage: 'Message / Notes (Optional)',
  },
  'scheduleCall.messagePlaceholder': {
    id: 'scheduleCall.messagePlaceholder',
    defaultMessage: 'Tell us about your investment goals...',
  },
  'scheduleCall.cancel': {
    id: 'scheduleCall.cancel',
    defaultMessage: 'Cancel',
  },
  'scheduleCall.send': {
    id: 'scheduleCall.send',
    defaultMessage: 'Send Request',
  },
  'scheduleCall.successMessage': {
    id: 'scheduleCall.successMessage',
    defaultMessage: 'Thank you! Our team will contact you within 24 hours.',
  },

  // ── Impressum ────────────────────────────────────────────────────────────
  'impressum.title': {
    id: 'impressum.title',
    defaultMessage: 'Impressum',
  },

  // ── SEO ──────────────────────────────────────────────────────────────────
  'seo.defaultTitle': {
    id: 'seo.defaultTitle',
    defaultMessage: 'Grundwerkinvest – Real Estate Investments in Germany',
  },
  'seo.defaultDescription': {
    id: 'seo.defaultDescription',
    defaultMessage: 'Your partner for ready-made real estate investments in Germany.',
  },

  // ── Homepage sections ────────────────────────────────────────────────────
  'whyProfitable.badge': {
    id: 'whyProfitable.badge',
    defaultMessage: 'Why Profitable',
  },
  'whyProfitable.title': {
    id: 'whyProfitable.title',
    defaultMessage: 'Why This Business Is Profitable',
  },
  'whyProfitable.subtitle': {
    id: 'whyProfitable.subtitle',
    defaultMessage: 'Built on proven fundamentals with consistent, predictable returns',
  },
  'whyGermany.badge': {
    id: 'whyGermany.badge',
    defaultMessage: 'Why Germany',
  },
  'whyGermany.title': {
    id: 'whyGermany.title',
    defaultMessage: 'Why Invest in Germany',
  },
  'whyGermany.subtitle': {
    id: 'whyGermany.subtitle',
    defaultMessage: "Europe's economic powerhouse with unmatched stability and growth potential",
  },
  'whyChooseUs.badge': {
    id: 'whyChooseUs.badge',
    defaultMessage: 'Why Choose Us',
  },
  'whyChooseUs.title': {
    id: 'whyChooseUs.title',
    defaultMessage: 'Your Trusted Investment Partner',
  },
  'whyChooseUs.subtitle': {
    id: 'whyChooseUs.subtitle',
    defaultMessage: 'End-to-end service with proven track record and transparent operations',
  },
  'profitCalculator.badge': {
    id: 'profitCalculator.badge',
    defaultMessage: 'Profit Calculator',
  },
  'profitCalculator.title': {
    id: 'profitCalculator.title',
    defaultMessage: 'Calculate Your Returns',
  },
  'profitCalculator.subtitle': {
    id: 'profitCalculator.subtitle',
    defaultMessage: 'See how much you could earn with our proven investment model',
  },
  'testimonials.badge': {
    id: 'testimonials.badge',
    defaultMessage: 'Success Stories',
  },
  'testimonials.title': {
    id: 'testimonials.title',
    defaultMessage: 'What Our Investors Say',
  },
  'testimonials.subtitle': {
    id: 'testimonials.subtitle',
    defaultMessage: 'Real testimonials from investors around the world',
  },
})
