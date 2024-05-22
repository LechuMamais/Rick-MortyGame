import "./CharacterGuessCard.css";

export const CharacterGuessCard = ({ character, onClick, name, bestScore }) => (
  <>
    <div className="character-guess-card" onClick={onClick}>
      <img src={character.image} alt={character.status} />
    </div>
    {name &&
    <div className="character-guess-card-name-container">
      <h2>{name}</h2>
    </div>}
    {bestScore &&
    <div className="character-guess-card-score-container">
      <h2>{bestScore}</h2>
    </div>}
    
  </>
);

export default CharacterGuessCard;
