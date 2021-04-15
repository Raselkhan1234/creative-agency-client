import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../images/logos/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Our portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Our team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <Link to="/login">
            <button class="btn">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
