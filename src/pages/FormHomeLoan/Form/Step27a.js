/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import InputNumber from "../../../Components/InputNumber";

const Step27A = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
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
  const finDataStep = listDataSubmit.find((item) => item.id === 27);
  const step27 = {
    id: 27,
    question: "Which institution is the personal loan with?",
    answer: personalLoan,
    question2: "What is the limit on the personal loan amount?",
    answer2: personalLoanAmount
      ? parseInt(personalLoanAmount.replace(/,/g, ""), 10).toLocaleString("en")
      : "",
    skip: "",
    menu: "27a",
  };

  const nextStep = () => {
    window.localStorage.setItem("personalLoan", personalLoan);
    window.localStorage.setItem(
      "personalLoanAmount",
      personalLoanAmount && parseInt(personalLoanAmount.replace(/,/g, ""), 10)
    );
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 27 ? step27 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step27])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-28`,
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

  const handleSkip = () => {
    const skipStep27 = {
      id: 27,
      question: "Which institution is the personal loan with?",
      answer: personalLoan,
      question2: "What is the limit on the personal loan amount?",
      answer2: personalLoanAmount
        ? parseInt(personalLoanAmount.replace(/,/g, ""), 10).toLocaleString(
            "en"
          )
        : "",
      skip: (!personalLoanAmount && "Skipped") || (!personalLoan && "Skipped"),
      menu: "27a",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 27 ? skipStep27 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep27])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-28`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={27} numberScroll={1750}>
      <section className="formContent-step-second formContent-life-insurance mb-2">
        <Container>
          <div className="wForm wow fadeInUp">
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">
                  27. Which institution is the personal loan with?
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
                  27. What is the limit on the personal loan amount?
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

export default Step27A;
