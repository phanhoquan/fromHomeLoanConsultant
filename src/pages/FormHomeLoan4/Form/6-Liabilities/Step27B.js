/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import InputNumber from "../../../../Components/InputNumber";

const Step27B = ({ handleGetLoan2value }) => {
  const carLoanRef = useRef(null);
  const carLoanAmountRef = useRef(null);
  const [carLoan, setCarLoan] = useState(
    localStorage.getItem("loan2carLoan") || ""
  );
  const [carLoanValid, setCarLoanValid] = useState(valid.NON_VALID);

  const [carLoanAmount, setCarLoanAmount] = useState(
    localStorage.getItem("loan2carLoanAmount") || ""
  );
  const [carLoanAmountValid, setCarLoanAmountValid] = useState(valid.NON_VALID);

  const checkCarLoanStatus = (value) => {
    let test = value.length > 1;
    setCarLoanValid(Number(test));
    return test;
  };

  const checkCarLoanAmountStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setCarLoanAmountValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "carLoan") {
      setCarLoan(value);
    }
    if (name === "carLoanAmount") {
      setCarLoanAmount(value);
    }
  };

  useMemo(() => {
    window.localStorage.setItem("loan2carLoan", carLoan);
  }, [carLoan]);

  useMemo(() => {
    window.localStorage.setItem(
      "loan2carLoanAmount",
      carLoanAmount && parseInt(carLoanAmount.replace(/,/g, ""), 10)
    );
  }, [carLoanAmount]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                31. Which institution is the car loan with?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={12} className="wForm-input pl-0">
                  <InputCustom2
                    onFocus={() => setCarLoanValid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle(e.target.value, "carLoan")}
                    label="Car Loan Institution"
                    value={
                      carLoan && carLoan[0].toUpperCase() + carLoan.slice(1)
                    }
                    id="carLoan"
                    customClassLabel={carLoan ? "active" : ""}
                    customClassWrap="email five"
                    innerRef={carLoanRef}
                    onBlur={() => {
                      checkCarLoanStatus(carLoan);
                      handleGetLoan2value("carLoan", carLoan);
                    }}
                  />
                </Col>
              </Row>
              {carLoanValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter your Car Loan Institution</p>
                </div>
              )}
            </Col>

            <Col xs={12} className="text-center mt-4">
              <h2 className="mb-3">
                32. What is the limit on the car loan amount?
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
                    onFocus={() => setCarLoanAmountValid(valid.NON_VALID)}
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "carLoanAmount")
                    }
                    label="E.G. $10,000"
                    value={carLoanAmount}
                    id="carLoanAmount"
                    customClassLabel={carLoanAmount ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={carLoanAmountRef}
                    onBlur={() => {
                      checkCarLoanAmountStatus(carLoanAmount);
                      handleGetLoan2value("carLoanAmount", carLoanAmount);
                    }}
                  />
                </Col>
              </Row>
              {carLoanAmountValid === valid.INVALID && (
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
