import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faO, faX} from "@fortawesome/free-solid-svg-icons";

const Cell = ({value, onClick, isGameOver}: { value: number | null, onClick: () => void, isGameOver: boolean }) => {
    return (
        <button
            className="w-20 h-20 rounded border-gray-500 text-2xl font-bold flex items-center justify-center bg-slate-200 hover:bg-gray-800 transition-all duration-300"
            onClick={onClick}
            disabled={isGameOver || value !== 0}
        >
            {value === 1 && <FontAwesomeIcon icon={faX} className="text-yellow-600 text-4xl"/>}
            {value === 2 && <FontAwesomeIcon icon={faO} className="text-cyan-600 text-4xl"/>}
        </button>
    );
}

export default Cell;