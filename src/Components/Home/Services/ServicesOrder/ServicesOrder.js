import React from "react";
import { Link } from "react-router-dom";

const ServicesOrder = ({ cu }) => {
  const header = cu.title;
  return (
    <div
      class="col-md-4 d-flex justify-content-center"
      style={{ padding: "0" }}
    >
      <Link
        style={{ textDecoration: "none", color: "#000" }}
        to={"/order/" + header}
      >
        <div class="card">
          <img
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
