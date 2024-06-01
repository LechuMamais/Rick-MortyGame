import "./Game.css";
import { useEffect } from "react";
import { useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../providers/GameProvider";
import CharacterGuessCard from "../../components/CharacterGuessCard/CharacterGuessCard";
import { INITIAL_STATE, reducer } from "../../reducers/Game/Game.reducer";
import {
  setRandomAndCorrectCharacters,
  handleGuessCardSelection,
  startNewGame,
  fetchAndSetCharacters,
} from "../../reducers/Game/Game.functions";
import { GameActions } from "../../reducers/Game/Game.actions";
import CardSkeletorLoader from "../../components/CardSkeletorLoader/CardSkeletorLoader";

const Game = () => {
  const { charName } = useParams();
  const { bestScores, setBestScores } = useContext(GameContext);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const {
    loading,
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
        <div className="game-text-container cloud-bg-effect">
          <h3 className=" texture-text">They are all {charName}, but...</h3>
          <h2 className=" texture-text">
            Who is <span>{correctCharacter && correctCharacter.name}</span> ...?
          </h2>
        </div>
      )}
      {!gameOver && !win && (
        <section className="game-container">
          <div className="game-values">
            <p className="game-value texture-text">Points: {points}</p>
          </div>
          <div className="character-list">
            {loading ? (
              <div className="carousel-container">
                <div className="characters-carousel-container">
                  <div className="characters-carousel">
                    <CardSkeletorLoader />
                    <CardSkeletorLoader />
                    <CardSkeletorLoader />
                  </div>
                </div>
              </div>
            ) : (
              characterRandomOptions?.map((character) => (
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
              ))
            )}
          </div>
        </section>
      )}
      {gameOver && (
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
        <div className="game-win-container texture-text  cloud-bg-effect">
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
      {!win && !gameOver && (
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
