const StatusBox = ({ status }: { status: any | null }) => {
  return (
    <div className="w-full text-xl font-semibold p-5 items-center justify-center">
      {status?.winner
        ? status.winner === 1
          ? 'Player X wins!'
          : 'Player O wins!'
        : status?.isGameOver
          ? 'Tie!'
          : status?.nextPlayer === 1
            ? "Player X's turn"
            : "Player O's turn"}
    </div>
  );
};
export default StatusBox;
