import Script from 'next/script';
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

        {process.env.NODE_ENV === 'production' && (
          <>
            {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
            <Script
              id="analytics-provider"
              strategy="beforeInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-YBX8N6YF14"
            />
            <Script
              id="analytics-provider-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YBX8N6YF14');
        `,
              }}
            />
          </>
        )}
      </head>
      <body className="overflow-x-hidden">
        <Header />
        <StickerDataProvider>{children}</StickerDataProvider>
        <Footer />
      </body>
    </html>
  );
}
