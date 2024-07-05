import { usePathfinding } from "../hooks/usePathfinding";
import { MAZES } from "../utils/constants";
import Select from "./Select";

const Nav = () => {
  const { maze } = usePathfinding();

  return (
    <div className="flex min-h-[4.5rem] items-center justify-center border-b px-0 shadow-gray-600 sm:px-5">
      <div className="flex w-full items-center justify-center sm:w-[52rem] lg:justify-between">
        <h1 className="hidden w-[40%] pl-1 text-2xl lg:flex">
          Pathfinding Visualizer
        </h1>

        <div className="flex flex-col items-center justify-start space-y-3 py-4 sm:flex-row sm:items-end sm:justify-between sm:space-x-4 sm:space-y-0 sm:py-0">
          <Select label="Maze" value={maze} options={MAZES} onChange={(e) => {
            // handle generating maze
          }} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
