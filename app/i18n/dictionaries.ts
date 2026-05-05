import 'server-only';

import { hasLocale, type Locale } from './config';
import type { Dictionary } from './format';

const dictionaries = {
  pt: () => import('./dictionaries/pt.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export { hasLocale };

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
