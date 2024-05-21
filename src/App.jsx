import { Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import { SelectedMainCharacterProvider } from "./providers/SelectedMainCharacterContext";
//import { GameProvider } from "./providers/GameProvider";
//import { RickProvider } from "./providers/RickContext";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Game/:charName"
          element={
            <SelectedMainCharacterProvider>
              <Game />
            </SelectedMainCharacterProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
