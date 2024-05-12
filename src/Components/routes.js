import React, { useState, useEffect } from "react";
import Home from "../Containers/Home";
import Home2 from "../Containers/Home2";
import Spot_available from "../Containers/Spot_available";
import Spot_info from "../Containers/Spot_info";
import Addplace from "../Containers/Addplace";
import Approval from "../Containers/Admin/approval";
import { app } from "../firebase";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Form from "./form";

const Rroutes = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          if(response.user.uid=='VE16fi9FTzcqFq0wg5GYzcNyvIr2')
          {
            navigate("/Approval");
          }
          else{
            navigate("/home2");
          }
        
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          alert(error);
        });
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home2");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert("Email Already in Use");
          }
        });
    }
  };

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="addplaces" element={<Addplace />} />
        <Route path="/Spotav/:uid/:district" element={<Spot_available />} />
        <Route path="/Spotin" element={<Spot_info />} />
        <Route path="/Approval" element={<Approval />} />
        <Route
          path="/login"
          element={
            <Form
              title="Login"
              usertype = "New user ? Register Now"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Form
              title="Register"
              usertype= "Already Registered ? Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />
          }
        />
      </Routes>
    </>
  );
};
export default Rroutes;
