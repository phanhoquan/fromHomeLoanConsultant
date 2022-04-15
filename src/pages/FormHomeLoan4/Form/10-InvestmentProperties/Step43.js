/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "YES",
  2: "NO",
};

const Step43 = ({ handleGetLoan2value }) => {
  const [investmentProperties, setInvestmentProperties] = useState(
    localStorage.getItem("loan2investmentProperties") || ""
  );

  const onCheck = (option) => {
    setInvestmentProperties(option);
    window.localStorage.setItem("loan2investmentProperties", option);
    handleGetLoan2value("investmentProperties", option);
  };

  return (
    <section className="formContent-step-first mb-3">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">43. Do you have any other investment properties?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2 mb-2">
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={investmentProperties === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={investmentProperties === types[2]}
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

export default Step43;
