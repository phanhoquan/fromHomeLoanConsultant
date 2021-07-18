/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";

export const types = {
  1: "Fixed",
  2: "Variable",
  3: "Split",
};

const Step02 = () => {
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [currentLoanStatus, setCurrentLoanStatus] = useState(
    localStorage.getItem("currentLoanStatus") || ""
  );

  const [currentLoanStatusValid, setCurrentLoanStatusValid] = useState(
    valid.NON_VALID
  );

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setCurrentLoanStatusValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setCurrentLoanStatus(option);
    window.localStorage.setItem("currentLoanStatus", option);
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (!showLoading) {
      setTimeout(function () {
        nextStep();
      }, 500);
    }
  };

  const nextStep = () => {
    window.localStorage.setItem("currentLoanStatus", currentLoanStatus);

    history.push({
      pathname: `/refinance-fact-find/step-03`,
    });
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(currentLoanStatus);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(currentLoanStatus)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep();
        }, 500);
      }
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
                  2. Is the loan you currently have Fixed,{" "}
                  <br className="d-block" /> Variable or Split?{" "}
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer w-650">
                  <Col xs={12} sm={4} className="wForm-input">
                    <CheckboxButton
                      checkBox={currentLoanStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                      classContainer="radius"
                    />
                  </Col>
                  <Col xs={12} sm={4} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={currentLoanStatus === types[2]}
                      name={types[2]}
                      classContainer="radius"
                    />
                  </Col>
                  <Col xs={12} sm={4} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[3])}
                      checkBox={currentLoanStatus === types[3]}
                      name={types[3]}
                      classContainer="radius"
                    />
                  </Col>
                </Row>
                {currentLoanStatusValid === valid.INVALID && (
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
                    onClick={onClickNext}
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

export default Step02;
