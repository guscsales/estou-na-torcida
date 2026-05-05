'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '../../i18n/config';
import type { Dictionary } from '../../i18n/format';
import { translate } from '../../i18n/format';

type Props = {
  dictionary: Dictionary;
  lang: Locale;
};

export default function LocaleSwitcher({ dictionary, lang }: Props) {
  const pathname = usePathname() ?? '';
  const targetLocale: Locale = lang === 'pt' ? 'en' : 'pt';
  const suffix = pathname.replace(/^\/(?:pt|en)(?=\/|$)/, '') || '/';
  const href =
    suffix === '/' ? `/${targetLocale}` : `/${targetLocale}${suffix}`;

  return (
    <Link
      href={href}
      lang={targetLocale}
      className="text-sm font-bold text-emerald-700 hover:text-emerald-500 underline-offset-4 hover:underline transition-colors duration-200 ease-in-out whitespace-nowrap"
      aria-label={translate(
        dictionary,
        targetLocale === 'en'
          ? 'header.switchToEnglish'
          : 'header.switchToPortuguese'
      )}
    >
      {translate(
        dictionary,
        targetLocale === 'en'
          ? 'header.languageEnglish'
          : 'header.languagePortuguese'
      )}
    </Link>
  );
}
