/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Casual",
  4: "Self Employed",
  5: "Unemployed",
  6: "Maternal Leave",
};

export const types2 = {
  1: "YES",
  2: "NO",
};

const Step13 = ({ handleGetLoan2value, workingStatus }) => {
  const [employmentWorkingStatus, setEmploymentWorkingStatus] = useState(
    localStorage.getItem("loan2employmentWorkingStatus") || ""
  );

  const onCheck = (option) => {
    setEmploymentWorkingStatus(option);
    window.localStorage.setItem("loan2employmentWorkingStatus", option);
    handleGetLoan2value("employmentWorkingStatus", option);
  };

  useMemo(() => {
    if (workingStatus) {
      setEmploymentWorkingStatus(
        localStorage.getItem("loan2employmentWorkingStatus")
      );
    }
    // eslint-disable-next-line
  }, [workingStatus]);

  return (
    <section
      className={`formContent-step-first ${
        workingStatus !== types2[2] ? "opacity-03" : ""
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">14. What is your employment status?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2">
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

export default Step13;
