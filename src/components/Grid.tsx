import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import Tile from "./Tile";

const Grid = () => {
  const { grid } = usePathfinding();

  return (
    <div
      className={twMerge(
        // base classes
        "flex flex-col items-center justify-center border-sky-300",
        // control grid height
        `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        // control grid width
        `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`,
      )}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => {
            const { row, col, isEnd, isStart, isPath, isTraversed, isWall } =
              tile;
            return (
              <Tile
                key={tileIndex}
                row={row}
                col={col}
                isStart={isStart}
                isEnd={isEnd}
                isPath={isPath}
                isTraversed={isTraversed}
                isWall={isWall}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
