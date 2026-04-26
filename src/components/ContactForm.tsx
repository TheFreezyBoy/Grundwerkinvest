'use client'
import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ContactForm() {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investment: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', investment: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-2xl text-foreground mb-3">{t('contact.successTitle')}</h3>
        <p className="text-muted-foreground max-w-md mx-auto">{t('contact.successMessage')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-foreground">
            {t('contact.fullName')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-input-background"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-foreground">
            {t('contact.email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-input-background"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block mb-2 text-foreground">
            {t('contact.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-input-background"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="investment" className="block mb-2 text-foreground">
            {t('contact.investmentRange')} *
          </label>
          <select
            id="investment"
            name="investment"
            value={formData.investment}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-input-background"
          >
            <option value="">{t('contact.formInvestmentPlaceholder')}</option>
            <option value="100-300">{t('contact.formInvestment100to300')}</option>
            <option value="300-500">{t('contact.formInvestment300to500')}</option>
            <option value="500-1000">{t('contact.formInvestment500to1000')}</option>
            <option value="1000+">{t('contact.formInvestmentOver1000')}</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-foreground">
          {t('contact.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-input-background resize-none"
          placeholder={t('scheduleCall.messagePlaceholder')}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg"
      >
        <Send className="w-5 h-5" />
        {t('contact.submit')}
      </button>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        {t('contact.formConfidential')}
      </p>
    </form>
  )
}
