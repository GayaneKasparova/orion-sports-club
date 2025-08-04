import {notFound} from 'next/navigation'
import '@/app/globals.css';
import React from "react";
import {Locale, SUPPORTED_LOCALES} from "@/lib/i18n";
import Header from "@/components/Header";
import {performRequest} from "@/lib/datocms";
import {LAYOUT_QUERY, NavItem} from "@/lib/queries/layout";
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
    const {allNavLinks, global} = await performRequest(LAYOUT_QUERY, {locale})
    const logoUrl = global!.logo!.url;
    if (!SUPPORTED_LOCALES.includes(locale)) {
        notFound()
    }

    return (
        <html lang={locale} className="dark">
        <body className={`bg-background text-foreground`}>
        <div className="min-h-screen bg-background">
            <Header navItems={allNavLinks as NavItem[]} logo={logoUrl} locale={locale}/>
            <main>{children}</main>
            <Footer/>
        </div>

        </body>
        </html>
    )
}
