import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./Order.css";
import { UserContext } from "../../App";
import SideBar from "../SideBar/SideBar";

const Order = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  let { header } = useParams();
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("design", data.design);
    formData.append("details", data.details);
    formData.append("email", data.email);
    formData.append("name", data.name);
    console.log(formData);
    fetch("https://arcane-temple-39788.herokuapp.com/addAllOrders", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section class=" d-flex" style={{ padding: "30px 0 30px 50px" }}>
      <div class="col-md-2">
        <h4 style={{ marginBottom: "40px" }}>Logo Here</h4>
        <SideBar></SideBar>
      </div>
      <div class="col-md-10">
        <div class="d-flex">
          <div class="col-md-10">
            <h5 style={{ marginBottom: "20px", marginLeft: "30px" }}>Order</h5>
          </div>
          <div class="col-md-2">
            <h5 style={{ marginBottom: "20px", textTransform: "uppercase" }}>
              {loggedIn.displayName}
            </h5>
          </div>
        </div>
        <div style={{ backgroundColor: "#E5E5E5" }}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ padding: "60px 30px" }}
          >
            <input
              name="name"
              className="order-input"
              type="text"
              ref={register({ required: true })}
              placeholder="Your name/company's name "
              defaultValue={loggedIn.displayName}
            />
            {errors.name && (
              <span className="error">This field is required</span>
            )}
            <br />
            <input
              name="email"
              className="order-input"
              type="email"
              ref={register({ required: true })}
              placeholder="Your email address"
              defaultValue={loggedIn.email}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <br />
            <input
              name="design"
              className="order-input"
              type="text"
              ref={register({ required: true })}
              defaultValue={header === ":header" ? "Graphic design" : header}
            />
            {errors.design && (
              <span className="error">This field is required</span>
            )}
            <br />
            <textarea
              name="details"
              className="order-input"
              id="input-details"
              type="email"
              ref={register({ required: true })}
              placeholder="Project Details"
            />
            {errors.details && (
              <span className="error">This field is required</span>
            )}
            <br />
            <input
              name="price"
              id="input-price"
              type="number"
              ref={register({ min: 500, max: 1000 })}
              placeholder="Price"
              defaultValue="500"
            />
            {errors.price && (
              <span className="price-error">
                At lest five hundred price is required
              </span>
            )}

            <input
              name="file"
              type="file"
              id="file"
              className="inputFile"
              ref={register({ required: true })}
            />
            <label htmlFor="file">
              {" "}
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faArrowAltCircleUp}
              />
              Upload project file
            </label>
            {errors.file && <span id="file-error">This field is required</span>}
            <br />

            <input className="background-btn " type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Order;
