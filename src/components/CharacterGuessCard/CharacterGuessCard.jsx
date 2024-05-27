import "./CharacterGuessCard.css";

const handleDragStart = (e) => e.preventDefault();

export const CharacterGuessCard = ({ character, onClick, name, bestScore }) => (
  <div className="character-guess-card" onClick={onClick} onDragStart={handleDragStart}
  role="presentation">
    <img src={character.image} alt={character.status} />
    <div className="character-guess-card-text-container">
      {name && (
        <div className="character-guess-card-name-container">
          <h2>{name}</h2>
        </div>
      )}
      {bestScore != null && (
        <div className="character-guess-card-score-container">
          <h2>Best Score: {bestScore}</h2>
        </div>
      )}
    </div>
  </div>
);

export default CharacterGuessCard;
