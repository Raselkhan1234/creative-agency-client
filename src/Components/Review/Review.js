import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import SideBar from "../SideBar/SideBar";

const Review = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("name", data.name);
    formData.append("destination", data.destination);
    formData.append("description", data.description);
    console.log(formData);
    fetch("http://localhost:5000/addReviews", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
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
            <h5 style={{ marginBottom: "20px", marginLeft: "30px" }}>Review</h5>
          </div>
          <div class="col-md-2">
            <h5 style={{ marginBottom: "20px", textTransform: "uppercase" }}>
              {loggedIn.displayName}
            </h5>
          </div>
        </div>
        <div style={{ backgroundColor: "#E5E5E5", height: "554px" }}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ padding: "60px 30px" }}
          >
            <input
              name="name"
              className="order-input"
              type="text"
              ref={register({ required: true })}
              placeholder="Your name"
            />
            {errors.name && (
              <span className="error">This field is required</span>
            )}
            <br />
            <input
              name="destination"
              className="order-input"
              type="text"
              ref={register({ required: true })}
              placeholder="Company’s name, Designation"
            />
            {errors.destination && (
              <span className="error">This field is required</span>
            )}
            <br />
            <textarea
              name="description"
              className="order-input"
              id="input-details"
              type="text"
              ref={register({ required: true })}
              placeholder="Description"
            />
            {errors.description && (
              <span className="error">This field is required</span>
            )}
            <br />
            <input
              name="file"
              type="file"
              id="file"
              className="inputFile"
              ref={register({ required: true })}
            />
            <label htmlFor="file" style={{ marginLeft: "0" }}>
              {" "}
              Upload project file
            </label>
            {errors.file && <span id="file-error">This field is required</span>}
            <br />
            <input
              className="background-btn "
              style={{ marginTop: "40px" }}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;
