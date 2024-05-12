import Footer from "../../Components/Footer";
import Booknow from "../../Components/booknow";
import Carousel from "../../Components/Carousel";
import NavBar from "../../Components/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home2");
    }
  }, []);
  return (
    <>
      <NavBar />
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

export default Home;
