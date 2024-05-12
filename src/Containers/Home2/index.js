import NavbarIn from "../../Components/NavbarIn";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Carousel";
import Booknow from "../../Components/booknow";
import { Myvehicles } from "../../Components/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home2 = () => {
  let navigate = useNavigate();
  

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <NavbarIn/>
      <br />
      <Myvehicles />
      <br />
      <div className="container">
        <div className="row">
          <Carousel />
          <Booknow />
        </div>
      </div>
      <br />

      <Footer />
    </>
  );
};

export default Home2;
