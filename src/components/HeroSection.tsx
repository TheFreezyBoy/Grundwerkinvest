import { ArrowRight, TrendingUp, Shield, Check } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { useTranslations } from 'next-intl'

export function HeroSection() {
  const t = useTranslations()

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1683041134049-28843fae8c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZSUyMGdlcm1hbnklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwMTM0MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern German cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm text-white">{t('hero.badge')}</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-6 leading-tight max-w-2xl">
              {t('hero.title1')}
              <span className="block text-accent mt-2">{t('hero.title2')}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-white">{t('hero.benefit1Title')}</div>
                  <div className="text-sm text-white/70">{t('hero.benefit1Desc')}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-white">{t('hero.benefit2Title')}</div>
                  <div className="text-sm text-white/70">{t('hero.benefit2Desc')}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-white">{t('hero.benefit3Title')}</div>
                  <div className="text-sm text-white/70">{t('hero.benefit3Desc')}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-white">{t('hero.benefit4Title')}</div>
                  <div className="text-sm text-white/70">{t('hero.benefit4Desc')}</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="properties"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
              >
                {t('hero.ctaViewBusinesses')}
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all whitespace-nowrap"
              >
                <TrendingUp className="w-5 h-5 flex-shrink-0" />
                {t('hero.ctaCalculate')}
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-sm text-accent mb-6 tracking-wide uppercase">
                {t('hero.quickFacts')}
              </div>

              <div className="space-y-6">
                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl text-white mb-2">€250K+</div>
                  <div className="text-white/80">{t('hero.avgInvestment')}</div>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl text-white mb-2">95%+</div>
                  <div className="text-white/80">{t('hero.avgOccupancy')}</div>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl text-white mb-2">€2.5K</div>
                  <div className="text-white/80">{t('hero.avgMonthlyIncome')}</div>
                </div>

                <div>
                  <div className="text-5xl text-white mb-2">10 Years</div>
                  <div className="text-white/80">{t('hero.avgROITimeline')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
