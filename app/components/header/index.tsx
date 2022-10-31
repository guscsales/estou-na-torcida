import { Button } from 'thon-ui';
import Logo from '../logo';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-2 sm:px-4 py-1 sm:py-2 relative z-30">
      <Logo />
      <Button variant="primary" className="hidden sm:block">
        Criar meu Sticker
      </Button>
    </header>
  );
}
