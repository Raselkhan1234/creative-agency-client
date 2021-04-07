import React from "react";

const Carousel = ({ Im }) => {
  return (
    <div>
      <img style={{ height: "250px", width: "320px" }} src={Im.image} alt="" />
    </div>
  );
};

export default Carousel;
