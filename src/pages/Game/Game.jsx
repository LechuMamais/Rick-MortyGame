import "./Game.css";
import { useContext, useEffect } from "react";
import { SelectedMainCharacterContext } from "../../providers/SelectedMainCharacterContext";
import CharacterGuessCard from "../../components/CharacterGuessCard/CharacterGuessCard";
import GameOver from "../../components/GameOver/GameOver";
import { useReducer } from "react";
import { INITIAL_STATE, reducer } from "../../reducers/Game.reducer";
import { Link } from "react-router-dom";
import { getRandomCharacters, handleGuessCardSelection, startNewGame } from "../../reducers/Game.functions";

const Game = () => {
  const {
    allCharacters,
    charName,
    UnSelectedCharacters,
    setUnSelectedCharacters,
  } = useContext(SelectedMainCharacterContext);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { characterRandomOptions, correctCharacter, gameOver, points, win } =
    state;

  useEffect(() => {
    if (UnSelectedCharacters.length > 0) {
      getRandomCharacters(UnSelectedCharacters, dispatch);
    }
  }, [UnSelectedCharacters]);

  return (
    <div className="Game">
      <div className="game-text-container">
        <h1>Rick and Morty Game</h1>
        <h2>They are all {charName}, but...</h2>
        <h3>
          Who is <span>{correctCharacter && correctCharacter.name}</span>?
        </h3>
      </div>
      {!gameOver && !win && (
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
                  handleGuessCardSelection(
                    character,
                    correctCharacter,
                    dispatch,
                    UnSelectedCharacters,
                    setUnSelectedCharacters
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
          <p className="game-over-points">Points: {points}</p>
          <button
            onClick={() => {
              setUnSelectedCharacters(allCharacters);
              startNewGame(dispatch, UnSelectedCharacters);
            }}
            className="btn btn-start"
            id="start-button"
          >
            ReStart
          </button>
        </>
      )}
      {win && (
        <>
          <h2>You are the winner!</h2>
          <h3>
            You have correctly selected all the {charName}s of the multiverse!
          </h3>
        </>
      )}
      <Link to={`/`}>
        <button className="btn btn-back">Back</button>
      </Link>
    </div>
  );
};

export default Game;
