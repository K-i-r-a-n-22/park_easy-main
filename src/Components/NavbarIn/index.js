import Logo from "../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
const NavbarIn = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    const authentication = getAuth();
    signOut(authentication)
      .then(() => {
        sessionStorage.removeItem("Auth Token");
        navigate("/");
      })
      .catch((error) => {});
    sessionStorage.removeItem("Auth Token");
    navigate("/");
  };
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
                Username
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarIn;
//<Logout handleLogout={handleLogout} />
