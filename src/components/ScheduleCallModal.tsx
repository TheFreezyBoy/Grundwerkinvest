'use client'
import { useEffect } from 'react'
import { X, Phone, Mail, User, MessageSquare, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useScheduleCall } from '@/context/ScheduleCallContext'

export function ScheduleCallModal() {
  const t = useTranslations('scheduleCall')
  const { isOpen, propertyTitle, close } = useScheduleCall()

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(t('successMessage'))
    close()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="bg-card rounded-2xl border border-border w-full max-w-lg shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h3 className="text-2xl text-foreground mb-1">
              {propertyTitle ? t('titleWithProperty') : t('title')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {propertyTitle
                ? t('subtitleWithProperty', { property: propertyTitle })
                : t('subtitle')}
            </p>
          </div>
          <button
            onClick={close}
            className="ml-4 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <User className="w-4 h-4" />
                {t('fullName')}
              </label>
              <input
                type="text"
                placeholder="Max Mustermann"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Mail className="w-4 h-4" />
                {t('email')}
              </label>
              <input
                type="email"
                placeholder="max@beispiel.de"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Phone className="w-4 h-4" />
                {t('phone')}
              </label>
              <input
                type="tel"
                placeholder="+49 30 1234 5678"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MessageSquare className="w-4 h-4" />
                {t('message')}
              </label>
              <textarea
                rows={3}
                placeholder={t('messagePlaceholder')}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
              />
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all shadow-lg"
              >
                {t('send')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={close}
                className="w-full px-6 py-3 bg-muted text-muted-foreground rounded-xl hover:bg-muted/80 transition-colors"
              >
                {t('cancel')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
