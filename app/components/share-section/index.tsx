'use client';

import React from 'react';
import Container from '../container/index';
import { Button, Text } from 'thon-ui';
import WideCard from '../wide-card';
import { StickerDataContext } from '../../providers/sticker-data-providers/index';
import * as qs from 'qs';

type OgFile = {
  type: string;
  imageName: string;
  file: File;
  apiGenerator: string;
};

export default function ShareSection() {
  const { stickerData } = React.useContext(StickerDataContext);
  const [files, setFiles] = React.useState<OgFile[]>([]);

  const [loading, setLoading] = React.useState<boolean>(false);

  async function handleGenerateFiles() {
    setLoading(true);

    const generateParams = (type: string) =>
      qs.stringify({
        type,
        ...stickerData.user,
        playerId: stickerData.player.id,
        phraseId: stickerData.phrase.id,
        ts: new Date().getTime(),
      });

    const types = ['wide', 'feed', 'stories'];

    const responses = await Promise.all([
      fetch(`/api/generator?${generateParams(types[0])}`),
      fetch(`/api/generator?${generateParams(types[1])}`),
      fetch(`/api/generator?${generateParams(types[2])}`),
    ]);

    const files = [];

    for (let i = 0; i < responses.length; i++) {
      const response = responses[i];
      const type = types[i];
      const blob = await response.blob();
      const imageName = `estou-na-torcida-${type}-${Math.random()
        .toString(36)
        .slice(2)}.png`;
      const file = new File([blob], imageName, {
        type: blob.type,
      });

      files.push({
        type,
        imageName,
        file,
        apiGenerator: `/api/generator?${generateParams(type)}`,
      });
    }

    setFiles(files);
    setLoading(false);
  }

  function handleShare(type: 'wide' | 'feed' | 'stories') {
    const { imageName, file, apiGenerator } = files.find(
      (file) => file.type === type
    ) as OgFile;

    const shareData = {
      files: [file],
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      navigator
        .share(shareData)
        .then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
    } else {
      var link = document.createElement('a');
      link.setAttribute('download', imageName);
      link.href = apiGenerator;

      document.body.appendChild(link);

      link.click();
      link.remove();
    }
  }

  return (
    <Container className="grid sm:grid-cols-[350px_1fr] lg:grid-cols-[480px_1fr] gap-4 xl:gap-20 items-center">
      <header className="self-start">
        <Text
          as="h2"
          variant="3xl sm:4xl lg:5xl"
          className="text-emerald-700 mb-2"
        >
          Compartilhe seu sticker nas redes
        </Text>
        <Text as="p" variant="sm sm:base" className="text-gray-500 w-10/12">
          Você tem 3 tipos de stickers, um como esse ao lado outro no formato
          para feed e outro para stories.
        </Text>

        <div className="relative h-[240px] sm:hidden">
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
            player={stickerData.player}
            user={stickerData.user}
            supportPhrase={stickerData.phrase}
          />
        </div>

        {files.length === 0 ? (
          <div className="flex flex-col gap-3 mt-4 sm:w-9/12 lg:w-8/12">
            <Button
              variant="primary"
              onClick={() => {
                handleGenerateFiles();
              }}
              loading={loading}
            >
              Compartilhar
            </Button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3 mt-4 sm:w-9/12 lg:w-8/12 xl:hidden">
              <Button
                variant="primary"
                onClick={() => {
                  handleShare('feed');
                }}
              >
                Compartilhar no Feed
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleShare('stories');
                }}
              >
                Compartilhar nos Stories
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleShare('wide');
                }}
              >
                Download da Imagem Acima
              </Button>
            </div>
            <div className="flex-col gap-3 mt-4 sm:w-9/12 lg:w-8/12 hidden xl:flex">
              <Button
                variant="primary"
                onClick={() => {
                  handleShare('feed');
                }}
              >
                Download Para o Feed
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleShare('stories');
                }}
              >
                Download Para os Stories
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleShare('wide');
                }}
              >
                Download da Imagem Ao Lado
              </Button>
            </div>
          </>
        )}
      </header>
      <div className="relative h-[240px] hidden sm:block">
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
          player={stickerData.player}
          user={stickerData.user}
          supportPhrase={stickerData.phrase}
        />
      </div>
    </Container>
  );
}
