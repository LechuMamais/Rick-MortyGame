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
  const { allCharacters, setAllCharacters, charName } = useContext(SelectedMainCharacterContext);
  const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);
  const { characterRandomOptions, correctCharacter, gameOver, points, win } = state;

  useEffect(() => {
    if (allCharacters.length > 0) {
      getRandomCharacters(allCharacters, dispatch);
    }
    console.log(win)
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
                  checkCorrectCharacter(
                    character,
                    correctCharacter,
                    allCharacters,
                    setAllCharacters,
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
      {win &&(
        <><h2>You are the winner!</h2>
        <h3>You have correctly selected all the {charName} of the multiverse!</h3></>
      )}
      <Link to={`/`}>
        <button className="btn btn-back">Back</button>
      </Link>
    </div>
  );
};

export default Game;
