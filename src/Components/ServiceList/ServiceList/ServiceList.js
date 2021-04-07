import React, { useContext, useEffect, useState } from "react";
import logo from "../../../images/logos/logo.png";
import { UserContext } from "../../../App";
import SideBar from "../../SideBar/SideBar";
import CardList from "../CardList/CardList";


// const listItem = [
//   {
//     id: "1",
//     image: "https://i.ibb.co/kXJvPtr/service1.png",
//     title: "Web & Mobile design",
//     text:
//       "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
//     btn: "Pending",
//   },
//   {
//     id: "2",
//     image: "https://i.ibb.co/4VrQyGV/service2.png",
//     title: "Graphic design",
//     text:
//       "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
//     btn: "Done",
//   },
//   {
//     id: "3",
//     image: "https://i.ibb.co/4VrQyGV/service2.png",
//     title: "Graphic design",
//     text:
//       "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
//     btn: "Done",
//   },
// ];

const ServiceList = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);

  const [serviceInfo, setServiceInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services?email=" + loggedIn.email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((success) => {
        setServiceInfo(success);
        console.log(success);
      });
  }, []);

  return (
    <section class=" d-flex" style={{ padding: "30px 0 30px 50px" }}>
      <div class="col-md-2">
        <img
          style={{ height: "40px", marginBottom: "40px" }}
          src={logo}
          alt=""
        />
        <div className="service-part" style={{marginLeft:"10px"}}>
          <SideBar></SideBar>
        </div>
      </div>
      <div class="col-md-10">
        <div class="d-flex">
          <div class="col-md-10">
            <h5 style={{ marginBottom: "20px", marginLeft: "30px" }}>
              Service List
            </h5>
          </div>
          <div class="col-md-2">
            <h5 style={{ marginBottom: "20px", textTransform: "uppercase" }}>
              {loggedIn.displayName}
            </h5>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#E5E5E5",
            height: "auto",
            padding: " 45px 100px 0 30px",
          }}
          class="d-flex"
        >
          <div class="row">
            {serviceInfo.map((item) => (
              <CardList item={item} key={item._id}></CardList>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
