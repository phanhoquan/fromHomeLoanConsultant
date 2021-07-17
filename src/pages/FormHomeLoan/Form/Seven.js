/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputNumber from "../../../Components/InputNumber";
import WOW from "wowjs";
import imgLook from "../../../images/life/look.svg";
import RefinanceSeven from "./Refinance/Seven";

export const types = {
  purchase: "I want to purchase",
  refinance: "I want to refinance",
};

const Seven = () => {
  const pricePreTaxRef = useRef(null);
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
  const employmentStatus = localStorage.getItem("employmentStatus");

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [pricePreTax, setPricePreTax] = useState(
    localStorage.getItem("pricePreTax") || ""
  );
  const [pricePreTaxValid, setPricePreTaxValid] = useState(valid.NON_VALID);

  useEffect(() => {
    setTimeout(() => {
      pricePreTaxRef?.current?.element?.focus();
    }, 400);
  }, []);

  const checkPricePreTaxStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 400000;
    setPricePreTaxValid(Number(test));
    return test;
  };

  const nextStep = () => {
    window.localStorage.setItem(
      "pricePreTax",
      pricePreTax && parseInt(pricePreTax.replace(/,/g, ""), 10)
    );

    if (
      (postcodeOptions &&
        firstName &&
        lastName &&
        email &&
        checkboxRefinancePurchase &&
        propertyValue &&
        borrowAmount &&
        employmentStatus &&
        checkboxRefinancePurchase === types.purchase) ||
      (checkboxRefinancePurchase === types.refinance && priceOwing)
    ) {
      history.push({
        pathname: `/home-loan/step-eight`,
      });
    } else {
      history.push({
        pathname: `/home-loan/step-six`,
      });
    }
  };

  const onKeyUpHandle = (value) => {
    setPricePreTax(value);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkPricePreTaxStatus(pricePreTax);
    if (checkPricePreTaxStatus(pricePreTax)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep();
        }, 500);
      }
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickNext();
    }
  };

  return (
    <>
      {checkboxRefinancePurchase === types.purchase ? (
        <LifeInsurance isShowHeader>
          <section className="formContent-step-second formContent-life-insurance mb-2">
            <Container>
              <div
                className={
                  "wForm wow " +
                  (history?.location?.back ? "fadeInDown" : "fadeInUp")
                }
              >
                <Row>
                  <Col xs={12} className="text-center">
                    <h2 className="mb-3">
                      What is your gross <span>(pre-tax)</span> annual income?
                    </h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer mt-4 pt-2">
                      <Col xs={12} className="wForm-input pl-0">
                        <InputNumber
                          inputMode="numeric"
                          options={{
                            numericOnly: true,
                            numeral: true,
                            numeralDecimalMark: "",
                            delimiter: ",",
                            numeralThousandsGroupStyle: "thousand",
                          }}
                          onFocus={() => setPricePreTaxValid(valid.NON_VALID)}
                          onKeyPress={onKeyDown}
                          onChange={(e) => onKeyUpHandle(e.target.value)}
                          label="Enter your annual income"
                          value={pricePreTax}
                          id="price-input"
                          customClassLabel={pricePreTax ? "active" : ""}
                          iconPrice
                          customClassWrap="email five"
                          innerRef={pricePreTaxRef}
                        />
                      </Col>
                    </Row>
                    {pricePreTaxValid === valid.INVALID && (
                      <div className="text-error">
                        <p>Value should be in between $0 - $400,000</p>
                      </div>
                    )}
                  </Col>
                  <Col
                    xs={12}
                    className={`col d-flex justify-content-center ${
                      pricePreTaxValid === valid.INVALID ? "mt-3" : "mt-5"
                    }`}
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
        <RefinanceSeven />
      )}
    </>
  );
};

export default Seven;
