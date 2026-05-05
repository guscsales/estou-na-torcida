import Image from 'next/image';

type Props = {
  alt: string;
};

export default function Logo({ alt }: Props) {
  return (
    <Image
      src="/images/logo-estou-na-torcida.svg"
      alt={alt}
      priority
      width={230}
      height={70}
      className="w-[183px] h-[56px] sm:w-[230px] sm:h-[70px]"
    />
  );
}
