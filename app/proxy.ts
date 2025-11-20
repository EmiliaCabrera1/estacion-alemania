import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { LOCALES } from "@/constants/locales"

const COOKIE_NAME = "NEXT_LOCALE"
const DEFAULT_LOCALE = "es"

function pickLocaleFromAcceptHeader(acceptLang?: string) {
    if (!acceptLang) return undefined
    for (const part of acceptLang.split(",")) {
        const code = part.split(";")[0].trim().slice(0, 2)
        if (LOCALES.includes(code)) return code
    }
    return undefined
}

export function proxy(req: NextRequest) {
    const url = req.nextUrl.clone()
    const pathname = url.pathname

    const pathHasLocale = LOCALES.some(
        (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
    )
    if (pathHasLocale) return NextResponse.next()

    const cookieLocale = req.cookies.get(COOKIE_NAME)?.value
    if (cookieLocale && LOCALES.includes(cookieLocale)) {
        url.pathname = `/${cookieLocale}${pathname}`
        return NextResponse.redirect(url)
    }

    const headerLocale = pickLocaleFromAcceptHeader(
        req.headers.get("accept-language") ?? undefined
    )
    const localeToUse = headerLocale ?? DEFAULT_LOCALE
    url.pathname = `/${localeToUse}${pathname}`
    return NextResponse.redirect(url)
}
