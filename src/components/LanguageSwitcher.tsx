'use client'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'

const labels: Record<Locale, string> = { de: 'DE', en: 'EN' }

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter()
  const [, startTransition] = useTransition()

  const switchLocale = (locale: Locale) => {
    document.cookie = `locale=${locale};path=/;max-age=31536000`
    startTransition(() => router.refresh())
  }

  return (
    <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`px-2.5 py-1 text-xs transition-colors ${
            currentLocale === locale
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          {labels[locale]}
        </button>
      ))}
    </div>
  )
}
