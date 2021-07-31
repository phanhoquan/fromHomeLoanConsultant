/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputNumber from "../../../Components/InputNumber";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep26 } from "../../../utils/listLocalStorage";

const Step26 = () => {
  const partnersSalaryRef = useRef(null);
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [partnersSalary, setPartnersSalary] = useState(
    localStorage.getItem("partnersSalary") || ""
  );
  const [partnersSalaryValid, setPartnersSalaryValid] = useState(
    valid.NON_VALID
  );

  useEffect(() => {
    setTimeout(() => {
      partnersSalaryRef?.current?.element?.focus();
    }, 400);
  }, []);

  const checkPartnersSalaryStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 1000000;
    setPartnersSalaryValid(Number(test));
    return test;
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 26);
  const step26 = {
    id: 26,
    question: "What is your partners salary?",
    answer: partnersSalary
      ? parseInt(partnersSalary.replace(/,/g, ""), 10).toLocaleString("en")
      : "",
    skip: "",
  };

  const nextStep = () => {
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 26 ? step26 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step26])
      );
    }
    if (localStorage.getItem("partnersSalary") !== partnersSalary?.trim()) {
      currentStep(26, itemStep26);
    }
    window.localStorage.setItem(
      "partnersSalary",
      partnersSalary && parseInt(partnersSalary.replace(/,/g, ""), 10)
    );
    history.push({
      pathname: `/refinance-fact-find/step-27`,
    });
  };

  const onKeyUpHandle = (value) => {
    setPartnersSalary(value);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkPartnersSalaryStatus(partnersSalary);
    if (checkPartnersSalaryStatus(partnersSalary)) {
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

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep26 = {
      id: 26,
      question: "What is your partners salary?",
      answer: partnersSalary
        ? parseInt(partnersSalary.replace(/,/g, ""), 10).toLocaleString("en")
        : "",
      skip: !partnersSalary && "Skipped",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 26 ? skipStep26 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep26])
      );
    }

    history.push({
      pathname: `/refinance-fact-find/step-27`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={26} numberScroll={1100}>
      <section className="formContent-step-second formContent-life-insurance mb-2">
        <Container>
          <div className="wForm wow fadeInUp">
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">26. What is your partners salary?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputNumber
                      inputMode="numeric"
                      options={{
                        numericOnly: true,
                        numeral: true,
                        numeralDecimalMark: "",
                        delimiter: ",",
                        numeralThousandsGroupStyle: "thousand",
                      }}
                      onFocus={() => setPartnersSalaryValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) => onKeyUpHandle(e.target.value)}
                      label="E.G. $80,000"
                      value={partnersSalary}
                      id="price-input"
                      customClassLabel={partnersSalary ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={partnersSalaryRef}
                    />
                  </Col>
                </Row>
                {partnersSalaryValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Value should be in between $0 - $1,000,000</p>
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

export default Step26;
