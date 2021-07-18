/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import InputNumber from "../../../Components/InputNumber";

const Step28A = () => {
  const personalLoanRef = useRef(null);
  const personalLoanAmountRef = useRef(null);

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [personalLoan, setPersonalLoan] = useState(
    localStorage.getItem("personalLoan") || ""
  );
  const [personalLoanValid, setPersonalLoanValid] = useState(valid.NON_VALID);

  const [personalLoanAmount, setPersonalLoanAmount] = useState(
    localStorage.getItem("personalLoanAmount") || ""
  );
  const [personalLoanAmountValid, setPersonalLoanAmountValid] = useState(
    valid.NON_VALID
  );

  useEffect(() => {
    setTimeout(() => {
      personalLoanRef?.current?.element?.focus();
    }, 400);
  }, []);

  const checkPersonalLoanStatus = (value) => {
    let test = /^([A-Za-z]{2,})$/.test(value);
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

  const nextStep = () => {
    window.localStorage.setItem("personalLoan", personalLoan);
    window.localStorage.setItem(
      "personalLoanAmount",
      personalLoanAmount && parseInt(personalLoanAmount.replace(/,/g, ""), 10)
    );
    history.push({
      pathname: `/refinance-fact-find/step-29`,
    });
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "personalLoan") {
      setPersonalLoan(value);
    }
    if (name === "personalLoanAmount") {
      setPersonalLoanAmount(value);
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkPersonalLoanStatus(personalLoan);
    checkPersonalLoanAmountStatus(personalLoanAmount);
    if (
      checkPersonalLoanStatus(personalLoan) &&
      checkPersonalLoanAmountStatus(personalLoanAmount)
    ) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep();
        }, 500);
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickNext();
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  return (
    <LifeInsurance isShowHeader>
      <section className="formContent-step-second formContent-life-insurance mb-2">
        <Container>
          <div className="wForm wow fadeInUp">
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">
                  28. Which institution is the personal loan with?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setPersonalLoanValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle(e.target.value, "personalLoan")
                      }
                      label="Personal Loan Institution"
                      value={
                        personalLoan &&
                        personalLoan[0].toUpperCase() + personalLoan.slice(1)
                      }
                      id="price-input"
                      customClassLabel={personalLoan ? "active" : ""}
                      customClassWrap="email five"
                      innerRef={personalLoanRef}
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
                  28. What is the limit on the personal loan amount?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
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
                      onFocus={() =>
                        setPersonalLoanAmountValid(valid.NON_VALID)
                      }
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle(e.target.value, "personalLoanAmount")
                      }
                      label="E.G. $10,000"
                      value={personalLoanAmount}
                      id="price-input"
                      customClassLabel={personalLoanAmount ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={personalLoanAmountRef}
                    />
                  </Col>
                </Row>
                {personalLoanAmountValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Value should be in between $0 - $10,000,000</p>
                  </div>
                )}
              </Col>

              <Col xs={12} className="fadeInDown wow  mt-4">
                <div className="group-btn-footer col d-flex justify-content-center">
                  <Button
                    className="btnPrimary life wow fadeInUp mt-0 back"
                    type="next"
                    onClick={onClickBack}
                  >
                    BACK
                  </Button>
                  <Button
                    className="btnPrimary life wow fadeInUp mt-0 in-progress"
                    type="next"
                    onClick={onClickNext}
                  >
                    {showLoading && <Spinner animation="border" />}
                    NEXT
                  </Button>
                </div>
                <div className="SKIP">SKIP</div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default Step28A;
