import React from "react";
import { useEffect, useRef, useState } from "react";
import { generateUniqueId } from "../functions/generateUniqueId";

const useCharactersCarousel = (children) => {
  const carouselRef = useRef(null);
  const [items, setItems] = useState([]);

  const handleButtonClick = () => {
    const carousel = carouselRef.current;
    carousel.scrollLeft += 225 + 32;
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft >= maxScrollLeft - carousel.clientWidth) {
      const newItems = React.Children.toArray(children).map((child) => {
        const id = generateUniqueId();
        return React.cloneElement(child, { key: `carouselItem_${id}` });
      });
      setItems((prevItems) => [...prevItems, ...newItems]);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.scrollLeft = 0;
  }, []);

  useEffect(() => {
    setItems(React.Children.toArray(children));
    const carousel = carouselRef.current;

    carousel.addEventListener("scroll", handleScroll);
    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [children]);

  return { carouselRef, items, handleButtonClick };
};

export default useCharactersCarousel;
