import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

const PlayButton = ({
  handleRunVisualizer,
  isDisabled,
  isGraphVisualized,
}: {
  handleRunVisualizer: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
  isGraphVisualized: boolean;
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={handleRunVisualizer}
      className="rounded-full border-none bg-green-500 p-2.5 shadow-md transition ease-in hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-30 active:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
    >
      {isGraphVisualized ? (
        <GrPowerReset className="h-5 w-5" />
      ) : (
        <BsFillPlayFill className="h-5 w-5" />
      )}
    </button>
  );
};

export default PlayButton;
