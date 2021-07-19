/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import InputCustom2 from "../Components/InputCustom2";
import { valid } from "../utils/constant";
import { Helmet } from "react-helmet";

const Login = ({ handleGetIsLogin }) => {
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }
  const initPassword = "admin@xyz";
  const initUserName = "adminloan";
  const userNameRef = useRef(null);
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  const [userNameValid, setUserNameValid] = useState(valid.NON_VALID);
  const [messages, setMessages] = useState("");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [passwordValid, setPasswordValid] = useState(valid.NON_VALID);

  const checkPasswordStatus = (value) => {
    let test = value.trim().length > 3;
    setPasswordValid(Number(test));
    return test;
  };

  useEffect(() => {
    setTimeout(() => {
      userNameRef?.current?.focus();
    }, 400);
  }, []);

  const checkUserNameStatus = (value) => {
    let test = /^([A-Za-z'’＇`]{2,})$/.test(value);
    setUserNameValid(Number(test));
    return test;
  };

  const nextStep = () => {
    if (
      userName?.trim() === initUserName &&
      password?.trim() === initPassword
    ) {
      handleGetIsLogin("1");
      window.localStorage.setItem("isLogin", "1");
      history.push(`/`);
    } else {
      setMessages("The username or password you entered is incorrect.");
    }
  };

  const onKeyUpHandle = (name, value) => {
    setMessages("");
    switch (name) {
      case "userName":
        setUserName(value.replace(/[0-9]/g, ""));
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkUserNameStatus(userName);
    checkPasswordStatus(password);
    setTimeout(() => setShowLoading(false), 500);
    if (checkUserNameStatus(userName) && checkPasswordStatus(password)) {
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
    <React.Fragment>
      <Helmet>
        <title>Login Home Loan Consultant</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan">
        <main className="life-insurance__MainCt pageDashboard wForm wow fadeInUp">
          <Container>
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-4">Please enter your username</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setUserNameValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle("userName", e.target.value)
                      }
                      label="username"
                      value={userName}
                      id="userName"
                      customClassLabel={userName ? "active" : ""}
                      innerRef={userNameRef}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                {userNameValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter a username</p>
                  </div>
                )}
              </Col>
              <Col xs={12} className="text-center mt-3">
                <h2 className="mb-4">Please enter your password</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setPasswordValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle("password", e.target.value)
                      }
                      label="PLEASE ENTER YOUR password"
                      value={password}
                      type="password"
                      id="password-input"
                      customClassLabel={password ? "active" : ""}
                      customClassWrap="password"
                    />
                  </Col>
                </Row>
                {passwordValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter a password</p>
                  </div>
                )}
              </Col>

              <Col xs={12}>
                {messages ? (
                  <div className="text-error">
                    <p>{messages}</p>
                  </div>
                ) : (
                  ""
                )}
              </Col>

              <Col xs={12} className="fadeInDown wow  mt-4">
                <div className="group-btn-footer col d-flex justify-content-center">
                  <Button
                    className="btnPrimary life wow fadeInUp mt-0 in-progress"
                    type="next"
                    onClick={onClickNext}
                  >
                    {showLoading && <Spinner animation="border" />}
                    LOGIN
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Login;
