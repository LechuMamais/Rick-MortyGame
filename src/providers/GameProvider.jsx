import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [bestScores, setBestScores] = useState({
    Rick: 0,
    Morty: 0,
    Summer: 0,
    Beth: 0,
    Jerry: 0,
  });

  return (
    <GameContext.Provider value={{ bestScores, setBestScores }}>
      {children}
    </GameContext.Provider>
  );
};
