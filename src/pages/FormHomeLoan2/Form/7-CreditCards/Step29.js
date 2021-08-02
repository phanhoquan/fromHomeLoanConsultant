/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "YES",
  2: "NO",
};

const Step29 = ({ handleGetLoan2value }) => {
  const [creditCard, setCreditCard] = useState(
    localStorage.getItem("loan2creditCard") || ""
  );
  const onCheck = (option) => {
    setCreditCard(option);
    window.localStorage.setItem("loan2creditCard", option);
    handleGetLoan2value("loan2creditCard", option);
  };

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">33. Do you have a credit card?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={creditCard === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={creditCard === types[2]}
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

export default Step29;
