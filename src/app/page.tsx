'use client';

import React from "react";
import StatusBox from "@/components/StatusBox";
import Header from "@/components/Header";
import StartButton from "@/components/StartButton";
import Board from "@/components/Board";
import {GameController} from "@/controllers/GameController";

export default function Home() {
    const {current, isGameOver, status, handleClick, resetGame} = GameController();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center min-h-screen">
          <Header />
          <div className="flex flex-col items-center justify-center ">
              <div className='flex items-center justify-between w-full px-5'>
                  <StatusBox status={status} />
                  <StartButton onClick={resetGame} />
              </div>
              <Board cells={current} onClick={(i) => handleClick(i)} isGameOver={isGameOver} />
          </div>
      </div>
    </main>
  );
}
