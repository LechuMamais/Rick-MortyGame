import './Home.css'
import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../../services/api";
import CharacterGuessCard from "../../components/CharacterGuessCard/CharacterGuessCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [mainCharacters, setMainCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const loadMainCharacters = async () => {
    try {
      const mainChars = await fetchCharacters();
      setMainCharacters(mainChars.slice(0, 5));
    } catch (err) {
      setError("Failed to fetch characters");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMainCharacters();
  }, []);

  const onMainCardClick = (character) => {
    console.log(character);
    const charName = character.name.split(' ', 1)[0]
    console.log(charName)
    navigate(`/Game/${charName}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Rick & Morty Game!</h1>
      <h2>Select character</h2>
      <section className="select-character-cards-container">
        {mainCharacters.map((character) => 
          <CharacterGuessCard
            key={character.id}
            character={character}
            onClick={()=>onMainCardClick(character)}
          />
        )}
      </section>
    </main>
  );
};

export default Home;
