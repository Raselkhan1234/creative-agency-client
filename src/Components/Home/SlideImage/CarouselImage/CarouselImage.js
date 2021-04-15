import React from "react";

const CarouselImage = ({ Im }) => {
  return (
    <div>
      <img className="image-carouselImage" src={Im.image} alt="" />
    </div>
  );
};

export default CarouselImage;
