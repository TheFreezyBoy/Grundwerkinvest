import { Phone, Mail, MapPin, Calendar } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ContactForm } from './ContactForm'

export function ContactSection() {
  const t = useTranslations()

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">{t('contact.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl mb-6 text-foreground">{t('contact.infoTitle')}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Phone</div>
                    <div className="text-foreground">+49 30 1234 5678</div>
                    <div className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM CET</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <div className="text-foreground">invest@grundwerkinvest.de</div>
                    <div className="text-sm text-muted-foreground">Response within 24h</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Office</div>
                    <div className="text-foreground">Kurfürstendamm 182</div>
                    <div className="text-foreground">10707 Berlin, Germany</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-xl mb-6">What to Expect</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <div className="text-white">Free 30-Minute Consultation</div>
                    <div className="text-white/70 text-sm">Discuss your goals and explore options</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <div className="text-white">Personalized Object Selection</div>
                    <div className="text-white/70 text-sm">
                      Matched to your budget and objectives
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <div className="text-white">Complete Financial Analysis</div>
                    <div className="text-white/70 text-sm">
                      Detailed ROI projections and documentation
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <div className="text-white">No Obligation</div>
                    <div className="text-white/70 text-sm">Free consultation with zero pressure</div>
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
