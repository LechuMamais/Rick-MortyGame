import React, { createContext, useState, useEffect } from 'react';
import { fetchCharactersByName } from '../services/api';
import { useParams } from 'react-router-dom';

export const SelectedMainCharacterContext = createContext();

export const SelectedMainCharacterProvider = ({ children }) => {
  const {charName} = useParams()
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    const loadCharactersByName = async (charName) => {
      const chars = await fetchCharactersByName(charName);
      setAllCharacters(chars);
    };
    if (charName) {
      loadCharactersByName(charName);
    }
  }, [charName]);

  return (
    <SelectedMainCharacterContext.Provider value={{allCharacters, setAllCharacters, charName}}>
      {children}
    </SelectedMainCharacterContext.Provider>
  );
};
