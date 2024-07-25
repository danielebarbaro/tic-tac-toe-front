import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const StartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="mt-10 mb-5 font-bold p-5 text-purple-800 rounded"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faPlay} />
      &nbsp; Start Game
    </button>
  );
};

export default StartButton;
