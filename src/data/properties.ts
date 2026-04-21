export interface Property {
  id: number
  title: string

  // Category & Type
  category: string // Residential, Commercial, etc.
  type: string
  status: string // Available, Reserved, Sold, etc.

  // Address Information
  address: string
  zip: string
  city: string
  region: string
  location: string // neighborhood

  // Pricing
  price: number
  priceOnRequest: boolean
  priceNegotiable: boolean

  // Areas & Spaces
  landArea?: number // in m²
  livingSpace: number // in m²
  size: number // total size
  rooms: number
  bedrooms: number
  bathrooms: number
  floors?: number

  // Building Information
  yearBuilt: number
  yearRenovated?: number
  buildingQuality: string // Standard, High-end, Luxury, etc.
  condition: string // New, Renovated, Good, Needs renovation

  // Rental Information
  isRented: boolean
  currentTenant?: string
  leaseEndDate?: string
  monthlyIncome: number
  occupancyRate: number
  roi: number

  // Energy Certificate
  energyCertificate: {
    type: string // Consumption, Demand
    value: number // kWh/(m²·a)
    efficiency: string // A+, A, B, C, etc.
    validUntil: string
    heatingType: string
  }

  // Features & Amenities
  features: Array<{
    icon: string
    title: string
    description: string
  }>
  amenities: string[] // Parking, Balcony, Garden, Elevator, etc.

  // Location Details
  locationDetails: {
    publicTransport: string
    nearestStation: string
    distanceToStation: string
    schools: string
    shopping: string
    restaurants: string
  }

  // Media
  image: string
  images: string[]

  // Description
  description: string
  highlights: string[]

  // Status & Dates
  isSold: boolean
  isFeatured: boolean
  dateAdded: string
  dateUpdated: string
}

const defaultFeatures = [
  {
    icon: 'shield',
    title: 'Fully Managed',
    description: 'Professional property management included',
  },
  {
    icon: 'users',
    title: 'Quality Tenants',
    description: 'Pre-vetted tenants with long-term leases',
  },
  {
    icon: 'trending',
    title: 'High Demand Area',
    description: 'Prime location with low vacancy rates',
  },
  { icon: 'check', title: 'Turnkey Ready', description: 'Move-in ready with modern amenities' },
  {
    icon: 'award',
    title: 'Energy Efficient',
    description: 'Reduced costs and attractive to tenants',
  },
  { icon: 'target', title: 'Strong Growth', description: 'Excellent property value appreciation' },
]

