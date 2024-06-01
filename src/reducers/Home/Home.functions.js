import { splitFirstName } from "../../functions/splitFirstName";
import { HomeActions } from "../../reducers/Home/Home.actions";
import { fetchCharacters } from "../../services/api";


export const loadMainCharacters = async (dispatch) => {
    try {
        const mainChars = await fetchCharacters();
        const mainCharsSliced = mainChars.slice(0, 5)
        dispatch({
            type: HomeActions.SET_MAIN_CHARACTERS,
            payload: mainCharsSliced,
        });
    } catch (err) {
        dispatch({
            type: HomeActions.SET_ERROR,
            payload: "Failed to fetch characters" + err,
        });
    } 
};

export const onMainCardClick = (character, navigate) => {
    const charName = splitFirstName(character.name);
    navigate(`/Game/${charName}`);
};