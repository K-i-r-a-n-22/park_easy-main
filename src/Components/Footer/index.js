import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <footer class="footer-07">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 text-center">
            <h2 class="footer-heading" style={{ paddingTop: "8%" }}>
              <a href="#">Park Easy</a>
            </h2>z
            <p class="menu">
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Contact</a>
              <a href="#">About</a>
            </p>
            <ul class="ftco-footer-social p-0">
              <li>
                <a href="#">
                  <span>
                    <MDBIcon fab icon="twitter" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <MDBIcon fab icon="facebook" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <MDBIcon fab icon="instagram" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12 text-center">
            <p class="copyright">Copyright © 2022 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
