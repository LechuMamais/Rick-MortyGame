export const removeCorrectCharacterFromAllCharacters = (correctCharacter, allCharacters, setAllCharacters) =>{
    const newAllCharacters = allCharacters.filter(character => character.id != correctCharacter.id);
    console.log(newAllCharacters);
    setAllCharacters(newAllCharacters);
}