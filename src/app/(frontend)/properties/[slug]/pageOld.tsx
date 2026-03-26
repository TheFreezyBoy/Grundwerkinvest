'use client'
import { useState } from 'react'
import { useParams } from 'react-router'
import {
  MapPin,
  Euro,
  TrendingUp,
  Home,
  Users,
  Calendar,
  Shield,
  CheckCircle2,
  ArrowRight,
  X,
  Phone,
  Mail,
  MessageSquare,
  User,
  BarChart3,
  DollarSign,
  Percent,
  Building2,
  Target,
  Award,
  Clock,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

// Mock property data - in a real app, this would come from an API
const propertyData = {
  id: 1,
  title: 'Modern City Apartment',
  location: 'Prenzlauer Berg',
  city: 'Berlin',
  address: 'Kastanienallee 45, 10119 Berlin',
  images: [
    'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTE5NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVzaWRlbnRpYWwlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1694378909245-03d9d3a566da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBjaXR5JTIwdmlldyUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzAxMzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  price: 320000,
  monthlyIncome: 2400,
  roi: 9.0,
  occupancyRate: 98,
  bedrooms: 2,
  bathrooms: 1,
  size: 75,
  type: 'Apartment',
  yearBuilt: 2019,
  description:
    "This fully renovated apartment in Berlin's vibrant Prenzlauer Berg district offers an exceptional investment opportunity. The property features modern finishes, energy-efficient systems, and is currently tenanted with a long-term lease agreement. Located in one of Berlin's most sought-after neighborhoods, this property combines strong rental demand with excellent capital appreciation potential.",
  features: [
    {
      icon: 'shield',
      title: 'Fully Managed',
      description: 'Professional property management included in the package',
    },
    {
      icon: 'users',
      title: 'Quality Tenants',
      description: 'Pre-vetted, reliable tenants with 3-year lease agreement',
    },
    {
      icon: 'trending',
      title: 'High Demand Area',
      description: 'Located in a prime neighborhood with low vacancy rates',
    },
    {
      icon: 'check',
      title: 'Turnkey Ready',
      description: 'Move-in ready with recent renovations and modern amenities',
    },
    {
      icon: 'award',
      title: 'Energy Efficient',
      description: 'Class A energy rating reduces costs and attracts tenants',
    },
    {
      icon: 'target',
      title: 'Strong Growth',
      description: 'Historically strong property value appreciation in the area',
    },
  ],
  financials: {
    yearlyProjection: [
      { year: 'Year 1', income: 28800, expenses: 8640, profit: 20160 },
      { year: 'Year 2', income: 29800, expenses: 8940, profit: 20860 },
      { year: 'Year 3', income: 30900, expenses: 9270, profit: 21630 },
      { year: 'Year 4', income: 32100, expenses: 9630, profit: 22470 },
      { year: 'Year 5', income: 33400, expenses: 10020, profit: 23380 },
    ],
    roiProjection: [
      { year: 'Y1', roi: 6.3 },
      { year: 'Y2', roi: 6.5 },
      { year: 'Y3', roi: 6.8 },
      { year: 'Y4', roi: 7.0 },
      { year: 'Y5', roi: 7.3 },
    ],
  },
}

export default function PropertyDetailPage() {
  const { id } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [investmentAmount, setInvestmentAmount] = useState(320000)

  // Calculator logic
  const downPayment = investmentAmount * 0.2
  const loanAmount = investmentAmount * 0.8
  const monthlyPayment = (loanAmount * 0.03) / 12
  const netMonthlyIncome = propertyData.monthlyIncome - monthlyPayment - 500 // 500 for expenses
  const yearlyIncome = netMonthlyIncome * 12
  const calculatedROI = (yearlyIncome / downPayment) * 100

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image Carousel */}
      <section className="relative">
        <div className="relative h-[600px] bg-primary">
          {/* Main Image */}
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src={propertyData.images[currentImageIndex]}
              alt={propertyData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Image Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {propertyData.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentImageIndex === index ? 'bg-accent w-12' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Property Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-4">
                <Building2 className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent">{propertyData.type}</span>
              </div>
              <h1 className="text-5xl text-white mb-4">{propertyData.title}</h1>
              <div className="flex items-center gap-2 text-white/90 text-lg">
                <MapPin className="w-5 h-5" />
                <span>{propertyData.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Key Metrics */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-3xl text-foreground mb-6">Investment Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-accent/10 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Euro className="w-5 h-5 text-accent" />
                      <span className="text-sm text-muted-foreground">Purchase Price</span>
                    </div>
                    <div className="text-3xl text-foreground">
                      €{(propertyData.price / 1000).toFixed(0)}K
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Monthly Income</span>
                    </div>
                    <div className="text-3xl text-primary">
                      €{propertyData.monthlyIncome.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-secondary/10 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Percent className="w-5 h-5 text-secondary" />
                      <span className="text-sm text-muted-foreground">ROI</span>
                    </div>
                    <div className="text-3xl text-secondary">{propertyData.roi}%</div>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-accent" />
                      <span className="text-sm text-muted-foreground">Occupancy</span>
                    </div>
                    <div className="text-3xl text-foreground">{propertyData.occupancyRate}%</div>
                  </div>
                </div>
              </div>

              {/* Property Description */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-3xl text-foreground mb-6">About This Investment</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {propertyData.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-border">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Bedrooms</div>
                    <div className="text-xl text-foreground">{propertyData.bedrooms}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Bathrooms</div>
                    <div className="text-xl text-foreground">{propertyData.bathrooms}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Size</div>
                    <div className="text-xl text-foreground">{propertyData.size}m²</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Year Built</div>
                    <div className="text-xl text-foreground">{propertyData.yearBuilt}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div className="text-xl text-foreground">{propertyData.city}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Property Type</div>
                    <div className="text-xl text-foreground">{propertyData.type}</div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-3xl text-foreground mb-6">Investment Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {propertyData.features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        {feature.icon === 'shield' && <Shield className="w-6 h-6 text-accent" />}
                        {feature.icon === 'users' && <Users className="w-6 h-6 text-accent" />}
                        {feature.icon === 'trending' && (
                          <TrendingUp className="w-6 h-6 text-accent" />
                        )}
                        {feature.icon === 'check' && (
                          <CheckCircle2 className="w-6 h-6 text-accent" />
                        )}
                        {feature.icon === 'award' && <Award className="w-6 h-6 text-accent" />}
                        {feature.icon === 'target' && <Target className="w-6 h-6 text-accent" />}
                      </div>
                      <div>
                        <h3 className="text-lg text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Projections */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-3xl text-foreground mb-6">5-Year Financial Projection</h2>

                {/* Income vs Expenses Chart */}
                <div className="mb-8">
                  <h3 className="text-lg text-foreground mb-4">Annual Income & Expenses</h3>
                  <div className="h-80 bg-muted/20 rounded-xl p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={propertyData.financials.yearlyProjection}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="year" tick={{ fill: '#6c757d' }} />
                        <YAxis tick={{ fill: '#6c757d' }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#ffffff',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                          }}
                          formatter={(value: number) => `€${value.toLocaleString()}`}
                        />
                        <Legend />
                        <Bar dataKey="income" fill="#0f3460" name="Annual Income" />
                        <Bar dataKey="expenses" fill="#6c757d" name="Annual Expenses" />
                        <Bar dataKey="profit" fill="#d4a574" name="Net Profit" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* ROI Growth Chart */}
                <div>
                  <h3 className="text-lg text-foreground mb-4">Projected ROI Growth</h3>
                  <div className="h-64 bg-muted/20 rounded-xl p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={propertyData.financials.roiProjection}>
                        <defs>
                          <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1b4332" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#1b4332" stopOpacity={0.05} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="year" tick={{ fill: '#6c757d' }} />
                        <YAxis tick={{ fill: '#6c757d' }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#ffffff',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                          }}
                          formatter={(value: number) => `${value}%`}
                        />
                        <Area
                          type="monotone"
                          dataKey="roi"
                          stroke="#1b4332"
                          strokeWidth={3}
                          fill="url(#roiGradient)"
                          name="ROI %"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Calculator & CTA */}
            <div className="lg:col-span-1 space-y-6">
              {/* Sticky Calculator */}
              <div className="sticky top-24 space-y-6">
                {/* Investment Calculator */}
                <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-2 mb-6">
                    <BarChart3 className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl">Investment Calculator</h3>
                  </div>

                  <div className="space-y-6">
                    {/* Investment Amount Slider */}
                    <div>
                      <label className="text-sm text-primary-foreground/80 mb-2 block">
                        Investment Amount
                      </label>
                      <div className="text-3xl mb-4">€{(investmentAmount / 1000).toFixed(0)}K</div>
                      <input
                        type="range"
                        min="100000"
                        max="1000000"
                        step="10000"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        className="w-full h-2 bg-primary-foreground/20 rounded-lg appearance-none cursor-pointer accent-accent"
                      />
                      <div className="flex justify-between text-xs text-primary-foreground/60 mt-2">
                        <span>€100K</span>
                        <span>€1M</span>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-4 pt-4 border-t border-primary-foreground/20">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-primary-foreground/80">
                            Down Payment (20%)
                          </span>
                          <DollarSign className="w-4 h-4 text-accent" />
                        </div>
                        <div className="text-2xl">€{(downPayment / 1000).toFixed(0)}K</div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-primary-foreground/80">
                            Net Monthly Income
                          </span>
                          <TrendingUp className="w-4 h-4 text-accent" />
                        </div>
                        <div className="text-2xl">€{netMonthlyIncome.toFixed(0)}</div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-primary-foreground/80">Annual Return</span>
                          <BarChart3 className="w-4 h-4 text-accent" />
                        </div>
                        <div className="text-2xl">€{yearlyIncome.toFixed(0)}</div>
                      </div>

                      <div className="bg-accent rounded-xl p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-accent-foreground/80">Projected ROI</span>
                          <Percent className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div className="text-3xl text-accent-foreground">
                          {calculatedROI.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl text-foreground mb-2">Interested in This Property?</h3>
                    <p className="text-muted-foreground">
                      Request detailed information and schedule a consultation with our investment
                      team.
                    </p>
                  </div>

                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
                  >
                    Request Information
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-5 h-5 text-accent" />
                      <span>Response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Shield className="w-5 h-5 text-accent" />
                      <span>No obligation consultation</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>Expert investment guidance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Info Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-card rounded-2xl border border-border max-w-lg w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <h3 className="text-3xl text-foreground mb-2">Request Information</h3>
              <p className="text-muted-foreground">
                Fill out the form below and our team will contact you within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4" />
                    <span>Full Name</span>
                  </div>
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" />
                    <span>Email Address</span>
                  </div>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4" />
                    <span>Phone Number</span>
                  </div>
                </label>
                <input
                  type="tel"
                  placeholder="+49 30 1234 5678"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Message / Notes</span>
                  </div>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your investment goals..."
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 bg-muted text-muted-foreground rounded-xl hover:bg-muted/80 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all shadow-lg"
                >
                  Send Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
