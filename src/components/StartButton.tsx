import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const StartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full items-center justify-center pt-10">
      <button
        className="font-bold p-4 text-white rounded bg-game-primary hover:bg-game-secondary hover:text-white transition-all duration-300 w-full"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faPlay} width={10} height={10} /> Start a new
        Game
      </button>
    </div>
  );
};

export default StartButton;
