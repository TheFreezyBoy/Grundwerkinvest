import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from './src/i18n/config'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Payload admin, API, static files
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    /\.\w+$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Check if pathname starts with /en or /de
  const localeMatch = pathname.match(/^\/(en|de)(\/|$)/)
  
  if (localeMatch) {
    const locale = localeMatch[1]
    // Remove locale prefix and redirect
    const newPathname = pathname.replace(/^\/(en|de)/, '') || '/'
    const url = new URL(newPathname, request.url)
    url.search = request.nextUrl.search
    const response = NextResponse.redirect(url)
    response.cookies.set('locale', locale, { path: '/', maxAge: 31536000 })
    return response
  }

  // No locale prefix - use default
  const response = NextResponse.next()
  const currentCookie = request.cookies.get('locale')?.value
  if (!currentCookie || !locales.includes(currentCookie as any)) {
    response.cookies.set('locale', defaultLocale, { path: '/', maxAge: 31536000 })
  }
  return response
}

export const config = {
  matcher: ['/((?!_next|api|admin|favicon).*)'],
}
