import type { NextApiRequest, NextApiResponse } from 'next';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(
  new URL('../../../assets/og/fonts/Poppins-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const fontItalic = fetch(
  new URL('../../../assets/og/fonts/Poppins-BoldItalic.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

type Payload = {
  name: string;
};

export default async function handler(req: NextApiRequest) {
  const { searchParams } = new URL(req.url as string);

  const name = searchParams.get('name');
  let pic = searchParams.get('pic');

  if (!name || !pic) {
    return new Response(null, {
      status: 404,
    });
  }

  pic = decodeURIComponent(pic);

  const nameSplit = name.split(' ');
  const [firstName] = nameSplit;
  const lastName = nameSplit[nameSplit.length - 1];

  const fontData = await font;
  const fontItalicData = await fontItalic;

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: `url(http://localhost:3000/images/players/neymar-twitter.png)`,
          backgroundRepeat: 'no-repeat',
          fontFamily: '"Sans"',
        }}
        tw={`w-[1200px] h-[628px] bg-black flex flex-col justify-end pb-7 pl-14`}
      >
        <div tw="flex items-center">
          <div tw="flex rounded-full w-20 h-20 border-2 border-solid border-white p-0.5 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pic}
              tw="flex h-[72px] rounded-full"
              alt={`Foto de ${firstName}`}
            />
          </div>
          <div tw="flex flex-col w-[270px] ml-2">
            <span tw="text-2xl drop-shadow-md text-white">
              {firstName} {lastName}
            </span>
            <span
              tw="text-lg drop-shadow-md text-amber-300"
              style={{
                fontFamily: '"SansItalic"',
                lineHeight: '104%',
              }}
            >
              #EstouNaTorcida pela Seleção Braseileira no Catar
            </span>
          </div>
        </div>
        <h1
          tw="text-white text-8xl w-8/12 mt-6"
          style={{ textShadow: '2px 2px 1px #047857', lineHeight: '95%' }}
        >
          Vai Brasil! Rumo ao Hexa!
        </h1>
        <div
          style={{
            backgroundImage: `url(http://localhost:3000/images/fifa-qatar-logo.png)`,
          }}
          tw="w-[134px] h-[32px]"
        />
      </div>
    ),
    {
      width: 1200,
      height: 628,
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
