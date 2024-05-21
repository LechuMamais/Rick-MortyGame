import { GameActions } from "../actions/Game.actions";

export const INITIAL_STATE = {
  characterRandomOptions: [],
  correctCharacter: {},
  gameOver: false,
  points: 0,
  win: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GameActions.START_GAME:
      return INITIAL_STATE;
    case GameActions.SET_CHARACTER_RANDOM_OPTIONS:
      return { ...state, characterRandomOptions: action.payload };
    case GameActions.SET_CORRECT_CHARACTER:
      return { ...state, correctCharacter: action.payload };
    case GameActions.INCREMENT_POINTS:
      return { ...state, points: state.points + 1 };
    case GameActions.SET_GAME_OVER:
      return { ...state, gameOver: action.payload };
    case GameActions.SET_WIN:
      return { ...state, win: action.payload };
    default:
      charName;
      return state;
  }
};
