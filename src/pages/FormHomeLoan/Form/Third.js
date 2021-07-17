/** @format */

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../index";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import WOW from "wowjs";
import imgLook from "../../../images/life/look.svg";

export const types = {
  purchase: "I want to purchase",
  refinance: "I want to refinance",
};

const Third = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, []);
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const postcodeOptions = localStorage.getItem("postcodeOptions");

  const [showLoading, setShowLoading] = useState(false);
  const [stateValid, setStateValid] = useState(valid.NON_VALID);
  const history = useHistory();
  const [checkboxRefinancePurchase, setCheckBoxRefinancePurchase] = useState(
    localStorage.getItem("checkboxRefinancePurchase") || ""
  );

  const nextStep = () => {
    if (firstName && lastName && email && postcodeOptions) {
      history.push({
        pathname: `/home-loan/step-four`,
      });
    } else {
      history.push({
        pathname: `/home-loan/step-two`,
      });
    }
  };

  const onCheck = (option) => {
    setCheckBoxRefinancePurchase(option);
    window.localStorage.setItem(
      "checkboxRefinancePurchase",
      checkboxRefinancePurchase
    );
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);

    setStateValid(valid.VALID);
    if (!showLoading) {
      setTimeout(function () {
        nextStep();
      }, 500);
    }
  };
  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setStateValid(Number(test));
    return test;
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(checkboxRefinancePurchase)) {
      setStateValid(valid.VALID);
      if (!showLoading) {
        setTimeout(function () {
          window.localStorage.setItem(
            "checkboxRefinancePurchase",
            checkboxRefinancePurchase
          );
          nextStep();
        }, 500);
      }
    } else {
      setStateValid(valid.INVALID);
    }
  };

  return (
    <LifeInsurance isShowHeader>
      <section className="formContent-step-third formContent-life-insurance">
        <Container>
          <div
            className={
              "wForm wow " +
              (history?.location?.back ? "fadeInDown" : "fadeInUp")
            }
          >
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-4">
                  Which loan option do you want to enquire about
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer MyHouse mt-4 pt-2">
                  <Col xs={12} className="wForm-input px-0">
                    <CheckboxButton
                      checkBox={checkboxRefinancePurchase === types.purchase}
                      onClick={() => onCheck(types.purchase)}
                      name={types.purchase}
                    />
                    <CheckboxButton
                      onClick={() => onCheck(types.refinance)}
                      checkBox={checkboxRefinancePurchase === types.refinance}
                      name={types.refinance}
                    />
                  </Col>
                </Row>
                {stateValid === valid.INVALID && (
                  <div className="text-error">
                    <p>This field is required</p>
                  </div>
                )}
              </Col>
              <Col xs={12} className="col d-flex justify-content-center mt-3">
                <Button
                  className="btnPrimary life wow fadeInUp mt-0 in-progress"
                  type="next"
                  onClick={onClickNext}
                >
                  {showLoading && <Spinner animation="border" />}
                  NEXT
                </Button>
              </Col>
              <Col xs={12} className="mb-5">
                <div className="ico-look">
                  <img src={imgLook} alt="" />
                  <span>Confidential, Safe & Secure</span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default Third;
