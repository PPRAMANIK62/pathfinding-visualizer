import { SPEEDS, TILE_STYLE } from "./constants";
import { sleep } from "./helpers";
import { GridType, SpeedType } from "./types";

const destroyCell = async (
  grid: GridType,
  row: number,
  col: number,
  speed: SpeedType,
) => {
  grid[row][col].isWall = false;
  document.getElementById(`${row}-${col}`)!.className = TILE_STYLE;
  await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
};

const destroyWall = async (
  grid: GridType,
  row: number,
  col: number,
  isRight: number,
  speed: SpeedType,
) => {
  if (isRight && grid[row][col + 1]) {
    await destroyCell(grid, row, col + 1, speed);
  } else if (grid[row + 1]) {
    await destroyCell(grid, row + 1, col, speed);
  } else {
    await destroyCell(grid, row, col, speed);
  }
};

export default destroyWall;
