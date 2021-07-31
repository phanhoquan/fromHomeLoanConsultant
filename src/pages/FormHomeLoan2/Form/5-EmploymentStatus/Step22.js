/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types2 = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Casual",
  4: "Self Employed",
  5: "Unemployed",
  6: "Maternal Leave",
};

const Step22 = () => {
  // const jointApplicationStatus = localStorage.getItem("jointApplicationStatus");

  const [employmentWorkingStatus, setEmploymentWorkingStatus] = useState(
    localStorage.getItem("employmentPartnersWorkingStatus") || ""
  );

  const onCheck = (option) => {
    setEmploymentWorkingStatus(option);
    window.localStorage.setItem("employmentPartnersWorkingStatus", option);
  };

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                23. What is your partners employment status?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2">
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={employmentWorkingStatus === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                  />
                </Col>
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={employmentWorkingStatus === types[2]}
                    name={types[2]}
                  />
                </Col>
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={employmentWorkingStatus === types[3]}
                    onClick={() => onCheck(types[3])}
                    name={types[3]}
                  />
                </Col>
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[4])}
                    checkBox={employmentWorkingStatus === types[4]}
                    name={types[4]}
                  />
                </Col>
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[5])}
                    checkBox={employmentWorkingStatus === types[5]}
                    name={types[5]}
                  />
                </Col>
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[6])}
                    checkBox={employmentWorkingStatus === types[6]}
                    name={types[6]}
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

export default Step22;
