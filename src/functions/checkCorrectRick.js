import { GameActions } from "../actions/Game.actions";
import { getRandomRicks } from "./getRandomRicks";

export const checkCorrectRick = ( selectedRick, correctRick, ricksCharacters, dispatch) => {
    if (selectedRick.id === correctRick.id) {
      dispatch({type: GameActions.INCREMENT_POINTS})
      getRandomRicks(ricksCharacters, dispatch);
    } else {
      dispatch({type: 'SET_GAME_OVER', payload: true})
    }
  };