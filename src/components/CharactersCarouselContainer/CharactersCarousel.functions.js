import React from "react";
import { generateUniqueId } from "../../functions/generateUniqueId";

export const handleScroll = (carousel, setItems, children) => {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  if (carousel.scrollLeft >= maxScrollLeft - carousel.clientWidth) {
    const newItems = React.Children.toArray(children).map((child) => {
      const id = generateUniqueId();
      return React.cloneElement(child, { key: `carouselItem_${id}` });
    });
    setItems((prevItems) => [...prevItems, ...newItems]);
  }
};
