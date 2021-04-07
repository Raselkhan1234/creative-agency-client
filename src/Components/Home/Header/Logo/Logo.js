import React from "react";

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
      style={{ height: "200px" }}
    >
      {photo.map((ph) => (
        <div class="col-md-2" key={ph.id}>
          <img style={{ height: "35px" }} src={ph.logo} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Logo;
