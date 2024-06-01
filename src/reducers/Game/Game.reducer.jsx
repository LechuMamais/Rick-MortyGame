import { GameActions } from "./Game.actions";

export const INITIAL_STATE = {
  loading: true,
  allCharacters: [],
  UnSelectedCharacters: [],
  characterRandomOptions: [],
  correctCharacter: {},
  gameOver: false,
  points: 0,
  win: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GameActions.SET_LOADING:
      return { ...state, loading: action.payload };
    case GameActions.START_GAME:
      return {
        ...INITIAL_STATE,
        loading: false,
        allCharacters: action.payload,
      };
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
    case GameActions.GET_ALL_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };
    case GameActions.RESET_UNSELECTED_CHARACTERS:
      return {
        ...state,
        UnSelectedCharacters: action.payload,
      };
    case GameActions.REMOVE_SELECTED_CHARACTER_FROM_UNSELECTED_CHARACTERS:
      return {
        ...state,
        UnSelectedCharacters: action.payload,
      };
    default:
      return state;
  }
};
