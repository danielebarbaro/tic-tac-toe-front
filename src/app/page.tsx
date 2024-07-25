'use client';

import React, { useCallback, useEffect, useState } from 'react';
import StatusBox from '@/components/StatusBox';
import Header from '@/components/Header';
import StartButton from '@/components/StartButton';
import Board from '@/components/Board';
import { useGetGame } from '@/hooks/useGetGame';
import { useCreateGame } from '@/hooks/useCreateGame';
import { useCreateMove } from '@/hooks/useCreateMove';
import Player from '@/components/Player';

export default function Home() {
  const [gameId, setGameId] = useState<string>();
  const [initialPlayer, setInitialPlayer] = useState<number>();

  const { data: game } = useGetGame(gameId);
  const { mutateAsync: createGame } = useCreateGame();
  const {
    data: lastMove,
    mutateAsync: createMove,
    reset: resetLastMove,
  } = useCreateMove(gameId);

  const startGame = useCallback(async () => {
    resetLastMove();
    setInitialPlayer(undefined);
    const newGame = await createGame();
    setGameId(newGame.id);
  }, [createGame, resetLastMove]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  // console.log('game', game);
  // console.log('lastMove', lastMove);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Header />
        <div className="flex flex-col p-5 bg-slate-100  ">
          {game && game.status === 'NEW' && !initialPlayer && (
            <>
              <h3 className="text-xl font-bold text-center justify-center pt-5 min-h-20">
                Choose your player
              </h3>

              <div className="grid grid-cols-2 gap-4 p-5 rounded bg-slate-400 mb-10">
                <Player
                  key="playerOne"
                  value={1}
                  onClick={() => setInitialPlayer(1)}
                />

                <Player
                  key="playerTwo"
                  value={2}
                  onClick={() => setInitialPlayer(2)}
                />
              </div>
            </>
          )}

          <div className="flex w-full min-h-20 ">
            {lastMove && <StatusBox status={lastMove} />}
          </div>

          {initialPlayer && (
            <>
              <Board
                cells={game?.board}
                onClick={i =>
                  createMove({
                    player: lastMove?.nextPlayer || initialPlayer,
                    position: i + 1,
                  })
                }
                isGameOver={lastMove?.isGameOver}
                winner={lastMove?.winner}
              />
              <div className="flex w-full">
                <StartButton onClick={startGame} />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
