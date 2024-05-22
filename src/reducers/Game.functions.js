import { GameActions } from "./Game.actions";

export const startNewGame = (dispatch, UnSelectedCharacters) => {
    dispatch({ type: GameActions.START_GAME });
    getRandomCharacters(UnSelectedCharacters, dispatch);
};

export const getRandomCharacters = (UnSelectedCharacters, dispatch) => {
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

export const removeSelectedCharacterFromUnSelectedCharacters = (correctCharacter, UnSelectedCharacters, setUnSelectedCharacters) => {
    const newUnSelectedCharacters = UnSelectedCharacters.filter(character => character.id != correctCharacter.id);
    setUnSelectedCharacters(newUnSelectedCharacters);
}

export const checkWin = (UnSelectedCharacters) => { return UnSelectedCharacters.length <= 4 }

export const checkCorrectCharacter = (selectedCharacter, correctCharacter) => { return selectedCharacter.id === correctCharacter.id }

export const handleGuessCardSelection = (selectedCharacter, correctCharacter, dispatch, UnSelectedCharacters, setUnSelectedCharacters) => {
    if (checkCorrectCharacter(selectedCharacter, correctCharacter)) {
        dispatch({ type: GameActions.INCREMENT_POINTS });
        removeSelectedCharacterFromUnSelectedCharacters(correctCharacter, UnSelectedCharacters, setUnSelectedCharacters);
        if (checkWin(UnSelectedCharacters)) {
            dispatch({ type: GameActions.SET_WIN, payload: true })
        } else {
            getRandomCharacters(UnSelectedCharacters, dispatch);
        }
    } else {
        dispatch({ type: GameActions.SET_GAME_OVER, payload: true })
    }
};