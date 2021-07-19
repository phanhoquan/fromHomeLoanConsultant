/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import formatCurrency from "../../../utils/formatCurrency";

export const types = {
  1: "Fixed",
  2: "Variable",
  3: "Split",
};

const Step03 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const currentLoanStatus =
    localStorage.getItem("currentLoanStatus") || "Fixed";
  const [valueInterestRate, setValueInterestRate] = useState(
    localStorage.getItem("valueInterestRate") || ""
  );
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [valueInterestRateValid, setValueInterestRateValid] = useState(
    valid.NON_VALID
  );

  const [valueInterestRate2, setValueInterestRate2] = useState(
    localStorage.getItem("valueInterestRate2") || ""
  );

  const [valueInterestRateValid2, setValueInterestRateValid2] = useState(
    valid.NON_VALID
  );
  const [validMessage, setValidMessage] = useState("This field is required");
  const [validMessage2, setValidMessage2] = useState("This field is required");
  // const decimalCount = (num) => {
  //   // Convert to String
  //   const numStr = String(num);
  //   // String Contains Decimal
  //   if (numStr.includes(".")) {
  //     return numStr.split(".")[1].length;
  //   }
  //   // String Does Not Contain Decimal
  //   return 0;
  // };

  const checkValueInterestRateStatus = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage("This field is required");
      setValueInterestRateValid(valid.INVALID);
      return false;
    }
    // if (originAmount) {
    //   setValidMessage("Please enter valid decimal number");
    //   setValueInterestRateValid(valid.INVALID);
    //   return false;
    // }

    if (originAmount > 100) {
      setValidMessage("Value should be less that 100%");
      setValueInterestRateValid(valid.INVALID);
      return false;
    }
    setValueInterestRateValid(valid.VALID);
    return true;
  };

  const checkValueInterestRateStatus2 = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage2("This field is required");
      setValueInterestRateValid2(valid.INVALID);
      return false;
    }
    // if (originAmount) {
    //   setValidMessage2("Please enter valid decimal number");
    //   setValueInterestRateValid2(valid.INVALID);
    //   return false;
    // }

    if (originAmount > 100) {
      setValidMessage2("Value should be less that 100%");
      setValueInterestRateValid2(valid.INVALID);
      return false;
    }
    setValueInterestRateValid2(valid.VALID);
    return true;
  };

  const onKeyUp = (e, name) => {
    const valueConverted = formatCurrency(e.target.value);
    e.target.value = valueConverted;
    switch (name) {
      case "interestRate1":
        setValueInterestRate(valueConverted);
        break;
      case "interestRate2":
        setValueInterestRate2(valueConverted);
        break;
      default:
        break;
    }
  };

  const onBlur = (e, name) => {
    switch (name) {
      case "interestRate1":
        checkValueInterestRateStatus(e.target.value);
        break;
      case "interestRate2":
        checkValueInterestRateStatus2(e.target.value);
        break;
      default:
        break;
    }
  };
  const onFocus = (name) => {
    switch (name) {
      case "interestRate1":
        setValueInterestRateValid(valid.NON_VALID);
        break;
      case "interestRate2":
        setValueInterestRateValid2(valid.NON_VALID);
        break;
      default:
        break;
    }
  };
  const step3 = {
    id: 3,
    question:
      "What is the current interest rate you are \n paying on your loan?",
    answer: valueInterestRate,
    answer2: valueInterestRate2,
    skip: "",
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 3);
  const nextStep = () => {
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 3 ? step3 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step3])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-04`,
    });
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkValueInterestRateStatus(valueInterestRate);
    checkValueInterestRateStatus2(valueInterestRate2);
    if (currentLoanStatus === types[1]) {
      if (checkValueInterestRateStatus(valueInterestRate)) {
        if (!showLoading) {
          setTimeout(function () {
            nextStep();
          }, 500);
        }
      }
    }
    if (currentLoanStatus === types[2]) {
      if (checkValueInterestRateStatus2(valueInterestRate2)) {
        if (!showLoading) {
          setTimeout(function () {
            nextStep();
          }, 500);
        }
      }
    }
    if (currentLoanStatus === types[3]) {
      if (
        checkValueInterestRateStatus(valueInterestRate) &&
        checkValueInterestRateStatus2(valueInterestRate2)
      ) {
        if (!showLoading) {
          setTimeout(function () {
            nextStep();
          }, 500);
        }
      }
    }
  };

  useMemo(() => {
    localStorage.setItem("valueInterestRate", valueInterestRate);
    // eslint-disable-next-line
  }, [valueInterestRate]);

  useMemo(() => {
    localStorage.setItem("valueInterestRate2", valueInterestRate2);
    // eslint-disable-next-line
  }, [valueInterestRate2]);

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    history.push({
      pathname: `/refinance-fact-find/step-04`,
    });
    const skipStep2 = {
      id: 3,
      question:
        "What is the current interest rate you are \n paying on your loan?",
      answer: valueInterestRate,
      answer2: valueInterestRate2,
      skip: "Skipped",
    };
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 3 ? skipStep2 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep2])
      );
    }
  };

  return (
    <LifeInsurance isShowHeader>
      <section className="formContent-step-first pb-5">
        <Container>
          <div
            className={
              "wForm wow " +
              (history?.location?.back ? "fadeInDown" : "fadeInUp")
            }
          >
            <Row>
              <Col xs={12} className="text-center mt-3">
                <h2 className="mb-4">
                  3. What is the current interest rate you are <br />
                  paying on your loan?
                </h2>
              </Col>
              {currentLoanStatus === types[1] ||
              currentLoanStatus === types[3] ? (
                <Col xs={12}>
                  <Row className="info-customer">
                    <Col xs={12}>
                      <InputCustom2
                        onChange={(e) => onKeyUp(e, "interestRate1")}
                        label="Fixed interest rate"
                        value={valueInterestRate}
                        type="text"
                        id="email-input"
                        customClassLabel={valueInterestRate ? "active" : ""}
                        iconRate
                        maxLength="5"
                        customClassWrap="email"
                        onBlur={(e) => onBlur(e, "interestRate1")}
                        onFocus={() => onFocus("interestRate1")}
                      />
                    </Col>
                  </Row>
                  {valueInterestRateValid === valid.INVALID && (
                    <div className="text-error mb-3">
                      <p>{validMessage}</p>
                    </div>
                  )}
                </Col>
              ) : (
                ""
              )}
              {currentLoanStatus === types[2] ||
              currentLoanStatus === types[3] ? (
                <Col xs={12}>
                  <Row className="info-customer">
                    <Col xs={12}>
                      <InputCustom2
                        onChange={(e) => onKeyUp(e, "interestRate2")}
                        label="Variable interest rate"
                        value={valueInterestRate2}
                        type="text"
                        id="email-input"
                        customClassLabel={valueInterestRate2 ? "active" : ""}
                        iconRate
                        maxLength="5"
                        customClassWrap="email"
                        onBlur={(e) => onBlur(e, "interestRate2")}
                        onFocus={() => onFocus("interestRate2")}
                      />
                    </Col>
                  </Row>
                  {valueInterestRateValid2 === valid.INVALID && (
                    <div className="text-error">
                      <p>{validMessage2}</p>
                    </div>
                  )}
                </Col>
              ) : (
                ""
              )}

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

export default Step03;
