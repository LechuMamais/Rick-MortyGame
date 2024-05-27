import "./CharactersCarouselContainer.css";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    className="character-guess-card"
    onDragStart={handleDragStart}
    role="presentation"
  >
    <img
      src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      alt="Rick Sanchez"
    />
    <div className="character-guess-card-text-container">
      <div className="character-guess-card-name-container">
        <h2>Rick Sanchez</h2>
      </div>
      <div className="character-guess-card-score-container">
        <h2>Best Score: 0</h2>
      </div>
    </div>
  </div>,
  <div
    className="character-guess-card"
    onDragStart={handleDragStart}
    role="presentation"
  >
    <img
      src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      alt="Morty Smith"
    />
    <div className="character-guess-card-text-container">
      <div className="character-guess-card-name-container">
        <h2>Morty Smith</h2>
      </div>
      <div className="character-guess-card-score-container">
        <h2>Best Score: 0</h2>
      </div>
    </div>
  </div>,
  <div
    className="character-guess-card"
    onDragStart={handleDragStart}
    role="presentation"
  >
    <img
      src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      alt="Summer Smith"
    />
    <div className="character-guess-card-text-container">
      <div className="character-guess-card-name-container">
        <h2>Summer Smith</h2>
      </div>
      <div className="character-guess-card-score-container">
        <h2>Best Score: 0</h2>
      </div>
    </div>
  </div>,
  <div
    className="character-guess-card"
    onDragStart={handleDragStart}
    role="presentation"
  >
    <img
      src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
      alt="Beth Smith"
    />
    <div className="character-guess-card-text-container">
      <div className="character-guess-card-name-container">
        <h2>Beth Smith</h2>
      </div>
      <div className="character-guess-card-score-container">
        <h2>Best Score: 0</h2>
      </div>
    </div>
  </div>,
  <div
    className="character-guess-card"
    onDragStart={handleDragStart}
    role="presentation"
  >
    <img
      src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
      alt="Jerry Smith"
    />
    <div className="character-guess-card-text-container">
      <div className="character-guess-card-name-container">
        <h2>Jerry Smith</h2>
      </div>
      <div className="character-guess-card-score-container">
        <h2>Best Score: 0</h2>
      </div>
    </div>
  </div>,
];

const responsive = {
    0: {items: 3}
}

const CharactersCarouselContainer = ({ mainCharactersItems }) => {
    return (
      <div className="Alice-Carousel-Container">
        <AliceCarousel 
          mouseTracking 
          responsive={responsive} 
          items={mainCharactersItems} 
          infinite
        />
      </div>
    );
  };
  

export default CharactersCarouselContainer;
