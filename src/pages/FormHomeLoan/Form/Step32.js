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

const Step32 = () => {
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [currentlyRenting, setCurrentlyRenting] = useState(
    localStorage.getItem("currentlyRenting") || ""
  );

  const [currentlyRentingValid, setCurrentlyRentingValid] = useState(
    valid.NON_VALID
  );

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setCurrentlyRentingValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setCurrentlyRenting(option);
    window.localStorage.setItem("currentlyRenting", option);
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (!showLoading) {
      setTimeout(function () {
        nextStep();
      }, 500);
    }
  };

  const nextStep = () => {
    window.localStorage.setItem("currentlyRenting", currentlyRenting);
    history.push({
      pathname: `/refinance-fact-find/step-success`,
    });
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(currentlyRenting);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(currentlyRenting)) {
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
                  32. So with that property, are you <br />
                  currently renting it out?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={currentlyRenting === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                      classContainer="radius"
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={currentlyRenting === types[2]}
                      name={types[2]}
                      classContainer="radius"
                    />
                  </Col>
                </Row>
                {currentlyRentingValid === valid.INVALID && (
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
                    SUBMIT
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

export default Step32;
