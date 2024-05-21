import "./Game.css";
import { useContext, useEffect } from "react";
import { SelectedMainCharacterContext } from "../../providers/SelectedMainCharacterContext";
import CharacterGuessCard from "../../components/CharacterGuessCard/CharacterGuessCard";
import GameOver from "../../components/GameOver/GameOver";
import { useReducer } from "react";
import { INITIAL_STATE, reducer } from "../../reducers/Game.reducer";
import { getRandomCharacters } from "../../functions/getRandomCharacters";
import { checkCorrectCharacter } from "../../functions/checkCorrectCharacter";
import { startNewGame } from "../../functions/startNewGame";
import { Link } from "react-router-dom";

const Game = () => {
  const { allCharacters, charName } = useContext(SelectedMainCharacterContext);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { characterRandomOptions, correctCharacter, gameOver, points } = state;

  useEffect(() => {
    if (allCharacters.length > 0) {
      getRandomCharacters(allCharacters, dispatch);
    }
  }, [allCharacters]);

  return (
    <div className="Game">
      <div className="game-text-container">
        <h1>Rick and Morty Game</h1>
        <h2>They are all {charName}, but...</h2>
        <h3>
          Who is <span>{correctCharacter && correctCharacter.name}</span>?
        </h3>
      </div>
      {!gameOver && (
        <section className="game-container">
          <div className="game-values">
            <p className="game-value">Points: {points}</p>
          </div>
          <div className="character-list">
            {characterRandomOptions.map((character) => (
              <CharacterGuessCard
                key={character.id}
                character={character}
                onClick={() =>
                  checkCorrectCharacter(
                    character,
                    correctCharacter,
                    allCharacters,
                    dispatch
                  )
                }
              />
            ))}
          </div>
        </section>
      )}
      {gameOver && (
        <>
          <GameOver />
          <button
            onClick={() => startNewGame(dispatch, allCharacters)}
            className="btn btn-start"
            id="start-button"
          >
            ReStart
          </button>
        </>
      )}
      <Link to={`/`}>
        <button className="btn btn-back">Back</button>
      </Link>
    </div>
  );
};

export default Game;
