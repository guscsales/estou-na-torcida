'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import WideCard from '../wide-card';
import type { Dictionary } from '../../i18n/format';
import { translate } from '../../i18n/format';
import { StickerDataContext } from '../../providers/sticker-data-providers/index';
import classNames from 'classnames';

type Props = {
  dictionary: Dictionary;
};

export default function StickyLiveSticker({ dictionary }: Props) {
  const pathname = usePathname() ?? '';
  const { stickerData } = React.useContext(StickerDataContext);
  const [isShareVisible, setIsShareVisible] = useState(false);

  useEffect(() => {
    const shareSection = document.getElementById('share-section');
    if (!shareSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsShareVisible(entry.isIntersecting);
      },
      { rootMargin: '0px 0px 0px 0px', threshold: 0.1 }
    );

    observer.observe(shareSection);
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname?.includes('/politica-de-privacidade')) {
    return null;
  }

  return (
    <div
      className={classNames(
        'fixed z-50 transition-all duration-500 ease-in-out',
        'bottom-4 left-1/2 -translate-x-1/2 lg:left-6 lg:-translate-x-0 lg:bottom-6',
        'rounded-xl border border-gray-200 bg-white text-gray-950 shadow-lg',
        isShareVisible
          ? 'translate-y-[150%] opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100'
      )}
      aria-label={translate(dictionary, 'sticky.livePreviewAria')}
      role="region"
    >
      <div className="flex flex-col space-y-1.5 p-4 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <h3 className="font-semibold leading-none tracking-tight text-sm">
            {translate(dictionary, 'sticky.livePreview')}
          </h3>
        </div>
      </div>
      <div className="p-4 pt-0">
        <div className="relative overflow-hidden rounded-lg border border-gray-100 bg-gray-50 w-[264px] h-[138px] sm:w-[300px] sm:h-[157px] xl:w-[360px] xl:h-[188px]">
          <WideCard
            player={stickerData.player}
            user={stickerData.user}
            supportPhrase={stickerData.phrase}
            dictionary={dictionary}
            className="!scale-[0.22] sm:!scale-[0.25] xl:!scale-[0.3] origin-top-left !absolute !top-0 !left-0 !ml-0 !mt-0 !right-auto !bottom-auto"
          />
        </div>
      </div>
    </div>
  );
}
