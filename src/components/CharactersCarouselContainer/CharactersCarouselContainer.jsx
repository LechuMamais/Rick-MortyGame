import { generateUniqueId } from "../../functions/generateUniqueId";
import "./CharactersCarouselContainer.css";
import React, { useRef, useState, useEffect } from "react";

const CharactersCarouselContainer = ({ children }) => {
  const carouselRef = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.scrollLeft = 0;
  }, []);

  useEffect(() => {
    setItems(React.Children.toArray(children));
  }, [children]);

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = () => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft >= maxScrollLeft - carousel.clientWidth) {
        const newItems = React.Children.toArray(children).map((child) => {
          const id = generateUniqueId();
          return React.cloneElement(child, { key: `carouselItem_${id}` });
        });
        setItems((prevItems) => [...prevItems, ...newItems]);
      }
    };

    carousel.addEventListener("scroll", handleScroll);

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [children]);

  const handleButtonClick = () => {
    const carousel = carouselRef.current;
    carousel.scrollLeft += 225 + 32;
  };

  return (
    <div className="characters-carousel-container">
      <div className="characters-carousel" ref={carouselRef}>
        {items}
      </div>
      <div className="carousel-btn-wrapper" onClick={handleButtonClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
      </div>
    </div>
  );
};

export default CharactersCarouselContainer;

/*
const responsive = {
    0: {items: 3},
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
  

export default CharactersCarouselContainer;*/
