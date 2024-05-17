import './CharacterGuessCard.css';

export const CharacterGuessCard = ({ character, onClick }) => (
  <div className="character-guess-card" onClick={onClick}>
    <img src={character.image} alt={character.status} />
  </div>
);

export default CharacterGuessCard;