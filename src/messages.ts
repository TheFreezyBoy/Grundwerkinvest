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
  'contact.office': {
    id: 'contact.office',
    defaultMessage: 'Office',
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
  'contact.expectTitle': {
    id: 'contact.expectTitle',
    defaultMessage: 'What to Expect',
  },
  'contact.expectConsultationTitle': {
    id: 'contact.expectConsultationTitle',
    defaultMessage: 'Free 30-Minute Consultation',
  },
  'contact.expectConsultationDescription': {
    id: 'contact.expectConsultationDescription',
    defaultMessage: 'Discuss your goals and explore options',
  },
  'contact.expectReportTitle': {
    id: 'contact.expectReportTitle',
    defaultMessage: 'Market Analysis Report',
  },
  'contact.expectReportDescription': {
    id: 'contact.expectReportDescription',
    defaultMessage: 'Custom ROI projections for your budget',
  },
  'contact.expectPlanTitle': {
    id: 'contact.expectPlanTitle',
    defaultMessage: 'Personal Investment Plan',
  },
  'contact.expectPlanDescription': {
    id: 'contact.expectPlanDescription',
    defaultMessage: 'Step-by-step roadmap to your first property',
  },
  'contact.formInvestmentPlaceholder': {
    id: 'contact.formInvestmentPlaceholder',
    defaultMessage: 'Select range',
  },
  'contact.formInvestment100to300': {
    id: 'contact.formInvestment100to300',
    defaultMessage: '€100K - €300K',
  },
  'contact.formInvestment300to500': {
    id: 'contact.formInvestment300to500',
    defaultMessage: '€300K - €500K',
  },
  'contact.formInvestment500to1000': {
    id: 'contact.formInvestment500to1000',
    defaultMessage: '€500K - €1M',
  },
  'contact.formInvestmentOver1000': {
    id: 'contact.formInvestmentOver1000',
    defaultMessage: '€1M+',
  },
  'contact.formConfidential': {
    id: 'contact.formConfidential',
    defaultMessage: "We'll respond within 24 hours. All information is kept strictly confidential.",
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
  'whyProfitable.averageRentalYieldLabel': {
    id: 'whyProfitable.averageRentalYieldLabel',
    defaultMessage: 'Average Rental Yield',
  },
  'whyProfitable.averageRentalYieldDescription': {
    id: 'whyProfitable.averageRentalYieldDescription',
    defaultMessage: 'Annual rental income as percentage of objects value',
  },
  'whyProfitable.averageRentalYieldComparison': {
    id: 'whyProfitable.averageRentalYieldComparison',
    defaultMessage: 'Above EU average of 4.2%',
  },
  'whyProfitable.occupancyRateLabel': {
    id: 'whyProfitable.occupancyRateLabel',
    defaultMessage: 'Occupancy Rate',
  },
  'whyProfitable.occupancyRateDescription': {
    id: 'whyProfitable.occupancyRateDescription',
    defaultMessage: 'Listings rented and generating income',
  },
  'whyProfitable.occupancyRateComparison': {
    id: 'whyProfitable.occupancyRateComparison',
    defaultMessage: 'Industry standard: 85-90%',
  },
  'whyProfitable.operatingCostsLabel': {
    id: 'whyProfitable.operatingCostsLabel',
    defaultMessage: 'Operating Costs',
  },
  'whyProfitable.operatingCostsDescription': {
    id: 'whyProfitable.operatingCostsDescription',
    defaultMessage: 'Management, maintenance, and other expenses',
  },
  'whyProfitable.operatingCostsComparison': {
    id: 'whyProfitable.operatingCostsComparison',
    defaultMessage: 'Net profit margin: 70%',
  },
  'whyProfitable.annualROILabel': {
    id: 'whyProfitable.annualROILabel',
    defaultMessage: 'Annual ROI',
  },
  'whyProfitable.annualROIDescription': {
    id: 'whyProfitable.annualROIDescription',
    defaultMessage: 'Combined rental income and object appreciation',
  },
  'whyProfitable.annualROIComparison': {
    id: 'whyProfitable.annualROIComparison',
    defaultMessage: 'Consistently outperforms inflation',
  },
  'whyProfitable.stabilityTitle': {
    id: 'whyProfitable.stabilityTitle',
    defaultMessage: 'Stability & Predictability',
  },
  'whyProfitable.stabilitySubtitle': {
    id: 'whyProfitable.stabilitySubtitle',
    defaultMessage: 'Why our model minimizes risk',
  },
  'whyProfitable.stabilityContractsTitle': {
    id: 'whyProfitable.stabilityContractsTitle',
    defaultMessage: 'Long-Term Contracts',
  },
  'whyProfitable.stabilityContractsDescription': {
    id: 'whyProfitable.stabilityContractsDescription',
    defaultMessage: 'Average tenant stays 3-5 years, ensuring stable, predictable income streams',
  },
  'whyProfitable.stabilityContractsPoint1': {
    id: 'whyProfitable.stabilityContractsPoint1',
    defaultMessage: 'Minimum 1-year contracts',
  },
  'whyProfitable.stabilityContractsPoint2': {
    id: 'whyProfitable.stabilityContractsPoint2',
    defaultMessage: 'Renewal incentives',
  },
  'whyProfitable.stabilityContractsPoint3': {
    id: 'whyProfitable.stabilityContractsPoint3',
    defaultMessage: 'Strict screening process',
  },
  'whyProfitable.stabilityMarketsTitle': {
    id: 'whyProfitable.stabilityMarketsTitle',
    defaultMessage: 'High Demand Markets',
  },
  'whyProfitable.stabilityMarketsDescription': {
    id: 'whyProfitable.stabilityMarketsDescription',
    defaultMessage: 'Focus on German cities with housing shortages and growing populations',
  },
  'whyProfitable.stabilityMarketsPoint1': {
    id: 'whyProfitable.stabilityMarketsPoint1',
    defaultMessage: 'Berlin, Munich, Frankfurt',
  },
  'whyProfitable.stabilityMarketsPoint2': {
    id: 'whyProfitable.stabilityMarketsPoint2',
    defaultMessage: 'Low vacancy rates (<2%)',
  },
  'whyProfitable.stabilityMarketsPoint3': {
    id: 'whyProfitable.stabilityMarketsPoint3',
    defaultMessage: 'Growing job markets',
  },
  'whyProfitable.stabilityManagementTitle': {
    id: 'whyProfitable.stabilityManagementTitle',
    defaultMessage: 'Professional Management',
  },
  'whyProfitable.stabilityManagementDescription': {
    id: 'whyProfitable.stabilityManagementDescription',
    defaultMessage: 'Expert team handles all operations, maintenance, and tenant issues',
  },
  'whyProfitable.stabilityManagementPoint1': {
    id: 'whyProfitable.stabilityManagementPoint1',
    defaultMessage: 'Preventive maintenance',
  },
  'whyProfitable.stabilityManagementPoint2': {
    id: 'whyProfitable.stabilityManagementPoint2',
    defaultMessage: 'Rapid issue resolution',
  },
  'whyProfitable.stabilityManagementPoint3': {
    id: 'whyProfitable.stabilityManagementPoint3',
    defaultMessage: 'Tenant satisfaction focus',
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
  'whyGermany.reasonsEconomyTitle': {
    id: 'whyGermany.reasonsEconomyTitle',
    defaultMessage: 'Strong & Stable Economy',
  },
  'whyGermany.reasonsEconomyDescription': {
    id: 'whyGermany.reasonsEconomyDescription',
    defaultMessage: "Europe's largest economy with consistent GDP growth and low unemployment",
  },
  'whyGermany.reasonsEconomyStats0': {
    id: 'whyGermany.reasonsEconomyStats0',
    defaultMessage: 'GDP: €4.1 trillion',
  },
  'whyGermany.reasonsEconomyStats1': {
    id: 'whyGermany.reasonsEconomyStats1',
    defaultMessage: 'Unemployment: 3.1%',
  },
  'whyGermany.reasonsEconomyStats2': {
    id: 'whyGermany.reasonsEconomyStats2',
    defaultMessage: 'AAA credit rating',
  },
  'whyGermany.reasonsDemandTitle': {
    id: 'whyGermany.reasonsDemandTitle',
    defaultMessage: 'High Housing Demand',
  },
  'whyGermany.reasonsDemandDescription': {
    id: 'whyGermany.reasonsDemandDescription',
    defaultMessage: 'Growing population and urbanization create constant demand for quality rentals',
  },
  'whyGermany.reasonsDemandStats0': {
    id: 'whyGermany.reasonsDemandStats0',
    defaultMessage: 'Urban growth: +2.5%/year',
  },
  'whyGermany.reasonsDemandStats1': {
    id: 'whyGermany.reasonsDemandStats1',
    defaultMessage: 'Rental demand: High',
  },
  'whyGermany.reasonsDemandStats2': {
    id: 'whyGermany.reasonsDemandStats2',
    defaultMessage: 'Vacancy rate: <2%',
  },
  'whyGermany.reasonsProtectionTitle': {
    id: 'whyGermany.reasonsProtectionTitle',
    defaultMessage: 'Legal Protection for Owners',
  },
  'whyGermany.reasonsProtectionDescription': {
    id: 'whyGermany.reasonsProtectionDescription',
    defaultMessage: 'Well-established object laws strongly favor and protect landlords',
  },
  'whyGermany.reasonsProtectionStats0': {
    id: 'whyGermany.reasonsProtectionStats0',
    defaultMessage: 'Clear regulations',
  },
  'whyGermany.reasonsProtectionStats1': {
    id: 'whyGermany.reasonsProtectionStats1',
    defaultMessage: 'Enforced contracts',
  },
  'whyGermany.reasonsProtectionStats2': {
    id: 'whyGermany.reasonsProtectionStats2',
    defaultMessage: 'Tenant screening rights',
  },
  'whyGermany.reasonsVolatilityTitle': {
    id: 'whyGermany.reasonsVolatilityTitle',
    defaultMessage: 'Low Market Volatility',
  },
  'whyGermany.reasonsVolatilityDescription': {
    id: 'whyGermany.reasonsVolatilityDescription',
    defaultMessage: 'Real estate market shows steady, predictable growth without extreme fluctuations',
  },
  'whyGermany.reasonsVolatilityStats0': {
    id: 'whyGermany.reasonsVolatilityStats0',
    defaultMessage: '+4% avg appreciation',
  },
  'whyGermany.reasonsVolatilityStats1': {
    id: 'whyGermany.reasonsVolatilityStats1',
    defaultMessage: 'Recession resilient',
  },
  'whyGermany.reasonsVolatilityStats2': {
    id: 'whyGermany.reasonsVolatilityStats2',
    defaultMessage: 'Long-term stability',
  },
  'whyGermany.reasonsCurrencyTitle': {
    id: 'whyGermany.reasonsCurrencyTitle',
    defaultMessage: 'Strong Currency',
  },
  'whyGermany.reasonsCurrencyDescription': {
    id: 'whyGermany.reasonsCurrencyDescription',
    defaultMessage: 'Euro provides stability and international investor confidence',
  },
  'whyGermany.reasonsCurrencyStats0': {
    id: 'whyGermany.reasonsCurrencyStats0',
    defaultMessage: 'Global reserve currency',
  },
  'whyGermany.reasonsCurrencyStats1': {
    id: 'whyGermany.reasonsCurrencyStats1',
    defaultMessage: 'Inflation protected',
  },
  'whyGermany.reasonsCurrencyStats2': {
    id: 'whyGermany.reasonsCurrencyStats2',
    defaultMessage: 'Easy repatriation',
  },
  'whyGermany.reasonsInfrastructureTitle': {
    id: 'whyGermany.reasonsInfrastructureTitle',
    defaultMessage: 'World-Class Infrastructure',
  },
  'whyGermany.reasonsInfrastructureDescription': {
    id: 'whyGermany.reasonsInfrastructureDescription',
    defaultMessage: 'Excellent transport, education, and healthcare attract quality tenants',
  },
  'whyGermany.reasonsInfrastructureStats0': {
    id: 'whyGermany.reasonsInfrastructureStats0',
    defaultMessage: 'Top-tier cities',
  },
  'whyGermany.reasonsInfrastructureStats1': {
    id: 'whyGermany.reasonsInfrastructureStats1',
    defaultMessage: 'Modern amenities',
  },
  'whyGermany.reasonsInfrastructureStats2': {
    id: 'whyGermany.reasonsInfrastructureStats2',
    defaultMessage: 'High quality of life',
  },
  'whyGermany.statsTitle': {
    id: 'whyGermany.statsTitle',
    defaultMessage: 'Backed by Statistics & Trust',
  },
  'whyGermany.statsSubtitle': {
    id: 'whyGermany.statsSubtitle',
    defaultMessage: 'Germany ranks consistently among the top countries for real estate investment',
  },
  'whyGermany.statsEconomyLabel': {
    id: 'whyGermany.statsEconomyLabel',
    defaultMessage: 'EU Economy',
  },
  'whyGermany.statsEconomySub': {
    id: 'whyGermany.statsEconomySub',
    defaultMessage: 'By GDP size',
  },
  'whyGermany.statsRatingLabel': {
    id: 'whyGermany.statsRatingLabel',
    defaultMessage: 'Credit Rating',
  },
  'whyGermany.statsRatingSub': {
    id: 'whyGermany.statsRatingSub',
    defaultMessage: 'Highest possible',
  },
  'whyGermany.statsGrowthLabel': {
    id: 'whyGermany.statsGrowthLabel',
    defaultMessage: 'Object Growth',
  },
  'whyGermany.statsGrowthSub': {
    id: 'whyGermany.statsGrowthSub',
    defaultMessage: 'Last 10 years',
  },
  'whyGermany.statsPopulationLabel': {
    id: 'whyGermany.statsPopulationLabel',
    defaultMessage: 'Population',
  },
  'whyGermany.statsPopulationSub': {
    id: 'whyGermany.statsPopulationSub',
    defaultMessage: 'Stable market',
  },
  'whyGermany.trustEuRegulated': {
    id: 'whyGermany.trustEuRegulated',
    defaultMessage: 'EU Regulated',
  },
  'whyGermany.trustLicensed': {
    id: 'whyGermany.trustLicensed',
    defaultMessage: 'Licensed Operator',
  },
  'whyGermany.trustRegistry': {
    id: 'whyGermany.trustRegistry',
    defaultMessage: 'Object Registry',
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
  'whyChooseUs.pointsManagedTitle': {
    id: 'whyChooseUs.pointsManagedTitle',
    defaultMessage: 'Fully Managed Solution',
  },
  'whyChooseUs.pointsManagedDescription': {
    id: 'whyChooseUs.pointsManagedDescription',
    defaultMessage: 'We handle everything from tenant screening to maintenance, so you can enjoy truly passive income',
  },
  'whyChooseUs.pointsFinancialsTitle': {
    id: 'whyChooseUs.pointsFinancialsTitle',
    defaultMessage: 'Transparent Financials',
  },
  'whyChooseUs.pointsFinancialsDescription': {
    id: 'whyChooseUs.pointsFinancialsDescription',
    defaultMessage: 'Real-time access to performance data, monthly reports, and complete financial transparency',
  },
  'whyChooseUs.pointsTrackRecordTitle': {
    id: 'whyChooseUs.pointsTrackRecordTitle',
    defaultMessage: 'Proven Track Record',
  },
  'whyChooseUs.pointsTrackRecordDescription': {
    id: 'whyChooseUs.pointsTrackRecordDescription',
    defaultMessage: 'Over 500 objects managed, €150M+ in assets, and 95%+ client satisfaction rate',
  },
  'whyChooseUs.pointsExpertiseTitle': {
    id: 'whyChooseUs.pointsExpertiseTitle',
    defaultMessage: 'Local German Expertise',
  },
  'whyChooseUs.pointsExpertiseDescription': {
    id: 'whyChooseUs.pointsExpertiseDescription',
    defaultMessage: 'Native team with deep knowledge of German real estate law, markets, and best practices',
  },
  'whyChooseUs.statsTitle': {
    id: 'whyChooseUs.statsTitle',
    defaultMessage: 'By the Numbers',
  },
  'whyChooseUs.statsObjectsLabel': {
    id: 'whyChooseUs.statsObjectsLabel',
    defaultMessage: 'Objects Managed',
  },
  'whyChooseUs.statsAssetsLabel': {
    id: 'whyChooseUs.statsAssetsLabel',
    defaultMessage: 'Assets Under Management',
  },
  'whyChooseUs.statsSatisfactionLabel': {
    id: 'whyChooseUs.statsSatisfactionLabel',
    defaultMessage: 'Client Satisfaction',
  },
  'whyChooseUs.statsYearsLabel': {
    id: 'whyChooseUs.statsYearsLabel',
    defaultMessage: 'Years in Business',
  },
  'whyChooseUs.certificationsTitle': {
    id: 'whyChooseUs.certificationsTitle',
    defaultMessage: 'Certifications & Compliance',
  },
  'whyChooseUs.certificationsBroker': {
    id: 'whyChooseUs.certificationsBroker',
    defaultMessage: 'Licensed Real Estate Broker',
  },
  'whyChooseUs.certificationsManagement': {
    id: 'whyChooseUs.certificationsManagement',
    defaultMessage: 'Object Management Certified',
  },
  'whyChooseUs.certificationsGdpr': {
    id: 'whyChooseUs.certificationsGdpr',
    defaultMessage: 'EU Data Protection Compliant',
  },
  'whyChooseUs.testimonialQuote': {
    id: 'whyChooseUs.testimonialQuote',
    defaultMessage: "Grundwerkinvest made it incredibly easy to invest in German real estate. The entire process was transparent, professional, and I've been receiving consistent monthly income since day one. Best investment decision I've made.",
  },
  'whyChooseUs.testimonialRole': {
    id: 'whyChooseUs.testimonialRole',
    defaultMessage: 'International Investor, Hof',
  },

  'howItWorks.badge': {
    id: 'howItWorks.badge',
    defaultMessage: 'How It Works',
  },
  'howItWorks.title': {
    id: 'howItWorks.title',
    defaultMessage: 'Your Business Model, Simplified',
  },
  'howItWorks.subtitle': {
    id: 'howItWorks.subtitle',
    defaultMessage: 'A complete, turn-key solution from acquisition to ongoing income',
  },
  'howItWorks.stepsAcquisitionTitle': {
    id: 'howItWorks.stepsAcquisitionTitle',
    defaultMessage: 'Property Acquisition',
  },
  'howItWorks.stepsAcquisitionDescription': {
    id: 'howItWorks.stepsAcquisitionDescription',
    defaultMessage: 'We identify and acquire high-potential residential objects in prime German locations',
  },
  'howItWorks.stepsAcquisitionDetails0': {
    id: 'howItWorks.stepsAcquisitionDetails0',
    defaultMessage: 'Market analysis',
  },
  'howItWorks.stepsAcquisitionDetails1': {
    id: 'howItWorks.stepsAcquisitionDetails1',
    defaultMessage: 'Due diligence',
  },
  'howItWorks.stepsAcquisitionDetails2': {
    id: 'howItWorks.stepsAcquisitionDetails2',
    defaultMessage: 'Legal compliance',
  },
  'howItWorks.stepsAcquisitionDetails3': {
    id: 'howItWorks.stepsAcquisitionDetails3',
    defaultMessage: 'Negotiation',
  },
  'howItWorks.stepsRenovationTitle': {
    id: 'howItWorks.stepsRenovationTitle',
    defaultMessage: 'Renovation & Preparation',
  },
  'howItWorks.stepsRenovationDescription': {
    id: 'howItWorks.stepsRenovationDescription',
    defaultMessage: 'Professional renovation to maximize rental value and tenant appeal',
  },
  'howItWorks.stepsRenovationDetails0': {
    id: 'howItWorks.stepsRenovationDetails0',
    defaultMessage: 'Modern upgrades',
  },
  'howItWorks.stepsRenovationDetails1': {
    id: 'howItWorks.stepsRenovationDetails1',
    defaultMessage: 'Quality materials',
  },
  'howItWorks.stepsRenovationDetails2': {
    id: 'howItWorks.stepsRenovationDetails2',
    defaultMessage: 'Energy efficiency',
  },
  'howItWorks.stepsRenovationDetails3': {
    id: 'howItWorks.stepsRenovationDetails3',
    defaultMessage: 'Safety standards',
  },
  'howItWorks.stepsTenantTitle': {
    id: 'howItWorks.stepsTenantTitle',
    defaultMessage: 'Tenant Placement',
  },
  'howItWorks.stepsTenantDescription': {
    id: 'howItWorks.stepsTenantDescription',
    defaultMessage: 'We find and screen reliable long-term tenants for your object',
  },
  'howItWorks.stepsTenantDetails0': {
    id: 'howItWorks.stepsTenantDetails0',
    defaultMessage: 'Background checks',
  },
  'howItWorks.stepsTenantDetails1': {
    id: 'howItWorks.stepsTenantDetails1',
    defaultMessage: 'Credit verification',
  },
  'howItWorks.stepsTenantDetails2': {
    id: 'howItWorks.stepsTenantDetails2',
    defaultMessage: 'Legal contracts',
  },
  'howItWorks.stepsTenantDetails3': {
    id: 'howItWorks.stepsTenantDetails3',
    defaultMessage: 'Move-in coordination',
  },
  'howItWorks.stepsIncomeTitle': {
    id: 'howItWorks.stepsIncomeTitle',
    defaultMessage: 'Monthly Income Generation',
  },
  'howItWorks.stepsIncomeDescription': {
    id: 'howItWorks.stepsIncomeDescription',
    defaultMessage: 'Receive consistent monthly rental income directly to your account',
  },
  'howItWorks.stepsIncomeDetails0': {
    id: 'howItWorks.stepsIncomeDetails0',
    defaultMessage: 'Automated payments',
  },
  'howItWorks.stepsIncomeDetails1': {
    id: 'howItWorks.stepsIncomeDetails1',
    defaultMessage: 'Transparent reporting',
  },
  'howItWorks.stepsIncomeDetails2': {
    id: 'howItWorks.stepsIncomeDetails2',
    defaultMessage: 'Tax documentation',
  },
  'howItWorks.stepsIncomeDetails3': {
    id: 'howItWorks.stepsIncomeDetails3',
    defaultMessage: 'Performance tracking',
  },
  'howItWorks.stepsManagementTitle': {
    id: 'howItWorks.stepsManagementTitle',
    defaultMessage: 'Ongoing Management',
  },
  'howItWorks.stepsManagementDescription': {
    id: 'howItWorks.stepsManagementDescription',
    defaultMessage: 'Full objects management including maintenance, tenant relations, and compliance',
  },
  'howItWorks.stepsManagementDetails0': {
    id: 'howItWorks.stepsManagementDetails0',
    defaultMessage: '24/7 maintenance',
  },
  'howItWorks.stepsManagementDetails1': {
    id: 'howItWorks.stepsManagementDetails1',
    defaultMessage: 'Tenant support',
  },
  'howItWorks.stepsManagementDetails2': {
    id: 'howItWorks.stepsManagementDetails2',
    defaultMessage: 'Legal compliance',
  },
  'howItWorks.stepsManagementDetails3': {
    id: 'howItWorks.stepsManagementDetails3',
    defaultMessage: 'Rent optimization',
  },
  'howItWorks.ctaTitle': {
    id: 'howItWorks.ctaTitle',
    defaultMessage: 'Ready to Start Your Real Estate Business?',
  },
  'howItWorks.ctaDescription': {
    id: 'howItWorks.ctaDescription',
    defaultMessage: 'Let us handle everything while you enjoy passive income and long-term wealth building',
  },
  'howItWorks.ctaButton': {
    id: 'howItWorks.ctaButton',
    defaultMessage: 'View Available Objects',
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
  'profitCalculator.inputTitle': {
    id: 'profitCalculator.inputTitle',
    defaultMessage: 'Your Investment',
  },
  'profitCalculator.inputLabel': {
    id: 'profitCalculator.inputLabel',
    defaultMessage: 'Investment Amount',
  },
  'profitCalculator.assumptionsTitle': {
    id: 'profitCalculator.assumptionsTitle',
    defaultMessage: 'Our Assumptions',
  },
  'profitCalculator.assumptionsYield': {
    id: 'profitCalculator.assumptionsYield',
    defaultMessage: 'Annual Rental Yield',
  },
  'profitCalculator.assumptionsOccupancy': {
    id: 'profitCalculator.assumptionsOccupancy',
    defaultMessage: 'Occupancy Rate',
  },
  'profitCalculator.assumptionsCosts': {
    id: 'profitCalculator.assumptionsCosts',
    defaultMessage: 'Operating Costs',
  },
  'profitCalculator.assumptionsAppreciation': {
    id: 'profitCalculator.assumptionsAppreciation',
    defaultMessage: 'Property Appreciation',
  },
  'profitCalculator.resultsMonthlyTitle': {
    id: 'profitCalculator.resultsMonthlyTitle',
    defaultMessage: 'Expected Monthly Income',
  },
  'profitCalculator.resultsMonthlyDescription': {
    id: 'profitCalculator.resultsMonthlyDescription',
    defaultMessage: 'Net operating income after all expenses',
  },
  'profitCalculator.resultsRoiTitle': {
    id: 'profitCalculator.resultsRoiTitle',
    defaultMessage: 'Annual ROI',
  },
  'profitCalculator.resultsRoiRental': {
    id: 'profitCalculator.resultsRoiRental',
    defaultMessage: 'Rental Income',
  },
  'profitCalculator.resultsRoiAppreciation': {
    id: 'profitCalculator.resultsRoiAppreciation',
    defaultMessage: 'Appreciation',
  },
  'profitCalculator.resultsProjectionTitle': {
    id: 'profitCalculator.resultsProjectionTitle',
    defaultMessage: '10-Year Total Return',
  },
  'profitCalculator.resultsProjectionIncome': {
    id: 'profitCalculator.resultsProjectionIncome',
    defaultMessage: 'Total Income',
  },
  'profitCalculator.resultsProjectionValue': {
    id: 'profitCalculator.resultsProjectionValue',
    defaultMessage: 'Object Value',
  },
  'profitCalculator.cta': {
    id: 'profitCalculator.cta',
    defaultMessage: 'Schedule a Consultation',
  },
  'profitCalculator.disclaimer': {
    id: 'profitCalculator.disclaimer',
    defaultMessage: '* Projections are based on historical averages and current market conditions. Actual returns may vary. Past performance does not guarantee future results.',
  },

  'performance.badge': {
    id: 'performance.badge',
    defaultMessage: 'Investment Performance',
  },
  'performance.title': {
    id: 'performance.title',
    defaultMessage: 'Proven Track Record',
  },
  'performance.subtitle': {
    id: 'performance.subtitle',
    defaultMessage: 'Real data from our portfolio of managed objects across Germany',
  },
  'performance.statsMonthlyIncomeLabel': {
    id: 'performance.statsMonthlyIncomeLabel',
    defaultMessage: 'Avg. Monthly Income',
  },
  'performance.statsMonthlyIncomeComparison': {
    id: 'performance.statsMonthlyIncomeComparison',
    defaultMessage: '+12% from last year',
  },
  'performance.statsRoiLabel': {
    id: 'performance.statsRoiLabel',
    defaultMessage: 'Average Annual ROI',
  },
  'performance.statsRoiComparison': {
    id: 'performance.statsRoiComparison',
    defaultMessage: 'Above market average',
  },
  'performance.statsValueGrowthLabel': {
    id: 'performance.statsValueGrowthLabel',
    defaultMessage: 'Objects Value Growth',
  },
  'performance.statsValueGrowthComparison': {
    id: 'performance.statsValueGrowthComparison',
    defaultMessage: 'Over 10 years',
  },
  'performance.chartsCashflowTab': {
    id: 'performance.chartsCashflowTab',
    defaultMessage: 'Monthly Cash Flow',
  },
  'performance.chartsRoiTab': {
    id: 'performance.chartsRoiTab',
    defaultMessage: 'ROI Over 10 Years',
  },
  'performance.chartsValueTab': {
    id: 'performance.chartsValueTab',
    defaultMessage: 'Objects Value Growth',
  },
  'performance.chartsCashflowTitle': {
    id: 'performance.chartsCashflowTitle',
    defaultMessage: 'Expected Monthly Cash Flow',
  },
  'performance.chartsCashflowDescription': {
    id: 'performance.chartsCashflowDescription',
    defaultMessage: 'Average property generating €2,500+ monthly income',
  },
  'performance.chartsCashflowIncome': {
    id: 'performance.chartsCashflowIncome',
    defaultMessage: 'Rental Income',
  },
  'performance.chartsCashflowExpenses': {
    id: 'performance.chartsCashflowExpenses',
    defaultMessage: 'Operating Costs',
  },
  'performance.chartsCashflowNet': {
    id: 'performance.chartsCashflowNet',
    defaultMessage: 'Net Profit',
  },
  'performance.chartsRoiTitle': {
    id: 'performance.chartsRoiTitle',
    defaultMessage: 'Return on Investment Timeline',
  },
  'performance.chartsRoiDescription': {
    id: 'performance.chartsRoiDescription',
    defaultMessage: 'Projected ROI based on €300,000 initial investment',
  },
  'performance.chartsRoiAnnual': {
    id: 'performance.chartsRoiAnnual',
    defaultMessage: 'Annual ROI %',
  },
  'performance.chartsRoiCumulative': {
    id: 'performance.chartsRoiCumulative',
    defaultMessage: 'Cumulative ROI %',
  },
  'performance.chartsValueTitle': {
    id: 'performance.chartsValueTitle',
    defaultMessage: 'German Objects Value Growth',
  },
  'performance.chartsValueDescription': {
    id: 'performance.chartsValueDescription',
    defaultMessage: 'Historical object values in major German cities (indexed to €1,000)',
  },
  'performance.chartsValueLabel': {
    id: 'performance.chartsValueLabel',
    defaultMessage: 'Object Value Index',
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
  'testimonials.caseStudyBadge': {
    id: 'testimonials.caseStudyBadge',
    defaultMessage: 'Featured Case Study',
  },
  'testimonials.caseStudyTitle': {
    id: 'testimonials.caseStudyTitle',
    defaultMessage: 'From Zero to €5,400 Monthly Income',
  },
  'testimonials.caseStudyDescription': {
    id: 'testimonials.caseStudyDescription',
    defaultMessage: '{investor}, a business owner from {location}, wanted to diversify his investment portfolio with stable European real estate. He invested {investment} in {properties} properties through Grundwerkinvest in 2021.',
  },
  'testimonials.caseStudyStatsIncome': {
    id: 'testimonials.caseStudyStatsIncome',
    defaultMessage: 'Monthly Rental Income',
  },
  'testimonials.caseStudyStatsProperties': {
    id: 'testimonials.caseStudyStatsProperties',
    defaultMessage: 'Total Properties',
  },
  'testimonials.caseStudyStatsAppreciation': {
    id: 'testimonials.caseStudyStatsAppreciation',
    defaultMessage: 'Annual Appreciation',
  },
})
