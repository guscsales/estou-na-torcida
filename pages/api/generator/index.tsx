import type { NextApiRequest, NextApiResponse } from 'next';
import { ImageResponse } from '@vercel/og';
import { User } from '../../../app/shared/models/user';
import { phrases } from '../../../app/shared/data/phrases';
import * as qs from 'qs';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(
  new URL('../../../assets/og/fonts/Poppins-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const fontItalic = fetch(
  new URL('../../../assets/og/fonts/Poppins-BoldItalic.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

type Params = {
  type: 'wide' | 'square' | 'stories';
  name: string;
  pictureURL: string;
  playerId: string;
  phraseId: string;
};

const wideCardComponent = ({
  name,
  pictureURL,
  playerId,
  phraseId,
}: Params) => {
  const phrase = phrases
    .find((phrase) => phrase.id === phraseId)
    ?.phrase.split('<br />');

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.DOMAIN}/images/players/${playerId}-twitter.png)`,
        backgroundRepeat: 'no-repeat',
        fontFamily: '"Sans"',
      }}
      tw={`w-[1200px] h-[628px] bg-black flex flex-col justify-end pb-7 pl-14`}
    >
      <div
        style={{
          backgroundImage: `url(${process.env.DOMAIN}/images/fifa-qatar-logo.png)`,
        }}
        tw="w-[134px] h-[32px]"
      />
      <div tw="flex items-center mt-20 h-[88px]">
        {name && (
          <div tw="flex rounded-full w-20 h-20 border-2 border-solid border-white p-0.5 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                pictureURL || `${process.env.DOMAIN}/images/default-avatar.png`
              }
              tw="flex h-[72px] rounded-full"
              alt=""
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        <div tw="flex flex-col w-[400px] ml-2">
          <span
            tw="text-2xl text-white"
            style={{
              filter:
                'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
            }}
          >
            {name || ''}
          </span>
          <span
            tw="text-lg text-amber-300 flex flex-col"
            style={{
              fontFamily: '"SansItalic"',
              lineHeight: '104%',
              filter:
                'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
            }}
          >
            <div>#EstouNaTorcida pela</div>
            <div>Seleção Braseileira no Catar</div>
          </span>
        </div>
      </div>
      <h1
        tw="text-white text-8xl w-full pr-12 mt-6 flex flex-col h-48 justify-center"
        style={{ textShadow: '2px 2px 1px #047857', lineHeight: '95%' }}
      >
        {phrase?.map((value) => (
          <div key={value}>{value}</div>
        ))}
      </h1>
      <span
        tw="text-lg text-amber-300"
        style={{
          filter:
            'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
          fontFamily: '"SansItalic"',
        }}
      >
        Apoie também em estounatorcida.com.br
      </span>
    </div>
  );
};

function parseQuery(queryString: string) {
  var query: any = {};
  var pairs = (
    queryString[0] === '?' ? queryString.substr(1) : queryString
  ).split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(
      pair[1] || ''
    ).replaceAll('+', ' ');
  }
  return query;
}

export default async function handler(req: NextApiRequest) {
  const [, queryString] = (req.url || '').split('?');
  const params = parseQuery(queryString) as unknown as Params;

  console.log(params);

  // TODO: use schema validator here
  // if (!params.name || !params.pic || !params.type) {
  //   return new Response(null, {
  //     status: 404,
  //   });
  // }

  const fontData = await font;
  const fontItalicData = await fontItalic;

  const cards: {
    [key in Params['type']]: {
      component: JSX.Element;
      settings: { width: number; height: number };
    };
  } = {
    wide: {
      component: wideCardComponent(params),
      settings: {
        width: 1200,
        height: 628,
      },
    },
    square: {
      component: <></>,
      settings: {
        width: 1080,
        height: 1080,
      },
    },
    stories: {
      component: <></>,
      settings: {
        width: 1080,
        height: 1920,
      },
    },
  };

  return new ImageResponse(cards[params.type].component, {
    ...cards[params.type].settings,
    fonts: [
      {
        name: 'Sans',
        data: fontData,
        weight: 700,
        style: 'normal',
      },
      {
        name: 'SansItalic',
        data: fontItalicData,
        weight: 700,
        style: 'italic',
      },
    ],
  });
}
