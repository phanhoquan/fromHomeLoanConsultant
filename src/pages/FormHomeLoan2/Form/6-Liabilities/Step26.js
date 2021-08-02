/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "Personal Loans",
  2: "Car Loans",
  3: "HECS debt",
  4: "None of the above",
};

const Step26 = ({ handleGetLoan2value }) => {
  const [personalLoansStatus, setPersonalLoansStatus] = useState(
    localStorage.getItem("loan2personalLoansStatus")
      ? localStorage.getItem("loan2personalLoansStatus").split(",")
      : []
  );

  const onCheck = (id) => {
    let dataSubmit = [];
    if (id !== types[4]) {
      if (personalLoansStatus.includes(id)) {
        dataSubmit = personalLoansStatus.filter((item) => item !== id);
      } else {
        dataSubmit = [...personalLoansStatus, id];
      }
      const dataUpdate = dataSubmit.filter((item) => item !== types[4]);
      setPersonalLoansStatus(dataUpdate);
    } else {
      if (personalLoansStatus.includes(id)) {
        dataSubmit = personalLoansStatus.filter((item) => item !== id);
      } else {
        dataSubmit = [id];
      }
      setPersonalLoansStatus(dataSubmit);
    }
  };

  useMemo(() => {
    window.localStorage.setItem(
      "loan2personalLoansStatus",
      personalLoansStatus
    );
    handleGetLoan2value("personalLoansStatus", personalLoansStatus);
    // eslint-disable-next-line
  }, [personalLoansStatus, personalLoansStatus.length]);

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-2">
                26. Are you currently paying off any personal loans, <br />
                car loans or HECS debt?
              </h2>
              <p style={{ fontFamily: "Lato", color: "red" }}>
                Select multiple options that apply.
              </p>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-4 w-500">
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    handleToggleCheckbox={() => onCheck(types[1])}
                    checkBox={!!personalLoansStatus?.includes(types[1])}
                    name={types[1]}
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    handleToggleCheckbox={() => onCheck(types[2])}
                    checkBox={!!personalLoansStatus?.includes(types[2])}
                    name={types[2]}
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    handleToggleCheckbox={() => onCheck(types[3])}
                    checkBox={!!personalLoansStatus?.includes(types[3])}
                    name={types[3]}
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    name={types[4]}
                    handleToggleCheckbox={() => onCheck(types[4])}
                    checkBox={!!personalLoansStatus?.includes(types[4])}
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

export default Step26;
