import {useState} from "react";
import {initialGameState, GameState, getMove} from "@/models/GameModel";

export const GameController = () => {
    const [gameState, setGameState] = useState<GameState>(initialGameState);

    const current = gameState.history[gameState.stepNumber];
    const isGameOver = false;
    const resetGame = () => {
        setGameState(initialGameState);
    };

    const handleClick = (i: number) => {
        const history = gameState.history.slice(0, gameState.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.slice();
        if (gameState.winner || squares[i]) {
            return;
        }
        squares[i] = gameState.xIsNext ? 1 : 2;
        const {winner, tie} = getMove(squares);
        setGameState({
            history: history.concat([squares]),
            stepNumber: history.length,
            xIsNext: !gameState.xIsNext,
            winner: winner,
            isTie: tie,
        });
    };
    let status;
    if (gameState.winner) {
        status = `Winner: ${gameState.winner}`;
    }
    else if (gameState.isTie) {
        status = 'It\'s a tie!';
    }
    else {
        status = `Next player: ${gameState.xIsNext ? 'X' : 'O'}`;
    }

    return {current, isGameOver, status, handleClick, resetGame};
}