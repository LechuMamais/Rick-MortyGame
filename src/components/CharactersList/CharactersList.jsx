import "./CharactersList.css";
import CardSkeletorLoader from "../CardSkeletorLoader/CardSkeletorLoader";
import CharacterGuessCard from "../CharacterGuessCard/CharacterGuessCard";

const CharactersList = ({
  loading,
  characterRandomOptions,
  handleGuessCardSelection,
  correctCharacter,
  dispatch,
  UnSelectedCharacters,
  charName,
  points,
  bestScores,
  setBestScores,
}) => {
  return (
    <div className="character-list">
      {loading ? (
        <div className="carousel-container">
          <div className="characters-carousel-container">
            <div className="characters-carousel">
              <CardSkeletorLoader />
              <CardSkeletorLoader />
              <CardSkeletorLoader />
            </div>
          </div>
        </div>
      ) : (
        characterRandomOptions?.map((character) => (
          <CharacterGuessCard
            key={character.id}
            character={character}
            onClick={() =>
              handleGuessCardSelection(
                character,
                correctCharacter,
                dispatch,
                UnSelectedCharacters,
                charName,
                points,
                bestScores,
                setBestScores
              )
            }
          />
        ))
      )}
    </div>
  );
};

export default CharactersList;
