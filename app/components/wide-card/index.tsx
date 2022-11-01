import { Poppins } from '@next/font/google';
import React from 'react';
import classNames from 'classnames';
import { Player } from '../../players/models/player';
import { User } from '../../users/models/user';
import { SupportPhrase } from '../../support-phrase/models/support-phrase';

const font = Poppins({ weight: '700' });
const fontItalic = Poppins({ weight: '700', style: 'italic' });

type Props = {
  player: Player;
  user: User;
  supportPhrase: SupportPhrase;
};

export default function WideCard({
  player,
  user,
  supportPhrase,
  ...props
}: Props & React.HTMLAttributes<HTMLElement>) {
  const className = classNames(
    `${font.className} scale-[.25] sm:scale-[.3] lg:scale-[.4] 2xl:scale-50 w-[1200px] h-[628px] bg-no-repeat bg-bottom flex flex-col justify-end pb-7 pl-14`,
    props.className
  );

  return (
    <div
      style={{
        display: 'flex',
        backgroundImage: `url(/images/players/${player.id}-twitter.png)`,
      }}
      className={className}
    >
      <div className="w-[134px] h-[32px] bg-no-repeat bg-[url(/images/fifa-qatar-logo.png)]" />
      <div className="flex gap-2 items-center mt-20">
        <div className="rounded-full w-20 h-20 border-2 border-solid border-white p-0.5 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={user.pictureURL}
            className="flex rounded-full"
            alt={`Foto de ${user.name}`}
          />
        </div>
        <div className="flex flex-col w-[270px]">
          <span className="text-2xl drop-shadow-md text-white">
            {user.name}
          </span>
          <span
            className={`${fontItalic.className} text-lg text-amber-300 drop-shadow-md`}
          >
            #EstouNaTorcida pela Seleção Braseileira no Catar
          </span>
        </div>
      </div>
      <h1 className="text-white text-8xl w-8/12 my-7 drop-shadow-green">
        {supportPhrase.phrase}
      </h1>
      <span
        className={`${fontItalic.className} text-lg text-amber-300 drop-shadow-md`}
      >
        Apoie também em estounatorcida.com.br
      </span>
    </div>
  );
}