export const properties: Property[] = [
  {
    id: 1,
    title: 'Modern City Apartment',
    category: 'Residential',
    status: 'Available',
    location: 'Prenzlauer Berg',
    city: 'Berlin',
    address: 'Kastanienallee 45, 10119 Berlin',
    zip: '10119',
    region: 'Berlin',
    image:
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVzaWRlbnRpYWwlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1502672260066-6bc35f0379c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTM0MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1556912173-46c336c7fd55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGx1eHVyeXxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBiYWxjb255JTIwdmlld3xlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 320000,
    priceOnRequest: false,
    priceNegotiable: false,
    livingSpace: 75,
    size: 75,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    floors: 1,
    type: 'Apartment',
    yearBuilt: 2019,
    yearRenovated: 2025,
    buildingQuality: 'High-end',
    condition: 'Renovated',
    isRented: true,
    currentTenant: 'John Doe',
    leaseEndDate: '2027-06-30',
    monthlyIncome: 2400,
    occupancyRate: 98,
    roi: 9.0,
    energyCertificate: {
      type: 'Consumption',
      value: 50,
      efficiency: 'A+',
      validUntil: '2028-12-31',
      heatingType: 'Electric',
    },
    features: defaultFeatures,
    amenities: ['Parking', 'Balcony'],
    locationDetails: {
      publicTransport: 'Good',
      nearestStation: 'Prenzlauer Berg',
      distanceToStation: '500m',
      schools: 'Nearby',
      shopping: 'Nearby',
      restaurants: 'Nearby',
    },
    isSold: false,
    isFeatured: true,
    dateAdded: '2026-03-15',
    dateUpdated: '2026-03-20',
    description:
      "This fully renovated apartment in Berlin's vibrant Prenzlauer Berg district offers an exceptional investment opportunity. The property features modern finishes, energy-efficient systems, and is currently tenanted with a long-term lease agreement.",
    highlights: ['Modern finishes', 'Energy-efficient systems', 'Long-term lease agreement'],
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    category: 'Residential',
    status: 'Sold',
    location: 'Schwabing',
    city: 'Munich',
    address: 'Leopoldstraße 78, 80802 Munich',
    zip: '80802',
    region: 'Munich',
    image:
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBiYWxjb255JTIwdmlld3xlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 580000,
    priceOnRequest: false,
    priceNegotiable: false,
    livingSpace: 120,
    size: 120,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    floors: 2,
    type: 'Penthouse',
    yearBuilt: 2020,
    yearRenovated: 2025,
    buildingQuality: 'Luxury',
    condition: 'Renovated',
    isRented: true,
    currentTenant: 'Jane Smith',
    leaseEndDate: '2027-06-30',
    monthlyIncome: 4200,
    occupancyRate: 95,
    roi: 8.7,
    energyCertificate: {
      type: 'Consumption',
      value: 50,
      efficiency: 'A+',
      validUntil: '2028-12-31',
      heatingType: 'Electric',
    },
    features: defaultFeatures,
    amenities: ['Parking', 'Balcony'],
    locationDetails: {
      publicTransport: 'Good',
      nearestStation: 'Prenzlauer Berg',
      distanceToStation: '500m',
      schools: 'Nearby',
      shopping: 'Nearby',
      restaurants: 'Nearby',
    },
    isSold: true,
    isFeatured: false,
    dateAdded: '2026-02-10',
    dateUpdated: '2026-03-18',
    description:
      "Stunning penthouse in Munich's prestigious Schwabing district. Premium finishes, panoramic views, and exceptional rental performance.",
    highlights: ['Premium finishes', 'Panoramic views', 'Exceptional rental performance'],
  },
  {
    id: 3,
    title: 'Renovated Family Home',
    category: 'Residential',
    status: 'Available',
    location: 'Westend',
    city: 'Frankfurt',
    address: 'Reuterweg 23, 60323 Frankfurt',
    zip: '60323',
    region: 'Frankfurt',
    image:
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1502672260066-6bc35f0379c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTM0MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 420000,
    priceOnRequest: false,
    priceNegotiable: false,
    livingSpace: 95,
    size: 95,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    floors: 2,
    type: 'House',
    yearBuilt: 2018,
    yearRenovated: 2025,
    buildingQuality: 'High-end',
    condition: 'Renovated',
    isRented: true,
    currentTenant: 'Alice Johnson',
    leaseEndDate: '2027-06-30',
    monthlyIncome: 3100,
    occupancyRate: 97,
    roi: 8.9,
    energyCertificate: {
      type: 'Consumption',
      value: 50,
      efficiency: 'A+',
      validUntil: '2028-12-31',
      heatingType: 'Electric',
    },
    features: defaultFeatures,
    amenities: ['Parking', 'Balcony'],
    locationDetails: {
      publicTransport: 'Good',
      nearestStation: 'Prenzlauer Berg',
      distanceToStation: '500m',
      schools: 'Nearby',
      shopping: 'Nearby',
      restaurants: 'Nearby',
    },
    isSold: false,
    isFeatured: true,
    dateAdded: '2026-03-12',
    dateUpdated: '2026-03-22',
    description:
      "Beautifully renovated family home in Frankfurt's Westend. Perfect for long-term rental income with excellent tenant demand.",
    highlights: ['Beautifully renovated', 'Long-term rental income', 'Excellent tenant demand'],
  },
  {
    id: 4,
    title: 'Contemporary Loft',
    category: 'Residential',
    status: 'Available',
    location: 'Mitte',
    city: 'Berlin',
    address: 'Torstraße 156, 10115 Berlin',
    zip: '10115',
    region: 'Berlin',
    image:
      'https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVzaWRlbnRpYWwlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVzaWRlbnRpYWwlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 285000,
    priceOnRequest: false,
    priceNegotiable: false,
    livingSpace: 60,
    size: 60,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    floors: 1,
    type: 'Loft',
    yearBuilt: 2021,
    yearRenovated: 2025,
    buildingQuality: 'High-end',
    condition: 'Renovated',
    isRented: true,
    currentTenant: 'Bob Brown',
    leaseEndDate: '2027-06-30',
    monthlyIncome: 2200,
    occupancyRate: 99,
    roi: 9.3,
    energyCertificate: {
      type: 'Consumption',
      value: 50,
      efficiency: 'A+',
      validUntil: '2028-12-31',
      heatingType: 'Electric',
    },
    features: defaultFeatures,
    amenities: ['Parking', 'Balcony'],
    locationDetails: {
      publicTransport: 'Good',
      nearestStation: 'Prenzlauer Berg',
      distanceToStation: '500m',
      schools: 'Nearby',
      shopping: 'Nearby',
      restaurants: 'Nearby',
    },
    isSold: false,
    isFeatured: true,
    dateAdded: '2026-03-18',
    dateUpdated: '2026-03-25',
    description:
      'Ultra-modern loft in Berlin Mitte. High rental demand area with strong growth potential.',
    highlights: ['Ultra-modern', 'High rental demand', 'Strong growth potential'],
  },
  {
    id: 5,
    title: 'Riverside Apartment',
    category: 'Residential',
    status: 'Available',
    location: 'Sachsenhausen',
    city: 'Frankfurt',
    address: 'Schweizer Straße 45, 60594 Frankfurt',
    zip: '60594',
    region: 'Frankfurt',
    image:
      'https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTM0MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTM0MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 390000,
    priceOnRequest: false,
    priceNegotiable: false,
    livingSpace: 85,
    size: 85,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    floors: 1,
    type: 'Apartment',
    yearBuilt: 2019,
    yearRenovated: 2025,
    buildingQuality: 'High-end',
    condition: 'Renovated',
    isRented: true,
    currentTenant: 'Charlie White',
    leaseEndDate: '2027-06-30',
    monthlyIncome: 2850,
    occupancyRate: 96,
    roi: 8.8,
    energyCertificate: {
      type: 'Consumption',
      value: 50,
      efficiency: 'A+',
      validUntil: '2028-12-31',
      heatingType: 'Electric',
    },
    features: defaultFeatures,
    amenities: ['Parking', 'Balcony'],
    locationDetails: {
      publicTransport: 'Good',
      nearestStation: 'Prenzlauer Berg',
      distanceToStation: '500m',
      schools: 'Nearby',
      shopping: 'Nearby',
      restaurants: 'Nearby',
    },
    isSold: false,
    isFeatured: false,
    dateAdded: '2026-02-28',
    dateUpdated: '2026-03-15',
    description: 'Prime riverside location in Sachsenhausen with excellent transport links.',
    highlights: ['Prime riverside location', 'Excellent transport links'],
  },
  {
    id: 6,
    title: 'Garden Villa',
    category: 'Residential',
    status: 'Sold',
    location: 'Bogenhausen',
    city: 'Munich',
    address: 'Prinzregentenstraße 92, 81675 Munich',
    zip: '81675',
    region: 'Munich',
    image:
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 750000,
    priceOnRequest: false,
    priceNegotiable: false,
    livingSpace: 150,
    size: 150,
    rooms: 6,
    bedrooms: 4,
    bathrooms: 3,
    floors: 2,
    type: 'Villa',
    yearBuilt: 2017,
    yearRenovated: 2025,
    buildingQuality: 'Luxury',
    condition: 'Renovated',
    isRented: true,
    currentTenant: 'David Black',
    leaseEndDate: '2027-06-30',
    monthlyIncome: 5200,
    occupancyRate: 92,
    roi: 8.3,
    energyCertificate: {
      type: 'Consumption',
      value: 50,
      efficiency: 'A+',
      validUntil: '2028-12-31',
      heatingType: 'Electric',
    },
    features: defaultFeatures,
    amenities: ['Parking', 'Balcony'],
    locationDetails: {
      publicTransport: 'Good',
      nearestStation: 'Prenzlauer Berg',
      distanceToStation: '500m',
      schools: 'Nearby',
      shopping: 'Nearby',
      restaurants: 'Nearby',
    },
    isSold: true,
    isFeatured: false,
    dateAdded: '2026-01-20',
    dateUpdated: '2026-02-10',
    description: 'Luxurious garden villa in exclusive Munich neighborhood.',
    highlights: ['Luxurious garden villa', 'Exclusive Munich neighborhood'],
  },
  {
    id: 7,
    title: 'Smart Studio',
    category: 'Residential',
    status: 'Available',
    location: 'Kreuzberg',
    city: 'Berlin',
    address: 'Oranienstraße 134, 10969 Berlin',
    zip: '10969',
    region: 'Berlin',
    image:
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 195000,
    priceOnRequest: false,
    priceNegotiable: false,
    livingSpace: 45,
    size: 45,
    rooms: 1,
    bedrooms: 1,
    bathrooms: 1,
    floors: 1,
    type: 'Studio',
    yearBuilt: 2022,
    yearRenovated: 2025,
    buildingQuality: 'High-end',
    condition: 'Renovated',
    isRented: true,
    currentTenant: 'Eve Green',
    leaseEndDate: '2027-06-30',
    monthlyIncome: 1650,
    occupancyRate: 100,
    roi: 10.2,
    energyCertificate: {
      type: 'Consumption',
      value: 50,
      efficiency: 'A+',
      validUntil: '2028-12-31',
      heatingType: 'Electric',
    },
    features: defaultFeatures,
    amenities: ['Parking', 'Balcony'],
    locationDetails: {
      publicTransport: 'Good',
      nearestStation: 'Prenzlauer Berg',
      distanceToStation: '500m',
      schools: 'Nearby',
      shopping: 'Nearby',
      restaurants: 'Nearby',
    },
    isSold: false,
    isFeatured: false,
    dateAdded: '2026-03-10',
    dateUpdated: '2026-03-20',
    description:
      'High-demand studio apartment in trendy Kreuzberg. Perfect for young professionals.',
    highlights: ['High-demand', 'Trendy Kreuzberg', 'Perfect for young professionals'],
  },
  {
    id: 8,
    title: 'Executive Apartment',
    category: 'Residential',
    status: 'Available',
    location: 'Maxvorstadt',
    city: 'Munich',
    address: 'Amalienstraße 67, 80799 Munich',
    zip: '80799',
    region: 'Munich',
    image:
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 465000,
    priceOnRequest: false,
    priceNegotiable: false,
    livingSpace: 90,
    size: 90,
    rooms: 4,
    bedrooms: 2,
    bathrooms: 2,
    floors: 1,
    type: 'Apartment',
    yearBuilt: 2020,
    yearRenovated: 2025,
    buildingQuality: 'High-end',
    condition: 'Renovated',
    isRented: true,
    currentTenant: 'Frank Blue',
    leaseEndDate: '2027-06-30',
    monthlyIncome: 3400,
    occupancyRate: 98,
    roi: 8.8,
    energyCertificate: {
      type: 'Consumption',
      value: 50,
      efficiency: 'A+',
      validUntil: '2028-12-31',
      heatingType: 'Electric',
    },
    features: defaultFeatures,
    amenities: ['Parking', 'Balcony'],
    locationDetails: {
      publicTransport: 'Good',
      nearestStation: 'Prenzlauer Berg',
      distanceToStation: '500m',
      schools: 'Nearby',
      shopping: 'Nearby',
      restaurants: 'Nearby',
    },
    isSold: false,
    isFeatured: false,
    dateAdded: '2026-03-05',
    dateUpdated: '2026-03-19',
    description:
      "Premium apartment near Munich's cultural district. High-quality tenants and stable income.",
    highlights: ['Premium apartment', 'High-quality tenants', 'Stable income'],
  },
  {
    id: 9,
    title: 'Urban Townhouse',
    category: 'Residential',
    status: 'Available',
    location: 'Nordend',
    city: 'Frankfurt',
    address: 'Berger Straße 189, 60385 Frankfurt',
    zip: '60385',
    region: 'Frankfurt',
    image:
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 520000,
    priceOnRequest: false,
    priceNegotiable: false,
    livingSpace: 110,
    size: 110,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    floors: 2,
    type: 'Townhouse',
    yearBuilt: 2019,
    yearRenovated: 2025,
    buildingQuality: 'High-end',
    condition: 'Renovated',
    isRented: true,
    currentTenant: 'Grace Red',
    leaseEndDate: '2027-06-30',
    monthlyIncome: 3800,
    occupancyRate: 95,
    roi: 8.8,
    energyCertificate: {
      type: 'Consumption',
      value: 50,
      efficiency: 'A+',
      validUntil: '2028-12-31',
      heatingType: 'Electric',
    },
    features: defaultFeatures,
    amenities: ['Parking', 'Balcony'],
    locationDetails: {
      publicTransport: 'Good',
      nearestStation: 'Prenzlauer Berg',
      distanceToStation: '500m',
      schools: 'Nearby',
      shopping: 'Nearby',
      restaurants: 'Nearby',
    },
    isSold: false,
    isFeatured: false,
    dateAdded: '2026-02-15',
    dateUpdated: '2026-03-12',
    description:
      'Charming townhouse in vibrant Nordend district. Family-friendly location with strong demand.',
    highlights: ['Charming townhouse', 'Family-friendly location', 'Strong demand'],
  },
]
