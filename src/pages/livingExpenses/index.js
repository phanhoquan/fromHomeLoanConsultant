/** @format */

import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, Accordion, Button } from "react-bootstrap";
import imgLogo from "../../images/life/logo.svg";
import YourDetail from "./Components/YourDetail";
import checkEmail from "../../utils/checkEmail";

const types = {
  weekly: "Weekly",
  monthly: "Monthly",
  annually: "Annually",
};
const types2 = {
  Weekly: "week",
  Monthly: "month",
  Annually: "year",
};
const LivingExpenses = () => {
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }

  const [frequency, setFrequency] = useState("Monthly");
  const [statusDataDetail, setStatusDataDetail] = useState({
    firstName: -1,
    lastName: -1,
    email: -1,
  });
  const [dataDetail, setDataDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const { firstName, lastName, email } = dataDetail;
  const checkEmailStatus = (value) => {
    let test = checkEmail(value || "");
    return test;
  };

  const checkFirstNameStatus = (value) => {
    let test = /^([A-Za-z'’＇`]{2,})$/.test(value);
    return test;
  };

  const checkLastNameStatus = (value) => {
    let test = /^([A-Za-z'’＇`]{2,})$/.test(value);
    return test;
  };

  const handleClickFrequency = (name) => {
    setFrequency(name);
  };

  const handleGetDataDetail = (data) => {
    setDataDetail(data);
  };
  const handleSubmitForm = () => {
    console.log(dataDetail, "dataDetail");
    setStatusDataDetail({
      email: checkEmailStatus(email),
      firstName: checkFirstNameStatus(firstName),
      lastName: checkLastNameStatus(lastName),
    });
    if (
      checkEmailStatus(email) &&
      checkFirstNameStatus(firstName) &&
      checkLastNameStatus(lastName)
    ) {
      console.log(
        checkEmailStatus(email),
        "email",
        checkFirstNameStatus(firstName),
        "first",
        checkLastNameStatus(lastName),
        "sssss"
      );
    }
  };

  return (
    <div className="livingExpenses">
      <div className="logo text-center">
        <LazyLoadImage src={imgLogo} alt="logo" width="100%" height="70" />
      </div>
      <div className="container">
        <YourDetail
          handleGetDataDetail={handleGetDataDetail}
          statusDataDetail={statusDataDetail}
        />
        <div className="step-header mt-4">
          <div className="title">Living Expenses</div>
          <div className="listAction">
            <button
              className={frequency === types.weekly ? "active" : ""}
              onClick={() => handleClickFrequency(types.weekly)}
            >
              Weekly
            </button>
            <button
              className={frequency === types.monthly ? "active" : ""}
              onClick={() => handleClickFrequency(types.monthly)}
            >
              Monthly
            </button>
            <button
              className={frequency === types.annually ? "active" : ""}
              onClick={() => handleClickFrequency(types.annually)}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="contentCollapse">
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <div className="card-title">
                    <h2>Fixed Expenses</h2>
                    <div className="price">$0/{types2[frequency]}</div>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <div className="card-title">
                    <h2>Variable Expenses</h2>
                    <div className="price">$0/{types2[frequency]}</div>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <div className="card-title">
                    <h2>Discretionary Expenses</h2>
                    <div className="price">$0/{types2[frequency]}</div>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <div className="totalPrice">
            <h2>Total Expenses</h2>
            <div className="price">$0/{types2[frequency]}</div>
          </div>
          <div className="text-center mt-4">
            <Button onClick={() => handleSubmitForm()}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingExpenses;
