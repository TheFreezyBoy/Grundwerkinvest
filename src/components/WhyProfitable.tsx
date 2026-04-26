import { TrendingUp, Percent, Users, PieChart } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function WhyProfitable() {
  const t = useTranslations()

  const metrics = [
    {
      icon: Percent,
      label: t('whyProfitable.averageRentalYieldLabel'),
      value: '6.5%',
      description: t('whyProfitable.averageRentalYieldDescription'),
      comparison: t('whyProfitable.averageRentalYieldComparison'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Users,
      label: t('whyProfitable.occupancyRateLabel'),
      value: '95%+',
      description: t('whyProfitable.occupancyRateDescription'),
      comparison: t('whyProfitable.occupancyRateComparison'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: PieChart,
      label: t('whyProfitable.operatingCostsLabel'),
      value: '30%',
      description: t('whyProfitable.operatingCostsDescription'),
      comparison: t('whyProfitable.operatingCostsComparison'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: TrendingUp,
      label: t('whyProfitable.annualROILabel'),
      value: '9-12%',
      description: t('whyProfitable.annualROIDescription'),
      comparison: t('whyProfitable.annualROIComparison'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent-foreground">{t('whyProfitable.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            {t('whyProfitable.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('whyProfitable.subtitle')}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all hover:scale-105"
              >
                <div className={`w-14 h-14 ${metric.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${metric.color}`} />
                </div>
                <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                <div className={`text-4xl mb-3 ${metric.color}`}>{metric.value}</div>
                <div className="text-sm text-muted-foreground mb-3">{metric.description}</div>
                <div className="text-xs text-accent pt-3 border-t border-border">
                  {metric.comparison}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stability Features */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-secondary px-8 py-6">
            <h3 className="text-2xl text-white">{t('whyProfitable.stabilityTitle')}</h3>
            <p className="text-white/90 mt-2">{t('whyProfitable.stabilitySubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
              <h4 className="text-xl mb-3 text-foreground">{t('whyProfitable.stabilityContractsTitle')}</h4>
              <p className="text-muted-foreground mb-4">
                {t('whyProfitable.stabilityContractsDescription')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>{t('whyProfitable.stabilityContractsPoint1')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>{t('whyProfitable.stabilityContractsPoint2')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>{t('whyProfitable.stabilityContractsPoint3')}</span>
                </li>
              </ul>
            </div>

            <div className="p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-secondary rounded-full" />
              </div>
              <h4 className="text-xl mb-3 text-foreground">{t('whyProfitable.stabilityMarketsTitle')}</h4>
              <p className="text-muted-foreground mb-4">
                {t('whyProfitable.stabilityMarketsDescription')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>{t('whyProfitable.stabilityMarketsPoint1')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>{t('whyProfitable.stabilityMarketsPoint2')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>{t('whyProfitable.stabilityMarketsPoint3')}</span>
                </li>
              </ul>
            </div>

            <div className="p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-accent rounded-full" />
              </div>
              <h4 className="text-xl mb-3 text-foreground">{t('whyProfitable.stabilityManagementTitle')}</h4>
              <p className="text-muted-foreground mb-4">
                {t('whyProfitable.stabilityManagementDescription')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>{t('whyProfitable.stabilityManagementPoint1')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>{t('whyProfitable.stabilityManagementPoint2')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>{t('whyProfitable.stabilityManagementPoint3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
