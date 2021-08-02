/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "Fixed",
  2: "Variable",
  3: "Split",
};

const Step02 = ({ handelGetLoan2currentLoanStatus }) => {
  const [currentLoanStatus, setCurrentLoanStatus] = useState(
    localStorage.getItem("loan2currentLoanStatus") || ""
  );

  const onCheck = (option) => {
    setCurrentLoanStatus(option);
    window.localStorage.setItem("loan2currentLoanStatus", option);
    handelGetLoan2currentLoanStatus(option);
  };

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                2. Is the loan you currently have Fixed,{" "}
                <br className="d-block" /> Variable or Split?{" "}
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer w-500">
                <Col xs={6} sm={4} className="wForm-input">
                  <CheckboxButton
                    checkBox={currentLoanStatus === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={6} sm={4} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={currentLoanStatus === types[2]}
                    name={types[2]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={12} sm={4} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[3])}
                    checkBox={currentLoanStatus === types[3]}
                    name={types[3]}
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

export default Step02;
