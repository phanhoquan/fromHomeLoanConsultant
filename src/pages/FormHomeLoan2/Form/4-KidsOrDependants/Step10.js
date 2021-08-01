/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "YES",
  2: "NO",
};

const Step10 = ({ handleGetLoan2value }) => {
  const [otherDependents, setOtherDependents] = useState(
    localStorage.getItem("loan2otherDependents") || ""
  );

  const onCheck = (option) => {
    setOtherDependents(option);
    window.localStorage.setItem("loan2otherDependents", option);
    handleGetLoan2value("otherDependents", option);
  };

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">10. Do you have any other dependants?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-4">
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={otherDependents === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={otherDependents === types[2]}
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

export default Step10;
