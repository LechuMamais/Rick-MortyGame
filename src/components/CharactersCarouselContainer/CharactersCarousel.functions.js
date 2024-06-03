import React from "react";
import { generateUniqueId } from "../../functions/generateUniqueId";


export const handleButtonClick = (carouselRef) => {
  const carousel = carouselRef.current;
  carousel.scrollLeft += 225 + 32;
};


export const handleScroll = (carousel, setItems, children) => {
  return () => {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft >= maxScrollLeft - carousel.clientWidth) {
      const newItems = React.Children.toArray(children).map((child) => {
        const id = generateUniqueId();
        return React.cloneElement(child, { key: `carouselItem_${id}` });
      });
      setItems((prevItems) => [...prevItems, ...newItems]);
    }
  };
};


export const initializeCarousel = (carouselRef, setItems, children) => {
  React.useEffect(() => {
    const carousel = carouselRef.current;
    carousel.scrollLeft = 0;
  }, []);

  React.useEffect(() => {
    setItems(React.Children.toArray(children));
    const carousel = carouselRef.current;
    const onScroll = handleScroll(carousel, setItems, children);

    carousel.addEventListener("scroll", onScroll);
    return () => {
      carousel.removeEventListener("scroll", onScroll);
    };
  }, [children]);
};
