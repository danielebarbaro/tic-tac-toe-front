import Cell from "@/components/Cell";

const Board = ({cells, onClick, isGameOver} : { cells: number | null, onClick: (i: number) => void, isGameOver: boolean }) => {
    return (
        <div className="grid grid-cols-3 gap-4 p-5 rounded bg-slate-400 mb-10">
            {cells.map((value, i) => (
                <Cell key={i} value={value} onClick={() => onClick(i)} isGameOver={isGameOver} />
            ))}
        </div>
    )
}

export default Board;