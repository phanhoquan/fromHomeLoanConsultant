/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import InputNumber from "../../../../Components/InputNumber";

const Step27A = ({ handleGetLoan2value }) => {
  const personalLoanRef = useRef(null);
  const personalLoanAmountRef = useRef(null);

  const [personalLoan, setPersonalLoan] = useState(
    localStorage.getItem("loan2personalLoan") || ""
  );
  const [personalLoanValid, setPersonalLoanValid] = useState(valid.NON_VALID);

  const [personalLoanAmount, setPersonalLoanAmount] = useState(
    localStorage.getItem("loan2personalLoanAmount") || ""
  );
  const [personalLoanAmountValid, setPersonalLoanAmountValid] = useState(
    valid.NON_VALID
  );

  const checkPersonalLoanStatus = (value) => {
    let test = value.length > 1;
    setPersonalLoanValid(Number(test));
    return test;
  };

  const checkPersonalLoanAmountStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setPersonalLoanAmountValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "personalLoan") {
      setPersonalLoan(value);
    }
    if (name === "personalLoanAmount") {
      setPersonalLoanAmount(value);
    }
  };

  useMemo(() => {
    window.localStorage.setItem("loan2personalLoan", personalLoan);
  }, [personalLoan]);

  useMemo(() => {
    window.localStorage.setItem(
      "loan2personalLoanAmount",
      personalLoanAmount && parseInt(personalLoanAmount.replace(/,/g, ""), 10)
    );
  }, [personalLoanAmount]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                29. Which institution is the personal loan with?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={12} className="wForm-input pl-0">
                  <InputCustom2
                    onFocus={() => setPersonalLoanValid(valid.NON_VALID)}
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "personalLoan")
                    }
                    label="Personal Loan Institution"
                    value={
                      personalLoan &&
                      personalLoan[0].toUpperCase() + personalLoan.slice(1)
                    }
                    id="personalLoan"
                    customClassLabel={personalLoan ? "active" : ""}
                    customClassWrap="email five"
                    innerRef={personalLoanRef}
                    onBlur={(e) => {
                      checkPersonalLoanStatus(personalLoan);
                      handleGetLoan2value("personalLoan", personalLoan);
                    }}
                  />
                </Col>
              </Row>
              {personalLoanValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter your personal Loan Institution</p>
                </div>
              )}
            </Col>

            <Col xs={12} className="text-center mt-4">
              <h2 className="mb-3">
                30. What is the limit on the personal loan amount?
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
                    onFocus={() => setPersonalLoanAmountValid(valid.NON_VALID)}
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "personalLoanAmount")
                    }
                    label="E.G. $10,000"
                    value={personalLoanAmount}
                    id="personalLoanAmount"
                    customClassLabel={personalLoanAmount ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={personalLoanAmountRef}
                    onBlur={() => {
                      checkPersonalLoanAmountStatus(personalLoanAmount);
                      handleGetLoan2value(
                        "personalLoanAmount",
                        personalLoanAmount
                      );
                    }}
                  />
                </Col>
              </Row>
              {personalLoanAmountValid === valid.INVALID && (
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
