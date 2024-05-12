import Footer from "../../Components/Footer";
import NavbarIn from "../../Components/NavbarIn";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import firebase from "../../firebase";
import Select from "react-select";
import { Row, Col, Spinner } from "react-bootstrap";
import { Myvehicles } from "../../Components/NavBar";

const Addnew = () => {
  const [name, setName] = useState();
  const [num, setNum] = useState();
  const [link, setLink] = useState();
  const [loading, setLoading] = useState(false);

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

  const submitForm = () => {
    setLoading(true);
    try {
      var doc = firebase
        .firestore()
        .collection("KERALA")
        .doc(district.value)
        .collection("locations")
        .doc();

      doc
        .set({
          name: name,
          link: link,
          num: num,
          status: "pending",
        })
        .then(() => {
          firebase
            .firestore()
            .collection("KERALA")
            .doc(district.value)
            .collection("locations")
            .doc(doc.id)
            .update({
              uid: doc.id,
            })
            .then(function () {
              setLoading(false);
              alert("SUBMISSION SENT ....  APPROVAL PENDING !");
            });
        });
    } catch (Err) {
      alert(Err);
      setLoading(false);
    }
  };
  return (
    <div>
      <NavbarIn />
      <br />
      <Myvehicles />
      <br />
      <div className="container">
        <div className="d-flex justify-content-center">
          <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8 w-75">
            <div
              className="items-body"
              style={{ padding: "8%", marginBottom: "10%" }}
            >
              <Row>
                <Col md={4} lg={4}>
                  <Select
                    name="form-field-name"
                    options={options}
                    placeholder="Select a category"
                    searchable={false}
                    onChange={setDistrict}
                    className="m-3"
                  />
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter place name :"
                    className="form-control m-3"
                  />
                  <input
                    type="text"
                    onChange={(e) => setNum(e.target.value)}
                    placeholder="Enter max capacity:"
                    className="form-control m-3"
                  />
                  <input
                    type="text"
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="enter link :"
                    className="form-control m-3"
                  />
                  <br></br>

                  {loading == true ? (
                    <Spinner variant="warning" size="sm" />
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => submitForm()}
                      className="m-3"
                    >
                      Submit
                    </Button>
                  )}
                </Col>
                <Col></Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addnew;
