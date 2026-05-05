import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import '../globals.css';
import Footer from '../components/footer';
import Header from '../components/header';
import StickyLiveSticker from '../components/sticky-live-sticker';
import { hasLocale, locales, type Locale } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';
import StickerDataProvider from '../providers/sticker-data-providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} className={poppins.className}>
      <body className="overflow-x-hidden">
        {process.env.NODE_ENV === 'production' && (
          <>
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
            <Script
              id="session-provider-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3268780,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
              }}
            />
          </>
        )}
        {process.env.NODE_ENV !== 'production' && (
          <Script
            id="analytics-provider-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `function gtag(){}`,
            }}
          />
        )}
        <Header dictionary={dictionary} lang={lang as Locale} />
        <StickerDataProvider>
          {children}
          <StickyLiveSticker dictionary={dictionary} />
        </StickerDataProvider>
        <Footer dictionary={dictionary} lang={lang as Locale} />
      </body>
    </html>
  );
}
