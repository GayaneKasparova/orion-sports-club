// app/[locale]/layout.tsx

import {notFound} from 'next/navigation'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import React from "react";
import {Locale, SUPPORTED_LOCALES} from "../../lib/i18n";

export async function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale) => ({locale}))
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode
    params: { locale: Locale }
}) {
    if (!SUPPORTED_LOCALES.includes((await params).locale)) {
        notFound()
    }

    return (
        <html lang={(await params).locale}>
        <body>
        <header>
            <LocaleSwitcher current={(await params).locale}/>
        </header>
        <main>{children}</main>
        </body>
        </html>
    )
}
