/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputNumber from "../../../../Components/InputNumber";

const Step27B = ({ handleGetLoan2value }) => {
  const carLoanMonthlyRef = useRef(null);
  const [carLoanMonthly, setCarLoanMonthly] = useState(
    localStorage.getItem("loan2carLoanMonthly") || ""
  );
  const [carLoanMonthlyValid, setCarLoanMonthlyValid] = useState(valid.NON_VALID);

  const checkCarLoanMonthlyStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setCarLoanMonthlyValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "carLoanMonthly") {
      setCarLoanMonthly(value);
    }
  };
  useMemo(() => {
    window.localStorage.setItem(
      "loan2carLoanMonthly",
      carLoanMonthly && parseInt(carLoanMonthly.replace(/,/g, ""), 10)
    );
  }, [carLoanMonthly]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center mt-2">
              <h2 className="mb-3">
                32a. How much is your car loan monthly repayment?
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
                    onFocus={() => setCarLoanMonthlyValid(valid.NON_VALID)}
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "carLoanMonthly")
                    }
                    label="E.G. $10,000"
                    value={carLoanMonthly}
                    id="carLoanMonthly"
                    customClassLabel={carLoanMonthly ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={carLoanMonthlyRef}
                    onBlur={() => {
                      checkCarLoanMonthlyStatus(carLoanMonthly);
                      handleGetLoan2value("carLoanMonthly", carLoanMonthly);
                    }}
                  />
                </Col>
              </Row>
              {carLoanMonthlyValid === valid.INVALID && (
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

export default Step27B;
