import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
function index() {
  return (
    <main class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
      <div className="items-body" style={{ padding: "8%" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Login</h3>
              <p>Better Late than Never!.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1588362951121-3ee319b018b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Predict</h3>
              <p>Drive, don't fly.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/parking-picture-id1307047135?b=1&k=20&m=1307047135&s=170667a&w=0&h=GgTfSBocSxlnH09LMBLpcyucnMjUtmKdHD4XdEMATCA="
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Book your slot</h3>
              <p>Leave sooner, drive slower, live longer.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
}
export default index;
