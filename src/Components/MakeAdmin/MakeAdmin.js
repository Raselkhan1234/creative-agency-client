import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../images/logos/logo.png";
import "./MakeAdmin.css";
import SideBar from "../SideBar/SideBar";

const MakeAdmin = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const userEmail = data.email;
    fetch("http://localhost:5000/addAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userEmail }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Successfully you made an new admin on this project");
      });
  };
  return (
    <section class=" d-flex" style={{ padding: "30px 0 30px 50px" }}>
      <div class="col-md-2">
        <img
          style={{ height: "40px", marginBottom: "40px" }}
          src={logo}
          alt=""
        />
        <SideBar></SideBar>
      </div>
      <div class="col-md-10">
        <div class="d-flex">
          <div class="col-md-11">
            <h5 style={{ marginBottom: "20px", marginLeft: "30px" }}>
              Add Services
            </h5>
          </div>
          <div class="col-md-1">
            <h5 style={{ marginBottom: "20px" }}>rasel</h5>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#E5E5E5",
            height: "500px",
            padding: " 45px 0px 20px 30px",
          }}
          class="d-flex"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              padding: "30px",
              width: "909px",
              height: "270px",
              background: "#FFFFFF",
              borderRadius: " 20px",
            }}
          >
            <div class="d-flex">
              <div class="col-md-6">
                <p>Email</p>
                <input
                  name="email"
                  id="make-price"
                  type="email"
                  ref={register({ required: true })}
                  placeholder="Enter email"
                />
                {errors.email && (
                  <span className="price-error">This field is required</span>
                )}
              </div>

              <div class="col-md-6">
                <input className="add-btn " type="submit" value="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
