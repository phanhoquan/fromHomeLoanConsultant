/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputNumber from "../../../../Components/InputNumber";

const Step27A = ({ handleGetLoan2value }) => {
  const personalLoanMonthlyRef = useRef(null);

  const [personalLoanMonthly, setPersonalLoanMonthly] = useState(
    localStorage.getItem("loan2personalLoanMonthly") || ""
  );
  const [personalLoanMonthlyValid, setPersonalLoanMonthlyValid] = useState(
    valid.NON_VALID
  );

  const checkPersonalLoanMonthlyStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setPersonalLoanMonthlyValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "personalLoanMonthly") {
      setPersonalLoanMonthly(value);
    }
  };

  useMemo(() => {
    window.localStorage.setItem(
      "loan2personalLoanMonthly",
      personalLoanMonthly && parseInt(personalLoanMonthly.replace(/,/g, ""), 10)
    );
  }, [personalLoanMonthly]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center mt-2">
              <h2 className="mb-3">
                30a. How much is your personal loan monthly repayment?
              </h2>
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
                    onFocus={() => setPersonalLoanMonthlyValid(valid.NON_VALID)}
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "personalLoanMonthly")
                    }
                    label="E.G. $10,000"
                    value={personalLoanMonthly}
                    id="personalLoanMonthly"
                    customClassLabel={personalLoanMonthly ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={personalLoanMonthlyRef}
                    onBlur={() => {
                      checkPersonalLoanMonthlyStatus(personalLoanMonthly);
                      handleGetLoan2value(
                        "personalLoanMonthly",
                        personalLoanMonthly
                      );
                    }}
                  />
                </Col>
              </Row>
              {personalLoanMonthlyValid === valid.INVALID && (
                <div className="text-error">
                  <p>Value should be in between $0 - $10,000,000</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step27A;
