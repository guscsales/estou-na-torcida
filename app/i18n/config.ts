export const locales = ['pt', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export function hasLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
