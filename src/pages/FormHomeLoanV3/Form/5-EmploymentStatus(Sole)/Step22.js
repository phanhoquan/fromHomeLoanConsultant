/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types2 = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

export const types = {
  1: "Full Time ",
  2: "Part Time ",
  3: "Casual ",
  4: "Self Employed ",
  5: "Unemployed ",
  6: "Maternal Leave ",
};

const Step22 = ({ handleGetLoan2value, jointApplicationStatus }) => {
  const [employmentWorkingStatus, setEmploymentWorkingStatus] = useState(
    localStorage.getItem("loan2employmentPartnersWorkingStatus") || ""
  );

  const onCheck = (option) => {
    setEmploymentWorkingStatus(option);
    window.localStorage.setItem("loan2employmentPartnersWorkingStatus", option);
    handleGetLoan2value("employmentPartnersWorkingStatus", option);
  };

  useMemo(() => {
    if (jointApplicationStatus && jointApplicationStatus !== types[2]) {
      setEmploymentWorkingStatus("");
      window.localStorage.setItem("loan2employmentPartnersWorkingStatus", "");
      handleGetLoan2value("employmentPartnersWorkingStatus", "");
    }
    // eslint-disable-next-line
  }, [jointApplicationStatus]);

  return (
    <section
      className={`formContent-step-first ${
        jointApplicationStatus !== types2[2] ? "opacity-03" : ""
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
              24. What is your partners employment status?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={employmentWorkingStatus === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={employmentWorkingStatus === types[2]}
                    name={types[2]}
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={employmentWorkingStatus === types[3]}
                    onClick={() => onCheck(types[3])}
                    name={types[3]}
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[4])}
                    checkBox={employmentWorkingStatus === types[4]}
                    name={types[4]}
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[5])}
                    checkBox={employmentWorkingStatus === types[5]}
                    name={types[5]}
                  />
                </Col>
                <Col xs={6} className="wForm-input">
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
