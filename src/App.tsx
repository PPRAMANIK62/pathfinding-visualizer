import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

const App = () => {
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen bg-blue-500 text-3xl font-bold underline">
            Hello world
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
};

export default App;
