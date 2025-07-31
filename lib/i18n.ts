export const SUPPORTED_LOCALES = ['hy', 'ru', 'en', 'fr'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]
export const DEFAULT_LOCALE = 'en'