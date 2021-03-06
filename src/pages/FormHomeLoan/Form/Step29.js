/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep29 } from "../../../utils/listLocalStorage";

export const types = {
  1: "YES",
  2: "NO",
};

const Step29 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [creditCard, setCreditCard] = useState(
    localStorage.getItem("creditCard") || ""
  );

  const [creditCardValid, setCreditCardValid] = useState(valid.NON_VALID);

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setCreditCardValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setCreditCard(option);
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 29);
  const nextStep = (option) => {
    const step29 = {
      id: 29,
      question: "Do you have a credit card?",
      answer: option,
      skip: "",
    };
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
    if (localStorage.getItem("creditCard") !== option) {
      currentStep(29, itemStep29);
    }
    window.localStorage.setItem("creditCard", option);
    if (option === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-30`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-31`,
      });
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(creditCard);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(creditCard)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(creditCard);
        }, 500);
      }
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep29 = {
      id: 29,
      question: "Do you have a credit card?",
      answer: creditCard,
      skip: !creditCard && "Skipped",
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
    if (creditCard === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-30`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-31`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={29} numberScroll={1500}>
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
                <h2 className="mb-4">29. Do you have a credit card?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={creditCard === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                      classContainer="radius"
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={creditCard === types[2]}
                      name={types[2]}
                      classContainer="radius"
                    />
                  </Col>
                </Row>
                {creditCardValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please select an option</p>
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
