'use client'

import {usePathname, useRouter} from 'next/navigation'
import {Locale, SUPPORTED_LOCALES} from '../lib/i18n'

const LocaleSwitcher = ({current}: { current: Locale }) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleSwitch = (locale: Locale) => {
        document.cookie = `lang=${locale}; path=/; max-age=31536000` // or use js-cookie
        const newPath = pathname.replace(`/${current}`, `/${locale}`)
        router.push(newPath)
    }

    return (
        <div className="flex gap-2">
            {SUPPORTED_LOCALES.map((l) => (
                <button
                    key={l}
                    onClick={() => handleSwitch(l)}
                    className={l === current ? 'font-bold underline' : ''}
                >
                    {l.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

export default LocaleSwitcher
