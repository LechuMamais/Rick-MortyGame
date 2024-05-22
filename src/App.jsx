import { Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import { GameProvider } from "./providers/GameProvider";
//import { RickProvider } from "./providers/RickContext";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Game/:charName" element={<Game />} />
        </Routes>
      </div>
    </GameProvider>
  );
}

export default App;
