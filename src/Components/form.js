import React from "react";
import Button from "./button";
import { Card, Form } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm({
  title,
  usertype,
  setPassword,
  setEmail,
  handleAction,
}) {
  const styles = {
    position: "relative",
    minHeight: "100vh",
  };
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/home2");
    }
  }, []);

  return (
    <div style={styles} className="main">
      <NavBar />

      <div
        style={{ padding: "4%" }}
        className="d-flex justify-content-center align-items-center align-self-center"
      >
        <Card className="d-flex align-items-center">
          <Card.Body>
            <div>
              <div className="heading-container">
                <h3>{title}</h3>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button title={title} handleAction={handleAction} />
                <br />
                {/* <h6 style={{ marginTop: "5%" }}>
                  <button class="btn btn-light">{usertype}</button>
                </h6> */}
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
