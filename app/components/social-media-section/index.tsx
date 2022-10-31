import SocialMediaAuth from '../social-media-buttons';
import Container from '../container/index';
import { Text } from 'thon-ui';

export default function SocialMediaSection() {
  return (
    <Container className="grid sm:grid-cols-[350px_1fr] lg:grid-cols-[455px_1fr] gap-4 items-center">
      <header>
        <Text
          as="h2"
          variant="3xl sm:4xl lg:5xl"
          className="text-emerald-700 mb-2"
        >
          Entre com alguma rede social
        </Text>
        <Text variant="sm sm:base" className="text-gray-500">
          Coletaremos algumas informações públicas para gerar seu sticker
          personalizado.
        </Text>
      </header>
      <article className="flex flex-col lg:flex-row gap-2 sm:justify-self-center sm:w-[260px] lg:w-full lg:justify-end">
        <SocialMediaAuth />
      </article>
    </Container>
  );
}
