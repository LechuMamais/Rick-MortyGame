import { Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import { GameProvider } from "./providers/GameProvider";
import { RickProvider } from "./providers/RickContext";

function App() {
  return (
    <RickProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Game" element={<Game />} />
        </Routes>
      </div>
    </RickProvider>
  );
}

export default App;
