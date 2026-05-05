import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroSection from '../components/hero-section';
import PlayerSection from '../components/player-section';
import ShareSection from '../components/share-section';
import SocialMediaSection from '../components/social-media-section';
import SupportPhraseSection from '../components/support-phrase-section';
import { Text } from '../components/ui';
import { hasLocale } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';
import { translate } from '../i18n/format';

const siteUrl = 'https://estounatorcida.com.br';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dictionary = await getDictionary(lang);
  const title = translate(dictionary, 'home.meta.title');
  const description = translate(dictionary, 'home.meta.description');

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        pt: '/pt',
        en: '/en',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/${lang}`,
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dictionary = await getDictionary(lang);

  return (
    <>
      <HeroSection dictionary={dictionary} />
      <Text
        id="go-to-sticker"
        as="div"
        variant="xl sm:3xl"
        className="bg-gray-200 text-gray-700 w-full text-center py-6 sm:py-9 mt-9 sm:mt-12 lg:mt-36 mb-6 sm:mb-14 relative z-30 font-bold"
      >
        {translate(dictionary, 'home.steps')}
      </Text>
      <article className="grid gap-9 sm:gap-24">
        <SocialMediaSection dictionary={dictionary} />
        <PlayerSection dictionary={dictionary} />
        <SupportPhraseSection dictionary={dictionary} />
        <ShareSection dictionary={dictionary} lang={lang} />
      </article>
    </>
  );
}
