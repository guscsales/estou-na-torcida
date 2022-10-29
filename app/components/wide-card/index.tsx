import { Poppins } from '@next/font/google';

const font = Poppins({ weight: '700' });
const fontItalic = Poppins({ weight: '700', style: 'italic' });

export default function WideCard() {
  return (
    <div
      style={{
        display: 'flex',
        backgroundImage: `url(/images/players/neymar-twitter.png)`,
      }}
      className={`${font.className} scale-50 w-[1200px] h-[628px] bg-no-repeat bg-bottom flex flex-col justify-end pb-7 pl-14`}
    >
      <div className="flex gap-2 items-center">
        <div
          className="rounded-full w-20 h-20 border-2 border-solid border-white p-0.5 overflow-hidden"
          aria-label="Foto de Gustavo"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ca.slack-edge.com/T0259JYFTTK-U02L9EWAA10-2f5925353804-512"
            className="flex rounded-full"
            alt="Foto de Gustavo"
          />
        </div>
        <div className="flex flex-col w-[270px]">
          <span
            className="text-2xl drop-shadow-md text-white"
            style={{
              filter:
                'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
            }}
          >
            Gustavo Sales
          </span>
          <span
            className={`${fontItalic.className} text-lg text-amber-300`}
            style={{
              filter:
                'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
            }}
          >
            #EstouNaTorcida pela Seleção Braseileira no Catar
          </span>
        </div>
      </div>
      <h1 className="text-white text-8xl w-8/12 my-7 drop-shadow-green">
        Vai Brasil! Rumo ao Hexa!
      </h1>
      <div className="w-[134px] h-[32px] bg-no-repeat bg-[url(/images/fifa-qatar-logo.png)]" />
    </div>
  );
}
