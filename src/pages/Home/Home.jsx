import "./Home.css";
import React, { useEffect } from "react";
import CharacterGuessCard from "../../components/CharacterGuessCard/CharacterGuessCard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../providers/GameProvider";
import { splitFirstName } from "../../functions/splitFirstName";
import CharactersCarouselContainer from "../../components/CharactersCarouselContainer/CharactersCarouselContainer";
import { INITIAL_STATE, reducer } from "../../reducers/Home/Home.reducer";
import { useReducer } from "react";
import {
  loadMainCharacters,
  onMainCardClick,
} from "../../reducers/Home/Home.functions";
import CardSkeletorLoader from "../../components/CardSkeletorLoader/CardSkeletorLoader";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { mainCharacters, loading, error } = state;
  const { bestScores } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadMainCharacters(dispatch);
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="Home">
      <div className="home-text-container cloud-bg-effect">
        <h2 className="texture-text cloud-bg-effect">Select character</h2>
      </div>
      <div className="carousel-container">
        <CharactersCarouselContainer>
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
            mainCharacters.map((character) => (
              <CharacterGuessCard
                key={character.name}
                character={character}
                onClick={() => onMainCardClick(character, navigate)}
                name={character.name}
                bestScore={bestScores[splitFirstName(character.name)]}
              />
            ))
          )}
        </CharactersCarouselContainer>
      </div>
    </main>
  );
};

export default Home;
