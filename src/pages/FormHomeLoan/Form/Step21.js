/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep21 } from "../../../utils/listLocalStorage";
import LifeInsurance from "../index";

export const types = {
  1: "YES",
  2: "NO",
};

export const types2 = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step21 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  // const jointApplicationStatus = localStorage.getItem("jointApplicationStatus");
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [taxReturns, setTaxReturns] = useState(
    localStorage.getItem("taxReturns") || ""
  );

  const [taxReturnsValid, setTaxReturnsValid] = useState(valid.NON_VALID);

  const checkStatusValid = (option) => {
    let test = Object.values(types).includes(option);
    setTaxReturnsValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setTaxReturns(option);
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 21);

  const nextStep = (option) => {
    const step21 = {
      id: 21,
      question: "Have the tax returns for 2019/2020 \n been completed?",
      answer: option,
      skip: "",
    };

    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 21 ? step21 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step21])
      );
    }
    if (localStorage.getItem("taxReturns") !== option) {
      currentStep(21, itemStep21);
    }
    window.localStorage.setItem("taxReturns", option);
    // if (jointApplicationStatus === types2[2]) {
    if (option === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-22`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-23`,
      });
    }
    // } else {
    //   history.push({
    //     pathname: `/refinance-fact-find/step-27`,
    //   });
    // }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(taxReturns);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(taxReturns)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(taxReturns);
        }, 500);
      }
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep21 = {
      id: 21,
      question: "Have the tax returns for 2019/2020 \n been completed?",
      answer: taxReturns,
      skip: !taxReturns && "Skipped",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 21 ? skipStep21 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep21])
      );
    }

    // if (jointApplicationStatus === types2[2]) {
    if (taxReturns === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-22`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-23`,
      });
    }
    // } else {
    //   history.push({
    //     pathname: `/refinance-fact-find/step-27`,
    //   });
    // }
  };

  return (
    <LifeInsurance isShowHeader activeStep={21} numberScroll={1000}>
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
                  21. Have the tax returns for 2019/2020 <br />
                  been completed?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={taxReturns === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                      classContainer="radius"
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={taxReturns === types[2]}
                      name={types[2]}
                      classContainer="radius"
                    />
                  </Col>
                </Row>
                {taxReturnsValid === valid.INVALID && (
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

export default Step21;
