import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(0);

  return (
    <GameContext.Provider value={{points, setPoints, level, setLevel}}>
      {children}
    </GameContext.Provider>
  );
};
