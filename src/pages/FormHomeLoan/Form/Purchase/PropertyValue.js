/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../../utils/constant";
import LifeInsurance from "../../index";
import InputNumber from "../../../../Components/InputNumber";
import WOW from "wowjs";
import imgLook from "../../../../images/life/look.svg";

const Second = () => {
  const priceRef = useRef(null);
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
  const checkboxRefinancePurchase = localStorage.getItem(
    "checkboxRefinancePurchase"
  );
  const postcodeOptions = localStorage.getItem("postcodeOptions");

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [price, setPrice] = useState(
    localStorage.getItem("propertyValue") || ""
  );
  const [priceValid, setPriceValid] = useState(valid.NON_VALID);

  useEffect(() => {
    setTimeout(() => {
      priceRef?.current?.element?.focus();
    }, 400);
  }, []);

  const checkPriceStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 150000 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setPriceValid(Number(test));
    return test;
  };

  const nextStep = () => {
    window.localStorage.setItem(
      "propertyValue",
      price && parseInt(price.replace(/,/g, ""), 10)
    );

    if (
      firstName &&
      lastName &&
      email &&
      checkboxRefinancePurchase &&
      postcodeOptions
    ) {
      history.push({
        pathname: `/refinance-fact-find/step-five`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-three`,
      });
    }
  };

  const onKeyUpHandle = (value) => {
    setPrice(value);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkPriceStatus(price);
    if (checkPriceStatus(price)) {
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
                  What is the approximate value of the property <br />
                  you are looking to buy?
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
                      onFocus={() => setPriceValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) => onKeyUpHandle(e.target.value)}
                      label="Value of property e.g. $600,00"
                      value={price}
                      id="price-input"
                      customClassLabel={price ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={priceRef}
                    />
                  </Col>
                </Row>
                {priceValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Value should be in between $150,000 - $10,000,0000</p>
                  </div>
                )}
              </Col>
              <Col
                xs={12}
                className={`col d-flex justify-content-center ${
                  priceValid === valid.INVALID ? "mt-3" : "mt-5"
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

export default Second;
