import { TrendingUp, Shield, Users, Building2, Euro, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'

const reasons = [
  {
    icon: TrendingUp,
    title: 'Strong & Stable Economy',
    description: "Europe's largest economy with consistent GDP growth and low unemployment",
    stats: ['GDP: €4.1 trillion', 'Unemployment: 3.1%', 'AAA credit rating'],
  },
  {
    icon: Users,
    title: 'High Housing Demand',
    description: 'Growing population and urbanization create constant demand for quality rentals',
    stats: ['Urban growth: +2.5%/year', 'Rental demand: High', 'Vacancy rate: <2%'],
  },
  {
    icon: Shield,
    title: 'Legal Protection for Owners',
    description: 'Well-established object laws strongly favor and protect landlords',
    stats: ['Clear regulations', 'Enforced contracts', 'Tenant screening rights'],
  },
  {
    icon: Building2,
    title: 'Low Market Volatility',
    description: 'Real estate market shows steady, predictable growth without extreme fluctuations',
    stats: ['+4% avg appreciation', 'Recession resilient', 'Long-term stability'],
  },
  {
    icon: Euro,
    title: 'Strong Currency',
    description: 'Euro provides stability and international investor confidence',
    stats: ['Global reserve currency', 'Inflation protected', 'Easy repatriation'],
  },
  {
    icon: Award,
    title: 'World-Class Infrastructure',
    description: 'Excellent transport, education, and healthcare attract quality tenants',
    stats: ['Top-tier cities', 'Modern amenities', 'High quality of life'],
  },
];

export function WhyGermany() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary">{t('whyGermany.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            {t('whyGermany.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('whyGermany.subtitle')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl mb-3 text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground mb-6">{reason.description}</p>
                <div className="space-y-2">
                  {reason.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-white mb-4">
              Backed by Statistics & Trust
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Germany ranks consistently among the top countries for real estate investment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl text-accent mb-2">#1</div>
              <div className="text-white/90">EU Economy</div>
              <div className="text-white/60 text-sm mt-1">By GDP size</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-accent mb-2">AAA</div>
              <div className="text-white/90">Credit Rating</div>
              <div className="text-white/60 text-sm mt-1">Highest possible</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-accent mb-2">42%</div>
              <div className="text-white/90">Object Growth</div>
              <div className="text-white/60 text-sm mt-1">Last 10 years</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-accent mb-2">83M</div>
              <div className="text-white/90">Population</div>
              <div className="text-white/60 text-sm mt-1">Stable market</div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-white">EU Regulated</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-white">Licensed Operator</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Building2 className="w-5 h-5 text-accent" />
              <span className="text-white">Object Registry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
