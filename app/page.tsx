import HeroSection from './components/hero-section';
import SocialMediaSection from './components/social-media-section';
import { Text } from 'thon-ui';
import PlayerSection from './components/player-section';
import SupportPhraseSection from './components/support-phrase-section';
import ShareSection from './components/share-section';

export default function Home() {
  return (
    <>
      <head>
        <title>
          Apoie a Seleção Brasileira na Copa do Mundo! - Estou Na Torcida
        </title>
        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Apoie a Seleção Brasileira na Copa do Mundo! - Estou Na Torcida"
        />
        <meta
          name="description"
          content="Apoie a Seleção Brasileira nessa Copa do Mundo do Catar criando seu sticker personalizado, apenas 3 passos."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estounatorcida.com.br/" />
        <meta
          property="og:title"
          content="Apoie a Seleção Brasileira na Copa do Mundo! - Estou Na Torcida"
        />
        <meta
          property="og:description"
          content="Apoie a Seleção Brasileira nessa Copa do Mundo do Catar criando seu sticker personalizado, apenas 3 passos."
        />
        <meta
          property="og:image"
          content="https://estounatorcida.com.br/og-image.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://estounatorcida.com.br/" />
        <meta
          property="twitter:title"
          content="Apoie a Seleção Brasileira na Copa do Mundo! - Estou Na Torcida"
        />
        <meta
          property="twitter:description"
          content="Apoie a Seleção Brasileira nessa Copa do Mundo do Catar criando seu sticker personalizado, apenas 3 passos."
        />
        <meta
          property="twitter:image"
          content="https://estounatorcida.com.br/og-image.png"
        />
      </head>
      <HeroSection />
      <Text
        id="go-to-sticker"
        as="div"
        variant="xl sm:3xl"
        className="bg-gray-200 text-gray-700 w-full text-center py-6 sm:py-9 mt-9 sm:mt-12 lg:mt-36 mb-6 sm:mb-14 relative z-30"
      >
        Apenas 3 passos até seu sticker!
      </Text>
      <article className="grid gap-9 sm:gap-24">
        <SocialMediaSection />
        <PlayerSection />
        <SupportPhraseSection />
        <ShareSection />
      </article>
    </>
  );
}
