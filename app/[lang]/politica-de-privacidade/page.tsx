import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '../../components/container';
import { Text } from '../../components/ui';
import { hasLocale } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';
import { translate } from '../../i18n/format';

type PageProps = {
  params: Promise<{ lang: string }>;
};

const privacyParagraphs = [
  'privacy.paragraph.1',
  'privacy.paragraph.2',
  'privacy.paragraph.3',
  'privacy.paragraph.4',
  'privacy.paragraph.5',
  'privacy.paragraph.6',
  'privacy.paragraph.7',
];

const commitmentItems = [
  'privacy.commitment.itemA',
  'privacy.commitment.itemB',
  'privacy.commitment.itemC',
];

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dictionary = await getDictionary(lang);

  return {
    title: translate(dictionary, 'privacy.meta.title'),
    alternates: {
      canonical: `/${lang}/politica-de-privacidade`,
      languages: {
        pt: '/pt/politica-de-privacidade',
        en: '/en/politica-de-privacidade',
      },
    },
  };
}

export default async function PrivatePolicy({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dictionary = await getDictionary(lang);

  return (
    <Container className="flex flex-col gap-3 mt-6">
      <Text as="h1" variant="2xl" className="mb-2">
        {translate(dictionary, 'privacy.title')}
      </Text>

      {privacyParagraphs.map((key) => (
        <Text key={key} as="p">
          {translate(dictionary, key)}
        </Text>
      ))}

      <Text as="h2" variant="xl" className="mb-1">
        {translate(dictionary, 'privacy.commitment.title')}
      </Text>
      <Text as="p">{translate(dictionary, 'privacy.commitment.intro')}</Text>
      <ul>
        {commitmentItems.map((key) => (
          <li key={key}>
            <Text as="p">{translate(dictionary, key)}</Text>
          </li>
        ))}
      </ul>

      <Text as="h2" variant="xl" className="mb-1">
        {translate(dictionary, 'privacy.more.title')}
      </Text>
      <Text as="p">{translate(dictionary, 'privacy.more.paragraph')}</Text>
      <Text as="p" className="font-bold">
        {translate(dictionary, 'privacy.effectiveDate')}
      </Text>
    </Container>
  );
}
