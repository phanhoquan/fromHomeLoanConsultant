/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "YES",
  2: "NO",
};

const Step12 = () => {
  const employmentStatus = localStorage.getItem("employmentStatus");
  const [workingStatus, setWorkingStatus] = useState(
    localStorage.getItem("workingStatus") || ""
  );

  const onCheck = (option) => {
    setWorkingStatus(option);
    window.localStorage.setItem("workingStatus", option);
  };

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                12. You mentioned that you are working{" "}
                <br className="d-block" />‘{employmentStatus}’ Is that correct?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2">
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={workingStatus === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={workingStatus === types[2]}
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

export default Step12;
