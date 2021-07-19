/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import InputNumber from "../../../Components/InputNumber";

const Step28B = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const carLoanRef = useRef(null);
  const carLoanAmountRef = useRef(null);

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [carLoan, setCarLoan] = useState(localStorage.getItem("carLoan") || "");
  const [carLoanValid, setCarLoanValid] = useState(valid.NON_VALID);

  const [carLoanAmount, setCarLoanAmount] = useState(
    localStorage.getItem("carLoanAmount") || ""
  );
  const [carLoanAmountValid, setCarLoanAmountValid] = useState(valid.NON_VALID);

  useEffect(() => {
    setTimeout(() => {
      carLoanRef?.current?.element?.focus();
    }, 400);
  }, []);

  const checkCarLoanStatus = (value) => {
    let test = /^([A-Za-z]{2,})$/.test(value);
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
  const finDataStep = listDataSubmit.find((item) => item.id === 28);
  const step28 = {
    id: 28,
    question: "Which institution is the car loan with?",
    answer: carLoan,
    question2: "What is the limit on the car loan amount?",
    answer2: carLoanAmount
      ? parseInt(carLoanAmount, 10).toLocaleString("en")
      : "",
    skip: "",
  };
  const nextStep = () => {
    window.localStorage.setItem("carLoan", carLoan);
    window.localStorage.setItem(
      "carLoanAmount",
      carLoanAmount && parseInt(carLoanAmount.replace(/,/g, ""), 10)
    );
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 28 ? step28 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step28])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-29`,
    });
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "carLoan") {
      setCarLoan(value);
    }
    if (name === "carLoanAmount") {
      setCarLoanAmount(value);
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkCarLoanStatus(carLoan);
    checkCarLoanAmountStatus(carLoanAmount);
    if (
      checkCarLoanStatus(carLoan) &&
      checkCarLoanAmountStatus(carLoanAmount)
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

  const handleSkip = () => {
    const skipStep28 = {
      id: 28,
      question: "Which institution is the car loan with?",
      answer: carLoan,
      question2: "What is the limit on the car loan amount?",
      answer2: carLoanAmount
        ? parseInt(carLoanAmount, 10).toLocaleString("en")
        : "",
      skip: "Skipped",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 28 ? skipStep28 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep28])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-29`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={28}>
      <section className="formContent-step-second formContent-life-insurance mb-2">
        <Container>
          <div className="wForm wow fadeInUp">
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">
                  28. Which institution is the car loan with?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setCarLoanValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) => onKeyUpHandle(e.target.value, "carLoan")}
                      label="Car Loan Institution"
                      value={
                        carLoan && carLoan[0].toUpperCase() + carLoan.slice(1)
                      }
                      id="price-input"
                      customClassLabel={carLoan ? "active" : ""}
                      customClassWrap="email five"
                      innerRef={carLoanRef}
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
                  28. What is the limit on the car loan amount?
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
                      onFocus={() => setCarLoanAmountValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle(e.target.value, "carLoanAmount")
                      }
                      label="E.G. $10,000"
                      value={carLoanAmount}
                      id="price-input"
                      customClassLabel={carLoanAmount ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={carLoanAmountRef}
                    />
                  </Col>
                </Row>
                {carLoanAmountValid === valid.INVALID && (
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
                <div
                  className="SKIP"
                  onClick={() => handleSkip()}
                  role="button"
                >
                  SKIP
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default Step28B;
