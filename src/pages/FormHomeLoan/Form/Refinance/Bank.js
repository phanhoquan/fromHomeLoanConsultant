/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../../utils/constant";
import LifeInsurance from "../../index";
import InputCustom2 from "../../../../Components/InputCustom2";
import imgLook from "../../../../images/life/look.svg";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

const listHomeLoan = [
  "ANZ",
  "Commonwealth Bank",
  "ING",
  "Macquarie",
  "ME Bank",
  "NAB",
  "St George",
  "Suncorp",
  "Westpac",
  "Other",
];

const RefinanceBank = () => {
  const refinanceBankRef = useRef(null);
  const wrapperInfoRef = useRef();
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
  const [refinanceBank, setRefinanceBank] = useState(
    localStorage.getItem("refinanceBank") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [refinanceBankValid, setRefinanceBankValid] = useState(valid.NON_VALID);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const checkRefinanceBankStatus = (value) => {
    const test = listHomeLoan.includes(value);
    setRefinanceBankValid(Number(test));
    setIsShowModal(false);
    return test;
  };

  const nextStep = (value) => {
    window.localStorage.setItem("refinanceBank", value);
    if (
      firstName &&
      lastName &&
      email &&
      checkboxRefinancePurchase &&
      postcodeOptions &&
      propertyValue
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
  const onClickSelect = (value) => {
    setRefinanceBank(value);
    setRefinanceBankValid(valid.NON_VALID);
    setIsShowModal(false);
    window.localStorage.setItem("refinanceBank", value);
    setTimeout(() => {
      nextStep(value);
    }, 500);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkRefinanceBankStatus(refinanceBank);
    if (checkRefinanceBankStatus(refinanceBank)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(refinanceBank);
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
      <section
        className={`formContent-step-second formContent-life-insurance ${
          isShowModal ? "mb-10" : "mb-2"
        }`}
      >
        <Container>
          <div
            className={
              "wForm wow " +
              (history?.location?.back ? "fadeInDown" : "fadeInUp")
            }
          >
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">Who is your current home loan with?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col
                    xs={12}
                    className="wForm-input pl-0 bankProviders"
                    ref={wrapperInfoRef}
                  >
                    <InputCustom2
                      onFocus={() => {
                        setIsShowModal(true);
                        setRefinanceBankValid(valid.NON_VALID);
                      }}
                      onKeyPress={onKeyDown}
                      onChange={() => () => {}}
                      label="Please select your current bank providers"
                      value={refinanceBank}
                      id="price-input"
                      customClassLabel={refinanceBank ? "active" : ""}
                      iconBank
                      iconArrow
                      customClassWrap="email five"
                      innerRef={refinanceBankRef}
                      readOnly
                    />
                    <ul
                      className={`list-occupation ${
                        isShowModal ? "d-block" : "d-none"
                      }`}
                    >
                      {listHomeLoan &&
                        listHomeLoan.map((name, index) => (
                          <li
                            key={index + 1}
                            onClick={() => onClickSelect(name)}
                            className={refinanceBank === name ? "active" : ""}
                          >
                            {name}
                          </li>
                        ))}
                    </ul>
                  </Col>
                </Row>
                {refinanceBankValid === valid.INVALID && (
                  <div className="text-error">
                    <p>This field is required</p>
                  </div>
                )}
              </Col>
              <Col
                xs={12}
                className={`col d-flex justify-content-center ${
                  refinanceBankValid === valid.INVALID ? "mt-3" : "mt-5"
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

export default RefinanceBank;
