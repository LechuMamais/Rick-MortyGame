import React, { createContext, useState, useEffect } from "react";
import { fetchCharactersByName } from "../services/api";
import { useParams } from "react-router-dom";

export const SelectedMainCharacterContext = createContext();

export const SelectedMainCharacterProvider = ({ children }) => {
  const { charName } = useParams();
  const [allCharacters, setAllCharacters] = useState([]);
  const [UnSelectedCharacters, setUnSelectedCharacters] = useState([]);

  useEffect(() => {
    const loadCharactersByName = async (charName) => {
      const chars = await fetchCharactersByName(charName);
      setAllCharacters(chars);
    };
    if (charName) {
      loadCharactersByName(charName);
    }
  }, [charName]);

  useEffect(() => {
    if (allCharacters) {
      setUnSelectedCharacters(allCharacters);
      console.log("Unselected characters", UnSelectedCharacters);
      console.log("all characters", allCharacters);
    }
  }, [allCharacters]);

  return (
    <SelectedMainCharacterContext.Provider
      value={{
        allCharacters,
        charName,
        UnSelectedCharacters,
        setUnSelectedCharacters,
      }}
    >
      {children}
    </SelectedMainCharacterContext.Provider>
  );
};
