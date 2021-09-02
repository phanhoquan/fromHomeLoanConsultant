/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "YES ",
  2: "NO ",
};

const Step08 = ({ handleGetLoan2value }) => {
  const [kidsOrDependant, setKidsOrDependant] = useState(
    localStorage.getItem("loan2kidsOrDependant") || ""
  );

  const onCheck = (option) => {
    setKidsOrDependant(option);
    window.localStorage.setItem("loan2kidsOrDependant", option);
    handleGetLoan2value("kidsOrDependant", option);
  };

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">9. Do you have any kids or dependants?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2 mb-2">
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={kidsOrDependant === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={kidsOrDependant === types[2]}
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

export default Step08;
