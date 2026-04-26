import { Shield, Award, BarChart3, Users, CheckCircle2, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'

const sellingPoints = [
  {
    icon: Shield,
    title: 'Fully Managed Solution',
    description: 'We handle everything from tenant screening to maintenance, so you can enjoy truly passive income',
  },
  {
    icon: BarChart3,
    title: 'Transparent Financials',
    description: 'Real-time access to performance data, monthly reports, and complete financial transparency',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Over 500 objects managed, €150M+ in assets, and 95%+ client satisfaction rate',
  },
  {
    icon: Users,
    title: 'Local German Expertise',
    description: 'Native team with deep knowledge of German real estate law, markets, and best practices',
  },
];

const certifications = [
  { label: 'Licensed Real Estate Broker', value: 'DE 310 646 011' },
  { label: 'Object Management Certified', value: 'Stadt Hof' },
  { label: 'EU Data Protection Compliant', value: 'GDPR' },
]

export function WhyChooseUs() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">{t('whyChooseUs.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            {t('whyChooseUs.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Selling Points */}
          <div className="space-y-6">
            {sellingPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2 text-foreground">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stats & Certifications */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-8">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl text-accent mb-1">500+</div>
                  <div className="text-white/80">Objects Managed</div>
                </div>
                <div>
                  <div className="text-4xl text-accent mb-1">€150M+</div>
                  <div className="text-white/80">Assets Under Management</div>
                </div>
                <div>
                  <div className="text-4xl text-accent mb-1">95%</div>
                  <div className="text-white/80">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl text-accent mb-1">12+</div>
                  <div className="text-white/80">Years in Business</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl mb-6 text-foreground">Certifications & Compliance</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-foreground">{cert.label}</div>
                      <div className="text-sm text-muted-foreground">{cert.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="bg-card rounded-2xl p-12 border border-border shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-2xl text-foreground mb-6 leading-relaxed">
              "Grundwerkinvest made it incredibly easy to invest in German real estate. The entire
              process was transparent, professional, and I've been receiving consistent monthly
              income since day one. Best investment decision I've made."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-foreground">Mr. Heraclius</div>
                <div className="text-sm text-muted-foreground">
                  International Investor, Hof
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
