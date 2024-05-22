import { Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import { GameProvider } from "./providers/GameProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Game/:charName" element={<Game />} />
        </Routes>
        <Footer/>
      </div>
    </GameProvider>
  );
}

export default App;
