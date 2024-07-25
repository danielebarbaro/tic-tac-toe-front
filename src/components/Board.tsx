import Cell from '@/components/Cell';
import Confetti from 'react-confetti';

const emptyBoard = Array(9).fill(0);

const Board = ({
  cells = emptyBoard,
  onClick,
  winner,
  isGameOver,
}: {
  cells: number[];
  onClick: (i: number) => void;
  winner: number | null;
  isGameOver: boolean;
}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-5 rounded bg-slate-400">
        {cells.map((value, i) => (
          <Cell
            key={i}
            value={value}
            onClick={() => onClick(i)}
            isGameOver={isGameOver}
          />
        ))}
      </div>
      {isGameOver && winner !== null && <Confetti />}
    </>
  );
};

export default Board;
