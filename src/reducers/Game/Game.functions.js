import { fetchCharactersByName } from "../../services/api";
import { GameActions } from "./Game.actions";

export const getCharactersByName = async (charName) => {
    const allCharacters = await fetchCharactersByName(charName);
    return allCharacters;
};

export const fetchAndSetCharacters = async (charName, dispatch) => {
    if (charName) {
        const allCharacters = await getCharactersByName(charName);
        dispatch({
            type: GameActions.GET_ALL_CHARACTERS,
            payload: allCharacters,
        });
    }
};

export const startNewGame = (dispatch, UnSelectedCharacters, allCharacters) => {
    dispatch({ type: GameActions.START_GAME, payload: allCharacters });
    dispatch({ type: GameActions.RESET_UNSELECTED_CHARACTERS, payload: allCharacters });
    setRandomAndCorrectCharacters(UnSelectedCharacters, dispatch);
};

export const setRandomAndCorrectCharacters = (UnSelectedCharacters, dispatch) => {
    const randomCharacters = [];
    while (randomCharacters.length < 3) {
        const randomIndex = Math.floor(Math.random() * UnSelectedCharacters.length);
        const randomCharacter = UnSelectedCharacters[randomIndex];
        if (!randomCharacters.some(character => character.id === randomCharacter.id) && !randomCharacters.some(character => character.name === randomCharacter.name)) {
            randomCharacters.push(randomCharacter);
        }
    }
    dispatch({ type: GameActions.SET_CHARACTER_RANDOM_OPTIONS, payload: randomCharacters });
    const randomCharacterIndex = Math.floor(Math.random() * randomCharacters.length);
    dispatch({ type: GameActions.SET_CORRECT_CHARACTER, payload: randomCharacters[randomCharacterIndex] });
};

export const removeSelectedCharacterFromUnSelectedCharacters = (correctCharacter, UnSelectedCharacters, dispatch) => {
    const newUnSelectedCharacters = UnSelectedCharacters.filter(character => character.id != correctCharacter.id);
    dispatch({ type: GameActions.REMOVE_SELECTED_CHARACTER_FROM_UNSELECTED_CHARACTERS, payload: newUnSelectedCharacters });
}

export const checkWin = (UnSelectedCharacters) => { return UnSelectedCharacters.length <= 4 }

export const checkCorrectCharacter = (selectedCharacter, correctCharacter) => { return selectedCharacter.id === correctCharacter.id }

export const handleGuessCardSelection = (selectedCharacter, correctCharacter, dispatch, UnSelectedCharacters, charName, actualScore, bestScores, setBestScores) => {
    if (checkCorrectCharacter(selectedCharacter, correctCharacter)) {
        dispatch({ type: GameActions.INCREMENT_POINTS });
        removeSelectedCharacterFromUnSelectedCharacters(correctCharacter, UnSelectedCharacters, dispatch);
        updateBestScore(charName, actualScore + 1, bestScores, setBestScores);
        if (checkWin(UnSelectedCharacters)) {
            dispatch({ type: GameActions.SET_WIN, payload: true });
        } else {
            setRandomAndCorrectCharacters(UnSelectedCharacters, dispatch);
        }
    } else {
        updateBestScore(charName, actualScore, bestScores, setBestScores);
        dispatch({ type: GameActions.SET_GAME_OVER, payload: true })
    }
};

export const updateBestScore = (charName, actualScore, bestScores, setBestScores) => {
    if (actualScore > bestScores[charName]) {
        setBestScores(bestScores, bestScores[charName] = actualScore);
    }
}