import Link from 'next/link';
import { Button } from 'thon-ui';
import Logo from '../logo';

export default function Header() {
  return (
    <header className="flex justify-center sm:justify-between items-center px-2 sm:px-4 pb-1 pt-4 sm:py-2 relative z-30">
      <Link href="/">
        <Logo />
      </Link>
      <Button
        as="a"
        href="#go-to-sticker"
        variant="primary"
        className="hidden sm:inline-flex"
      >
        Criar meu Sticker
      </Button>
    </header>
  );
}
