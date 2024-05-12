import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import firebase from "../../firebase.js";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Table = () => {
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
    } else alert("Please choose a district !");
  };
  return (
    <Card class="spotcheck" style={{ padding: "5%", height: "100%" }}>
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
          <button className="btn btn-success" onClick={() => fetchData()}>
            Fetch
          </button>
        </Col>
      </Row>

      <Card.Body>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">LOCATION</th>
              <th scope="col">LINK</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((l) => (
              <tr>
                <th scope="row">
                  {" "}
                  <i
                    class="fas fa-map-marker-alt fa-2x"
                    style={{ color: "#157347" }}
                  />{" "}
                </th>

                <td>
                  {" "}
                  <button
                    className="btn-success w-50"
                    onClick={() =>
                      navigate("/Spotav/" + l.uid + "/" + district.value)
                    }
                  >
                    {l.name}
                  </button>{" "}
                </td>

                <td>
                  <a href={l.link}>
                    <button class="btn-success">VIEW LOCATION</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};
export default Table;
