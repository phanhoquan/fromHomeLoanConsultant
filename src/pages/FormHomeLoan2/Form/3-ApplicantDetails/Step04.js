/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step04 = ({ handelGetApplicationStatus }) => {
  const [jointApplicationStatus, setJointApplicationStatus] = useState(
    localStorage.getItem("loan2jointApplicationStatus") || ""
  );

  const onCheck = (option) => {
    setJointApplicationStatus(option);
    localStorage.setItem("loan2jointApplicationStatus", option);
    handelGetApplicationStatus(option);
  };

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                4. Are you the sole applicant or is this <br />a joint
                application?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer w-650">
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={jointApplicationStatus === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                  />
                </Col>
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={jointApplicationStatus === types[2]}
                    name={types[2]}
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

export default Step04;
