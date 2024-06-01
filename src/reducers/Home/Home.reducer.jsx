import { HomeActions } from "./Home.actions";

export const INITIAL_STATE = {
  mainCharacters: [],
  loading: true,
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case HomeActions.SET_MAIN_CHARACTERS:
      return { ...state, mainCharacters: action.payload, loading: false };

    case HomeActions.SET_ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
};
