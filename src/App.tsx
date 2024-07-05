import Grid from "./components/Grid";
import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

const App = () => {
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="flex h-screen w-screen flex-col">
            <Grid />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
};

export default App;
