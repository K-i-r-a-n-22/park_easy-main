import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import firebase from "../../firebase.js";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavbarIn from "../../Components/NavbarIn/index.js";
import Footer from "../../Components/Footer/index.js";
import { MDBIcon } from "mdb-react-ui-kit";
import { Router } from "react-router-dom";

const Approval = () => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();
  const options = [
    { value: "PALAKKAD", label: "PALAKKAD" },
    { value: "MALAPPURAM", label: "MALAPPURAM" },
    { value: "THRISSUR", label: "THRISSUR" },
    { value: "KANNUR", label: "KANNUR" },
    { value: "KASARGOD", label: "KASARGOD" },
    { value: "WAYANAD", label: "WAYANAD" },
    { value: "KOZHIKODE", label: "KOZHIKODE" },
    { value: "ERNAKULAM", label: "ERNAKULAM" },
    { value: "IDUKKI", label: "IDUKKI" },
    { value: "ALAPPUZHA", label: "ALAPPUZHA" },
    { value: "PATHANAMTHITTA", label: "PATHANAMTHITTA" },
    { value: "THIRUVANANTHAPURAM", label: "THIRUVANANTHAPURAM" },
    { value: "KOLLAM", label: "KOLLAM" },
    { value: "KOTTAYAM", label: "KOTTAYAM" },

    //insert here
  ];
  const [district, setDistrict] = useState();

  useEffect(() => {}, []);

  const fetchData = async () => {
    if (district != null) {
      try {
        firebase
          .firestore()
          .collection("KERALA")
          .doc(district.value)
          .collection("locations")
          .where("status", "==", "pending")
          .onSnapshot((docs) => {
            var datas = [];
            docs.forEach((doc) => {
              if (doc.data() != null) {
                datas.push(doc.data());
                console.log(doc.data());
              }
              setLocations([...datas]);
            });
          });
      } catch (err) {
        alert(err);
      }
    } else alert("please choose a district !");
  };

  const Approve = (uid) => {
    try {
      var doc = firebase
        .firestore()
        .collection("KERALA")
        .doc(district.value)
        .collection("locations")
        .doc(uid);
      doc
        .update({
          status: "approved",
        })
        .then(function () {
          alert("Approved");
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <NavbarIn />
      <br />
      <div className="container">
        <div className="d-flex justify-content-center">
          <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8 w-75">
            <div
              className="items-body"
              style={{ padding: "8%", marginBottom: "10%" }}
            >
              <Row>
                <Col>
                  <Select
                    name="form-field-name"
                    options={options}
                    placeholder="Select a category"
                    searchable={false}
                    onChange={setDistrict}
                  />
                </Col>
                <Col>
                  <button
                    className="btn btn-success"
                    onClick={() => fetchData()}
                  >
                    Fetch
                  </button>
                </Col>
                <Col></Col>
                <Col>
                  <Link to="/addplaces">
                    <button
                      class="btn btn-primary-outline"
                      className="btn btn-success"
                    >
                      +ADD PLACES
                    </button>
                  </Link>
                </Col>
              </Row>

              <Card.Body>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">LOCATION</th>
                      <th scope="col">MAP </th>
                    </tr>
                  </thead>
                  <tbody>
                    {locations.map((l) => (
                      <tr>
                        <th scope="row">
                          <i
                            class="fas fa-map-marker-alt fa-2x"
                            style={{ color: "#157347" }}
                          />
                        </th>

                        <td>
                          {" "}
                          <button
                            className="btn-success w-75"
                            onClick={() =>
                              navigate(
                                "/Spotav/" + l.uid + "/" + district.value
                              )
                            }
                          >
                            {l.name}
                          </button>{" "}
                        </td>

                        <td>
                          <a href={l.link}>
                            <button class="btn-light">VIEW LOCATION</button>
                          </a>
                        </td>
                        <td>
                          <button
                            className="btn-success "
                            onClick={() => Approve(l.uid)}
                          >
                            Approve
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Approval;
