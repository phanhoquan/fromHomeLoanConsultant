/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Casual",
  4: "Self Employed",
  5: "Unemployed",
};

const Step15 = () => {
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [employmentWorkingStatus, setEmploymentWorkingStatus] = useState(
    localStorage.getItem("employmentWorkingStatus") || ""
  );

  const [employmentWorkingStatusValid, setEmploymentWorkingStatusValid] =
    useState(valid.NON_VALID);

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setEmploymentWorkingStatusValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setEmploymentWorkingStatus(option);
    window.localStorage.setItem("employmentWorkingStatus", option);
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (!showLoading) {
      setTimeout(function () {
        nextStep();
      }, 500);
    }
  };

  const nextStep = () => {
    window.localStorage.setItem(
      "employmentWorkingStatus",
      employmentWorkingStatus
    );
    history.push({
      pathname: `/refinance-fact-find/step-16`,
    });
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(employmentWorkingStatus);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(employmentWorkingStatus)) {
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
                <h2 className="mb-4">15. What is your employment status?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={employmentWorkingStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={employmentWorkingStatus === types[2]}
                      name={types[2]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={employmentWorkingStatus === types[3]}
                      onClick={() => onCheck(types[3])}
                      name={types[3]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[4])}
                      checkBox={employmentWorkingStatus === types[4]}
                      name={types[4]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[5])}
                      checkBox={employmentWorkingStatus === types[5]}
                      name={types[5]}
                    />
                  </Col>
                </Row>
                {employmentWorkingStatusValid === valid.INVALID && (
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

export default Step15;
