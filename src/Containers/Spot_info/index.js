import NavbarIn from "../../Components/NavbarIn";
import Footer from "../../Components/Footer";
import Table from "../../Components/Table";
import { Myvehicles } from "../../Components/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Spot_info = () => {
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <NavbarIn />
      <br />
      <Myvehicles />
      <br />
      <div className="container">
        <div className="row">
          <Table />
        </div>
      </div>
      <br />

      <Footer />
    </>
  );
};

export default Spot_info;
