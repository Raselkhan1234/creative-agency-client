import React from "react";
import photo1 from "../../../../images/logos/Frame.png";
import "./Background.css";

const Background = () => {
  return (
    <section class="container-fluid" className="background-section">
      <div class="row">
      <div class="col-lg-5 col-md-4 col-sm-12" style={{paddingLeft:"60px"}}>
        <h1 className="background-h1">
          Let's Grow Your Brand To The Next Level
        </h1>
        <p className="background-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          pariatur. Dolorum consectetur expedita aliquid molestias.Feugiat
        </p>
        <button className="background-btn ">Hire us</button>
      </div>
      <div class="col-lg-7 col-md-8 col-sm-12">
        <img className="background-image" src={photo1} alt="" />
      </div>
      </div>
    </section>
  );
};

export default Background;
