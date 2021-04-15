import React from "react";
import { Link } from "react-router-dom";
import "./ServicesOrder.css";

const ServicesOrder = ({ cu }) => {
  const header = cu.title;
  console.log(header);
  return (
    <div
      class="col-lg-4 col-md-5 d-flex justify-content-center"
      style={{ padding: "0" }}
    >
      <Link
        style={{ textDecoration: "none", color: "#000" }}
        to={"/order/" + header}
      >
        <div class="card">
          <img
          className="image-card"
            style={{ width: "65px", height: "65px", margin: "auto" }}
            src={`data:image/png;base64,${cu.image.img}`}
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">{header}</h5>
            <p class="card-text">{cu.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServicesOrder;
