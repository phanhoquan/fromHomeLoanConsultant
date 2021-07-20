/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";

export const types = {
  1: "YES",
  2: "NO",
};

const Step11 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [otherDependents, setOtherDependents] = useState(
    localStorage.getItem("otherDependents") || ""
  );

  const [otherDependentsValid, setOtherDependentsValid] = useState(
    valid.NON_VALID
  );

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setOtherDependentsValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setOtherDependents(option);
    window.localStorage.setItem("otherDependents", option);
  };

  const finDataStep = listDataSubmit.find((item) => item.id === 11);

  const nextStep = (option) => {
    const step11 = {
      id: 11,
      question: "Do you have any other dependants?",
      answer: option,
      skip: "",
    };
    window.localStorage.setItem("otherDependents", option);
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 11 ? step11 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step11])
      );
    }
    if (option === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-12`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-14`,
      });
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(otherDependents);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(otherDependents)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(otherDependents);
        }, 500);
      }
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const skipStep11 = {
    id: 11,
    question: "Do you have any other dependants?",
    answer: otherDependents,
    skip: !otherDependents && "Skipped",
  };

  const handleSkip = () => {
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 11 ? skipStep11 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep11])
      );
    }

    if (otherDependents === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-12`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-14`,
      });
    }
  };
  return (
    <LifeInsurance isShowHeader activeStep={11}>
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
                <h2 className="mb-4">11. Do you have any other dependants?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={otherDependents === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                      classContainer="radius"
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={otherDependents === types[2]}
                      name={types[2]}
                      classContainer="radius"
                    />
                  </Col>
                </Row>
                {otherDependentsValid === valid.INVALID && (
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

export default Step11;
