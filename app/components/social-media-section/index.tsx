'use client';

import React from 'react';
import SocialMediaAuth from '../social-media-buttons';
import Container from '../container/index';
import { Text } from 'thon-ui';
import { StickerDataContext } from '../../providers/sticker-data-providers/index';

export default function SocialMediaSection() {
  const { stickerData } = React.useContext(StickerDataContext);

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
          Coletaremos algumas para gerar seu sticker personalizado. Nenhum dado
          seu será armezenado.
        </Text>
      </header>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex-row gap-2 sm:mx-auto sm:w-[260px] lg:w-full lg:justify-end">
          <SocialMediaAuth />
        </div>
        {stickerData.user && (
          <div className="py-3 px-5 bg-emerald-900/[.8] rounded-lg mt-3">
            <Text
              as="div"
              variant="base"
              className="text-gray-50 text-center sm:text-left"
            >
              {stickerData.user?.name.split(' ')[0]} deu tudo certo com a
              conexão. Continue nos próximos passos.
            </Text>
          </div>
        )}
      </div>
    </Container>
  );
}
