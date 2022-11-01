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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">
        <Header />
        <StickerDataProvider>{children}</StickerDataProvider>
        <Footer />
      </body>
    </html>
  );
}
