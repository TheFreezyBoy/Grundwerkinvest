import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'
import { defaultLocale, locales, type Locale } from './config'
import en from '../../translations/en.json'
import de from '../../translations/de.json'

const translationMap: Record<Locale, Record<string, string>> = { en, de }

function unflatten(flat: Record<string, string>): Record<string, Record<string, string>> {
  const out: Record<string, Record<string, string>> = {}
  for (const [key, value] of Object.entries(flat)) {
    const dot = key.indexOf('.')
    if (dot !== -1) {
      const ns = key.slice(0, dot)
      const rest = key.slice(dot + 1)
      out[ns] = out[ns] ?? {}
      out[ns][rest] = value
    }
  }
  return out
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('locale')?.value
  const locale: Locale =
    localeCookie && locales.includes(localeCookie as Locale)
      ? (localeCookie as Locale)
      : defaultLocale

  return { locale, messages: unflatten(translationMap[locale]) }
})
