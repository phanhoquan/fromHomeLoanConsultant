/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "YES",
  2: "NO",
};

const Step32 = ({ handleGetLoan2value }) => {
  const [currentlyRenting, setCurrentlyRenting] = useState(
    localStorage.getItem("loan2currentlyRenting") || ""
  );

  const onCheck = (option) => {
    setCurrentlyRenting(option);
    window.localStorage.setItem("loan2currentlyRenting", option);
    handleGetLoan2value("currentlyRenting", option);
  };

  return (
    <section className="formContent-step-first pb-5">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                37. So with that property, are you <br />
                currently renting it out?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={currentlyRenting === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={currentlyRenting === types[2]}
                    name={types[2]}
                    classContainer="radius"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step32;
