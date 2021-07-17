/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import InputCustom2 from "../../../Components/InputCustom2";
import InputNumber from "../../../Components/InputNumber";
import LifeInsurance from "../index";
import imgLook from "../../../images/life/look.svg";
import { validatePhone, validateApiType } from "../../../utils/validateApi";
import imgError from "../../../images/life/error.svg";
import WOW from "wowjs";
import RefinanceNine from "./Refinance/Nine";

export const types = {
  purchase: "I want to purchase",
  refinance: "I want to refinance",
};

const Nine = () => {
  const phoneRef = useRef(null);
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

  const wrapperInfoRef = useRef();

  const checkingStatus = {
    NONE: "none",
    PENDDING: "pendding",
    DONE: "done",
  };
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") || ""
  );

  const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
  const [firstNameValid, setFirstNameValid] = useState(valid.NON_VALID);
  const [lastNameValid, setLastNameValid] = useState(valid.NON_VALID);
  const [phoneValid, setPhoneValid] = useState(valid.NON_VALID);

  const [mobileChecking, setMobileChecking] = useState(checkingStatus.NONE);
  useEffect(() => {
    setTimeout(() => {
      phoneRef?.current?.element?.focus();
    }, 400);
  }, []);

  const checkFirstNameStatus = (value) => {
    let test = /^([A-Za-z'’＇`]{2,})$/.test(value);
    setFirstNameValid(Number(test));
    return test;
  };

  const checkLastNameStatus = (value) => {
    let test = /^([A-Za-z'’＇`]{2,})$/.test(value);
    setLastNameValid(Number(test));
    return test;
  };

  const checkMobileStatus = (value) => {
    if (/(04)+([0-9]{8})\b/g.test(value)) {
      setMobileChecking(checkingStatus.PENDDING);
      localStorage.setItem("phone", value);
      setPhoneValid(valid.NON_VALID);
      validatePhone(value, phoneChecked);
      return valid.NON_VALID;
    }
    let test = /(01|02|03|05|06|07|08|09)+([0-9]{8})\b/g.test(value);
    if (test && value) {
      localStorage.setItem("phone", value);
      setPhoneValid(Number(!test));
      return !test;
    } else {
      setPhoneValid(Number(test));
      return test;
    }
  };

  const phoneChecked = (status) => {
    if (status === validateApiType.ERROR) {
      setPhoneValid(valid.INVALID);
    }
    if (status === validateApiType.INVALID) {
      setPhoneValid(valid.INVALID);
    }
    if (status === validateApiType.VALID) {
      setPhoneValid(valid.VALID);
    }
    setMobileChecking(checkingStatus.DONE);
  };

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
        pathname: `/home-loan/step-success`,
      });
    } else {
      history.push({
        pathname: `/home-loan/step-eight`,
      });
    }
  };
  const onKeyUpHandle = (name, value) => {
    switch (name) {
      case "lastName":
        setLastName(value.replace(/[0-9]/g, ""));
        break;
      case "firstName":
        setFirstName(value.replace(/[0-9]/g, ""));
        break;

      case "phone":
        if (value.length === 10 || value?.slice(0, 2) === "04") {
          checkMobileStatus(value);
        }
        if (value.length > 2 && value?.slice(0, 2) !== "04") {
          setPhoneValid(valid.INVALID);
          setMobileChecking(checkingStatus.NONE);
        } else {
          setPhoneValid(valid.NON_VALID);
        }
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const onBlurHandle = (name) => {
    switch (name) {
      case "lastName":
        window.localStorage.setItem("lastName", lastName);
        break;
      case "firstName":
        window.localStorage.setItem("firstName", firstName);
        break;
      case "phone":
        window.localStorage.setItem("phone", phone);
        break;
      default:
        break;
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkLastNameStatus(lastName);
    checkFirstNameStatus(firstName);
    if (phoneValid !== valid.VALID) {
      checkMobileStatus(phone);
    }
    if (
      checkLastNameStatus(lastName) &&
      checkFirstNameStatus(firstName) &&
      phoneValid === valid.VALID
    ) {
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
          <section className="formContent-step-first page-nine">
            <Container>
              <div
                className={
                  "wForm wow " +
                  (history?.location?.back ? "fadeInDown" : "fadeInUp")
                }
              >
                <Row>
                  <Col xs={12} className="text-center">
                    <h2>
                      Alright, your results are ready.{" "}
                      <br className="d-block" />
                      Let’s confirm the details I have already
                    </h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer">
                      <Col xs={6} className="wForm-input pl-0">
                        <InputCustom2
                          onFocus={() => setFirstNameValid(valid.NON_VALID)}
                          onKeyPress={onKeyDown}
                          onChange={(e) =>
                            onKeyUpHandle("firstName", e.target.value)
                          }
                          onBlur={() => onBlurHandle("firstName")}
                          label="FIRST NAME"
                          value={
                            firstName &&
                            firstName[0].toUpperCase() + firstName.slice(1)
                          }
                          id="firstName"
                          customClassLabel={firstName ? "active" : ""}
                        />
                      </Col>
                      <Col xs={6} className="wForm-input pr-0">
                        <InputCustom2
                          onFocus={() => setLastNameValid(valid.NON_VALID)}
                          onKeyPress={onKeyDown}
                          onChange={(e) =>
                            onKeyUpHandle("lastName", e.target.value)
                          }
                          id="lastName"
                          onBlur={() => onBlurHandle("lastName")}
                          label="LAST NAME"
                          value={
                            lastName &&
                            lastName[0].toUpperCase() + lastName.slice(1)
                          }
                          customClassLabel={lastName ? "active" : ""}
                        />
                      </Col>
                      <Col xs={12} className="wForm-input mt-3 p-0">
                        <InputNumber
                          inputMode="numeric"
                          options={{
                            numericOnly: true,
                          }}
                          onFocus={() => {
                            phoneValid !== valid.VALID &&
                              setPhoneValid(valid.NON_VALID);
                          }}
                          onKeyPress={onKeyDown}
                          onChange={(e) =>
                            onKeyUpHandle("phone", e.target.value)
                          }
                          onBlur={() => onBlurHandle("phone")}
                          label={"PLEASE ENTER IN YOUR MOBILE NUMBER"}
                          value={phone}
                          id="phone-input"
                          customClassLabel={phone ? "active" : ""}
                          iconPhone
                          maxLength="10"
                          customClassWrap="email"
                          innerRef={phoneRef}
                          mobileChecking={mobileChecking}
                          iconCheckPhone={phoneValid === valid.VALID}
                          iconCheckErrorPhone={phoneValid === valid.INVALID}
                        />
                      </Col>
                      <Col
                        xs={12}
                        className="wForm-input mt-3 p-0"
                        ref={wrapperInfoRef}
                      >
                        <InputCustom2
                          inputMode="numeric"
                          pattern="[0-9]*"
                          onChange={(e) => {}}
                          label="please enter your Postcode"
                          value={postcodeOptions}
                          id="postcodeOptions"
                          customClassLabel={postcodeOptions ? "active" : ""}
                          iconLocation
                          maxLength="postcodeOptions"
                          customClassWrap="email"
                          readOnly
                        />
                      </Col>
                    </Row>
                    {firstNameValid === valid.INVALID && (
                      <div className="text-error">
                        <p>
                          <img src={imgError} alt="" />
                          Please enter in a valid first name
                        </p>
                      </div>
                    )}

                    {lastNameValid === valid.INVALID && (
                      <div className="text-error">
                        <p>
                          <img src={imgError} alt="" />
                          Please enter in a valid last name
                        </p>
                      </div>
                    )}
                    {phoneValid === valid.INVALID && (
                      <div className="text-error">
                        {phone.length <= 2 ||
                        (phone.length >= 2 && phone?.slice(0, 2) === "04") ? (
                          <p>Please enter in a valid mobile number</p>
                        ) : (
                          <p>
                            Please enter in a valid mobile number starting with
                            04
                          </p>
                        )}
                      </div>
                    )}
                  </Col>
                  <Col
                    xs={12}
                    className="col d-flex justify-content-center mt-4"
                  >
                    <Button
                      className="btnPrimary life wow fadeInUp mt-0 in-progress"
                      type="next"
                      onClick={onClickNext}
                    >
                      {showLoading && <Spinner animation="border" />}
                      Submit
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
        <RefinanceNine />
      )}
    </>
  );
};

export default Nine;
