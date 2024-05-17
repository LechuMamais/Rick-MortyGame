import { GameActions } from "../actions/Game.actions";

export const INITIAL_STATE = {
  rickRandomOptions: [],
  correctRick: {},
  gameOver: false,
  points: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GameActions.START_GAME:
      return INITIAL_STATE;
    case GameActions.SET_RICK_RANDOM_OPTIONS:
      return { ...state, rickRandomOptions: action.payload };
    case GameActions.SET_CORRECT_RICK:
      return { ...state, correctRick: action.payload };
    case GameActions.INCREMENT_POINTS:
      return { ...state, points: state.points + 1 };
    case GameActions.SET_GAME_OVER:
      return { ...state, gameOver: action.payload };
    default:
      return state;
  }
};
