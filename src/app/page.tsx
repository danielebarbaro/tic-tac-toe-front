'use client';

import React, { useCallback, useEffect, useState } from 'react';
import StatusBox from '@/components/StatusBox';
import Header from '@/components/Header';
import StartButton from '@/components/StartButton';
import Board from '@/components/Board';
import { useGetGame } from '@/hooks/useGetGame';
import { useCreateGame } from '@/hooks/useCreateGame';
import { useCreateMove } from '@/hooks/useCreateMove';

export default function Home() {
  const [gameId, setGameId] = useState<string>();
  const { data: game } = useGetGame(gameId);
  const { mutateAsync: createGame } = useCreateGame();
  const {
    data: lastMove,
    mutateAsync: createMove,
    reset: resetLastMove,
  } = useCreateMove(gameId);

  const startGame = useCallback(async () => {
    resetLastMove();
    const newGame = await createGame();
    setGameId(newGame.id);
  }, [createGame, resetLastMove]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const status = null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 ">
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Header />
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-center justify-between min-h-20 ">
            {lastMove && <StatusBox status={lastMove} />}
          </div>
          <Board
            cells={game?.board}
            onClick={i =>
              createMove({
                player: lastMove?.nextPlayer || 1,
                position: i + 1,
              })
            }
            isGameOver={lastMove?.isGameOver}
          />
          <div className="flex items-center justify-between ">
            <StartButton onClick={startGame} />
          </div>
        </div>
      </div>
    </main>
  );
}
