import {notFound} from 'next/navigation'
import '@/app/globals.css';
import React from "react";
import {Locale, SUPPORTED_LOCALES} from "@/lib/i18n";
import Header from "@/components/Header";
import {performRequest} from "@/lib/datocms";
import {NAV_ITEMS_QUERY, NavItem} from "@/lib/queries/navItems";
import Footer from "@/components/Footer";

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
    const {locale} = await params;
    const {allNavLinks} = await performRequest(NAV_ITEMS_QUERY, {locale})

    if (!SUPPORTED_LOCALES.includes(locale)) {
        notFound()
    }

    return (
        <html lang={locale} className="dark">
        <body className={`bg-background text-foreground`}>
        <div className="min-h-screen bg-background">
            <Header navItems={allNavLinks as NavItem[]} locale={locale}/>
            <main>{children}</main>
            <Footer/>
        </div>

        </body>
        </html>
    )
}
