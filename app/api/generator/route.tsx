import { ImageResponse } from 'next/og';
import { defaultLocale, hasLocale, type Locale } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';
import { translate, translateLines } from '../../i18n/format';
import { phrases } from '../../shared/data/phrases';

export const runtime = 'edge';

const font = fetch(
  new URL('../../../assets/og/fonts/Poppins-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const fontItalic = fetch(
  new URL('../../../assets/og/fonts/Poppins-BoldItalic.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

type CardType = 'wide' | 'feed' | 'stories';

type Params = {
  locale: Locale;
  name: string;
  pictureURL: string;
  playerId: string;
  phraseId: string;
  type: CardType;
};

function getBaseUrl(request: Request) {
  return process.env.DOMAIN || new URL(request.url).origin;
}

function getParams(request: Request): Params | null {
  const url = new URL(request.url);
  const locale = url.searchParams.get('locale') || defaultLocale;
  const type = url.searchParams.get('type') || '';

  if (!hasLocale(locale) || !isCardType(type)) return null;

  return {
    locale,
    type,
    name: url.searchParams.get('name') || '',
    pictureURL: url.searchParams.get('pictureURL') || '',
    playerId: url.searchParams.get('playerId') || '',
    phraseId: url.searchParams.get('phraseId') || '',
  };
}

function isCardType(type: string): type is CardType {
  return type === 'wide' || type === 'feed' || type === 'stories';
}

function getPhraseLines(dictionary: Awaited<ReturnType<typeof getDictionary>>, phraseId: string) {
  const phrase = phrases.find((item) => item.id === phraseId);

  if (!phrase) return [];

  return translateLines(dictionary, phrase.translationKey);
}

function userBlock({
  avatarSize,
  dictionary,
  name,
  pictureURL,
  baseUrl,
  textSize,
  taglineSize,
  avatarImageSize,
  marginClassName = 'ml-2',
}: {
  avatarImageSize: string;
  avatarSize: string;
  baseUrl: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  marginClassName?: string;
  name: string;
  pictureURL: string;
  taglineSize: string;
  textSize: string;
}) {
  return (
    <div tw="flex items-center h-[88px]">
      {name && (
        <div
          tw={`flex rounded-full ${avatarSize} border-2 border-solid border-white p-0.5 overflow-hidden`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pictureURL || `${baseUrl}/images/default-avatar.png`}
            tw={`flex ${avatarImageSize} rounded-full`}
            alt=""
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      <div tw={`flex flex-col w-[600px] ${marginClassName}`}>
        <span
          tw={`${textSize} text-white`}
          style={{
            filter:
              'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
          }}
        >
          {name || ''}
        </span>
        <span
          tw={`${taglineSize} text-amber-300 flex flex-col`}
          style={{
            fontFamily: '"SansItalic"',
            lineHeight: '104%',
            filter:
              'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
          }}
        >
          <div>{translate(dictionary, 'wideCard.tagline.1')}</div>
          <div>{translate(dictionary, 'wideCard.tagline.2')}</div>
        </span>
      </div>
    </div>
  );
}

function footerText(dictionary: Awaited<ReturnType<typeof getDictionary>>, className: string) {
  return (
    <span
      tw={className}
      style={{
        filter:
          'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
        fontFamily: '"SansItalic"',
      }}
    >
      {translate(dictionary, 'wideCard.footer')}
    </span>
  );
}

function wideCardComponent(params: Params, dictionary: Awaited<ReturnType<typeof getDictionary>>, baseUrl: string) {
  const phrase = getPhraseLines(dictionary, params.phraseId);

  return (
    <div
      style={{
        backgroundImage: `url(${baseUrl}/images/players/${params.playerId}-wide.png)`,
        backgroundRepeat: 'no-repeat',
        fontFamily: '"Sans"',
      }}
      tw="w-[1200px] h-[628px] bg-black flex flex-col justify-end pb-8 pl-14"
    >
      <div
        style={{
          backgroundImage: `url(${baseUrl}/images/fifa-qatar-logo.png)`,
        }}
        tw="w-[134px] h-[32px]"
      />
      <div tw="flex items-center mt-20 h-[88px]">
        {userBlock({
          avatarImageSize: 'h-[72px]',
          avatarSize: 'w-20 h-20',
          baseUrl,
          dictionary,
          name: params.name,
          pictureURL: params.pictureURL,
          taglineSize: 'text-lg',
          textSize: 'text-2xl',
        })}
      </div>
      <h1
        tw="text-white text-8xl w-full pr-12 mt-6 flex flex-col h-48 justify-center"
        style={{ textShadow: '2px 2px 1px #047857', lineHeight: '95%' }}
      >
        {phrase.map((value) => (
          <div key={value}>{value}</div>
        ))}
      </h1>
      {footerText(dictionary, 'text-lg text-amber-300')}
    </div>
  );
}

function feedCardComponent(params: Params, dictionary: Awaited<ReturnType<typeof getDictionary>>, baseUrl: string) {
  const phrase = getPhraseLines(dictionary, params.phraseId);

  return (
    <div
      style={{
        backgroundImage: `url(${baseUrl}/images/players/${params.playerId}-feed.png)`,
        backgroundRepeat: 'no-repeat',
        fontFamily: '"Sans"',
      }}
      tw="w-[1080px] h-[1080px] bg-black flex flex-col pb-7 px-14 pt-16"
    >
      <div tw="w-full flex justify-end">
        <div
          style={{
            backgroundImage: `url(${baseUrl}/images/fifa-qatar-logo.png)`,
          }}
          tw="w-[134px] h-[32px]"
        />
      </div>
      <div tw="flex items-center mt-20 h-[88px]">
        {userBlock({
          avatarImageSize: 'h-[104px]',
          avatarSize: 'w-28 h-28',
          baseUrl,
          dictionary,
          name: params.name,
          pictureURL: params.pictureURL,
          taglineSize: 'text-3xl',
          textSize: 'text-4xl',
        })}
      </div>
      <h1
        tw="text-white text-[100px] w-full pr-1 mt-[360px] mb-11 flex flex-col h-[348px] justify-end"
        style={{ textShadow: '2px 2px 1px #047857', lineHeight: '95%' }}
      >
        {phrase.map((value) => (
          <div key={value}>{value}</div>
        ))}
      </h1>
      {footerText(dictionary, 'text-2xl text-amber-300')}
    </div>
  );
}

function storiesCardComponent(params: Params, dictionary: Awaited<ReturnType<typeof getDictionary>>, baseUrl: string) {
  const phrase = getPhraseLines(dictionary, params.phraseId);

  return (
    <div
      style={{
        backgroundImage: `url(${baseUrl}/images/players/${params.playerId}-stories.png)`,
        backgroundRepeat: 'no-repeat',
        fontFamily: '"Sans"',
      }}
      tw="w-[1080px] h-[1920px] bg-black flex flex-col pb-7 px-14 pt-16"
    >
      <div tw="w-full flex justify-between items-center mt-44">
        {userBlock({
          avatarImageSize: 'h-[104px]',
          avatarSize: 'w-28 h-28',
          baseUrl,
          dictionary,
          marginClassName: 'ml-4',
          name: params.name,
          pictureURL: params.pictureURL,
          taglineSize: 'text-3xl',
          textSize: 'text-4xl',
        })}
        <div
          style={{
            backgroundImage: `url(${baseUrl}/images/fifa-qatar-logo.png)`,
          }}
          tw="w-[134px] h-[32px]"
        />
      </div>
      <h1
        tw="text-white text-[120px] w-full mb-11 flex flex-col h-[580px] mt-24"
        style={{ textShadow: '2px 2px 1px #047857', lineHeight: '95%' }}
      >
        {phrase.map((value) => (
          <div key={value}>{value}</div>
        ))}
      </h1>
      <div tw="mt-[740px]">
        {footerText(dictionary, 'text-2xl text-amber-300 w-[287px]')}
      </div>
    </div>
  );
}

export async function GET(request: Request) {
  const params = getParams(request);

  if (!params?.name || !params.pictureURL || !params.playerId || !params.phraseId) {
    return new Response(null, {
      status: 404,
    });
  }

  const dictionary = await getDictionary(params.locale);
  const baseUrl = getBaseUrl(request);
  const fontData = await font;
  const fontItalicData = await fontItalic;
  const cards = {
    wide: {
      component: wideCardComponent(params, dictionary, baseUrl),
      settings: {
        width: 1200,
        height: 628,
      },
    },
    feed: {
      component: feedCardComponent(params, dictionary, baseUrl),
      settings: {
        width: 1080,
        height: 1080,
      },
    },
    stories: {
      component: storiesCardComponent(params, dictionary, baseUrl),
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
