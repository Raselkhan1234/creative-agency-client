import React, { useContext, useEffect, useState } from "react";
import logo from "../../images/logos/logo.png";
import { UserContext } from "../../App";
import "./AdminServiceList.css";
import SideBar from "../SideBar/SideBar";

// const tableList = [
//     {
//       id: "1",
//       name: "Sufi Ahmed Hamim",
//       emailId: "sufi@gmail.com",
//       service:"Graphic Design",
//       details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
//       state:[
//         {id:1,value:"Pending"},
//         {id:2,value:"Done"},
//         {id:3,value:"On going"}
//      ]
//     },
//     {
//         id: "2",
//         name: "Sufi Ahmed Hamim",
//         emailId: "sufi@gmail.com",
//         service:"Graphic Design",
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
//         state:[
//           {id:1,value:"Pending"},
//           {id:2,value:"Done"},
//           {id:3,value:"On going"}
//        ]
//       },
//       {
//         id: "3",
//         name: "Sufi Ahmed Hamim",
//         emailId: "sufi@gmail.com",
//         service:"Graphic Design",
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
//         state:[
//           {id:1,value:"Pending"},
//           {id:2,value:"Done"},
//           {id:3,value:"On going"}
//        ]
//       },
//   ];

const AdminServiceList = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const [allInformation, setAllInformation] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allInformation?email=" + loggedIn.email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((success) => {
        setAllInformation(success);
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
        <SideBar></SideBar>
      </div>
      <div class="col-md-10">
        <div class="d-flex">
          <div class="col-md-11">
            <h5 style={{ marginBottom: "20px", marginLeft: "30px" }}>
              Service List
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
            padding: " 45px 0px 20px 30px",
          }}
          class="d-flex"
        >
          <table id="service-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Service</th>
                <th>Project Details</th>
                <th
                  class="d-flex justify-content-center"
                  style={{ paddingLeft: "30px" }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {allInformation.map((list) => (
                <tr key={list.id}>
                  <td> {list.name}</td>
                  <td>{list.email}</td>
                  <td>{list.design}</td>
                  <td id="details">{list.details}</td>
                  <td>
                    <div>
                      <select
                        name="selected"
                        style={{ border: "none", paddingLeft: "45px" }}
                      >
                        <option value="pending" style={{ color: "red" }}>
                          pending
                        </option>
                        <option value="Done" style={{ color: "lightgreen" }}>
                          Done
                        </option>
                        <option value="On going" style={{ color: "yellow" }}>
                          On going
                        </option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminServiceList;
