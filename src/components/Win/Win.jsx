import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import './Win.css';

const Win = ({ charName, points, startNewGame, dispatch, UnSelectedCharacters, allCharacters }) => {
  return (
    <div className="game-win-container texture-text cloud-bg-effect">
      <h2>You are the winner!</h2>
      <h3>
        You have correctly selected all the {charName}s of the multiverse!
      </h3>
      <p className="win-points win-points-actual-score">Points: {points}</p>
      <ButtonsContainer
        restart={false}
        startNewGame={startNewGame}
        dispatch={dispatch}
        UnSelectedCharacters={UnSelectedCharacters}
        allCharacters={allCharacters}
      />
    </div>
  );
};

export default Win;
