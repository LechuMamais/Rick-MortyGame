import "./CharactersCarouselContainer.css";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
          paddingLeft={0}
          paddingRight={28}
        />
      </div>
    );
  };
  

export default CharactersCarouselContainer;
