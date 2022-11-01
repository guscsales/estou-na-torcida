'use client';

import React from 'react';
import Container from '../container/index';
import { Text } from 'thon-ui';
import SupportPhraseButton from '../support-phrase-button';
import { SupportPhrase } from '../../shared/models/support-phrase';
import { StickerDataContext } from '../../providers/sticker-data-providers/index';
import { phrases } from '../../shared/data/phrases';

export default function SupportPhraseSection() {
  const { stickerData, setStickerData } = React.useContext(StickerDataContext);

  function handleSelectPhrase(phrase: SupportPhrase) {
    setStickerData((prevValue) => ({ ...prevValue, phrase }));
  }

  return (
    <Container className="grid sm:grid-cols-[350px_1fr] lg:grid-cols-[480px_1fr] gap-4 xl:gap-20 relative z-30">
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
          {phrases.map((phrase) => (
            <SupportPhraseButton
              key={phrase.id}
              supportPhrase={phrase}
              active={phrase.id === stickerData.phrase.id}
              onClick={() => handleSelectPhrase(phrase)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
