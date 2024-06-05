import "./CharactersCarouselContainer.css";
import React, { useRef, useState } from "react";
import { initializeCarousel, handleButtonClick } from "./CharactersCarousel.functions";


const CharactersCarouselContainer = ({ children }) => {
  const carouselRef = useRef(null);
  const [items, setItems] = useState([]);

  initializeCarousel(carouselRef, setItems, children);

  return (
    <div className="characters-carousel-container">
      <div className="characters-carousel" ref={carouselRef}>
        {items}
      </div>
      <div className="carousel-btn-wrapper cloud-bg-effect" onClick={() => handleButtonClick(carouselRef)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </div>
    </div>
  );
};

export default CharactersCarouselContainer;
