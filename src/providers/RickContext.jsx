import React, { createContext, useState, useEffect } from 'react';
import { fetchRicksCharacters } from '../services/api';

export const RickContext = createContext();

export const RickProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadRickCharacters = async () => {
      const rickChars = await fetchRicksCharacters();
      setCharacters(rickChars);
    };
    loadRickCharacters();
  }, []);

  return (
    <RickContext.Provider value={characters}>
      {children}
    </RickContext.Provider>
  );
};
