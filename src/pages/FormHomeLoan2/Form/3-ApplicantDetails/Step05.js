/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";

const First = () => {
  const firstNameRef = useRef(null);
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstNameOther") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastNameOther") || ""
  );
  const [firstNameValid, setFirstNameValid] = useState(valid.NON_VALID);
  const [lastNameValid, setLastNameValid] = useState(valid.NON_VALID);

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

  const handleBlur = (name) => {
    switch (name) {
      case "lastName":
        checkLastNameStatus(lastName);
        break;
      case "firstName":
        checkFirstNameStatus(firstName);
        break;
      default:
        break;
    }
  };

  useMemo(() => {
    window.localStorage.setItem("firstNameOther", firstName);
  }, [firstName]);

  useMemo(() => {
    window.localStorage.setItem("lastNameOther", lastName);
  }, [lastName]);

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-4">
                5. What is the other name of the applicant?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-4">
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
                    onBlur={() => handleBlur("firstName")}
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
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default First;
