/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import checkEmail from "../../../../utils/checkEmail";
import { CheckboxButton } from "../../../../Components/CheckBox3";
import { currentStep } from "../../../../utils/removeQuestion";
import { itemStep1 } from "../../../../utils/listLocalStorage";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Self Employed",
  4: "Unemployed",
};

const First = () => {
  const firstNameRef = useRef(null);
  const history = useHistory();
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") || ""
  );
  const [firstNameValid, setFirstNameValid] = useState(valid.NON_VALID);
  const [lastNameValid, setLastNameValid] = useState(valid.NON_VALID);
  window.localStorage.setItem("questionStep1", "Are you currently employed?");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);
  const [employmentStatus, setEmploymentStatus] = useState(
    localStorage.getItem("employmentStatus") || ""
  );

  const checkEmailStatus = (value) => {
    let test = value && checkEmail(value || "");
    setEmailValid(Number(test));
    return test;
  };

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

  const onCheck = (option) => {
    setEmploymentStatus(option);
  };

  const nextStep = () => {
    if (
      localStorage.getItem("firstName") !== firstName ||
      localStorage.getItem("lastName") !== lastName ||
      localStorage.getItem("email") !== email ||
      localStorage.getItem("employmentStatus") !== employmentStatus
    ) {
      currentStep(1, itemStep1);
    }
    window.localStorage.setItem("firstName", firstName);
    window.localStorage.setItem("lastName", lastName);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("employmentStatus", employmentStatus);
    history.push({
      pathname: `/refinance-fact-find/step-02`,
    });
  };

  const onKeyUpHandle = (name, value) => {
    switch (name) {
      case "lastName":
        setLastName(value.replace(/[0-9]/g, ""));
        break;
      case "firstName":
        setFirstName(value.replace(/[0-9]/g, ""));
        break;
      case "email":
        setEmail(value);
        break;

      default:
        break;
    }
  };

  // const onClickNext = () => {
  //   setShowLoading(true);
  //   checkLastNameStatus(lastName);
  //   checkFirstNameStatus(firstName);
  //   checkEmailStatus(email);
  //   checkStatusValid(employmentStatus);
  //   setTimeout(() => setShowLoading(false), 500);

  //   if (
  //     checkLastNameStatus(lastName) &&
  //     checkFirstNameStatus(firstName) &&
  //     checkEmailStatus(email) &&
  //     checkStatusValid(employmentStatus)
  //   ) {
  //     if (!showLoading) {
  //       setTimeout(function () {
  //         nextStep();
  //       }, 500);
  //     }
  //   }
  // };

  return (
    <section className="formContent-step-first pb-5">
      <Container>
        <div
          className={
            "wForm wow " + (history?.location?.back ? "fadeInDown" : "fadeInUp")
          }
        >
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-4">1. Please enter your name</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer">
                <Col xs={6} className="wForm-input pl-0">
                  <InputCustom2
                    onFocus={() => setFirstNameValid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle("firstName", e.target.value)}
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
                    onChange={(e) => onKeyUpHandle("lastName", e.target.value)}
                    id="lastName"
                    label="LAST NAME"
                    value={
                      lastName && lastName[0].toUpperCase() + lastName.slice(1)
                    }
                    customClassLabel={lastName ? "active" : ""}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
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
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">1. What’s your email address?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer">
                <Col xs={12} className="wForm-input pl-0">
                  <InputCustom2
                    onFocus={() => setEmailValid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle("email", e.target.value)}
                    label="PLEASE ENTER YOUR EMAIL"
                    value={email}
                    type="email"
                    id="email-input"
                    customClassLabel={email ? "active" : ""}
                    iconEmail
                    customClassWrap="email"
                  />
                </Col>
              </Row>
              {emailValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter a valid email</p>
                </div>
              )}
            </Col>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">1. Are you currently employed?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer">
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
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default First;
