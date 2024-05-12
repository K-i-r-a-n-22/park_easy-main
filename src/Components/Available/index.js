import React, { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import firebase from "../../firebase";
import sampleimg from "../../download.svg";
import { Link, useParams } from "react-router-dom";
import { useCallback } from "react";
import { FieldValue } from "firebase/firestore";



const Availability = () => {
  const { uid, district } = useParams();
  const [det, setDet] = useState();

  useEffect(() => {
    fetchDetails();
  }, []);

  async function fetchDetails() {
    if (uid != null) {
      try {
        var snapshot = await firebase
          .firestore()
          .collection("KERALA")
          .doc(district)
          .collection("locations")
          .doc(uid)
          .get();

        setDet(snapshot.data());
      } catch (err) {
        console.log(err);
      }
    }
  }

  const Book =()=>
  {
    firebase
          .firestore()
          .collection("KERALA")
          .doc(district)
          .collection("locations")
          .doc(uid).update({
            num:firebase.firestore.FieldValue.increment(-1)
          }).then(function(){
            window.open("https://buy.stripe.com/test_9AQaGm7Rf1tm3AY3cc");
          })
  }




  return (
    <main class="col-sm-8 col-md-8 col-lg-8 col-xl-8 w-100">
      <div className="items-body" style={{ padding: "8%" }}>
      <Row>
      
        <Col>
          <Row>
            {det != null ? <Col>{det.name}</Col> : <Spinner />}
            <Col>{district}</Col>
          </Row>

          <Row>
            <Col>NO. OF AVAILABLE SLOTS</Col>
            {det != null ? <Col>{det.num}</Col> : <Spinner />}
          </Row>

          <Row>
            
            <Col align="center">
                <button onClick={()=>Book()}>BOOK_NOW</button>{" "}
            </Col>
          </Row>
         
        </Col>
       
      </Row>
    </div>
    </main>
  );
};

export default Availability;