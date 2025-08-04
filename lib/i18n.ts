export const SUPPORTED_LOCALES = ['hy', 'ru', 'en', 'fr'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]
export const DEFAULT_LOCALE = 'en'


export const languages = [
    { code: "hy", label: "Հայերեն", flag: "🇦🇲" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
];