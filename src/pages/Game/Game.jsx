import "./Game.css";
import { useEffect } from "react";
import { useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../providers/GameProvider";
import CharacterGuessCard from "../../components/CharacterGuessCard/CharacterGuessCard";
import { INITIAL_STATE, reducer } from "../../reducers/Game.reducer";
import {
  setRandomAndCorrectCharacters,
  handleGuessCardSelection,
  startNewGame,
  fetchAndSetCharacters,
} from "../../reducers/Game.functions";
import { GameActions } from "../../reducers/Game.actions";

const Game = () => {
  const { charName } = useParams();
  const { bestScores, setBestScores } = useContext(GameContext);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const {
    allCharacters,
    UnSelectedCharacters,
    characterRandomOptions,
    correctCharacter,
    gameOver,
    points,
    win,
  } = state;

  useEffect(() => {
    dispatch({
      type: GameActions.START_GAME,
    });
    fetchAndSetCharacters(charName, dispatch);
  }, [charName]);

  useEffect(() => {
    if (allCharacters && allCharacters.length > 0) {
      dispatch({
        type: GameActions.RESET_UNSELECTED_CHARACTERS,
        payload: allCharacters,
      });
    }
  }, [allCharacters]);

  useEffect(() => {
    if (UnSelectedCharacters && UnSelectedCharacters.length > 0) {
      setRandomAndCorrectCharacters(UnSelectedCharacters, dispatch);
    }
  }, [UnSelectedCharacters]);

  return (
    <main className="Game">
      {!gameOver && !win && (
        <div className="game-text-container">
          <h3>They are all {charName}, but...</h3>
          <h2>
            Who is <span>{correctCharacter && correctCharacter.name}</span> ...?
          </h2>
        </div>
      )}
      {!gameOver && !win && (
        <section className="game-container">
          <div className="game-values">
            <p className="game-value">Points: {points}</p>
          </div>
          <div className="character-list">
            {characterRandomOptions?.map((character) => (
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
            ))}
          </div>
        </section>
      )}
      {gameOver && (
        <div className="game-over-wrapper">
          <div className="game-over-container">
            <div className="game-over-image-container">
              <img src="/jerry_gif.webp" alt="Game Over" />
            </div>
            <p className="game-over-points">Points: {points}</p>
            <p className="game-over-points-best-score">
              Best score: {bestScores[charName]}
            </p>
          </div>
          <div className="buttons-container">
            <button
              onClick={() => {
                startNewGame(dispatch, UnSelectedCharacters, allCharacters);
              }}
              className="btn btn-start"
              id="start-button"
            >
              ReStart
            </button>

            <Link to={`/`}>
              <button className="btn btn-back">Back</button>
            </Link>
          </div>
        </div>
      )}
      {win && (
        <div className="game-win-container">
          <h2>You are the winner!</h2>
          <h3>
            You have correctly selected all the {charName}s of the multiverse!
          </h3>
          <p className="win-points win-points-actual-score">Points: {points}</p>
          <div className="buttons-container">
            <Link to={`/`}>
              <button className="btn btn-back">Back</button>
            </Link>
          </div>
        </div>
      )}
      {!win &&
        !gameOver && (
          <div className="buttons-container">
            <Link to={`/`}>
              <button className="btn btn-back">Back</button>
            </Link>
          </div>
        )}
    </main>
  );
};

export default Game;
