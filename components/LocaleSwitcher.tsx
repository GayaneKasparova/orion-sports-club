'use client'

import {usePathname, useRouter} from 'next/navigation'
import {languages, Locale} from '@/lib/i18n'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Globe} from "lucide-react";

const LocaleSwitcher = ({current}: { current: Locale }) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleSwitch = (locale: Locale) => {
        document.cookie = `lang=${locale}; path=/; max-age=31536000` // or use js-cookie
        const newPath = pathname.replace(`/${current}`, `/${locale}`)
        router.push(newPath)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 cursor-pointer">
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline">{current.toUpperCase()}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
                {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} className={`flex items-center space-x-2 cursor-pointer ${lang.code === current ? 'font-bold underline' : ''}`} onClick={() => handleSwitch(lang.code as Locale)}>
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LocaleSwitcher
