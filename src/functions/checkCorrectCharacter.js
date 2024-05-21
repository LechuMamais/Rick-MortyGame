import { GameActions } from "../actions/Game.actions";
import { getRandomCharacters } from "./getRandomCharacters";
import { removeSelectedCharacterFromUnSelectedCharacters } from "./removeSelectedCharacterFromUnSelectedCharacters";

export const checkWin = (UnSelectedCharacters) => { return UnSelectedCharacters.length <= 4 }

export const checkCorrectCharacter = (selectedCharacter, correctCharacter) => { return selectedCharacter.id === correctCharacter.id }

export const handleGuessCardSelection = (selectedCharacter, correctCharacter, dispatch, UnSelectedCharacters, setUnSelectedCharacters) => {
  if (checkCorrectCharacter(selectedCharacter, correctCharacter)) {
    dispatch({ type: GameActions.INCREMENT_POINTS });
    removeSelectedCharacterFromUnSelectedCharacters(correctCharacter, UnSelectedCharacters, setUnSelectedCharacters);
    if (checkWin(UnSelectedCharacters)) {
      dispatch({ type: GameActions.SET_WIN, payload: true })
    } else {
      getRandomCharacters(UnSelectedCharacters, dispatch);
    }
  } else {
    dispatch({ type: GameActions.SET_GAME_OVER, payload: true })
  }
};