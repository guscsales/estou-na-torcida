import HeroSection from './components/hero-section';
import SocialMediaSection from './components/social-media-section';
import { Text } from 'thon-ui';
import PlayerSection from './components/player-section';
import SupportPhraseSection from './components/support-phrase-section';
import ShareSection from './components/share-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Text
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
