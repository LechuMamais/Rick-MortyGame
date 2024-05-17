import { GameActions } from "../actions/Game.actions";

export const getRandomRicks = (ricksCharacters, dispatch) => {
    const randomRicks = [];
    while (randomRicks.length < 3) {
      const randomIndex = Math.floor(Math.random() * ricksCharacters.length);
      const randomRick = ricksCharacters[randomIndex];
      if (!randomRicks.includes(randomRick)) {
        randomRicks.push(randomRick);
      }
    }
    dispatch({type: GameActions.SET_RICK_RANDOM_OPTIONS, payload: randomRicks});
    const randomRickIndex = Math.floor(Math.random() * randomRicks.length);
    dispatch({type: GameActions.SET_CORRECT_RICK, payload: randomRicks[randomRickIndex]});
  };