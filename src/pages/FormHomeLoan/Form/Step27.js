/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";

export const types = {
  1: "Personal Loans",
  2: "Car Loans",
  3: "HECS debt",
  4: "None of the above",
};

const Step27 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [personalLoansStatus, setPersonalLoansStatus] = useState(
    localStorage.getItem("personalLoansStatus") || ""
  );

  const [personalLoansStatusValid, setPersonalLoansStatusValid] = useState(
    valid.NON_VALID
  );

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setPersonalLoansStatusValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setPersonalLoansStatus(option);
    window.localStorage.setItem("personalLoansStatus", option);
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (!showLoading) {
      setTimeout(function () {
        nextStep(option);
      }, 500);
    }
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 27);

  const nextStep = (option) => {
    window.localStorage.setItem("personalLoansStatus", option);
    const step27 = {
      id: 27,
      question:
        "Are you currently paying off any personal loans, \n car loans or HECS debt?",
      answer: option,
      skip: "",
    };
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 27 ? step27 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step27])
      );
    }
    if (option === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-28a`,
      });
    } else if (option === types[2]) {
      history.push({
        pathname: `/refinance-fact-find/step-28b`,
      });
    } else if (option === types[3]) {
      history.push({
        pathname: `/refinance-fact-find/step-28c`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-29`,
      });
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(personalLoansStatus);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(personalLoansStatus)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(personalLoansStatus);
        }, 500);
      }
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep27 = {
      id: 27,
      question:
        "Are you currently paying off any personal loans, \n car loans or HECS debt?",
      answer: personalLoansStatus,
      skip: !personalLoansStatus && "Skipped",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 27 ? skipStep27 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep27])
      );
    }

    if (personalLoansStatus === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-28a`,
      });
    } else if (personalLoansStatus === types[2]) {
      history.push({
        pathname: `/refinance-fact-find/step-28b`,
      });
    } else if (personalLoansStatus === types[3]) {
      history.push({
        pathname: `/refinance-fact-find/step-28c`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-29`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={27}>
      <section className="formContent-step-first pb-5">
        <Container>
          <div
            className={
              "wForm wow " +
              (history?.location?.back ? "fadeInDown" : "fadeInUp")
            }
          >
            <Row>
              <Col xs={12} className="text-center mt-3">
                <h2 className="mb-4">
                  27. Are you currently paying off any personal loans, <br />
                  car loans or HECS debt?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 w-600">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={personalLoansStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={personalLoansStatus === types[2]}
                      name={types[2]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={personalLoansStatus === types[3]}
                      onClick={() => onCheck(types[3])}
                      name={types[3]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[4])}
                      checkBox={personalLoansStatus === types[4]}
                      name={types[4]}
                    />
                  </Col>
                </Row>
                {personalLoansStatusValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please select an option</p>
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
                <div
                  className="SKIP"
                  onClick={() => handleSkip()}
                  role="button"
                >
                  SKIP
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default Step27;
