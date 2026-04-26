'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useScheduleCall } from '@/context/ScheduleCallContext'
import type { Locale } from '@/i18n/config'
import { useRouter } from 'next/navigation'

const labels: Record<Locale, { name: string; flag: string }> = {
  de: { name: 'Deutsch', flag: '🇩🇪' },
  en: { name: 'English', flag: '🇬🇧' },
}

export function MobileMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('nav')
  const router = useRouter()
  const { open: openScheduleCall } = useScheduleCall()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const switchLocale = (newLocale: Locale) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`
    setOpen(false)
    router.refresh()
  }

  const menu = open ? (
    <div className="fixed inset-0 z-[9999]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-background shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-lg font-semibold text-foreground">{t('menu')}</span>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button
            onClick={() => {
              setOpen(false)
              openScheduleCall()
            }}
            className="w-full text-left px-4 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium"
          >
            {t('scheduleCall')}
          </button>
          <Link
            href="/properties"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
          >
            {t('allObjects')}
          </Link>
          <Link
            href="/impressum"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
          >
            {t('impressum')}
          </Link>
        </nav>

        {/* Language selector */}
        <div className="p-4 border-t border-border">
          <div className="text-xs font-medium text-muted-foreground mb-3">{t('language')}</div>
          <div className="space-y-2">
            {(['de', 'en'] as Locale[]).map((loc) => {
              const { name, flag } = labels[loc]
              return (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    loc === locale
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  <span className="text-xl">{flag}</span>
                  <span className="font-medium">{name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        aria-label={t('menu')}
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      {mounted && createPortal(menu, document.body)}
    </>
  )
}
