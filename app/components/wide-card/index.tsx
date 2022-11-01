import React from 'react';
import classNames from 'classnames';
import { Player } from '../../shared/models/player';
import { User } from '../../shared/models/user';
import { SupportPhrase } from '../../shared/models/support-phrase';
import Image from 'next/image';

type Props = {
  player: Player;
  user?: User;
  supportPhrase: SupportPhrase;
};

export default function WideCard({
  player,
  user,
  supportPhrase,
  ...props
}: Props & React.HTMLAttributes<HTMLElement>) {
  const className = classNames(
    `scale-[.25] sm:scale-[.3] lg:scale-[.4] 2xl:scale-50 w-[1200px] h-[628px] bg-no-repeat bg-bottom flex flex-col justify-end pb-7 pl-14`,
    props.className
  );

  return (
    <div
      style={{
        display: 'flex',
        backgroundImage: `url(/images/players/${player.id}-wide.png)`,
      }}
      className={className}
    >
      <div className="w-[134px] h-[32px] bg-no-repeat bg-[url(/images/fifa-qatar-logo.png)]" />
      <div className="flex gap-2 items-center mt-20 h-[88px]">
        {user && (
          <div className="rounded-full w-20 h-20 border-2 border-solid border-white p-0.5 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src={user?.pictureURL || '/images/default-avatar.png'}
              className="flex rounded-full"
              alt={`Foto de ${user?.name ? user.name : 'um avatar padrão'}`}
              referrerPolicy="no-referrer"
              width={80}
              height={80}
            />
          </div>
        )}
        <div className="flex flex-col w-[400px]">
          <span className="text-2xl drop-shadow-md text-white font-bold">
            {user?.name || ''}
          </span>
          <span
            className={'font-bold italic text-lg text-amber-300 drop-shadow-md'}
          >
            #EstouNaTorcida pela
            <br />
            Seleção Braseileira no Catar
          </span>
        </div>
      </div>
      <h1
        className="text-white text-8xl w-full pr-12 my-7 drop-shadow-green h-48 flex items-center font-bold"
        dangerouslySetInnerHTML={{
          __html: supportPhrase.phrase,
        }}
      />
      <span className={'italic text-lg text-amber-300 drop-shadow-md'}>
        Apoie também em estounatorcida.com.br
      </span>
    </div>
  );
}
