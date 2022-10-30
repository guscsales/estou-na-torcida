import HeroSection from './components/hero-section';
import SocialMediaAuth from './components/social-media-auth';
import { Text } from 'thon-ui';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Text
        as="div"
        variant="xl sm:3xl"
        className="bg-gray-200 text-gray-700 w-full text-center py-6 sm:py-9 mt-9 sm:mt-36 mb-6 sm:mb-14 relative z-30"
      >
        Apenas 3 passos até seu sticker!
      </Text>
      {/* <SocialMediaAuth /> */}
    </>
  );
}
