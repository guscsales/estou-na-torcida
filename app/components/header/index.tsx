import { Button } from 'thon-ui';
import Logo from '../logo';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-2 sm:px-4 py-1 sm:py-2 relative z-30">
      <Logo />
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
