import { Building2, Shield } from 'lucide-react'
import Link from 'next/link'
import '@/styles/index.css'
import { getTranslations, getMessages, getLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { LanguageDropdown } from '@/components/LanguageDropdown'
import { ScheduleCallProvider } from '@/context/ScheduleCallContext'
import { ScheduleCallModal } from '@/components/ScheduleCallModal'
import { NavScheduleCallButton } from '@/components/NavScheduleCallButton'
import { MobileMenu } from '@/components/MobileMenu'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function generateMetadata(): Promise<Metadata> {
  const icons: Metadata['icons'] = {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  }

  try {
    const locale = (await getLocale()) as Locale
    const payload = await getPayload({ config })
    const seo = await payload.findGlobal({ slug: 'seo' }).catch(() => null)
    const t = await getTranslations('seo')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const seoAny = seo as any
    const title = seoAny?.[`title_${locale}`] || t('defaultTitle')
    const description = seoAny?.[`description_${locale}`] || t('defaultDescription')
    const keywords = seoAny?.[`keywords_${locale}`]
    const ogImage = seoAny?.ogImage?.url
    const siteName = seoAny?.siteName || 'Grundwerkinvest'
    const twitterHandle = seoAny?.twitterHandle
    const robotsIndex = seoAny?.robotsIndex !== false
    const robotsFollow = seoAny?.robotsFollow !== false

    const robots = `${robotsIndex ? 'index' : 'noindex'}, ${robotsFollow ? 'follow' : 'nofollow'}`

    return {
      title,
      description,
      keywords: keywords?.split(',').map((k: string) => k.trim()),
      robots,
      icons,
      openGraph: {
        title,
        description,
        siteName,
        images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
        locale: locale === 'de' ? 'de_DE' : 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ogImage ? [ogImage] : undefined,
        site: twitterHandle,
      },
    }
  } catch {
    return {
      icons,
    }
  }
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const locale = (await getLocale()) as Locale
  const t = await getTranslations()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Grundwerkinvest',
              description: t('footer.tagline'),
              url: 'https://grundwerkinvest.de',
              telephone: '+49-9280-7089839',
              email: 'info@grundwerkinvest.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Walter-Hümmer-Str. 10',
                addressLocality: 'Selbitz',
                postalCode: '95152',
                addressCountry: 'DE',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Germany',
              },
            }),
          }}
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
        <ScheduleCallProvider>
          <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-9 h-9 flex items-center justify-center">
                      <img src="/logo.svg" alt="Grundwerkinvest" className="w-9 h-9" />
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-primary">
                      Grundwerkinvest
                    </span>
                  </Link>

                  {/* Desktop nav */}
                  <div className="hidden md:flex items-center gap-4">
                    <Link
                      href="/properties"
                      className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {t('nav.allObjects')}
                    </Link>
                    <NavScheduleCallButton label={t('nav.scheduleCall')} />
                  </div>

                  {/* Mobile nav */}
                  <div className="flex md:hidden items-center gap-2">
                    <MobileMenu locale={locale} />
                  </div>
                </div>
              </div>
            </nav>

            <main className="pt-16">{children}</main>

            {/* Footer */}
            <footer className="bg-primary text-primary-foreground">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img src="/logo.svg" alt="Grundwerkinvest" className="w-10 h-10" />
                      </div>
                      <div className="text-xl tracking-tight">Grundwerkinvest</div>
                    </div>
                    <p className="text-primary-foreground/80 max-w-md mb-6">
                      {t('footer.tagline')}
                    </p>
                    <div className="flex items-center gap-4">
                      <Shield className="w-5 h-5 text-accent" />
                      <span className="text-sm text-primary-foreground/80">{t('footer.licensed')}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4">{t('footer.quickLinks')}</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/properties"
                          className="text-primary-foreground/80 hover:text-accent transition-colors"
                        >
                          {t('footer.allProperties')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/impressum"
                          className="text-primary-foreground/80 hover:text-accent transition-colors"
                        >
                          {t('footer.impressum')}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4">{t('footer.contact')}</h4>
                    <ul className="space-y-2 text-primary-foreground/80">
                      <li>Alexander Unrein</li>
                      <li>Selbitz, Germany</li>
                      <li>
                        <a href="tel:+4992807089839" className="hover:text-accent transition-colors">
                          +49 9280 7089 839
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@grundwerkinvest.de" className="hover:text-accent transition-colors">
                          info@grundwerkinvest.de
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-primary-foreground/60 text-center sm:text-left">{t('footer.rights')}</p>
                  <LanguageDropdown currentLocale={locale} />
                </div>
              </div>
            </footer>
          </div>

          {/* Global modal - rendered once at root */}
          <ScheduleCallModal />
        </ScheduleCallProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
