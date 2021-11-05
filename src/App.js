import Player from "./components/Player";
import tracks from "./tracks";

function App() {
  return (
    <>
      <Player songs={tracks} />
    </>
  );
}

export default App;
