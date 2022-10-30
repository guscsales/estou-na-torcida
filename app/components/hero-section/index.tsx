import { Button, Text } from 'thon-ui';
import Container from '../container';
import WideCard from '../wide-card';

export default function HeroSection() {
  return (
    <Container className="grid sm:grid-cols-[560px_1fr] sm:justify-between mt-24">
      <div>
        <Text
          as="h1"
          variant="4xl sm:6xl"
          className="text-emerald-700 text-center sm:text-left mb-3"
        >
          Apoie o Brasil na Copa do Mundo do Catar
        </Text>
        <Text
          as="p"
          variant="base"
          className="text-gray-500 text-center sm:text-left"
        >
          Crie seu sticker personalizado e demonstre todo o seu apoio de
          torcedor nas suas redes sociais!
        </Text>

        <Button variant="primary" className="w-full sm:w-auto mt-12">
          Criar meu Sticker
        </Button>
      </div>
      <div className="relative">
        <div className="absolute z-20 w-full opacity-50">
          <div className="absolute top-[-110px] left-[-30px] bg-radial-green w-[500px] h-[500px] z-0" />
          <div className="absolute top-[-210px] left-[110px] bg-radial-yellow w-[740px] h-[740px] z-10" />
          <div className="absolute top-[-110px] right-[-70px] bg-radial-blue w-[500px] h-[500px] z-0" />
        </div>
        <WideCard className="absolute top-[-200px] left-[-420px] sm:left-[-150px] z-20" />
      </div>
    </Container>
  );
}
