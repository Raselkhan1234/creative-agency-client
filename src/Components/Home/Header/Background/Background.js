import React from "react";
import photo1 from "../../../../images/logos/Frame.png";
import "./Background.css";

const Background = () => {
  return (
    <section class="container-fluid d-flex mt-5">
      <div class="col-md-4 m-5">
        <h1 className="background-h1">
          Let's Grow Your Brand To The Next Level
        </h1>
        <p class="pt-2 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          pariatur. Dolorum consectetur expedita aliquid molestias.Feugiat
        </p>
        <button className="background-btn ">Hire us</button>
      </div>
      <div class="col-md-8 w-auto">
        <img className="background-image" src={photo1} alt="" />
      </div>
    </section>
  );
};

export default Background;
