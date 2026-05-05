import type { Dictionary } from '../../i18n/format';
import { translate } from '../../i18n/format';
import { Button, Text } from '../ui';
import Container from '../container';
import WideCard from '../wide-card';
import { phrases } from '../../shared/data/phrases';
import { players } from 'app/shared/data/players';

type Props = {
  dictionary: Dictionary;
};

export default function HeroSection({ dictionary }: Props) {
  return (
    <Container className="grid sm:grid-cols-[350px_1fr] xl:grid-cols-[560px_1fr] sm:justify-between mt-10 lg:mt-24">
      <div>
        <Text
          as="h1"
          variant="4xl sm:5xl 2xl:6xl"
          className="text-emerald-700 text-center sm:text-left mb-3"
        >
          {translate(dictionary, 'home.hero.title')}
        </Text>
        <Text
          as="p"
          variant="base"
          className="text-gray-500 text-center sm:text-left"
        >
          {translate(dictionary, 'home.hero.description')}{' '}
          <strong>{translate(dictionary, 'home.hero.highlight')}</strong>
        </Text>

        <Button
          as="a"
          href="#go-to-sticker"
          variant="primary"
          className="w-full sm:w-7/12 xl:w-5/12 mt-12"
        >
          {translate(dictionary, 'home.hero.cta')}
        </Button>
      </div>
      <div className="relative h-[240px]">
        <div className="absolute z-20 w-full opacity-50">
          <div
            className={`absolute bg-radial-green z-0
            w-[150px] h-[150px] top-[65px] right-[230px]
            sm:w-[250px] sm:h-[250px] sm:top-[0px] sm:right-[190px]
            lg:w-[300px] lg:h-[300px] lg:top-[0px] lg:right-[250px]
            2xl:w-[500px] 2xl:h-[500px] 2xl:top-[-110px] 2xl:right-[290px]`}
          />
          <div
            className={`absolute bg-radial-yellow z-10 
            w-[280px] h-[280px] top-[5px] right-[50px]
            sm:w-[370px] sm:h-[370px] sm:top-[-50px] sm:right-[30px] 
            lg:w-[420px] lg:h-[420px] lg:top-[-50px] lg:right-[30px]
            2xl:w-[740px] 2xl:h-[740px] 2xl:top-[-210px] 2xl:right-[20px]`}
          />
          <div
            className={`absolute bg-radial-blue z-0 
            w-[150px] h-[150px] top-[65px] right-[-5px]
            sm:w-[250px] sm:h-[250px] sm:top-[0px] sm:right-[-10px] 
            lg:w-[300px] lg:h-[300px] lg:top-[0px] lg:right-[0px]
            2xl:w-[500px] 2xl:h-[500px] 2xl:top-[-110px] 2xl:right-[-70px]
            `}
          />
        </div>
        <WideCard
          className="absolute left-[50%] top-[-190px] ml-[-600px] sm:ml-auto sm:top-[-200px] sm:right-[-400px] lg:right-[-320px] 2xl:right-[-260px] z-20"
          player={players[0]}
          user={{
            name: 'Gustavo Sales',
            pictureURL: '/images/gus.jpeg',
          }}
          supportPhrase={phrases[0]}
          dictionary={dictionary}
        />
      </div>
    </Container>
  );
}
