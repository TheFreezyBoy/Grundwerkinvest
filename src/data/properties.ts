export interface Property {
  id: number
  title: string
  location: string
  city: string
  image: string
  price: number
  monthlyIncome: number
  roi: number
  bedrooms: number
  bathrooms: number
  size: number
  type: string
  yearBuilt: number
  isSold: boolean
  isFeatured: boolean
  dateAdded: string
  dateUpdated: string
  occupancyRate: number
  description: string
  images: string[]
  address: string
  features: Array<{
    icon: string
    title: string
    description: string
  }>
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
    location: 'Prenzlauer Berg',
    city: 'Berlin',
    address: 'Kastanienallee 45, 10119 Berlin',
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
    monthlyIncome: 2400,
    roi: 9.0,
    bedrooms: 2,
    bathrooms: 1,
    size: 75,
    type: 'Apartment',
    yearBuilt: 2019,
    isSold: false,
    isFeatured: true,
    dateAdded: '2026-03-15',
    dateUpdated: '2026-03-20',
    occupancyRate: 98,
    description:
      "This fully renovated apartment in Berlin's vibrant Prenzlauer Berg district offers an exceptional investment opportunity. The property features modern finishes, energy-efficient systems, and is currently tenanted with a long-term lease agreement.",
    features: defaultFeatures,
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    location: 'Schwabing',
    city: 'Munich',
    address: 'Leopoldstraße 78, 80802 Munich',
    image:
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBiYWxjb255JTIwdmlld3xlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 580000,
    monthlyIncome: 4200,
    roi: 8.7,
    bedrooms: 3,
    bathrooms: 2,
    size: 120,
    type: 'Penthouse',
    yearBuilt: 2020,
    isSold: true,
    isFeatured: false,
    dateAdded: '2026-02-10',
    dateUpdated: '2026-03-18',
    occupancyRate: 95,
    description:
      "Stunning penthouse in Munich's prestigious Schwabing district. Premium finishes, panoramic views, and exceptional rental performance.",
    features: defaultFeatures,
  },
  {
    id: 3,
    title: 'Renovated Family Home',
    location: 'Westend',
    city: 'Frankfurt',
    address: 'Reuterweg 23, 60323 Frankfurt',
    image:
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1502672260066-6bc35f0379c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTM0MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 420000,
    monthlyIncome: 3100,
    roi: 8.9,
    bedrooms: 3,
    bathrooms: 2,
    size: 95,
    type: 'House',
    yearBuilt: 2018,
    isSold: false,
    isFeatured: true,
    dateAdded: '2026-03-12',
    dateUpdated: '2026-03-22',
    occupancyRate: 97,
    description:
      "Beautifully renovated family home in Frankfurt's Westend. Perfect for long-term rental income with excellent tenant demand.",
    features: defaultFeatures,
  },
  {
    id: 4,
    title: 'Contemporary Loft',
    location: 'Mitte',
    city: 'Berlin',
    address: 'Torstraße 156, 10115 Berlin',
    image:
      'https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVzaWRlbnRpYWwlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVzaWRlbnRpYWwlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 285000,
    monthlyIncome: 2200,
    roi: 9.3,
    bedrooms: 1,
    bathrooms: 1,
    size: 60,
    type: 'Loft',
    yearBuilt: 2021,
    isSold: false,
    isFeatured: true,
    dateAdded: '2026-03-18',
    dateUpdated: '2026-03-25',
    occupancyRate: 99,
    description:
      'Ultra-modern loft in Berlin Mitte. High rental demand area with strong growth potential.',
    features: defaultFeatures,
  },
  {
    id: 5,
    title: 'Riverside Apartment',
    location: 'Sachsenhausen',
    city: 'Frankfurt',
    address: 'Schweizer Straße 45, 60594 Frankfurt',
    image:
      'https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTM0MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTM0MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 390000,
    monthlyIncome: 2850,
    roi: 8.8,
    bedrooms: 2,
    bathrooms: 1,
    size: 85,
    type: 'Apartment',
    yearBuilt: 2019,
    isSold: false,
    isFeatured: false,
    dateAdded: '2026-02-28',
    dateUpdated: '2026-03-15',
    occupancyRate: 96,
    description: 'Prime riverside location in Sachsenhausen with excellent transport links.',
    features: defaultFeatures,
  },
  {
    id: 6,
    title: 'Garden Villa',
    location: 'Bogenhausen',
    city: 'Munich',
    address: 'Prinzregentenstraße 92, 81675 Munich',
    image:
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 750000,
    monthlyIncome: 5200,
    roi: 8.3,
    bedrooms: 4,
    bathrooms: 3,
    size: 150,
    type: 'Villa',
    yearBuilt: 2017,
    isSold: true,
    isFeatured: false,
    dateAdded: '2026-01-20',
    dateUpdated: '2026-02-10',
    occupancyRate: 92,
    description: 'Luxurious garden villa in exclusive Munich neighborhood.',
    features: defaultFeatures,
  },
  {
    id: 7,
    title: 'Smart Studio',
    location: 'Kreuzberg',
    city: 'Berlin',
    address: 'Oranienstraße 134, 10969 Berlin',
    image:
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 195000,
    monthlyIncome: 1650,
    roi: 10.2,
    bedrooms: 1,
    bathrooms: 1,
    size: 45,
    type: 'Studio',
    yearBuilt: 2022,
    isSold: false,
    isFeatured: false,
    dateAdded: '2026-03-10',
    dateUpdated: '2026-03-20',
    occupancyRate: 100,
    description:
      'High-demand studio apartment in trendy Kreuzberg. Perfect for young professionals.',
    features: defaultFeatures,
  },
  {
    id: 8,
    title: 'Executive Apartment',
    location: 'Maxvorstadt',
    city: 'Munich',
    address: 'Amalienstraße 67, 80799 Munich',
    image:
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 465000,
    monthlyIncome: 3400,
    roi: 8.8,
    bedrooms: 2,
    bathrooms: 2,
    size: 90,
    type: 'Apartment',
    yearBuilt: 2020,
    isSold: false,
    isFeatured: false,
    dateAdded: '2026-03-05',
    dateUpdated: '2026-03-19',
    occupancyRate: 98,
    description:
      "Premium apartment near Munich's cultural district. High-quality tenants and stable income.",
    features: defaultFeatures,
  },
  {
    id: 9,
    title: 'Urban Townhouse',
    location: 'Nordend',
    city: 'Frankfurt',
    address: 'Berger Straße 189, 60385 Frankfurt',
    image:
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzAwNjU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    price: 520000,
    monthlyIncome: 3800,
    roi: 8.8,
    bedrooms: 3,
    bathrooms: 2,
    size: 110,
    type: 'Townhouse',
    yearBuilt: 2019,
    isSold: false,
    isFeatured: false,
    dateAdded: '2026-02-15',
    dateUpdated: '2026-03-12',
    occupancyRate: 95,
    description:
      'Charming townhouse in vibrant Nordend district. Family-friendly location with strong demand.',
    features: defaultFeatures,
  },
]
