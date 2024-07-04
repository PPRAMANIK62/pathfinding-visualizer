import { PathfindingProvider } from "./context/PathfindingContext";

const App = () => {
  return (
    <PathfindingProvider>
      <div className="h-screen w-screen bg-blue-500 text-3xl font-bold underline">
        Hello world
      </div>
    </PathfindingProvider>
  );
};

export default App;
