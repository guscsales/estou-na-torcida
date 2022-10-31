import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/logo-estou-na-torcida.svg"
      alt="Logo do Estou Na Torcida"
      priority
      width={230}
      height={70}
      className="w-[183px] h-[56px] sm:w-[230px] sm:h-[70px]"
    />
  );
}
