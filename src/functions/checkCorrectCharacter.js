import { GameActions } from "../actions/Game.actions";
import { getRandomCharacters } from "./getRandomCharacters";

export const checkCorrectCharacter = ( selectedCharacter, correctCharacter, allCharacters, dispatch) => {
    if (selectedCharacter.id === correctCharacter.id) {
      dispatch({type: GameActions.INCREMENT_POINTS})
      getRandomCharacters(allCharacters, dispatch);
    } else {
      dispatch({type: 'SET_GAME_OVER', payload: true})
    }
  };