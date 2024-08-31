import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import './GameOver.css'

const GameOver = ({ points, bestScores, charName, startNewGame, dispatch, UnSelectedCharacters, allCharacters }) => {
  return (
    <div className="game-over-wrapper">
      <div className="game-over-container texture-text">
        <h2>GAME OVER</h2>
        <div className="game-over-image-container">
          <img src="/jerry_gif.webp" alt="Game Over" />
        </div>
        <p className="game-over-points">Points: {points}</p>
        <p className="game-over-points-best-score">
          Best score: {bestScores[charName]}
        </p>
      </div>
      <ButtonsContainer
        restart={true}
        startNewGame={startNewGame}
        dispatch={dispatch}
        UnSelectedCharacters={UnSelectedCharacters}
        allCharacters={allCharacters}
      />
    </div>
  );
};

export default GameOver;
