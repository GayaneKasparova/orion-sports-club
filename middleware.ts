import {NextRequest, NextResponse} from 'next/server'
import {DEFAULT_LOCALE, Locale, SUPPORTED_LOCALES} from './lib/i18n'

function getBrowserLocale(request: NextRequest): string {
    const acceptLang = request.headers.get('accept-language') || ''
    const preferred = acceptLang.split(',')[0].split('-')[0]
    return SUPPORTED_LOCALES.includes(preferred as Locale) ? preferred : DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl

    const pathnameHasLocale = SUPPORTED_LOCALES.some((locale) =>
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    )

    if (pathnameHasLocale) return NextResponse.next()

    const cookieLocale = request.cookies.get('lang')?.value as Locale | undefined
    const locale = cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)
        ? cookieLocale
        : getBrowserLocale(request)

    request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)'],
}
