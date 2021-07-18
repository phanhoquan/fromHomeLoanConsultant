/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../../utils/constant";
import LifeInsurance from "../../index";
import InputNumber from "../../../../Components/InputNumber";
import WOW from "wowjs";
import imgLook from "../../../../images/life/look.svg";

const RefinancePriceOwing = () => {
  const priceOwingRef = useRef(null);
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
  const propertyValue = localStorage.getItem("propertyValue");

  const checkboxRefinancePurchase = localStorage.getItem(
    "checkboxRefinancePurchase"
  );
  const postcodeOptions = localStorage.getItem("postcodeOptions");
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [priceOwing, setPriceOwing] = useState(
    localStorage.getItem("priceOwing") || ""
  );
  const [validMessage, setValidMessage] = useState("This field is required");
  const [priceOwingValid, setPriceOwingValid] = useState(valid.NON_VALID);

  useEffect(() => {
    setTimeout(() => {
      priceOwingRef?.current?.element?.focus();
    }, 400);
  }, []);

  const checkPriceOwingStatus = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (originAmount < 1) {
      setValidMessage("This field is required");
      setPriceOwingValid(valid.INVALID);
      return false;
    }
    if (originAmount > 10000000) {
      setValidMessage("Value should be less that $10,000,000");
      setPriceOwingValid(valid.INVALID);
      return false;
    }
    if (originAmount > (parseInt(propertyValue, 10) * 95) / 100) {
      setValidMessage("Enter less than 95% of the property value.");
      setPriceOwingValid(valid.INVALID);
      return false;
    }
    setPriceOwingValid(valid.VALID);
    return true;
  };

  const nextStep = () => {
    window.localStorage.setItem(
      "priceOwing",
      priceOwing && parseInt(priceOwing.replace(/,/g, ""), 10)
    );
    if (
      firstName &&
      lastName &&
      email &&
      checkboxRefinancePurchase &&
      postcodeOptions
    ) {
      history.push({
        pathname: `/refinance-fact-find/step-six`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-four`,
      });
    }
  };

  const onKeyUpHandle = (value) => {
    setPriceOwing(value);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkPriceOwingStatus(priceOwing);
    if (checkPriceOwingStatus(priceOwing)) {
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
                  How much do you still have owning <br />
                  on your mortgage?
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
                      onFocus={() => setPriceOwingValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) => onKeyUpHandle(e.target.value)}
                      label="Mortgage amount E.G. 350,000"
                      value={priceOwing}
                      id="price-input"
                      customClassLabel={priceOwing ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={priceOwingRef}
                    />
                  </Col>
                </Row>
                {priceOwingValid === valid.INVALID && (
                  <div className="text-error">
                    <p>{validMessage}</p>
                  </div>
                )}
              </Col>
              <Col
                xs={12}
                className={`col d-flex justify-content-center ${
                  priceOwingValid === valid.INVALID ? "mt-3" : "mt-5"
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
  );
};

export default RefinancePriceOwing;
