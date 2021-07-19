/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import InputCustom2 from "../../../Components/InputCustom2";
import LifeInsurance from "../index";

const First = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
  ? JSON.parse(localStorage.getItem("listDataSubmit"))
  : [];
  const firstNameRef = useRef(null);
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstNameOther") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastNameOther") || ""
  );
  const [firstNameValid, setFirstNameValid] = useState(valid.NON_VALID);
  const [lastNameValid, setLastNameValid] = useState(valid.NON_VALID);

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
    window.localStorage.setItem("firstNameOther", firstName);
    window.localStorage.setItem("lastNameOther", lastName);
    history.push({
      pathname: `/refinance-fact-find/step-06`,
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
    if (e.key === "Enter") {
      onClickNext();
    }
  };
  const onClickBack = () => {
    history.go(-1);
  };
  return (
    <LifeInsurance isShowHeader>
      <section className="formContent-step-first pb-5">
        <Container>
          <div
            className={
              "wForm wow " +
              (history?.location?.back ? "fadeInDown" : "fadeInUp")
            }
          >
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

              <Col xs={12} className="fadeInDown wow  mt-4">
                <div className="group-btn-footer col d-flex justify-content-center">
                  <Button
                    className="btnPrimary life wow fadeInUp mt-0 back"
                    type="next"
                    onClick={onClickBack}
                  >
                    BACK
                  </Button>
                  <Button
                    className="btnPrimary life wow fadeInUp mt-0 in-progress"
                    type="next"
                    onClick={onClickNext}
                  >
                    {showLoading && <Spinner animation="border" />}
                    NEXT
                  </Button>
                </div>
                <div className="SKIP">SKIP</div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default First;
