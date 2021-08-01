/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "Fixed",
  2: "Variable",
  3: "Split",
};

const Step02 = ({ handelGetLoan2currentLoanStatus }) => {
  let listDataSubmit = localStorage.getItem("loan2listDataSubmit")
    ? JSON.parse(localStorage.getItem("loan2listDataSubmit"))
    : [];

  const [currentLoanStatus, setCurrentLoanStatus] = useState(
    localStorage.getItem("loan2currentLoanStatus") || ""
  );

  const step2 = {
    id: 2,
    question: "2. Is the loan you currently have Fixed, Variable or Split?",
  };
  const finDataStep2 = listDataSubmit?.find((item) => item.id === 2);
  const updateDataStep2 = listDataSubmit?.map((item) =>
    item.id === 2 ? step2 : item
  );
  const onCheck = (option) => {
    setCurrentLoanStatus(option);
    window.localStorage.setItem("loan2currentLoanStatus", option);
    handelGetLoan2currentLoanStatus(option);
  };

  useMemo(() => {
    if (currentLoanStatus) {
      if (finDataStep2) {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify(updateDataStep2)
        );
      } else {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify([...listDataSubmit, step2])
        );
      }
    }
    // eslint-disable-next-line
  }, [currentLoanStatus]);

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
              <Row className="info-customer w-650">
                <Col xs={12} sm={4} className="wForm-input">
                  <CheckboxButton
                    checkBox={currentLoanStatus === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={12} sm={4} className="wForm-input">
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
