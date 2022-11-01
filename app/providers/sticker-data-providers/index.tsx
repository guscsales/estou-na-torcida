'use client';

import React from 'react';
import { User } from '../../shared/models/user';
import { Player } from '../../shared/models/player';
import { SupportPhrase } from '../../shared/models/support-phrase';
import { players } from '../../shared/data/players';
import { phrases } from '../../shared/data/phrases';

type IStickerDataContext = {
  stickerData: {
    user?: User;
    player: Player;
    phrase: SupportPhrase;
  };
  setStickerData: React.Dispatch<
    React.SetStateAction<{
      user?: User | undefined;
      player: Player;
      phrase: SupportPhrase;
    }>
  >;
};

const defaultValue: IStickerDataContext = {
  stickerData: {
    user: undefined,
    player: players[0],
    phrase: phrases[0],
  },
  setStickerData: () => void 0,
};

export const StickerDataContext =
  React.createContext<IStickerDataContext>(defaultValue);

export default function StickerDataProvider({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  const [stickerData, setStickerData] = React.useState(
    defaultValue.stickerData
  );

  return (
    <StickerDataContext.Provider value={{ stickerData, setStickerData }}>
      {children}
    </StickerDataContext.Provider>
  );
}
