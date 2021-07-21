/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import InputNumber from "../../../Components/InputNumber";

const Step29 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const valueCreditCardRef = useRef(null);
  const valueCreditCardAmountRef = useRef(null);

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [valueCreditCard, setValueCreditCard] = useState(
    localStorage.getItem("valueCreditCard") || ""
  );
  const [valueCreditCardValid, setValueCreditCardValid] = useState(
    valid.NON_VALID
  );

  const [valueCreditCardAmount, setValueCreditCardAmount] = useState(
    localStorage.getItem("valueCreditCardAmount") || ""
  );
  const [valueCreditCardAmountValid, setValueCreditCardAmountValid] = useState(
    valid.NON_VALID
  );

  useEffect(() => {
    setTimeout(() => {
      valueCreditCardRef?.current?.element?.focus();
    }, 400);
  }, []);

  const checkValueCreditCardStatus = (value) => {
    let test = value.length > 1;
    setValueCreditCardValid(Number(test));
    return test;
  };

  const checkValueCreditCardAmountStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setValueCreditCardAmountValid(Number(test));
    return test;
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 29);
  const step29 = {
    id: 29,
    question: "Which institution is the credit card with?",
    answer: valueCreditCard,
    question2: "What is the limit on the credit card?",
    answer2: valueCreditCardAmount
      ? parseInt(valueCreditCardAmount.replace(/,/gi, ""), 10).toLocaleString(
          "en"
        )
      : "",
    skip: "",
  };
  const nextStep = () => {
    window.localStorage.setItem("valueCreditCard", valueCreditCard);
    window.localStorage.setItem(
      "valueCreditCardAmount",
      valueCreditCardAmount &&
        parseInt(valueCreditCardAmount.replace(/,/g, ""), 10)
    );
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 29 ? step29 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step29])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-31`,
    });
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "valueCreditCard") {
      setValueCreditCard(value);
    }
    if (name === "valueCreditCardAmount") {
      setValueCreditCardAmount(value);
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkValueCreditCardStatus(valueCreditCard);
    checkValueCreditCardAmountStatus(valueCreditCardAmount);
    if (
      checkValueCreditCardStatus(valueCreditCard) &&
      checkValueCreditCardAmountStatus(valueCreditCardAmount)
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
    const skipStep29 = {
      id: 29,
      question: "Which institution is the credit card with?",
      answer: valueCreditCard,
      question2: "What is the limit on the credit card?",
      answer2: valueCreditCardAmount
        ? parseInt(valueCreditCardAmount.replace(/,/gi, ""), 10).toLocaleString(
            "en"
          )
        : "",
      skip:
        (!valueCreditCard && "Skipped") ||
        (!valueCreditCardAmount && "Skipped"),
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 29 ? skipStep29 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep29])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-31`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={29} numberScroll={1600}>
      <section className="formContent-step-second formContent-life-insurance mb-2">
        <Container>
          <div className="wForm wow fadeInUp">
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">
                  29. Which institution is the credit card with?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setValueCreditCardValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle(e.target.value, "valueCreditCard")
                      }
                      label="Credit Card Institution"
                      value={
                        valueCreditCard &&
                        valueCreditCard[0].toUpperCase() +
                          valueCreditCard.slice(1)
                      }
                      id="price-input"
                      customClassLabel={valueCreditCard ? "active" : ""}
                      customClassWrap="email five"
                      innerRef={valueCreditCardRef}
                    />
                  </Col>
                </Row>
                {valueCreditCardValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter your Car Loan Institution</p>
                  </div>
                )}
              </Col>

              <Col xs={12} className="text-center mt-4">
                <h2 className="mb-3">
                  29. What is the limit on the credit card?
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
                        setValueCreditCardAmountValid(valid.NON_VALID)
                      }
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle(e.target.value, "valueCreditCardAmount")
                      }
                      label="E.G. $10,000"
                      value={valueCreditCardAmount}
                      id="price-input"
                      customClassLabel={valueCreditCardAmount ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={valueCreditCardAmountRef}
                    />
                  </Col>
                </Row>
                {valueCreditCardAmountValid === valid.INVALID && (
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

export default Step29;
