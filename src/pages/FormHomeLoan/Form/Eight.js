/** @format */

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import imgReset from "../../../images/life/reset.svg";
import imgCheck from "../../../images/life/iconCheck.svg";
import imgLook from "../../../images/life/look.svg";
import LifeInsurance from "../index";
import WOW from "wowjs";
import RefinanceEight from "./Refinance/Eight";

export const types = {
  purchase: "I want to purchase",
  refinance: "I want to refinance",
};

const Eight = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, []);

  const firstNameText = localStorage.getItem("firstName");
  const lastNameText = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const postcodeOptions = localStorage.getItem("postcodeOptions");
  const propertyValue = localStorage.getItem("propertyValue");
  const borrowAmount = localStorage.getItem("borrowAmount");
  const priceOwing = localStorage.getItem("priceOwing");
  const checkboxRefinancePurchase = localStorage.getItem(
    "checkboxRefinancePurchase"
  );
  const employmentStatus = localStorage.getItem("employmentStatus");
  const pricePreTax = localStorage.getItem("pricePreTax");

  const history = useHistory();
  const [progress1, setProgress1] = useState(0);
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress1(100);
    }, 1500);
    setTimeout(() => {
      setIsShow1(true);
    }, 2000);
    setTimeout(() => {
      setProgress2(100);
    }, 2500);
    setTimeout(() => {
      setIsShow2(true);
    }, 3500);

    setTimeout(() => {
      setProgress3(100);
    }, 4500);
    setTimeout(() => {
      setIsShow3(true);
    }, 5000);
  }, []);

  const nextStep = () => {
    if (
      (postcodeOptions &&
        firstNameText &&
        lastNameText &&
        email &&
        checkboxRefinancePurchase &&
        propertyValue &&
        borrowAmount &&
        employmentStatus &&
        pricePreTax &&
        checkboxRefinancePurchase === types.purchase) ||
      (checkboxRefinancePurchase === types.refinance && priceOwing)
    ) {
      history.push({
        pathname: `/home-loan/step-nine`,
      });
    } else {
      history.push({
        pathname: `/home-loan/step-seven`,
      });
    }
  };

  useEffect(() => {
    if (isShow3) {
      setTimeout(() => {
        nextStep();
      }, 500);
    }
    // eslint-disable-next-line
  }, [progress1, progress2, progress3, isShow3]);

  const renderHtml =
    checkboxRefinancePurchase === types.purchase ? (
      <div>
        <LifeInsurance isShowHeader>
          <section className="formContent-step-second progressBar-page formContent-life-insurance mb-2">
            <Container>
              <div
                className={
                  "wForm wow " +
                  (history?.location?.back ? "fadeInDown" : "fadeInUp")
                }
              >
                <Row>
                  <Col xs={12} className="text-center">
                    <h2>Review your application</h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer mt-4 pt-2 mb-5 mb-1">
                      <Col xs={12} className="wForm-input pl-0">
                        <div className="progressBar-group">
                          <div className="label">Collecting answers</div>
                          <ProgressBar min={0} max={100} now={progress1} />
                          {isShow1 ? (
                            <img src={imgCheck} alt="" />
                          ) : (
                            <img src={imgReset} alt="" className="reset" />
                          )}
                        </div>
                      </Col>
                      <Col xs={12} className="wForm-input pl-0">
                        <div className="progressBar-group">
                          <div className="label">
                            Checking mortgage programs
                          </div>
                          <ProgressBar min={0} max={100} now={progress2} />
                          {isShow2 ? (
                            <img src={imgCheck} alt="" />
                          ) : (
                            <img src={imgReset} alt="" className="reset" />
                          )}
                        </div>
                      </Col>
                      <Col xs={12} className="wForm-input pl-0">
                        <div className="progressBar-group">
                          <div className="label">Potential savings found</div>
                          <ProgressBar min={0} max={100} now={progress3} />
                          {isShow3 ? (
                            <img src={imgCheck} alt="" />
                          ) : (
                            <img src={imgReset} alt="" className="reset" />
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xs={12}
                    className="col d-flex justify-content-center mt-3"
                  >
                    <Button
                      className="btnPrimary life wow fadeInUp mt-0 text-capitalize"
                      type="next"
                      onClick={() => {}}
                    >
                      Processing...
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
      </div>
    ) : (
      <RefinanceEight />
    );

  return <>{renderHtml}</>;
};

export default Eight;
