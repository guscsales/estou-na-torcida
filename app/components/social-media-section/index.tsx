import SocialMediaAuth from '../social-media-buttons';
import Container from '../container/index';
import { Text } from 'thon-ui';

export default function SocialMediaSection() {
  return (
    <Container className="grid sm:grid-cols-[350px_1fr] lg:grid-cols-[480px_1fr] gap-4 xl:gap-20 items-center">
      <header className="self-start">
        <Text
          as="h2"
          variant="3xl sm:4xl lg:5xl"
          className="text-emerald-700 mb-2"
        >
          Entre com alguma rede social
        </Text>
        <Text as="p" variant="sm sm:base" className="text-gray-500 w-10/12">
          Coletaremos algumas informações públicas para gerar seu sticker
          personalizado.
        </Text>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex-row gap-2 sm:justify-self-center sm:w-[260px] lg:w-full lg:justify-end">
        <SocialMediaAuth />
      </div>
    </Container>
  );
}
