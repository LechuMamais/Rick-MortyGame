import { GameActions } from "../actions/Game.actions";
import { getRandomRicks } from "./getRandomRicks";

export const startNewGame = (dispatch, ricksCharacters) => {
    dispatch({type: GameActions.START_GAME});
    getRandomRicks(ricksCharacters, dispatch);
  };