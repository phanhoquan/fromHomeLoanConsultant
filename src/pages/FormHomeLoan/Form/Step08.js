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

const Step08 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [kidsOrDependant, setKidsOrDependant] = useState(
    localStorage.getItem("kidsOrDependant") || ""
  );

  const [kidsOrDependantValid, setKidsOrDependantValid] = useState(
    valid.NON_VALID
  );

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setKidsOrDependantValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setKidsOrDependant(option);
    window.localStorage.setItem("kidsOrDependant", option);
  };

  const finDataStep = listDataSubmit.find((item) => item.id === 8);
  const nextStep = (option) => {
    const step8 = {
      id: 8,
      question: "Do you have any kids or dependants?",
      answer: option,
      skip: "",
    };
    window.localStorage.setItem("kidsOrDependant", option);
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 8 ? step8 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step8])
      );
    }
    if (option === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-09`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-14`,
      });
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(kidsOrDependant);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(kidsOrDependant)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(kidsOrDependant);
        }, 500);
      }
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep8 = {
      id: 8,
      question: "Do you have any kids or dependants?",
      answer: kidsOrDependant,
      skip: !kidsOrDependant && "Skipped",
    };
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 8 ? skipStep8 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep8])
      );
    }
    if (kidsOrDependant === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-09`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-14`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={8}>
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
                <h2 className="mb-4">8. Do you have any kids or dependants?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={kidsOrDependant === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                      classContainer="radius"
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={kidsOrDependant === types[2]}
                      name={types[2]}
                      classContainer="radius"
                    />
                  </Col>
                </Row>
                {kidsOrDependantValid === valid.INVALID && (
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

export default Step08;
