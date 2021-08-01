/** @format */

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LifeInsurance from "../../index";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import checkEmail from "../../../../utils/checkEmail";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Self Employed",
  4: "Unemployed",
};

const First = () => {
  const firstNameRef = useRef(null);

  let listDataSubmit = localStorage.getItem("loan2listDataSubmit")
    ? JSON.parse(localStorage.getItem("loan2listDataSubmit"))
    : [];

  const [firstName, setFirstName] = useState(
    localStorage.getItem("loan2firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("loan2lastName") || ""
  );
  const [firstNameValid, setFirstNameValid] = useState(valid.NON_VALID);
  const [lastNameValid, setLastNameValid] = useState(valid.NON_VALID);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
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

  const step1 = {
    id: 1,
    question: "1. Are you currently employed?",
  };

  const finDataStep1 = listDataSubmit?.find((item) => item.id === 1);
  // const finDataStep1Remove = listDataSubmit?.find((item) => item.id !== 1);
  const updateDataStep1 = listDataSubmit?.map((item) =>
    item.id === 1 ? step1 : item
  );

  useMemo(() => {
    window.localStorage.setItem("loan2lastName", lastName);
    window.localStorage.setItem("loan2firstName", firstName);
    window.localStorage.setItem("loan2email", email);
    window.localStorage.setItem("loan2employmentStatus", employmentStatus);
    if (
      lastName.trim() ||
      firstName.trim() ||
      email.trim() ||
      employmentStatus
    ) {
      if (finDataStep1) {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify(updateDataStep1)
        );
      } else {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify([...listDataSubmit, step1])
        );
      }
    }
    // else {
    //   window.localStorage.setItem(
    //     "loan2listDataSubmit",
    //     finDataStep1Remove
    //       ? JSON.stringify(finDataStep1Remove)
    //       : JSON.stringify([])
    //   );
    // }

    // eslint-disable-next-line
  }, [lastName, firstName, email, employmentStatus]);

  return (
    <LifeInsurance activeStep={1} className="page-main">
      <section className="formContent-step-first pb-5">
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
    </LifeInsurance>
  );
};

export default First;
