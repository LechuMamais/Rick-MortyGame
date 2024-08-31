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

export const fetchCharactersByName = async (name) => {
  const allCharacters = [];
  let url = `${API_CHARACTER_URL}/?name=${name}`;
  
  try {
    while (url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      allCharacters.push(...data.results);
      url = data.info.next;
    }
    return allCharacters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};
