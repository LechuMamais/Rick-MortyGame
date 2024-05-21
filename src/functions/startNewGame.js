import { GameActions } from "../actions/Game.actions";
import { getRandomCharacters } from "./getRandomCharacters";

export const startNewGame = (dispatch, UnSelectedCharacters) => {
  console.log("Starting new game");
    dispatch({type: GameActions.START_GAME});
    getRandomCharacters(UnSelectedCharacters, dispatch);
  };