import { GameActions } from "../actions/Game.actions";
import { getRandomCharacters } from "./getRandomCharacters";

export const startNewGame = (dispatch, allCharacters) => {
    dispatch({type: GameActions.START_GAME});
    getRandomCharacters(allCharacters, dispatch);
  };