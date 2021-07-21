/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import InputNumber from "../../../Components/InputNumber";

export const types = {
  1: "Personal Loans",
  2: "Car Loans",
  3: "HECS debt",
  4: "None of the above",
};

const Step27 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];

  const personalLoansStatus = localStorage.getItem("personalLoansStatus")
    ? localStorage.getItem("personalLoansStatus").split(",")
    : [];
  console.log(personalLoansStatus, "personalLoansStatus");
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

  // cart loan
  const carLoanRef = useRef(null);
  const carLoanAmountRef = useRef(null);
  const [carLoan, setCarLoan] = useState(localStorage.getItem("carLoan") || "");
  const [carLoanValid, setCarLoanValid] = useState(valid.NON_VALID);

  const [carLoanAmount, setCarLoanAmount] = useState(
    localStorage.getItem("carLoanAmount") || ""
  );
  const [carLoanAmountValid, setCarLoanAmountValid] = useState(valid.NON_VALID);
  // useEffect(() => {
  //   setTimeout(() => {
  //     carLoanRef?.current?.element?.focus();
  //   }, 400);
  // }, []);

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
  // End cart loan

  // HECSDebt
  const HECSDebtRef = useRef(null);
  const HECSDebtAmountRef = useRef(null);
  const [HECSDebt, setHECSDebt] = useState(
    localStorage.getItem("HECSDebt") || ""
  );
  const [HECSDebtValid, setHECSDebtValid] = useState(valid.NON_VALID);

  const [HECSDebtAmount, setHECSDebtAmount] = useState(
    localStorage.getItem("HECSDebtAmount") || ""
  );
  const [HECSDebtAmountValid, setHECSDebtAmountValid] = useState(
    valid.NON_VALID
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     HECSDebtRef?.current?.element?.focus();
  //   }, 400);
  // }, []);

  const checkHECSDebtStatus = (value) => {
    let test = value.length > 1;
    setHECSDebtValid(Number(test));
    return test;
  };

  const checkHECSDebtAmountStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setHECSDebtAmountValid(Number(test));
    return test;
  };

  // End HECSDebt

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
    question: !!personalLoansStatus?.includes(types[1])
      ? "Which institution is the personal loan with?"
      : "",
    answer: !!personalLoansStatus?.includes(types[1]) ? personalLoan : "",
    question2: !!personalLoansStatus?.includes(types[1])
      ? "What is the limit on the personal loan amount?"
      : "",
    answer2:
      !!personalLoansStatus?.includes(types[1]) && personalLoanAmount
        ? parseInt(personalLoanAmount.replace(/,/g, ""), 10).toLocaleString(
            "en"
          )
        : "",

    question3: !!personalLoansStatus?.includes(types[2])
      ? "Which institution is the car loan with?"
      : "",
    answer3: !!personalLoansStatus?.includes(types[2]) ? carLoan : "",
    question4: !!personalLoansStatus?.includes(types[2])
      ? "What is the limit on the car loan amount?"
      : "",
    answer4:
      !!personalLoansStatus?.includes(types[2]) && carLoanAmount
        ? parseInt(carLoanAmount.replace(/,/g, ""), 10).toLocaleString("en")
        : "",

    question5: !!personalLoansStatus?.includes(types[3])
      ? "Which institution is the HECS debt with?"
      : "",
    answer5: !!personalLoansStatus?.includes(types[3]) ? HECSDebt : "",
    question6: !!personalLoansStatus?.includes(types[3])
      ? "What is the limit on the HECS Debt amount?"
      : "",
    answer6:
      !!personalLoansStatus?.includes(types[3]) && HECSDebtAmount
        ? parseInt(HECSDebtAmount.replace(/,/g, ""), 10).toLocaleString("en")
        : "",

    skip: "",
    menu: "27",
  };

  const nextStep = () => {
    window.localStorage.setItem(
      "personalLoan",
      !!personalLoansStatus?.includes(types[1]) ? personalLoan : ""
    );
    window.localStorage.setItem(
      "personalLoanAmount",
      (personalLoanAmount &&
        !!personalLoansStatus?.includes(types[1]) &&
        parseInt(personalLoanAmount.replace(/,/g, ""), 10)) ||
        ""
    );

    window.localStorage.setItem(
      "carLoan",
      !!personalLoansStatus?.includes(types[2]) ? carLoan : ""
    );
    window.localStorage.setItem(
      "carLoanAmount",
      (carLoanAmount &&
        !!personalLoansStatus?.includes(types[2]) &&
        parseInt(carLoanAmount.replace(/,/g, ""), 10)) ||
        ""
    );

    window.localStorage.setItem(
      "HECSDebt",
      !!personalLoansStatus?.includes(types[3]) ? HECSDebt : ""
    );
    window.localStorage.setItem(
      "HECSDebtAmount",
      (HECSDebtAmount &&
        !!personalLoansStatus?.includes(types[3]) &&
        parseInt(HECSDebtAmount.replace(/,/g, ""), 10)) ||
        ""
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
    switch (name) {
      case "personalLoan":
        setPersonalLoan(value);
        break;
      case "personalLoanAmount":
        setPersonalLoanAmount(value);
        break;

      case "carLoan":
        setCarLoan(value);
        break;
      case "carLoanAmount":
        setCarLoanAmount(value);
        break;

      case "HECSDebt":
        setHECSDebt(value);
        break;
      case "HECSDebtAmount":
        setHECSDebtAmount(value);
        break;

      default:
        break;
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkPersonalLoanStatus(personalLoan);
    checkPersonalLoanAmountStatus(personalLoanAmount);

    checkCarLoanStatus(carLoan);
    checkCarLoanAmountStatus(carLoanAmount);

    checkHECSDebtStatus(HECSDebt);
    checkHECSDebtAmountStatus(HECSDebtAmount);
    // TODO Checks

    if (!showLoading) {
      setTimeout(function () {
        nextStep();
      }, 500);
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
      question: !!personalLoansStatus?.includes(types[1])
        ? "Which institution is the personal loan with?"
        : "",
      answer: !!personalLoansStatus?.includes(types[1]) ? personalLoan : "",
      question2: !!personalLoansStatus?.includes(types[1])
        ? "What is the limit on the personal loan amount?"
        : "",
      answer2:
        !!personalLoansStatus?.includes(types[1]) && personalLoanAmount
          ? parseInt(personalLoanAmount.replace(/,/g, ""), 10).toLocaleString(
              "en"
            )
          : "",

      question3: !!personalLoansStatus?.includes(types[2])
        ? "Which institution is the car loan with?"
        : "",
      answer3: !!personalLoansStatus?.includes(types[2]) ? carLoan : "",
      question4: !!personalLoansStatus?.includes(types[2])
        ? "What is the limit on the car loan amount?"
        : "",
      answer4:
        !!personalLoansStatus?.includes(types[2]) && carLoanAmount
          ? parseInt(carLoanAmount.replace(/,/g, ""), 10).toLocaleString("en")
          : "",

      question5: !!personalLoansStatus?.includes(types[3])
        ? "Which institution is the HECS debt with?"
        : "",
      answer5: !!personalLoansStatus?.includes(types[3]) ? HECSDebt : "",
      question6: !!personalLoansStatus?.includes(types[3])
        ? "What is the limit on the HECS Debt amount?"
        : "",
      answer6:
        !!personalLoansStatus?.includes(types[3]) && HECSDebtAmount
          ? parseInt(HECSDebtAmount.replace(/,/g, ""), 10).toLocaleString("en")
          : "",
      skip:
        (!personalLoanAmount &&
          !!personalLoansStatus?.includes(types[1]) &&
          "Skipped") ||
        (!personalLoan &&
          !!personalLoansStatus?.includes(types[1]) &&
          "Skipped") ||
        (!carLoan && !!personalLoansStatus?.includes(types[2]) && "Skipped") ||
        (!carLoanAmount &&
          !!personalLoansStatus?.includes(types[2]) &&
          "Skipped") ||
        (!HECSDebtAmount &&
          !!personalLoansStatus?.includes(types[3]) &&
          "Skipped") ||
        (!HECSDebt && !!personalLoansStatus?.includes(types[3]) && "Skipped"), // TODO Check
      menu: "27",
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
              {!!personalLoansStatus?.includes(types[1]) ? (
                <>
                  <Col xs={12} className="text-center">
                    <h2 className="mb-3">
                      27. Which institution is the personal loan with?
                    </h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer mt-4">
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
                            personalLoan[0].toUpperCase() +
                              personalLoan.slice(1)
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
                    <Row className="info-customer mt-4">
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
                </>
              ) : (
                ""
              )}

              {/* car loan */}
              {!!personalLoansStatus?.includes(types[2]) ? (
                <>
                  <Col xs={12} className="text-center mt-4">
                    <h2 className="mb-3">
                      27. Which institution is the car loan with?
                    </h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer mt-4">
                      <Col xs={12} className="wForm-input pl-0">
                        <InputCustom2
                          onFocus={() => setCarLoanValid(valid.NON_VALID)}
                          onKeyPress={onKeyDown}
                          onChange={(e) =>
                            onKeyUpHandle(e.target.value, "carLoan")
                          }
                          label="Car Loan Institution"
                          value={
                            carLoan &&
                            carLoan[0].toUpperCase() + carLoan.slice(1)
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
                      27. What is the limit on the car loan amount?
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
                </>
              ) : (
                ""
              )}
              {/* END car loan */}

              {/* HECSDebt Amount */}

              {!!personalLoansStatus?.includes(types[3]) ? (
                <>
                  <Col xs={12} className="text-center">
                    <h2 className="mb-3">
                      27. Which institution is the HECS debt with?
                    </h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer mt-4 pt-2">
                      <Col xs={12} className="wForm-input pl-0">
                        <InputCustom2
                          onFocus={() => setHECSDebtValid(valid.NON_VALID)}
                          onKeyPress={onKeyDown}
                          onChange={(e) =>
                            onKeyUpHandle(e.target.value, "HECSDebt")
                          }
                          label="HECS debt Institution"
                          value={
                            HECSDebt &&
                            HECSDebt[0].toUpperCase() + HECSDebt.slice(1)
                          }
                          id="price-input"
                          customClassLabel={HECSDebt ? "active" : ""}
                          customClassWrap="email five"
                          innerRef={HECSDebtRef}
                        />
                      </Col>
                    </Row>
                    {HECSDebtValid === valid.INVALID && (
                      <div className="text-error">
                        <p>Please enter your Car Loan Institution</p>
                      </div>
                    )}
                  </Col>

                  <Col xs={12} className="text-center mt-4">
                    <h2 className="mb-3">
                      27. What is the limit on the HECS Debt amount?
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
                            setHECSDebtAmountValid(valid.NON_VALID)
                          }
                          onKeyPress={onKeyDown}
                          onChange={(e) =>
                            onKeyUpHandle(e.target.value, "HECSDebtAmount")
                          }
                          label="E.G. $10,000"
                          value={HECSDebtAmount}
                          id="price-input"
                          customClassLabel={HECSDebtAmount ? "active" : ""}
                          iconPrice
                          customClassWrap="email five"
                          innerRef={HECSDebtAmountRef}
                        />
                      </Col>
                    </Row>
                    {HECSDebtAmountValid === valid.INVALID && (
                      <div className="text-error">
                        <p>Value should be in between $0 - $10,000,000</p>
                      </div>
                    )}
                  </Col>
                </>
              ) : (
                ""
              )}
              {/* End HECSDebt Amount */}
              <Col xs={12} className="fadeInDown wow  mt-4 mb-5">
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

export default Step27;
