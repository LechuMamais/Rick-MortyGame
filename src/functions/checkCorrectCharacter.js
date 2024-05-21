import { GameActions } from "../actions/Game.actions";
import { getRandomCharacters } from "./getRandomCharacters";
import { removeCorrectCharacterFromAllCharacters } from "./removeCorrectCharacterFromAllCharacters";

export const checkCorrectCharacter = ( selectedCharacter, correctCharacter, allCharacters, setAllCharacters, dispatch) => {
    if (selectedCharacter.id === correctCharacter.id) {
      dispatch({type: GameActions.INCREMENT_POINTS});
      removeCorrectCharacterFromAllCharacters(correctCharacter, allCharacters, setAllCharacters);
      if(allCharacters.length<=3){
        dispatch({type: GameActions.SET_WIN, payload: true})
      }else{
        getRandomCharacters(allCharacters, dispatch);
      }
    } else {
      dispatch({type: GameActions.SET_GAME_OVER, payload: true})
    }
  };