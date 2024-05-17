import "./Game.css";
import { useContext, useEffect } from "react";
import { RickContext } from "../../providers/RickContext";
import CharacterGuessCard from "../../components/CharacterGuessCard/CharacterGuessCard";
import GameOver from "../../components/GameOver/GameOver";
import { useReducer } from "react";
import { INITIAL_STATE, reducer } from "../../reducers/Game.reducer";
import { getRandomRicks } from "../../functions/getRandomRicks";
import { checkCorrectRick } from "../../functions/checkCorrectRick";
import { startNewGame } from "../../functions/startNewGame";

const Game = () => {
  const ricksCharacters = useContext(RickContext);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { rickRandomOptions, correctRick, gameOver, points } = state;

  useEffect(() => {
    if (ricksCharacters.length > 0) {
      getRandomRicks(ricksCharacters, dispatch);
    }
  }, [ricksCharacters]);

  return (
    <div className="Game">
      <div className="game-text-container">
        <h1>Rick and Morty Game</h1>
        <h2>They are all Rick, but...</h2>
        <h3>Who is <span>{correctRick && correctRick.name}</span>?</h3>
      </div>
      {!gameOver && (
        <section className="game-container">
          <div className="game-values">
            <p className="game-value">Points: {points}</p>
          </div>
          <div className="character-list">
            {rickRandomOptions.map((rick) => (
              <CharacterGuessCard
                key={rick.id}
                character={rick}
                onClick={() =>
                  checkCorrectRick(rick, correctRick, ricksCharacters, dispatch)
                }
              />
            ))}
          </div>
        </section>
      )}
      {gameOver && (
        <GameOver onClick={() => startNewGame(dispatch, ricksCharacters)} />
      )}
    </div>
  );
};

export default Game;
