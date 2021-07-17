/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import InputCustom2 from "../../../Components/InputCustom2";
import LifeInsurance from "../index";
import checkEmail from "../../../utils/checkEmail";
import WOW from "wowjs";
import imgLook from "../../../images/life/look.svg";

const Second = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, []);
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const postcodeOptions = localStorage.getItem("postcodeOptions");

  const emailRef = useRef(null);
  const history = useHistory();
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);
  const [showLoading, setShowLoading] = useState(false);
  const checkEmailStatus = (value) => {
    let test = value && checkEmail(value || "");
    setEmailValid(Number(test));
    return test;
  };
  useEffect(() => {
    setTimeout(() => {
      emailRef?.current?.focus();
    }, 400);
  }, []);

  const nextStep = () => {
    if (!lastName || !firstName || !postcodeOptions) {
      history.push({
        pathname: `/home-loan/step-one`,
      });
    } else {
      history.push({
        pathname: `/home-loan/step-three`,
      });
    }
  };

  const onKeyUpHandle = (name, value) => {
    if (name === "email") {
      setEmail(value);
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (checkEmailStatus(email)) {
      window.localStorage.setItem("email", email);

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
      <section className="formContent-step-second formContent-life-insurance">
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
                  Nice to meet you, {firstName} <br className="d-block" />{" "}
                  What's your email address?
                </h2>
                <p>We'll need it to let you get back to your quote later…</p>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setEmailValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) => onKeyUpHandle("email", e.target.value)}
                      label="PLEASE ENTER YOUR EMAIL"
                      value={email}
                      type="email"
                      id="email-input"
                      customClassLabel={email ? "active" : ""}
                      iconEmail
                      customClassWrap="email"
                      innerRef={emailRef}
                    />
                  </Col>
                </Row>
                {emailValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter a valid email</p>
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

export default Second;
