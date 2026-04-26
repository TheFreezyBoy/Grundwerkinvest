'use client'
import { useState, useTransition, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'
import { ChevronDown } from 'lucide-react'

const labels: Record<Locale, { name: string; flag: string }> = {
  de: { name: 'Deutsch', flag: '🇩🇪' },
  en: { name: 'English', flag: '🇬🇧' },
}

export function LanguageDropdown({ currentLocale }: { currentLocale: Locale }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [, startTransition] = useTransition()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const switchLocale = (locale: Locale) => {
    document.cookie = `locale=${locale};path=/;max-age=31536000`
    setOpen(false)
    startTransition(() => router.refresh())
  }

  const current = labels[currentLocale]

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 hover:bg-white hover:text-foreground transition-colors text-sm text-white"
      >
        <span className="text-lg leading-none">{current.flag}</span>
        <span>{current.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 bottom-full mb-1 w-40 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {locales.map((locale) => {
            const { name, flag } = labels[locale]
            return (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                  locale === currentLocale
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <span className="text-lg leading-none">{flag}</span>
                <span>{name}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
