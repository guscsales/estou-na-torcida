import classNames from 'classnames';
import Image from 'next/image';
import { Text } from 'thon-ui';
import { Player } from '../../shared/models/player';

type Props = {
  player: Player;
  active?: boolean;
};

export default function PlayerCard({
  player,
  active,
  ...props
}: Props & React.HTMLAttributes<HTMLElement>) {
  const nameClassName = classNames(
    `w-full py-1.5 px-3.5 rounded-xl relative
    bg-clip-padding
    before:content-[''] before:border-3 before:border-solid before:border-transparent
    before:border-transparent before:border-green-to-yellow
    before:w-full before:h-14 before:absolute before:z-0 before:top-0 before:left-0
    before:rounded-xl
    transition-all duration-200 ease-in-out`,
    {
      'bg-gray-200 group-hover:bg-gray-300': !active,
      'bg-gray-700 before:border-amber-500': active,
    }
  );
  const textClassName = classNames(
    `font-bold w-20 h-11 flex items-center justify-center
     transition-colors duration-200 ease-in-out`,
    {
      'text-gray-800': !active,
      'text-gray-50': active,
    }
  );

  return (
    <button
      className="group flex items-end w-full h-36 rounded-xl overflow-hidden"
      aria-label={`Escolher o jogador ${player.name}`}
      {...props}
    >
      <div className={nameClassName}>
        <Text as="div" variant="sm" className={textClassName}>
          {player.name}
        </Text>
        <Image
          src={`/images/players/${player.id}.png`}
          width={149}
          height={132}
          alt={`Foto do ${player.name}`}
          className="absolute bottom-0 right-0 z-10 w-auto h-[132px]"
        />
      </div>
    </button>
  );
}
