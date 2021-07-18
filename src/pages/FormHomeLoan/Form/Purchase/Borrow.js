/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../../utils/constant";
import LifeInsurance from "../../index";
import InputNumber from "../../../../Components/InputNumber";
import WOW from "wowjs";
import imgLook from "../../../../images/life/look.svg";

const PurchaseBorrow = () => {
  const borrowAmountRef = useRef(null);
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
  const propertyValue = localStorage.getItem("propertyValue");
  const postcodeOptions = localStorage.getItem("postcodeOptions");

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [borrowAmount, setBorrowAmount] = useState(
    localStorage.getItem("borrowAmount") || ""
  );
  const [borrowAmountValid, setBorrowAmountValid] = useState(valid.NON_VALID);
  const [validMessage, setValidMessage] = useState("This field is required");

  useEffect(() => {
    setTimeout(() => {
      borrowAmountRef?.current?.element?.focus();
    }, 400);
  }, []);

  const checkBorrowAmountStatus = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (originAmount < 1) {
      setValidMessage("This field is required");
      setBorrowAmountValid(valid.INVALID);
      return false;
    }
    if (originAmount > 10000000) {
      setValidMessage("Value should be less that $10,000,000");
      setBorrowAmountValid(valid.INVALID);
      return false;
    }
    if (originAmount > (parseInt(propertyValue, 10) * 95) / 100) {
      setValidMessage("Enter less than 95% of the property value.");
      setBorrowAmountValid(valid.INVALID);
      return false;
    }
    setBorrowAmountValid(valid.VALID);
    return true;
  };

  const nextStep = () => {
    window.localStorage.setItem(
      "borrowAmount",
      borrowAmount && parseInt(borrowAmount.replace(/,/g, ""), 10)
    );
    if (
      firstName &&
      lastName &&
      email &&
      checkboxRefinancePurchase &&
      propertyValue &&
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
    setBorrowAmount(value);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkBorrowAmountStatus(borrowAmount);
    if (checkBorrowAmountStatus(borrowAmount)) {
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
                <h2 className="mb-3">How much would you like to borrow?</h2>
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
                      onFocus={() => setBorrowAmountValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) => onKeyUpHandle(e.target.value)}
                      label="Borrow amount e.g. $450,000"
                      value={borrowAmount}
                      id="price-input"
                      customClassLabel={borrowAmount ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={borrowAmountRef}
                    />
                  </Col>
                </Row>
                {borrowAmountValid === valid.INVALID && (
                  <div className="text-error">
                    <p>{validMessage}</p>
                  </div>
                )}
              </Col>
              <Col
                xs={12}
                className={`col d-flex justify-content-center ${
                  borrowAmountValid === valid.INVALID ? "mt-3" : "mt-5"
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

export default PurchaseBorrow;
