/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";

export const types = {
  1: "YES",
  2: "NO",
};

const Step29 = () => {
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
    window.localStorage.setItem("creditCard", option);
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (!showLoading) {
      setTimeout(function () {
        nextStep();
      }, 500);
    }
  };

  const nextStep = () => {
    window.localStorage.setItem("creditCard", creditCard);
    history.push({
      pathname: `/refinance-fact-find/step-30`,
    });
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(creditCard);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(creditCard)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep();
        }, 500);
      }
    }
  };

  const onClickBack = () => {
    history.go(-1);
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
                <h2 className="mb-4">29. Do you have a credit card?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={creditCard === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                      classContainer="radius"
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
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
                <div className="SKIP">SKIP</div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default Step29;
