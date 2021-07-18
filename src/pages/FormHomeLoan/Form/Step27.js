/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";

export const types = {
  1: "Personal Loans",
  2: "Car Loans",
  3: "HECS debt",
  4: "None of the above",
};

const Step27 = () => {
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [personalLoansStatus, setPersonalLoansStatus] = useState(
    localStorage.getItem("personalLoansStatus") || ""
  );

  const [personalLoansStatusValid, setPersonalLoansStatusValid] = useState(
    valid.NON_VALID
  );

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setPersonalLoansStatusValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setPersonalLoansStatus(option);
    window.localStorage.setItem("personalLoansStatus", option);
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (!showLoading) {
      setTimeout(function () {
        nextStep();
      }, 500);
    }
  };

  const nextStep = () => {
    window.localStorage.setItem("personalLoansStatus", personalLoansStatus);
    history.push({
      pathname: `/refinance-fact-find/step-28a`,
    });
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(personalLoansStatus);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(personalLoansStatus)) {
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
                <h2 className="mb-4">
                  27. Are you currently paying off any personal loans, <br />
                  car loans or HECS debt?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 w-600">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={personalLoansStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={personalLoansStatus === types[2]}
                      name={types[2]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={personalLoansStatus === types[3]}
                      onClick={() => onCheck(types[3])}
                      name={types[3]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[4])}
                      checkBox={personalLoansStatus === types[4]}
                      name={types[4]}
                    />
                  </Col>
                </Row>
                {personalLoansStatusValid === valid.INVALID && (
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

export default Step27;
