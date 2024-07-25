import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faO, faX } from '@fortawesome/free-solid-svg-icons';

const Player = ({
  value,
  onClick,
}: {
  value: number | null;
  onClick: () => void;
}) => {
  return (
    <button
      className="w-20 h-20 rounded border-gray-500 text-2xl font-bold bg-slate-100 hover:bg-slate-300 transition-all duration-300"
      onClick={onClick}
    >
      {value === 1 && (
        <FontAwesomeIcon icon={faX} className="text-game-primary text-4xl" />
      )}
      {value === 2 && (
        <FontAwesomeIcon icon={faO} className="text-game-secondary text-4xl" />
      )}
    </button>
  );
};

export default Player;
