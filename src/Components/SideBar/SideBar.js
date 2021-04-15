import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCommentAlt,
  faShoppingBasket,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../App";

const SideBar = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: loggedIn.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      });
  }, []);

  return (
    <div>
      {isAdmin ? (
        <div>
          <div className="side-bar">
            <Link to="/admin/service">
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faShoppingBasket}
              />
              Service list
            </Link>
          </div>
          <div className="side-bar">
            <Link to="/admin/addService">
              <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faPlus} />
              Add Service
            </Link>
          </div>
          <div className="side-bar">
            <Link to="/admin/makeAdmin">
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faUserPlus}
              />
              Make Admin
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="side-bar">
            <Link to="/order/:header">
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faShoppingCart}
              />
              Order
            </Link>
          </div>
          <div className="side-bar">
            <Link to="/service">
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faShoppingBasket}
              />
              Service list
            </Link>
          </div>
          <div className="side-bar">
            <Link to="/review">
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faCommentAlt}
              />
              Review
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
