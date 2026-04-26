import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – Grundwerkinvest',
}

export default async function ImpressumPage() {
  const t = await getTranslations('impressum')

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary to-secondary py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl text-white">{t('title')}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl border border-border p-8 space-y-8 text-foreground">
            <div>
              <h2 className="text-xl mb-3">GWI – GRUND WERK INVEST</h2>
              <p className="text-muted-foreground leading-relaxed">
                Alexander Unrein (Einzelunternehmen)<br />
                Walter-Hümmer-Str. 10<br />
                95152 Selbitz
              </p>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Steuernummer: 223/282/40525 FA Hof</p>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{' '}
                <span className="text-foreground">DE 310 646 011</span>
              </p>
              <p>Aufsichtsbehörde gemäß § 34 c GewO: Stadt Hof</p>
            </div>

            <div>
              <h3 className="text-lg mb-2">Allgemeine Geschäftsbedingungen</h3>
            </div>

            <div>
              <h3 className="text-lg mb-3">Kontakt</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>T: +49 9280 7089 839</li>
                <li>M: +49 173 419 43 04</li>
                <li>
                  E-Mail:{' '}
                  <a
                    href="mailto:info@grundwerkinvest.de"
                    className="text-accent hover:underline"
                  >
                    info@grundwerkinvest.de
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-3">Redaktionell verantwortlich</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>Alexander Unrein</li>
                <li>T: +49 9280 7089 839</li>
                <li>M: +49 173 419 43 04</li>
                <li>
                  E-Mail:{' '}
                  <a
                    href="mailto:info@grundwerkinvest.de"
                    className="text-accent hover:underline"
                  >
                    info@grundwerkinvest.de
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
