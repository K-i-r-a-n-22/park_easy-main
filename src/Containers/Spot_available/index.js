import Availablle from "../../Components/Available";
import Footer from "../../Components/Footer";
import { Myvehicles } from "../../Components/NavBar";
import NavbarIn from "../../Components/NavbarIn";

const Spot_available = () => {
  return (
    <div>
      <NavbarIn />
      <br />
      <Myvehicles />
      <br />
      <div className="container">
        <div className="row">
      <Availablle />
      </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Spot_available;
