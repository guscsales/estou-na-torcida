import Link from 'next/link';
import type { Locale } from '../../i18n/config';
import type { Dictionary } from '../../i18n/format';
import { translate } from '../../i18n/format';
import { Button } from '../ui';
import Logo from '../logo';
import LocaleSwitcher from '../locale-switcher';

type Props = {
  dictionary: Dictionary;
  lang: Locale;
};

export default function Header({ dictionary, lang }: Props) {
  return (
    <header className="flex w-full justify-between items-center px-2 sm:px-4 pb-1 pt-4 sm:py-2 relative z-30 gap-3">
      <Link href={`/${lang}`}>
        <Logo alt={translate(dictionary, 'logo.alt')} />
      </Link>
      <div className="flex items-center gap-3 sm:gap-4">
        <LocaleSwitcher dictionary={dictionary} lang={lang} />
        <Button
          as="a"
          href="#go-to-sticker"
          variant="primary"
          className="hidden sm:inline-flex"
        >
          {translate(dictionary, 'header.createImage')}
        </Button>
      </div>
    </header>
  );
}
