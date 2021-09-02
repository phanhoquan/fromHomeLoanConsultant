/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputNumber from "../../../../Components/InputNumber";

const Step16B = ({ handleGetLoan2value }) => {
  const yourSalaryRef = useRef(null);
  const [yourSalary, setYourSalary] = useState(
    localStorage.getItem("loan2yourSalary") || ""
  );
  const [yourSalaryValid, setYourSalaryValid] = useState(valid.NON_VALID);

  const checkYourSalaryStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 1000000;
    setYourSalaryValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value) => {
    setYourSalary(value);
  };

  useMemo(() => {
    window.localStorage.setItem(
      "loan2yourSalary",
      yourSalary && parseInt(yourSalary.replace(/,/g, ""), 10)
    );
  }, [yourSalary]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-3">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">18. What is your salary?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={12} className="wForm-input pl-0">
                  <InputNumber
                    inputMode="numeric"
                    options={{
                      numericOnly: true,
                      numeral: true,
                      numeralDecimalMark: "",
                      delimiter: ",",
                      numeralThousandsGroupStyle: "thousand",
                    }}
                    onFocus={() => setYourSalaryValid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle(e.target.value)}
                    label="E.G. $80,000"
                    value={yourSalary}
                    id="yourSalary"
                    customClassLabel={yourSalary ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={yourSalaryRef}
                    onBlur={() => {
                      checkYourSalaryStatus(yourSalary);
                      handleGetLoan2value("yourSalary", yourSalary);
                    }}
                  />
                </Col>
              </Row>
              {yourSalaryValid === valid.INVALID && (
                <div className="text-error">
                  <p>Value should be in between $0 - $1,000,000</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step16B;
