export type GameState = {
    history: (number | null)[][];
    stepNumber: number;
    xIsNext: boolean;
    winner: string | null;
    isTie: boolean;
};

export const initialGameState: GameState = {
    history: [Array(9).fill(0)],
    stepNumber: 0,
    xIsNext: true,
    winner: null,
    isTie: false,
};

export const getMove = (squares: (number | null)[]): {winner: string | null, tie: boolean} => {

    return {winner: null, tie: false};
}