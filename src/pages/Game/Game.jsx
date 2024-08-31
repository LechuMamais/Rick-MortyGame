import "./Game.css";
import { useReducer, useContext } from "react";
import { useParams } from "react-router-dom";
import { GameContext } from "../../providers/GameProvider";
import { INITIAL_STATE, reducer } from "../../reducers/Game/Game.reducer";
import GameTextContainer from "../../components/GameTextContainer/GameTextContainer";
import CharactersList from "../../components/CharactersList/CharactersList";
import ButtonsContainer from "../../components/ButtonsContainer/ButtonsContainer";
import GameOver from "../../components/GameOver/GameOver";
import Win from "../../components/Win/Win";
import useGameEffects from "../../hooks/useGameEffects";
import { handleGuessCardSelection, startNewGame } from "../../reducers/Game/Game.functions";

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

  useGameEffects(charName, dispatch, allCharacters, UnSelectedCharacters);

  return (
    <main className="Game">
      {!gameOver && !win && (
        <GameTextContainer
          charName={charName}
          correctCharacter={correctCharacter}
        />
      )}

      {!gameOver && !win && (
        <section className="game-container">
          <div className="game-values">
            <p className="game-value texture-text">Points: {points}</p>
          </div>
          <CharactersList
            loading={loading}
            characterRandomOptions={characterRandomOptions}
            handleGuessCardSelection={handleGuessCardSelection}
            correctCharacter={correctCharacter}
            dispatch={dispatch}
            UnSelectedCharacters={UnSelectedCharacters}
            charName={charName}
            points={points}
            bestScores={bestScores}
            setBestScores={setBestScores}
          />
        </section>
      )}
      {gameOver && (
        <GameOver
          points={points}
          bestScores={bestScores}
          charName={charName}
          startNewGame={startNewGame}
          dispatch={dispatch}
          UnSelectedCharacters={UnSelectedCharacters}
          allCharacters={allCharacters}
        />
      )}
      {win && (
        <Win
          charName={charName}
          points={points}
          startNewGame={startNewGame}
          dispatch={dispatch}
          UnSelectedCharacters={UnSelectedCharacters}
          allCharacters={allCharacters}
        />
      )}
      {!win && !gameOver && (
        <ButtonsContainer
          restart={false}
          startNewGame={startNewGame}
          dispatch={dispatch}
          UnSelectedCharacters={UnSelectedCharacters}
          allCharacters={allCharacters}
        />
      )}
    </main>
  );
};

export default Game;
