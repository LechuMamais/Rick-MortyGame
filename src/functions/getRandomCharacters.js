import { GameActions } from "../actions/Game.actions";

export const getRandomCharacters = (allCharacters, dispatch) => {
  const randomCharacters = [];
  while (randomCharacters.length < 3) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    const randomCharacter = allCharacters[randomIndex];
    if (!randomCharacters.some(character => character.id === randomCharacter.id)) {
      randomCharacters.push(randomCharacter);
    }
  }
  dispatch({ type: GameActions.SET_CHARACTER_RANDOM_OPTIONS, payload: randomCharacters });
  const randomCharacterIndex = Math.floor(Math.random() * randomCharacters.length);
  dispatch({ type: GameActions.SET_CORRECT_CHARACTER, payload: randomCharacters[randomCharacterIndex] });
};
