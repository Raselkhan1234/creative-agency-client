import React from "react";
import "./CardList.css";

const CardList = ({ item }) => {
  return (
    <div class="col-md-5 " style={{ marginRight: "15px" }}>
      <div className="cardList-part">
        <div class="d-flex justify-content-end">
          <img
            className="cardList-img"
            src={`data:image/png;base64,${item.image.img}`}
            alt=""
          />
          <button className="cardList-btn">Done</button>
        </div>
        <div class="justify-content-start">
          <h6 style={{ fontWeight: "700", marginTop: "20px" }}>
            {item.design}
          </h6>
          <p
            style={{
              color: "#000000b3",
              paddingRight: "22px",
              textAlign: "inherit",
            }}
            class="card-text"
          >
            {item.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardList;
