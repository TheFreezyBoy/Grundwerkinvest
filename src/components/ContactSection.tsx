import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { useTranslations } from 'next-intl'

export function ContactSection() {
  const t = useTranslations()

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">{t('contact.badge')}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-12">{t('contact.subtitle')}</p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t('contact.email')}</div>
                  <a
                    href="mailto:invest@grundwerkinvest.de"
                    className="text-xl font-bold text-foreground hover:text-accent transition-colors"
                  >
                    invest@grundwerkinvest.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t('contact.phone')}</div>
                  <a
                    href="tel:+4992807089839"
                    className="text-xl font-bold text-foreground hover:text-accent transition-colors"
                  >
                    +49 9280 7089 839
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t('contact.office')}</div>
                  <div className="text-xl font-bold text-foreground">
                    Walter-Hümmer-Str. 10, 95152 Selbitz
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Business Hours</div>
                  <div className="text-xl font-bold text-foreground">
                    Mon - Fri: 9:00 - 18:00 CET
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form & What to Expect */}
          <div className="space-y-8">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
              <ContactForm />
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-xl mb-6">{t('contact.expectTitle')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <div className="text-white">{t('contact.expectConsultationTitle')}</div>
                    <div className="text-white/70 text-sm">
                      {t('contact.expectConsultationDescription')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <div className="text-white">{t('contact.expectReportTitle')}</div>
                    <div className="text-white/70 text-sm">
                      {t('contact.expectReportDescription')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <div className="text-white">{t('contact.expectPlanTitle')}</div>
                    <div className="text-white/70 text-sm">
                      {t('contact.expectPlanDescription')}
                    </div>
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
