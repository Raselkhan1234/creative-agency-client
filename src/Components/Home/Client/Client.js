import React, { useEffect, useState } from "react";
import "./Client.css";

const Client = () => {
  const [clientReview, setClientReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setClientReview(res);
      });
  }, []);
  return (
    <div>
      <h4
        class="d-flex justify-content-center  mt-5"
        style={{ padding: "20px" }}
      >
        Clients
        <span style={{ color: "#7AB259", marginLeft: "5px" }}> Feedback</span>
      </h4>
      <div class="row" style={{ padding: "100px" }}>
        {clientReview.map((cl) => (
          <div class="col-lg-4 col-md-5" key={cl._id}>
            <div className="container">
              <div class="d-flex ">
                <div>
                  <img
                    style={{
                      height: "60px",
                      width: "60px",
                      border: "none",
                      borderRadius: "50%",
                      paddingRight: "10px",
                    }}
                    src={`data:image/png;base64,${cl.image.img}`}
                    alt=""
                  />
                </div>
                <div>
                  <h5>{cl.name}</h5>
                  <h6>{cl.destination}</h6>
                </div>
              </div>
              <p className="client-p">{cl.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
