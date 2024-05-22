import "./Game.css";
import { useEffect } from "react";
import { useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../providers/GameProvider";
import CharacterGuessCard from "../../components/CharacterGuessCard/CharacterGuessCard";
import GameOver from "../../components/GameOver/GameOver";
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
    <div className="Game">
      <div className="game-text-container">
        <h2>They are all {charName}, but...</h2>
        <h3>
          Who is <span>{correctCharacter && correctCharacter.name}</span> ...?
        </h3>
      </div>
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
        <>
          <GameOver />
          <p className="game-over-points">Points: {points}</p>
          <p className="win-points win-points-best-score">
            Best score: {bestScores[charName]}
          </p>

          <button
            onClick={() => {
              startNewGame(dispatch, UnSelectedCharacters, allCharacters);
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
          <p className="win-points win-points-actual-score">Points: {points}</p>
        </>
      )}
      <Link to={`/`}>
        <button className="btn btn-back">Back</button>
      </Link>
    </div>
  );
};

export default Game;
