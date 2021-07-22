/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep15 } from "../../../utils/listLocalStorage";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Casual",
  4: "Self Employed",
  5: "Unemployed",
};

const Step15 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [employmentWorkingStatus, setEmploymentWorkingStatus] = useState(
    localStorage.getItem("employmentWorkingStatus") || ""
  );

  const [employmentWorkingStatusValid, setEmploymentWorkingStatusValid] =
    useState(valid.NON_VALID);

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setEmploymentWorkingStatusValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setEmploymentWorkingStatus(option);
  };

  const finDataStep = listDataSubmit.find((item) => item.id === 15);

  const nextStep = (option) => {
    const step15 = {
      id: 15,
      question: "What is your employment status?",
      answer: option,
      skip: "",
    };

    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 15 ? step15 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step15])
      );
    }
    if (localStorage.getItem("employmentWorkingStatus") !== option) {
      currentStep(15, itemStep15);
    }
    window.localStorage.setItem("employmentWorkingStatus", option);
    if (option === types[4]) {
      history.push({
        pathname: `/refinance-fact-find/step-18`,
      });
    } else if (option === types[5]) {
      history.push({
        pathname: `/refinance-fact-find/step-20`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-16`,
      });
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(employmentWorkingStatus);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(employmentWorkingStatus)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(employmentWorkingStatus);
        }, 500);
      }
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep15 = {
      id: 15,
      question: "What is your employment status?",
      answer: employmentWorkingStatus,
      skip: !employmentWorkingStatus && "Skipped",
    };
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 15 ? skipStep15 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep15])
      );
    }
    if (employmentWorkingStatus === types[4]) {
      history.push({
        pathname: `/refinance-fact-find/step-18`,
      });
    } else if (employmentWorkingStatus === types[5]) {
      history.push({
        pathname: `/refinance-fact-find/step-20`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-16`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={15} numberScroll={580}>
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
                <h2 className="mb-4">15. What is your employment status?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={employmentWorkingStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={employmentWorkingStatus === types[2]}
                      name={types[2]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={employmentWorkingStatus === types[3]}
                      onClick={() => onCheck(types[3])}
                      name={types[3]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[4])}
                      checkBox={employmentWorkingStatus === types[4]}
                      name={types[4]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[5])}
                      checkBox={employmentWorkingStatus === types[5]}
                      name={types[5]}
                    />
                  </Col>
                </Row>
                {employmentWorkingStatusValid === valid.INVALID && (
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

export default Step15;
