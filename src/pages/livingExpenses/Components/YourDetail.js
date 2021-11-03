/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../Components/InputCustom2";
import { valid } from "../../../utils/constant";
import checkEmail from "../../../utils/checkEmail";

const YourDetail = ({ handleGetDataDetail, statusDataDetail }) => {
  const firstNameRef = useRef(null);
  const [dataDetail, setDataDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [firstNameValid, setFirstNameValid] = useState(valid.NON_VALID);
  const [lastNameValid, setLastNameValid] = useState(valid.NON_VALID);
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);

  const [messEmail, setMessEmail] = useState(
    "Email is not in the correct format."
  );

  const { firstName, lastName, email } = dataDetail;

  useEffect(() => {
    setTimeout(() => {
      firstNameRef?.current?.focus();
    }, 400);
  }, []);

  useEffect(() => {
    setFirstNameValid(Number(statusDataDetail?.firstName));
    setLastNameValid(Number(statusDataDetail?.lastName));
    setEmailValid(Number(statusDataDetail?.email));
    // eslint-disable-next-line
  }, [
    statusDataDetail?.email,
    statusDataDetail?.lastName,
    statusDataDetail?.firstName,
  ]);

  useEffect(() => {
    setTimeout(() => {
      firstNameRef?.current?.focus();
    }, 400);
  }, []);

  const onKeyUpHandle = (name, value) => {
    switch (name) {
      case "lastName":
        setDataDetail({
          ...dataDetail,
          lastName: value.replace(/[0-9]/g, ""),
        });

        break;
      case "firstName":
        setDataDetail({
          ...dataDetail,
          firstName: value.replace(/[0-9]/g, ""),
        });
        break;
      case "email":
        setDataDetail({
          ...dataDetail,
          email: value,
        });
        break;

      default:
        break;
    }
  };

  const checkEmailStatus = (value) => {
    let test = value && checkEmail(value || "");
    if (!value) {
      setMessEmail("This field is required.");
      setEmailValid(valid.INVALID);
      return valid.INVALID;
    }
    setEmailValid(Number(test));
    if (!test) {
      setMessEmail("Email is not in the correct format.");
    }
    return test;
  };

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

  const handleBlur = (name) => {
    handleGetDataDetail(dataDetail);
    switch (name) {
      case "lastName":
        checkLastNameStatus(lastName.trim());

        break;
      case "firstName":
        checkFirstNameStatus(firstName.trim());

        break;
      case "email":
        checkEmailStatus(email.trim());
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleGetDataDetail(dataDetail);
  });

  return (
    <div className="YourDetail">
      <div className="title">Your details</div>
      <Row className="info-customer">
        <Col xs={12} sm={4} className="wForm-input mb-3">
          <label>First name*</label>
          <InputCustom2
            onChange={(e) => onKeyUpHandle("firstName", e.target.value)}
            id="firstName"
            value={firstName && firstName[0].toUpperCase() + firstName.slice(1)}
            placeholder="Your first name"
            customClassName={firstNameValid === valid.INVALID ? "error" : ""}
            innerRef={firstNameRef}
            onBlur={() => handleBlur("firstName")}
            onFocus={() => setFirstNameValid(valid.NON_VALID)}
          />
          {firstNameValid === valid.INVALID ? (
            <p className="mess-error">This field is required.</p>
          ) : (
            ""
          )}
        </Col>
        <Col xs={12} sm={4} className="wForm-input mb-3">
          <label>Last name*</label>
          <InputCustom2
            onChange={(e) => onKeyUpHandle("lastName", e.target.value)}
            id="lastName"
            value={lastName && lastName[0].toUpperCase() + lastName.slice(1)}
            placeholder="Your last name"
            customClassName={lastNameValid === valid.INVALID ? "error" : ""}
            onBlur={() => handleBlur("lastName")}
            onFocus={() => setLastNameValid(valid.NON_VALID)}
          />
          {lastNameValid === valid.INVALID ? (
            <p className="mess-error">This field is required.</p>
          ) : (
            ""
          )}
        </Col>
        <Col xs={12} sm={4} className="wForm-input mb-3">
          <label>Email*</label>
          <InputCustom2
            onChange={(e) => onKeyUpHandle("email", e.target.value)}
            id="email"
            value={email}
            type="email"
            placeholder="Your email"
            customClassName={emailValid === valid.INVALID ? "error" : ""}
            onBlur={() => handleBlur("email")}
            onFocus={() => setEmailValid(valid.NON_VALID)}
          />

          {emailValid === valid.INVALID ? (
            <p className="mess-error">{messEmail}</p>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
};

export default YourDetail;
