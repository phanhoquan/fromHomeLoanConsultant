/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep14 } from "../../../utils/listLocalStorage";

export const types = {
  1: "YES",
  2: "NO",
};

const Step14 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const employmentStatus = localStorage.getItem("employmentStatus");
  const [workingStatus, setWorkingStatus] = useState(
    localStorage.getItem("workingStatus") || ""
  );

  const [workingStatusValid, setWorkingStatusValid] = useState(valid.NON_VALID);

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setWorkingStatusValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setWorkingStatus(option);
    window.localStorage.setItem("workingStatus", option);
  };

  const finDataStep = listDataSubmit.find((item) => item.id === 14);
  const nextStep = (option) => {
    const step14 = {
      id: 14,
      question: `You mentioned that you are working ‘${employmentStatus}’ Is that correct?`,
      answer: option,
      skip: "",
    };

    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 14 ? step14 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step14])
      );
    }
    if (localStorage.getItem("workingStatus") !== option) {
      currentStep(14, itemStep14);
    }
    window.localStorage.setItem("workingStatus", option);
    if (option === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-17`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-15`,
      });
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(workingStatus);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(workingStatus)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(workingStatus);
        }, 500);
      }
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep14 = {
      id: 14,
      question: `You mentioned that you are working ‘${employmentStatus}’ Is that correct?`,
      answer: workingStatus,
      skip: !workingStatus && "Skipped",
    };
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 14 ? skipStep14 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep14])
      );
    }
    if (workingStatus === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-17`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-15`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={14} numberScroll={570}>
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
                  14. You mentioned that you are working{" "}
                  <br className="d-block" />‘{employmentStatus}’ Is that
                  correct?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={workingStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                      classContainer="radius"
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={workingStatus === types[2]}
                      name={types[2]}
                      classContainer="radius"
                    />
                  </Col>
                </Row>
                {workingStatusValid === valid.INVALID && (
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

export default Step14;
