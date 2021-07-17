/** @format */

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../index";
import { valid } from "../../../utils/constant";
import imgLook from "../../../images/life/look.svg";
import { CheckboxButton } from "../../../Components/CheckBox3";
import WOW from "wowjs";
import RefinanceBank from "./Refinance/Bank";

export const types = {
  1: "FULL TIME",
  2: "PART TIME",
  3: "SELF EMPLOYED",
  4: "UNEMPLOYED",
};
export const types2 = {
  purchase: "I want to purchase",
  refinance: "I want to refinance",
};

const Six = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, []);
  const postcodeOptions = localStorage.getItem("postcodeOptions");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const propertyValue = localStorage.getItem("propertyValue");
  const borrowAmount = localStorage.getItem("borrowAmount");
  const priceOwing = localStorage.getItem("priceOwing");
  const checkboxRefinancePurchase = localStorage.getItem(
    "checkboxRefinancePurchase"
  );
  // employment status

  const [employmentStatusValid, setEmploymentStatusValid] = useState(
    valid.NON_VALID
  );
  const [showLoading, setShowLoading] = useState(false);
  const history = useHistory();
  const [employmentStatus, setEmploymentStatus] = useState(
    localStorage.getItem("employmentStatus") || ""
  );

  const nextStep = () => {
    if (
      (postcodeOptions &&
        firstName &&
        lastName &&
        email &&
        checkboxRefinancePurchase &&
        propertyValue &&
        borrowAmount &&
        checkboxRefinancePurchase === types2.purchase) ||
      (checkboxRefinancePurchase === types2.refinance && priceOwing)
    ) {
      history.push({
        pathname: `/home-loan/step-seven`,
      });
    } else {
      history.push({
        pathname: `/home-loan/step-five`,
      });
    }
  };

  const onCheck = (option) => {
    setEmploymentStatus(option);
    window.localStorage.setItem("employmentStatus", option);
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (!showLoading) {
      setTimeout(function () {
        nextStep();
      }, 500);
    }
  };
  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setEmploymentStatusValid(Number(test));
    return test;
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkStatusValid(employmentStatus);
    if (checkStatusValid(employmentStatus)) {
      if (!showLoading) {
        setTimeout(function () {
          window.localStorage.setItem("employmentStatus", employmentStatus);
          nextStep();
        }, 500);
      }
    }
  };
  return (
    <>
      {checkboxRefinancePurchase === types2.purchase ? (
        <LifeInsurance isShowHeader>
          <section className="formContent-step-third step-sever formContent-life-insurance">
            <Container>
              <div
                className={
                  "wForm wow " +
                  (history?.location?.back ? "fadeInDown" : "fadeInUp")
                }
              >
                <Row>
                  <Col xs={12} className="text-center">
                    <h2 className="mb-4">What is your employment status?</h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer  mt-4 pt-2">
                      <Col xs={12} sm={6} className="wForm-input">
                        <CheckboxButton
                          checkBox={employmentStatus === types[1]}
                          onClick={() => onCheck(types[1])}
                          name={types[1]}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="wForm-input">
                        <CheckboxButton
                          onClick={() => onCheck(types[2])}
                          checkBox={employmentStatus === types[2]}
                          name={types[2]}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="wForm-input">
                        <CheckboxButton
                          onClick={() => onCheck(types[3])}
                          checkBox={employmentStatus === types[3]}
                          name={types[3]}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="wForm-input">
                        <CheckboxButton
                          onClick={() => onCheck(types[4])}
                          checkBox={employmentStatus === types[4]}
                          name={types[4]}
                        />
                      </Col>
                    </Row>
                    {employmentStatusValid === valid.INVALID && (
                      <div className="text-error">
                        <p>Please select your employment status</p>
                      </div>
                    )}
                  </Col>
                  <Col
                    xs={12}
                    className="col d-flex justify-content-center mt-3"
                  >
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
      ) : (
        <RefinanceBank />
      )}
    </>
  );
};

export default Six;
