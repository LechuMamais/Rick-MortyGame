export const removeSelectedCharacterFromUnSelectedCharacters = (correctCharacter, UnSelectedCharacters, setUnSelectedCharacters) =>{
    const newUnSelectedCharacters = UnSelectedCharacters.filter(character => character.id != correctCharacter.id);
    setUnSelectedCharacters(newUnSelectedCharacters);
}