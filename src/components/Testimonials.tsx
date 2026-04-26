import { Star, Quote, TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Testimonial {
  name: string;
  role: string;
  country: string;
  testimonial: string;
  investment: string;
  monthlyIncome: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Tech Executive',
    country: 'Singapore',
    testimonial:
      'As an international investor, I was initially hesitant about investing in foreign real estate. Grundwerkinvest made the entire process seamless. The transparency, professional management, and consistent monthly income have exceeded my expectations.',
    investment: '€380,000',
    monthlyIncome: '€2,850',
    rating: 5,
  },
  {
    name: 'David Martinez',
    role: 'Entrepreneur',
    country: 'Spain',
    testimonial:
      "I've invested in several real estate markets, but the German market through Grundwerkinvest has been the most stable and profitable. The team's local expertise and hands-off management model is exactly what I needed.",
    investment: '€520,000',
    monthlyIncome: '€4,100',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'Investment Banker',
    country: 'United Kingdom',
    testimonial:
      'The financial modeling and projections were accurate, which is rare in real estate investments. Three years in, my ROI is tracking exactly as promised. This is a properly run business, not just property sales.',
    investment: '€295,000',
    monthlyIncome: '€2,200',
    rating: 5,
  },
]

const caseStudy = {
  investor: 'James Wilson',
  location: 'United States',
  timeline: '2021 - Present',
  investment: '€750,000',
  properties: 2,
  beforeIncome: '€0/month',
  afterIncome: '€5,400/month',
  appreciation: '+€125,000',
  roi: '43.2%',
};

export function Testimonials() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent-foreground">{t('testimonials.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/20 mb-4" />

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.testimonial}"</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Investment</div>
                  <div className="text-lg text-foreground">{testimonial.investment}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Monthly Income</div>
                  <div className="text-lg text-accent">{testimonial.monthlyIncome}</div>
                </div>
              </div>

              {/* Author */}
              <div>
                <div className="text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.country}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Story */}
            <div className="p-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm text-white">Featured Case Study</span>
              </div>

              <h3 className="text-3xl text-white mb-4">From Zero to €5,400 Monthly Income</h3>

              <p className="text-white/90 mb-6 leading-relaxed">
                {caseStudy.investor}, a business owner from {caseStudy.location}, wanted to
                diversify his investment portfolio with stable European real estate. He invested{' '}
                {caseStudy.investment} in {caseStudy.properties} properties through Grundwerkinvest
                in 2021.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <div className="text-white">
                      Properties fully managed by Grundwerkinvest team
                    </div>
                    <div className="text-white/70 text-sm">
                      Zero operational involvement required
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <div className="text-white">Consistent monthly income since month 1</div>
                    <div className="text-white/70 text-sm">
                      Direct deposits, never missed a payment
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <div className="text-white">Object values increased significantly</div>
                    <div className="text-white/70 text-sm">
                      Benefiting from strong German market growth
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-white/60 text-sm italic">"{caseStudy.timeline}"</div>
            </div>

            {/* Right Side - Before/After */}
            <div className="bg-white/10 backdrop-blur-sm p-12 flex flex-col justify-center border-l border-white/20">
              <div className="space-y-8">
                {/* Before */}
                <div>
                  <div className="text-accent text-sm mb-3 uppercase tracking-wider">
                    Before Grundwerkinvest
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                    <div className="text-4xl text-white mb-2">{caseStudy.beforeIncome}</div>
                    <div className="text-white/70">Passive real estate income</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-white/20" />
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <div className="flex-1 h-px bg-white/20" />
                </div>

                {/* After */}
                <div>
                  <div className="text-accent text-sm mb-3 uppercase tracking-wider">
                    After Grundwerkinvest
                  </div>
                  <div className="bg-accent/20 rounded-xl p-6 border border-accent/30">
                    <div className="text-5xl text-white mb-2">{caseStudy.afterIncome}</div>
                    <div className="text-white/90">Consistent monthly income</div>
                  </div>
                </div>

                {/* Total Returns */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                  <div>
                    <div className="text-white/70 text-sm mb-1">Object Appreciation</div>
                    <div className="text-2xl text-accent">{caseStudy.appreciation}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-sm mb-1">Total ROI</div>
                    <div className="text-2xl text-accent">{caseStudy.roi}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
