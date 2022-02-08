/** @format */

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LifeInsurance from "../../index";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import checkEmail from "../../../../utils/checkEmail";
import { useHistory } from "react-router-dom";
import {
  getDataInFoContact,
} from "../../../../utils/api";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Self Employed",
  4: "Unemployed",
};

const First = () => {
  const emailNameRef = useRef(null);
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
  const [email, setEmail] = useState(localStorage.getItem("loan2email") || "");
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);
  const [employmentStatus, setEmploymentStatus] = useState(
    localStorage.getItem("loan2employmentStatus") || ""
  );
  const [existingMortgageAmount, setExistingMortgageAmount] = useState(
    localStorage.getItem("existingMortgageAmount") || ""
  );
  const [currentLender, setCurrentLender] = useState(
    localStorage.getItem("currentLender") || ""
  );
  const [valueOfProperty, setValueOfProperty] = useState(
    localStorage.getItem("valueOfProperty") || ""
  );

  const checkEmailStatus = (value) => {
    let test = value && checkEmail(value || "");
    setEmailValid(Number(test));
    return test;
  };

  useEffect(() => {
    setTimeout(() => {
      emailNameRef?.current?.focus();
    }, 400);
  }, []);

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
        setEmploymentStatus('');
        setExistingMortgageAmount('');
        setCurrentLender('');
        setValueOfProperty('');
        setLastName('');
        setFirstName('');
        break;

      default:
        break;
    }
  };

  const step1 = [
    {
      id: 1,
      question: `${email && lastName && firstName ? "1. Enter email address" : ""}`,
    }
  ];

  useMemo(() => {
    localStorage.setItem("loan2lastName", lastName);
    localStorage.setItem("loan2firstName", firstName);
    localStorage.setItem("loan2email", email);
    localStorage.setItem("existingMortgageAmount", existingMortgageAmount);
    localStorage.setItem("valueOfProperty", valueOfProperty);
    localStorage.setItem("currentLender", currentLender);
    localStorage.setItem("loan2employmentStatus", employmentStatus);
    if (
      lastName.trim() ||
      firstName.trim() ||
      email.trim() ||
      employmentStatus ||
      existingMortgageAmount ||
      currentLender ||
      valueOfProperty
    ) {
      setDataListMenuStep1(step1);
    }
    window.localStorage.setItem("listMenuStep1", JSON.stringify(step1));
    // eslint-disable-next-line
  }, [lastName, firstName, email, employmentStatus, existingMortgageAmount, currentLender, valueOfProperty]);

  const onClickNext = () => {
    history.push("/refinance-fact-find-v3/loanInformation");
  };
  const callback = (data) => {
    if (data) {
      const mortgage_amount = data?.existing_mortgage_amount || 0;
      setEmploymentStatus(data?.employment_status || '');
      setExistingMortgageAmount(mortgage_amount ? mortgage_amount.replace(/,/gi, "") : '');
      setCurrentLender(data?.current_lender || '');
      setValueOfProperty(data?.value_of_property? data?.value_of_property.replace(/,/gi, "") : '');
      setLastName(data?.lastname || '');
      setFirstName(data?.firstname || '');
    }else {
      setEmploymentStatus('');
      setExistingMortgageAmount('');
      setCurrentLender('');
      setValueOfProperty('');
      setLastName('');
      setFirstName('');
    }
  };
  const handleSearch = () => {
    if (checkEmailStatus(email)){
      getDataInFoContact(email, callback, callback)
    }
  }
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleBlur = (name) => {
    switch (name) {
      case "email":
        checkEmailStatus(email);
        handleSearch()
        break;
      default:
        break;
    }
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
                <h2 className="mb-4">1. Enter email address</h2>
              </Col>
              <Col xs={12} className="mb-3">
                <Row className="info-customer">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setEmailValid(valid.NON_VALID)}
                      onChange={(e) => onKeyUpHandle("email", e.target.value)}
                      label="Enter email address"
                      value={email}
                      type="email"
                      onKeyPress={onKeyDown}
                      id="email-input"
                      customClassLabel={email ? "active" : ""}
                      iconSearch
                      onBlur={() => handleBlur("email")}
                      innerRef={emailNameRef}
                      handleSearch = {handleSearch}
                    />
                  </Col>
                </Row>
                {emailValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter a valid email</p>
                  </div>
                )}
              </Col>
              <Col xs={12}>
                <Row className="info-customer mb-3">
                  <Col xs={6} className="wForm-input pl-0">
                    <InputCustom2
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
                      readOnly
                    />
                  </Col>
                  <Col xs={6} className="wForm-input pr-0">
                    <InputCustom2
                      onChange={(e) =>
                        onKeyUpHandle("lastName", e.target.value)
                      }
                      id="lastName"
                      label="LAST NAME"
                      value={
                        lastName &&
                        lastName[0].toUpperCase() + lastName.slice(1)
                      }
                      readOnly
                      customClassLabel={lastName ? "active" : ""}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mb-3">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onChange={(e) => onKeyUpHandle("valueOfProperty", e.target.value)}
                      label="Value of property"
                      value={valueOfProperty}
                      id="valueOfProperty"
                      customClassLabel={valueOfProperty ? "active" : ""}
                      readOnly
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mb-3">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onChange={(e) => onKeyUpHandle("existingMortgageAmount", e.target.value)}
                      label="Existing mortgage amount"
                      value={existingMortgageAmount}
                      id="existingMortgageAmount"
                      customClassLabel={existingMortgageAmount ? "active" : ""}
                      readOnly
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mb-3">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onChange={(e) => onKeyUpHandle("currentLender", e.target.value)}
                      label="Current lender"
                      value={currentLender}
                      id="currentLender"
                      customClassLabel={currentLender ? "active" : ""}
                      readOnly
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mb-3">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onChange={(e) => onKeyUpHandle("employmentStatus", e.target.value)}
                      label="Employment Status"
                      value={employmentStatus}
                      id="employmentStatus"
                      customClassLabel={employmentStatus ? "active" : ""}
                      readOnly
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="group-btn-footer col d-flex justify-content-center mt-4">
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
