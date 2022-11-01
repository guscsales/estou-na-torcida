import Container from '../container/index';
import { Text } from 'thon-ui';
import PlayerCard from '../player-card';

export default function PlayerSection() {
  return (
    <Container className="grid sm:grid-cols-[350px_1fr] lg:grid-cols-[480px_1fr] xl:gap-20">
      <header>
        <Text
          as="h2"
          variant="3xl sm:4xl lg:5xl"
          className="text-emerald-700 mb-2"
        >
          Escolha um jogador da seleção
        </Text>
        <Text as="p" variant="sm sm:base" className="text-gray-500 w-10/12">
          Esse jogador irá aparecer no seu sitcker, você pode escolher qualquer
          um e até mesmo o técnico.
        </Text>
      </header>
      <div className="grid grid-cols-1 w-8/12 mx-auto sm:w-full sm:grid-cols-2 xl:grid-cols-3 gap-2">
        <PlayerCard player={{ id: 'neymar-jr', name: 'Neymar Jr' }} active />
        <PlayerCard player={{ id: 'neymar-jr', name: 'Neymar Jr' }} />
        <PlayerCard player={{ id: 'neymar-jr', name: 'Neymar Jr' }} />
        <PlayerCard player={{ id: 'neymar-jr', name: 'Neymar Jr' }} />
        <PlayerCard player={{ id: 'neymar-jr', name: 'Neymar Jr' }} />
        <PlayerCard player={{ id: 'neymar-jr', name: 'Neymar Jr' }} />
        <PlayerCard player={{ id: 'neymar-jr', name: 'Neymar Jr' }} />
        <PlayerCard player={{ id: 'neymar-jr', name: 'Neymar Jr' }} />
        <PlayerCard player={{ id: 'neymar-jr', name: 'Neymar Jr' }} />
        <PlayerCard player={{ id: 'neymar-jr', name: 'Neymar Jr' }} />
      </div>
    </Container>
  );
}
