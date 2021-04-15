import React from "react";
import "./Logo.css";

const photo = [
  {
    logo: "https://i.ibb.co/M1rQLHw/slack.png",
    id: "1",
  },
  { logo: "https://i.ibb.co/LSh74C2/google.png",
    id: "2" },
  {
    logo: "https://i.ibb.co/d5tKNCt/uber.png",
    id: "3",
  },
  {
    logo: "https://i.ibb.co/JygHSCJ/netflix.png",
    id: "4",
  },
  {
    logo: "https://i.ibb.co/10z6FjB/airbnb.png",
    id: "5",
  },
];

const Logo = () => {
  return (
    <div
      class="container-fluid d-flex justify-content-center align-items-center "
      style={{ height: "200px",paddingTop:"15px" }}
    >
      <div class="row">
      {photo.map((ph) => (
        <div class="col-lg-2 col-md-3 col-sm-4 col-6" key={ph.id}>
          <img  className="logo-image" src={ph.logo} alt="" />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Logo;
