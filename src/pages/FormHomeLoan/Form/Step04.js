/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step04 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [jointApplicationStatus, setJointApplicationStatus] = useState(
    localStorage.getItem("jointApplicationStatus") || ""
  );

  const [jointApplicationStatusValid, setJointApplicationStatusValid] =
    useState(valid.NON_VALID);

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setJointApplicationStatusValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setJointApplicationStatus(option);
    window.localStorage.setItem("jointApplicationStatus", option);
  };

  const finDataStep = listDataSubmit.find((item) => item.id === 4);

  const nextStep = (option) => {
    window.localStorage.setItem("jointApplicationStatus", option);
    const step4 = {
      id: 4,
      question: "Are you the sole applicant or is this \n a joint application?",
      answer: option,
      skip: "",
    };
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 4 ? step4 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step4])
      );
    }
    if (option === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-07`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-05`,
      });
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(jointApplicationStatus);
    setTimeout(() => setShowLoading(false), 500);
    if (checkStatusValid(jointApplicationStatus)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(jointApplicationStatus);
        }, 500);
      }
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep4 = {
      id: 4,
      question: "Are you the sole applicant or is this \n a joint application?",
      answer: jointApplicationStatus,
      skip: !jointApplicationStatus && "Skipped",
    };
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 4 ? skipStep4 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep4])
      );
    }
    if (jointApplicationStatus === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-07`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-05`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={4}>
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
                  4. Are you the sole applicant or is this <br />a joint
                  application?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer w-650">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={jointApplicationStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={jointApplicationStatus === types[2]}
                      name={types[2]}
                    />
                  </Col>
                </Row>
                {jointApplicationStatusValid === valid.INVALID && (
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

export default Step04;
