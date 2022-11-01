'use client';

import React from 'react';
import Container from '../container/index';
import { Text } from 'thon-ui';
import PlayerCard from '../player-card';
import { StickerDataContext } from '../../providers/sticker-data-providers/index';
import { players } from '../../shared/data/players';
import { Player } from '../../shared/models/player';

export default function PlayerSection() {
  const { stickerData, setStickerData } = React.useContext(StickerDataContext);

  function handleSelectPlayer(player: Player) {
    setStickerData((prevValue) => ({ ...prevValue, player }));
  }

  return (
    <Container className="grid sm:grid-cols-[350px_1fr] lg:grid-cols-[480px_1fr] xl:gap-20">
      <header>
        <Text
          as="h2"
          variant="3xl sm:4xl lg:5xl"
          className="text-emerald-700 mb-2"
        >
          Escolha um jogador da seleção
        </Text>
        <Text as="p" variant="sm sm:base" className="text-gray-500 w-10/12">
          Esse jogador irá aparecer no seu sitcker, você pode escolher qualquer
          um e até mesmo o técnico.
        </Text>
      </header>
      <div className="grid grid-cols-1 w-8/12 mx-auto sm:w-full sm:grid-cols-2 xl:grid-cols-3 gap-2">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            active={player.id === stickerData.player.id}
            onClick={() => handleSelectPlayer(player)}
          />
        ))}
      </div>
    </Container>
  );
}
