import { GameActions } from "../actions/Game.actions";

export const getRandomCharacters = (UnSelectedCharacters, dispatch) => {
  const randomCharacters = [];
  while (randomCharacters.length < 3) {
    const randomIndex = Math.floor(Math.random() * UnSelectedCharacters.length);
    const randomCharacter = UnSelectedCharacters[randomIndex];
    if (!randomCharacters.some(character => character.id === randomCharacter.id) && !randomCharacters.some(character => character.name === randomCharacter.name)) {
      randomCharacters.push(randomCharacter);
    }
  }
  dispatch({ type: GameActions.SET_CHARACTER_RANDOM_OPTIONS, payload: randomCharacters });
  const randomCharacterIndex = Math.floor(Math.random() * randomCharacters.length);
  dispatch({ type: GameActions.SET_CORRECT_CHARACTER, payload: randomCharacters[randomCharacterIndex] });
};
