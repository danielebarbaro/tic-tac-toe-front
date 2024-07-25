const StatusBox = ({ status }: { status: any | null }) => {
  return (
    <div className="w-full items-center justify-center ">
      <h4 className="text-xl font-semibold text-center text-game-secondary p-5">
        {status?.winner
          ? status.winner === 1
            ? 'Player X wins!'
            : 'Player O wins!'
          : status?.isGameOver
            ? 'Tie!'
            : status?.nextPlayer === 1
              ? "Player X's turn"
              : "Player O's turn"}
      </h4>
    </div>
  );
};
export default StatusBox;
