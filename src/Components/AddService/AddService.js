import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import logo from "../../images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./AddService.css";
import SideBar from "../SideBar/SideBar";
import { UserContext } from "../../App";

const AddService = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("title", data.title);
    formData.append("description", data.description);
    console.log(formData);
    fetch("https://arcane-temple-39788.herokuapp.com/addServices", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success add services");
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
            <h5 style={{ marginBottom: "20px", textTransform: "uppercase" }}>
              {loggedIn.displayName}
            </h5>
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
            <div class="d-flex justify-content-start">
              <div class="col-md-6">
                <p>Service Title</p>
                <input
                  name="title"
                  id="file-price"
                  type="text"
                  ref={register({ required: true })}
                  placeholder="Enter title"
                />
                {errors.title && (
                  <span className="price-error">This field is required</span>
                )}
              </div>
              <div class="col-md-6 ">
                <p>Icon</p>
                <input
                  name="file"
                  type="file"
                  id="file"
                  className="inputFile"
                  ref={register({ required: true })}
                />
                <label for="file" id="file-label">
                  {" "}
                  <FontAwesomeIcon
                    style={{ marginRight: "10px" }}
                    icon={faArrowAltCircleUp}
                  />
                  Upload project file
                </label>
                {errors.file && (
                  <span id="file-error">This field is required</span>
                )}
              </div>
            </div>
            <br />
            <div>
              <p>Description</p>
              <textarea
                name="description"
                id="file-details"
                type="email"
                ref={register({ required: true })}
                placeholder="Enter description"
              />
              {errors.description && (
                <span className="error">This field is required</span>
              )}
            </div>
            <br />
            <input className="file-btn " type="submit" value="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddService;
