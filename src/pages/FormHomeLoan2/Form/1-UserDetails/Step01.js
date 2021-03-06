/** @format */

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LifeInsurance from "../../index";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import checkEmail from "../../../../utils/checkEmail";
import { CheckboxButton } from "../../../../Components/CheckBox3";
import { useHistory } from "react-router-dom";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Self Employed",
  4: "Unemployed",
};

const First = () => {
  const firstNameRef = useRef(null);
  const history = useHistory();
  let listMenuStep1 = localStorage.getItem("listMenuStep1")
    ? JSON.parse(localStorage.getItem("listMenuStep1"))
    : [];

  const [dataListMenuStep1, setDataListMenuStep1] = useState(
    listMenuStep1 || []
  );

  const [firstName, setFirstName] = useState(
    localStorage.getItem("loan2firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("loan2lastName") || ""
  );
  const [firstNameValid, setFirstNameValid] = useState(valid.NON_VALID);
  const [lastNameValid, setLastNameValid] = useState(valid.NON_VALID);
  const [email, setEmail] = useState(localStorage.getItem("loan2email") || "");
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);
  const [employmentStatus, setEmploymentStatus] = useState(
    localStorage.getItem("loan2employmentStatus") || ""
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

  const handleBlur = (name) => {
    switch (name) {
      case "lastName":
        checkLastNameStatus(lastName);

        break;
      case "firstName":
        checkFirstNameStatus(firstName);

        break;
      case "email":
        checkEmailStatus(email);
        break;
      default:
        break;
    }
  };

  const step1 = [
    {
      id: 1,
      question: `${lastName && firstName ? "1. Please enter your name" : ""}`,
    },
    {
      id: 2,
      question: `${email ? "1. What’s your email address?" : ""}`,
    },
    {
      id: 3,
      question: `${employmentStatus ? "1. Are you currently employed?" : ""}`,
    },
  ];

  useMemo(() => {
    localStorage.setItem("loan2lastName", lastName);
    localStorage.setItem("loan2firstName", firstName);
    localStorage.setItem("loan2email", email);
    localStorage.setItem("loan2employmentStatus", employmentStatus);
    if (
      lastName.trim() ||
      firstName.trim() ||
      email.trim() ||
      employmentStatus
    ) {
      setDataListMenuStep1(step1);
    }
    window.localStorage.setItem("listMenuStep1", JSON.stringify(step1));
    // eslint-disable-next-line
  }, [lastName, firstName, email, employmentStatus]);

  const onClickNext = () => {
    history.push("/refinance-fact-find-2/loanInformation");
  };

  return (
    <LifeInsurance
      activeStep={1}
      className="page-main"
      listMenuStep1={dataListMenuStep1}
    >
      <section className="formContent-step-first pb-5 mt-5 mt-md-3 lg-mt-0">
        <Container>
          <div>
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-4">1. Please enter your name</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer">
                  <Col xs={6} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setFirstNameValid(valid.NON_VALID)}
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
                      onBlur={() => handleBlur("firstName")}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input pr-0">
                    <InputCustom2
                      onFocus={() => setLastNameValid(valid.NON_VALID)}
                      onChange={(e) =>
                        onKeyUpHandle("lastName", e.target.value)
                      }
                      id="lastName"
                      label="LAST NAME"
                      value={
                        lastName &&
                        lastName[0].toUpperCase() + lastName.slice(1)
                      }
                      onBlur={() => handleBlur("lastName")}
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
                      onBlur={() => handleBlur("email")}
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
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={employmentStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={employmentStatus === types[2]}
                      name={types[2]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[3])}
                      checkBox={employmentStatus === types[3]}
                      name={types[3]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[4])}
                      checkBox={employmentStatus === types[4]}
                      name={types[4]}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="group-btn-footer col d-flex justify-content-center">
              <Button
                className="btnPrimary life wow fadeInUp mt-0 in-progress"
                type="next"
                onClick={onClickNext}
              >
                NEXT
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default First;
