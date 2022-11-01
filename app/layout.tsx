import 'thon-ui/core/base.css';
import Footer from './components/footer';
import Header from './components/header';
import StickerDataProvider from './providers/sticker-data-providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Apoie a Seleção Brasileira nessa Copa do Mundo!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body className="overflow-x-hidden">
        <Header />
        <StickerDataProvider>{children}</StickerDataProvider>
        <Footer />
      </body>
    </html>
  );
}
