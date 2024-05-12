import React, { Component } from "react";
import Logo from "../../assets/img/logo.svg";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
        <div
          class="container-fluid"
          style={{ paddingBottom: "8px", paddingTop: "-1px" }}
        >
          <a class="navbar-brand" href="/">
            <img class="logo" src={Logo} alt="logo" />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Parking
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About&nbsp;Us
                </a>
              </li>
            </ul>

            <ul class="two-menu navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export function Myvehicles() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div
        class="container-fluid"
        style={{ paddingBottom: "0px", paddingTop: "0px" }}
      >
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                My&nbsp;Vehicles
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                My&nbsp;Spots
              </a>
            </li>
          </ul>

          <ul class="two-menu navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/addplaces">
                Add&nbsp;Spot
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
