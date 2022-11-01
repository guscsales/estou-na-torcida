import Container from '../container/index';
import { Text } from 'thon-ui';
import SupportPhraseButton from '../support-phrase-button';

export default function SupportPhraseSection() {
  return (
    <Container className="grid sm:grid-cols-[350px_1fr] lg:grid-cols-[480px_1fr] gap-4 xl:gap-20">
      <header>
        <Text
          as="h2"
          variant="3xl sm:4xl lg:5xl"
          className="text-emerald-700 mb-2"
        >
          Escolha uma frase de apoio
        </Text>
        <Text as="p" variant="sm sm:base" className="text-gray-500 w-10/12">
          Essa frase será parte do seu sticker e ela demonstrará seu apoio de
          torcedor ou torcedora.
        </Text>
      </header>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
          <SupportPhraseButton
            supportPhrase={{ id: '1', phrase: 'Vai Brasil! Rumo Ao Hexa!' }}
            active
          />
          <SupportPhraseButton
            supportPhrase={{ id: '1', phrase: 'Vai Brasil! Rumo Ao Hexa!' }}
          />
          <SupportPhraseButton
            supportPhrase={{ id: '1', phrase: 'Vai Brasil! Rumo Ao Hexa!' }}
          />
          <SupportPhraseButton
            supportPhrase={{ id: '1', phrase: 'Vai Brasil! Rumo Ao Hexa!' }}
          />
          <SupportPhraseButton
            supportPhrase={{ id: '1', phrase: 'Vai Brasil! Rumo Ao Hexa!' }}
          />
          <SupportPhraseButton
            supportPhrase={{ id: '1', phrase: 'Vai Brasil! Rumo Ao Hexa!' }}
          />
        </div>
      </div>
    </Container>
  );
}
