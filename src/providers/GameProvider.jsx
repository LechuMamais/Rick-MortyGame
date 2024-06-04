import React, { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [bestScores, setBestScores] = useState({
    Rick: 0,
    Morty: 0,
    Summer: 0,
    Beth: 0,
    Jerry: 0,
  });

  const charactersArray = ["Rick", "Morty", "Summer", "Beth", "Jerry"];

  useEffect(() => {
    const storedScores = {};
    charactersArray.forEach((character) => {
      const bestScore = localStorage.getItem(character);
      if (bestScore !== null) {
        storedScores[character] = parseInt(bestScore, 10);
      } else {
        storedScores[character] = 0;
      }
    });
    setBestScores(storedScores);
  }, []);

  useEffect(() => {
    charactersArray.forEach((character) => {
      localStorage.setItem(character, bestScores[character]);
    });
  }, [bestScores]);

  const updateBestScore = (character, score) => {
    setBestScores((prevScores) => {
      const newScores = { ...prevScores, [character]: score };
      return newScores;
    });
  };

  return (
    <GameContext.Provider value={{ bestScores, setBestScores: updateBestScore }}>
      {children}
    </GameContext.Provider>
  );
};
