import type { NextApiRequest } from 'next';
import { ImageResponse } from '@vercel/og';
import { parseQuery } from '../../../app/shared/services/parse-query/index';
import { phrases } from '../../../app/shared/data/phrases';

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
  name: string;
  pictureURL: string;
  playerId: string;
  phraseId: string;
};

export default async function handler(req: NextApiRequest) {
  const [, queryString] = (req.url || '').split('?');
  const params = parseQuery(queryString) as unknown as Params;

  const { name, pictureURL, phraseId, playerId } = params;

  const phrase = phrases
    .find((phrase) => phrase.id === phraseId)
    ?.phrase.split('<br />');

  const fontData = await font;
  const fontItalicData = await fontItalic;

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: `url(http://localhost:3000/images/players/${playerId}-feed.png)`,
          backgroundRepeat: 'no-repeat',
          fontFamily: '"Sans"',
        }}
        tw={`w-[1080px] h-[1080px] flex flex-col pb-7 px-14 pt-16`}
      >
        <div tw="w-full flex justify-end">
          <div
            style={{
              backgroundImage: `url(http://localhost:3000/images/fifa-qatar-logo.png)`,
            }}
            tw="w-[134px] h-[32px]"
          />
        </div>

        <div tw="flex items-center mt-20 h-[88px]">
          <div tw="flex rounded-full w-28 h-28 border-2 border-solid border-white p-0.5 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pictureURL}
              tw="flex h-[104px] rounded-full"
              alt="Picture URL"
            />
          </div>
          <div tw="flex flex-col w-[600px] ml-2">
            <span
              tw="text-4xl text-white"
              style={{
                filter:
                  'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
              }}
            >
              {name}
            </span>
            <span
              tw="text-3xl text-amber-300 flex flex-col"
              style={{
                fontFamily: '"SansItalic"',
                lineHeight: '104%',
                filter:
                  'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
              }}
            >
              <div>#EstouNaTorcida pela</div>
              <div>Seleção Brasileira no Catar</div>
            </span>
          </div>
        </div>

        <h1
          tw="text-white text-[100px] w-full pr-1 mt-[360px] mb-11 flex flex-col h-[348px] justify-end"
          style={{
            textShadow: '2px 2px 1px #047857',
            lineHeight: '95%',
          }}
        >
          {phrase?.map((value) => (
            <div key={value}>{value}</div>
          ))}
        </h1>

        <span
          tw="text-2xl text-amber-300"
          style={{
            filter:
              'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
            fontFamily: '"SansItalic"',
          }}
        >
          Apoie também em estounatorcida.com.br
        </span>
      </div>
    ),
    {
      width: 1080,
      height: 1080,
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
    }
  );
}
