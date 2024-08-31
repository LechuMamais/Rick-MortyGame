import { useEffect } from "react";
import { GameActions } from "../reducers/Game/Game.actions";
import { fetchAndSetCharacters, setRandomAndCorrectCharacters } from "../reducers/Game/Game.functions";


const useGameEffects = (charName, dispatch, allCharacters, UnSelectedCharacters) => {
  useEffect(() => {
    dispatch({
      type: GameActions.START_GAME,
    });
    fetchAndSetCharacters(charName, dispatch);
  }, [charName, dispatch]);

  useEffect(() => {
    if (allCharacters && allCharacters.length > 0) {
      dispatch({
        type: GameActions.RESET_UNSELECTED_CHARACTERS,
        payload: allCharacters,
      });
    }
  }, [allCharacters, dispatch]);

  useEffect(() => {
    if (UnSelectedCharacters && UnSelectedCharacters.length > 0) {
      setRandomAndCorrectCharacters(UnSelectedCharacters, dispatch);
    }
  }, [UnSelectedCharacters, dispatch]);
};

export default useGameEffects;
