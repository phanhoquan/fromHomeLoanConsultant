/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import InputCustom2 from "../../../Components/InputCustom2";
import LifeInsurance from "../index";
import WOW from "wowjs";
import ModalPolicy from "../../Modal/ModalPolicy";
import ModalTerms from "../../Modal/ModalTerms";
import ModalFooter from "../../Modal/ModalFooter";

const First = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, []);
  const firstNameRef = useRef(null);
  const history = useHistory();
  const postcodeOptions = localStorage.getItem("postcodeOptions");
  const [showLoading, setShowLoading] = useState(false);
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") || ""
  );
  const [firstNameValid, setFirstNameValid] = useState(valid.NON_VALID);
  const [lastNameValid, setLastNameValid] = useState(valid.NON_VALID);
  const [isShowTerms, setIsShowTerms] = useState(false);
  const [isShowModalPolicy, setIsShowModalPolicy] = useState(false);
  const [isShowModalFooter, setIsShowModalFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      firstNameRef?.current?.focus();
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

  const nextStep = () => {
    window.localStorage.setItem("firstName", firstName);
    window.localStorage.setItem("lastName", lastName);
    if (postcodeOptions) {
      history.push({
        pathname: `/home-loan/step-two`,
      });
    } else {
      history.push({
        pathname: `/home-loan/step-begin`,
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
      default:
        break;
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkLastNameStatus(lastName);
    checkFirstNameStatus(firstName);
    setTimeout(() => setShowLoading(false), 500);
    if (checkLastNameStatus(lastName) && checkFirstNameStatus(firstName)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep();
        }, 500);
      }
    }
  };

  const onKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      checkLastNameStatus(lastName) &&
      checkFirstNameStatus(firstName)
    ) {
      onClickNext();
    }
  };

  return (
    <LifeInsurance isShowHeader isShowFooter>
      <section className="formContent-step-first">
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
                  Hi, my name is Jennifer. <br className="d-block" />
                  Let's see which Mortgage Program you qualify for. <br />
                  It takes less than 60 seconds.
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
                      label="FIRST NAME"
                      value={
                        firstName &&
                        firstName[0].toUpperCase() + firstName.slice(1)
                      }
                      id="firstName"
                      customClassLabel={firstName ? "active" : ""}
                      innerRef={firstNameRef}
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
                      label="LAST NAME"
                      value={
                        lastName &&
                        lastName[0].toUpperCase() + lastName.slice(1)
                      }
                      customClassLabel={lastName ? "active" : ""}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                xs={12}
                className={`${
                  firstNameValid === valid.INVALID ||
                  lastNameValid === valid.INVALID
                    ? "mt-4"
                    : ""
                }`}
              >
                {firstNameValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter in a valid first name</p>
                  </div>
                )}

                {lastNameValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter in a valid last name</p>
                  </div>
                )}
              </Col>
              <Col
                xs={12}
                className="fadeInDown wow col d-flex justify-content-center mt-4"
              >
                <Button
                  className="btnPrimary life wow fadeInUp mt-0 in-progress"
                  type="next"
                  onClick={onClickNext}
                >
                  {showLoading && <Spinner animation="border" />}
                  Let’s do this
                </Button>
              </Col>
              <Col xs={12} className="wForm-input checkBox mt-4 pt-3">
                <div className="server-policy">
                  <p>
                    By clicking 'Let’s Do This' I consent to Makes Cents
                    Services Pty Ltd{" "}
                    <span onClick={() => setIsShowTerms(true)}>
                      Terms and Conditions
                    </span>{" "}
                    and{" "}
                    <span onClick={() => setIsShowModalPolicy(true)}>
                      Privacy Policy
                    </span>{" "}
                    as well as{" "}
                    <a
                      href="https://www.echoice.com.au/credit-guide/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>eChoice's Credit Guide</span>
                    </a>{" "}
                    &{" "}
                    <a
                      href="https://www.echoice.com.au/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Privacy Policy.</span>
                    </a>{" "}
                    I also acknowledge that a home loan consultant will contact
                    me.
                  </p>
                </div>
              </Col>

              <Col xs={12} className="mt-4 mb-2 pt-2 server-statement">
                <p>
                  <span onClick={() => setIsShowModalFooter(true)}>
                    Service Statement
                  </span>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <ModalFooter
          isShow={isShowModalFooter}
          handleClose={() => setIsShowModalFooter(false)}
        />
        <ModalPolicy
          isShow={isShowModalPolicy}
          handleClose={() => setIsShowModalPolicy(false)}
        />
        <ModalTerms
          isShow={isShowTerms}
          handleClose={() => setIsShowTerms(false)}
        />
      </section>
    </LifeInsurance>
  );
};

export default First;
