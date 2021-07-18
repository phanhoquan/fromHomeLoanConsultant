/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step04 = () => {
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [jointApplicationStatus, setJointApplicationStatus] = useState(
    localStorage.getItem("jointApplicationStatus") || ""
  );

  const [jointApplicationStatusValid, setJointApplicationStatusValid] =
    useState(valid.NON_VALID);

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setJointApplicationStatusValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setJointApplicationStatus(option);
    window.localStorage.setItem("jointApplicationStatus", option);
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (!showLoading) {
      setTimeout(function () {
        nextStep(option);
      }, 500);
    }
  };

  const nextStep = (option) => {
    window.localStorage.setItem("jointApplicationStatus", option);
    if (option === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-07`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-05`,
      });
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(jointApplicationStatus);
    setTimeout(() => setShowLoading(false), 500);
    if (checkStatusValid(jointApplicationStatus)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(jointApplicationStatus);
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
                  4. Are you the sole applicant or is this <br />a joint
                  application?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer w-650">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={jointApplicationStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={jointApplicationStatus === types[2]}
                      name={types[2]}
                    />
                  </Col>
                </Row>
                {jointApplicationStatusValid === valid.INVALID && (
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

export default Step04;
