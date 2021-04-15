import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import ServicesOrder from "../ServicesOrder/ServicesOrder";

import './Service.css';

// const Course = [
//   {
//     id: "1",
//     photo: "https://i.ibb.co/8NXYNvd/service1.png",
//     title: "Web & Mobile design",
//     text:
//       "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
//   },
//   {
//     id: "2",
//     photo: "https://i.ibb.co/5G26jJx/service2.png",
//     title: "Graphic design",
//     text:
//       "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
//   },
//   {
//     id: "3",
//     photo: "https://i.ibb.co/31vYQnf/service3.png",
//     title: "Web development",
//     text:
//       "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
//   },
// ];

const Services = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("https://arcane-temple-39788.herokuapp.com/allCourse", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((success) => {
        setCourse(success);
      });
  }, []);
  return (
    <section className="service-container">
      <h4
        class="d-flex justify-content-center  mt-5"
        style={{ padding: "20px" }}
      >
        Provide awesome{" "}
        <span style={{ color: "#7AB259", marginLeft: "5px" }}> Services</span>
      </h4>
      <div class=" d-flex  mt-5 pr-0">
        <div class="row">
          {course.map((cu) => (
            <ServicesOrder cu={cu} key={cu.id}></ServicesOrder>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
