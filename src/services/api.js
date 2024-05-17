const API_URL = 'https://rickandmortyapi.com/api';
const API_CHARACTER_URL = API_URL + '/character'

export const fetchCharacters = async () => {
  try {
    const response = await fetch(`${API_CHARACTER_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

export const fetchRicksCharacters = async () => {
  const allRicksCharacters = [];
  try {
    for (let page = 1; page <= 6; page++) {
      const response = await fetch(`${API_CHARACTER_URL}/?page=${page}&name=rick`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      allRicksCharacters.push(...data.results);
    }
    return allRicksCharacters;
  } catch (error) {
    console.error('Error fetching Ricks:', error);
    return [];
  }
};

export const fetchMortysCharacters = async () => {
  const allMortysCharacters = [];
  try {
    for (let page = 1; page <= 4; page++) {
      const response = await fetch(`${API_CHARACTER_URL}/?page=${page}&name=morty`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      allMortysCharacters.push(...data.results);
    }
    return allMortysCharacters;
  } catch (error) {
    console.error('Error fetching Mortys:', error);
    return [];
  }
};