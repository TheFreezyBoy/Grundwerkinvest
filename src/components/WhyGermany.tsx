import { TrendingUp, Shield, Users, Building2, Euro, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function WhyGermany() {
  const t = useTranslations()

  const reasons = [
    {
      icon: TrendingUp,
      title: t('whyGermany.reasonsEconomyTitle'),
      description: t('whyGermany.reasonsEconomyDescription'),
      stats: [
        t('whyGermany.reasonsEconomyStats0'),
        t('whyGermany.reasonsEconomyStats1'),
        t('whyGermany.reasonsEconomyStats2'),
      ],
    },
    {
      icon: Users,
      title: t('whyGermany.reasonsDemandTitle'),
      description: t('whyGermany.reasonsDemandDescription'),
      stats: [
        t('whyGermany.reasonsDemandStats0'),
        t('whyGermany.reasonsDemandStats1'),
        t('whyGermany.reasonsDemandStats2'),
      ],
    },
    {
      icon: Shield,
      title: t('whyGermany.reasonsProtectionTitle'),
      description: t('whyGermany.reasonsProtectionDescription'),
      stats: [
        t('whyGermany.reasonsProtectionStats0'),
        t('whyGermany.reasonsProtectionStats1'),
        t('whyGermany.reasonsProtectionStats2'),
      ],
    },
    {
      icon: Building2,
      title: t('whyGermany.reasonsVolatilityTitle'),
      description: t('whyGermany.reasonsVolatilityDescription'),
      stats: [
        t('whyGermany.reasonsVolatilityStats0'),
        t('whyGermany.reasonsVolatilityStats1'),
        t('whyGermany.reasonsVolatilityStats2'),
      ],
    },
    {
      icon: Euro,
      title: t('whyGermany.reasonsCurrencyTitle'),
      description: t('whyGermany.reasonsCurrencyDescription'),
      stats: [
        t('whyGermany.reasonsCurrencyStats0'),
        t('whyGermany.reasonsCurrencyStats1'),
        t('whyGermany.reasonsCurrencyStats2'),
      ],
    },
    {
      icon: Award,
      title: t('whyGermany.reasonsInfrastructureTitle'),
      description: t('whyGermany.reasonsInfrastructureDescription'),
      stats: [
        t('whyGermany.reasonsInfrastructureStats0'),
        t('whyGermany.reasonsInfrastructureStats1'),
        t('whyGermany.reasonsInfrastructureStats2'),
      ],
    },
  ];

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
              {t('whyGermany.statsTitle')}
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              {t('whyGermany.statsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl text-accent mb-2">#1</div>
              <div className="text-white/90">{t('whyGermany.statsEconomyLabel')}</div>
              <div className="text-white/60 text-sm mt-1">{t('whyGermany.statsEconomySub')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-accent mb-2">AAA</div>
              <div className="text-white/90">{t('whyGermany.statsRatingLabel')}</div>
              <div className="text-white/60 text-sm mt-1">{t('whyGermany.statsRatingSub')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-accent mb-2">42%</div>
              <div className="text-white/90">{t('whyGermany.statsGrowthLabel')}</div>
              <div className="text-white/60 text-sm mt-1">{t('whyGermany.statsGrowthSub')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-accent mb-2">83M</div>
              <div className="text-white/90">{t('whyGermany.statsPopulationLabel')}</div>
              <div className="text-white/60 text-sm mt-1">{t('whyGermany.statsPopulationSub')}</div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-white">{t('whyGermany.trustEuRegulated')}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-white">{t('whyGermany.trustLicensed')}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Building2 className="w-5 h-5 text-accent" />
              <span className="text-white">{t('whyGermany.trustRegistry')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
