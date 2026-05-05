import React from 'react';
import Container from '../container';
import { Text } from '../ui';
import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '../../i18n/config';
import type { Dictionary } from '../../i18n/format';
import { translate } from '../../i18n/format';

type Props = {
  dictionary: Dictionary;
  lang: Locale;
};

export default function Footer({ dictionary, lang }: Props) {
  return (
    <footer className="mt-28 pb-6 relative z-30 border-t border-solid border-t-gray-200 pt-3">
      <Container className="flex flex-col gap-2">
        <div
          className="flex items-center justify-center gap-0.5 mt-3"
          aria-hidden
          aria-label={translate(dictionary, 'footer.accessibilityLabel')}
        >
          <Text
            variant="xs"
            aria-hidden
            className="text-center phone:hidden font-bold"
          >
            {translate(dictionary, 'footer.copyrightStart')}{' '}
            <Image
              src="/images/heart.svg"
              alt={translate(dictionary, 'footer.heartAlt')}
              quality={100}
              width={16}
              height={16}
              className="w-4 h-4 inline-block -mt-1"
              aria-hidden
            />{' '}
            {translate(dictionary, 'footer.by')}{' '}
            <a
              href="https://canal.gsales.io"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 hover:text-emerald-400 transition-colors duration-200 ease-in-out"
            >
              Gus
            </a>
          </Text>

          <Text
            variant="xs"
            aria-hidden
            className="text-center sm:hidden font-bold"
          >
            {translate(dictionary, 'footer.copyrightStart')}{' '}
            <Image
              src="/images/heart.svg"
              alt={translate(dictionary, 'footer.heartAlt')}
              quality={100}
              width={16}
              height={16}
              className="w-4 h-4 inline-block -mt-1"
              aria-hidden
            />{' '}
            {translate(dictionary, 'footer.by')}{' '}
            <a
              href="https://canal.gsales.io"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 hover:text-emerald-400 transition-colors duration-200 ease-in-out"
            >
              Gus
            </a>
          </Text>
        </div>
        <Text
          as="div"
          variant="xs"
          aria-hidden
          className="text-center font-bold"
        >
          {translate(dictionary, 'footer.readPrivacy')}{' '}
          <Link
            href={`/${lang}/politica-de-privacidade`}
            className="text-emerald-700 hover:text-emerald-400 transition-colors duration-200 ease-in-out"
          >
            {translate(dictionary, 'footer.privacyPolicy')}
          </Link>{' '}
          - {translate(dictionary, 'footer.feedback')}{' '}
          <a
            href="https://x.com/guscsales"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 hover:text-emerald-400 transition-colors duration-200 ease-in-out"
          >
            {translate(dictionary, 'footer.contact')}
          </a>
        </Text>
      </Container>
    </footer>
  );
}
