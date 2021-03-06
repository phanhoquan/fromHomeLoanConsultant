/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep24 } from "../../../utils/listLocalStorage";
import LifeInsurance from "../index";

export const types2 = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Casual",
  4: "Self Employed",
  5: "Unemployed",
  6: "Maternal Leave",
};

const Step24 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const jointApplicationStatus = localStorage.getItem("jointApplicationStatus");
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [employmentWorkingStatus, setEmploymentWorkingStatus] = useState(
    localStorage.getItem("employmentPartnersWorkingStatus") || ""
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
  const finDataStep = listDataSubmit.find((item) => item.id === 24);

  const nextStep = (option) => {
    const step24 = {
      id: 24,
      question: "What is your partners employment status?",
      answer: option,
      skip: "",
    };

    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 24 ? step24 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step24])
      );
    }
    if (localStorage.getItem("employmentPartnersWorkingStatus") !== option) {
      currentStep(24, itemStep24);
    }
    window.localStorage.setItem("employmentPartnersWorkingStatus", option);
    if (jointApplicationStatus === types2[2]) {
      if (option === types[5]) {
        history.push({
          pathname: `/refinance-fact-find/step-27`,
        });
      } else if (option === types[6]) {
        history.push({
          pathname: `/refinance-fact-find/step-25`,
        });
      } else {
        history.push({
          pathname: `/refinance-fact-find/step-26`,
        });
      }
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-27`,
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
    const skipStep24 = {
      id: 24,
      question: "What is your partners employment status?",
      answer: employmentWorkingStatus,
      skip: !employmentWorkingStatus && "Skipped",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 24 ? skipStep24 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep24])
      );
    }
    if (jointApplicationStatus === types2[2]) {
      if (employmentWorkingStatus === types[5]) {
        history.push({
          pathname: `/refinance-fact-find/step-27`,
        });
      } else if (employmentWorkingStatus === types[6]) {
        history.push({
          pathname: `/refinance-fact-find/step-25`,
        });
      } else {
        history.push({
          pathname: `/refinance-fact-find/step-26`,
        });
      }
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-27`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={24} numberScroll={1200}>
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
                  24. What is your partners employment status?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={employmentWorkingStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={employmentWorkingStatus === types[2]}
                      name={types[2]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={employmentWorkingStatus === types[3]}
                      onClick={() => onCheck(types[3])}
                      name={types[3]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[4])}
                      checkBox={employmentWorkingStatus === types[4]}
                      name={types[4]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[5])}
                      checkBox={employmentWorkingStatus === types[5]}
                      name={types[5]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[6])}
                      checkBox={employmentWorkingStatus === types[6]}
                      name={types[6]}
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

export default Step24;
