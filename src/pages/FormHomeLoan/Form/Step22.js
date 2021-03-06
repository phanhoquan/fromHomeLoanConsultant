/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import { itemStep22 } from "../../../utils/listLocalStorage";
import { currentStep } from "../../../utils/removeQuestion";
import InputNumber from "../../../Components/InputNumber";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step22 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const priceTax2019Ref = useRef(null);
  const priceTax2020Ref = useRef(null);
  const jointApplicationStatus = localStorage.getItem("jointApplicationStatus");
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [priceTax2019, setPriceTax2019] = useState(
    localStorage.getItem("priceTax2019") || ""
  );
  const [priceTax2019Valid, setPriceTax2019Valid] = useState(valid.NON_VALID);

  const [priceTax2020, setPriceTax2020] = useState(
    localStorage.getItem("priceTax2020") || ""
  );
  const [priceTax2020Valid, setPriceTax2020Valid] = useState(valid.NON_VALID);

  useEffect(() => {
    setTimeout(() => {
      priceTax2019Ref?.current?.element?.focus();
    }, 400);
  }, []);

  const checkPriceTax2019Status = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 1000000;
    setPriceTax2019Valid(Number(test));
    return test;
  };

  const checkPriceTax2020Status = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 1000000;
    setPriceTax2020Valid(Number(test));
    return test;
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 22);
  const step22 = {
    id: 22,
    question: "What was your 2019 taxable income?",
    answer: priceTax2019
      ? parseInt(priceTax2019.replace(/,/gi, ""), 10).toLocaleString("en")
      : "",
    question2: "What was your 2020 taxable income?",
    answer2: priceTax2020
      ? parseInt(priceTax2020.replace(/,/gi, ""), 10).toLocaleString("en")
      : "",
    skip: "",
  };
  const nextStep = () => {
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 22 ? step22 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step22])
      );
    }

    if (
      localStorage.getItem("priceTax2019") !== priceTax2019.trim() ||
      localStorage.getItem("priceTax2020") !== priceTax2020.trim()
    ) {
      currentStep(22, itemStep22);
    }
    window.localStorage.setItem(
      "priceTax2019",
      priceTax2019 && parseInt(priceTax2019.replace(/,/g, ""), 10)
    );
    window.localStorage.setItem(
      "priceTax2020",
      priceTax2020 && parseInt(priceTax2020.replace(/,/g, ""), 10)
    );
    if (jointApplicationStatus === types[2]) {
      history.push({
        pathname: `/refinance-fact-find/step-23`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-27`,
      });
    }
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "tax2019") {
      setPriceTax2019(value);
    }
    if (name === "tax2020") {
      setPriceTax2020(value);
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkPriceTax2019Status(priceTax2019);
    checkPriceTax2020Status(priceTax2020);
    if (
      checkPriceTax2019Status(priceTax2019) &&
      checkPriceTax2020Status(priceTax2020)
    ) {
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
    const skipStep22 = {
      id: 22,
      question: "What was your 2019 taxable income?",
      answer: priceTax2019
        ? parseInt(priceTax2019.replace(/,/gi, ""), 10).toLocaleString("en")
        : "",
      question2: "What was your 2020 taxable income?",
      answer2: priceTax2020
        ? parseInt(priceTax2020.replace(/,/gi, ""), 10).toLocaleString("en")
        : "",
      skip: (!priceTax2019 && "Skipped") || (!priceTax2020 && "Skipped"),
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 22 ? skipStep22 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep22])
      );
    }
    if (jointApplicationStatus === types[2]) {
      history.push({
        pathname: `/refinance-fact-find/step-23`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-27`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={22} numberScroll={1000}>
      <section className="formContent-step-second formContent-life-insurance mb-2">
        <Container>
          <div className="wForm wow fadeInUp">
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">22. What was your 2019 taxable income?</h2>
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
                      onFocus={() => setPriceTax2019Valid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) => onKeyUpHandle(e.target.value, "tax2019")}
                      label="E.G. $80,000"
                      value={priceTax2019}
                      id="priceTax2019"
                      customClassLabel={priceTax2019 ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={priceTax2019Ref}
                    />
                  </Col>
                </Row>
                {priceTax2019Valid === valid.INVALID && (
                  <div className="text-error">
                    <p>Value should be in between $0 - $1,000,000</p>
                  </div>
                )}
              </Col>

              <Col xs={12} className="text-center mt-4">
                <h2 className="mb-3">22. What was your 2020 taxable income?</h2>
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
                      onFocus={() => setPriceTax2020Valid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) => onKeyUpHandle(e.target.value, "tax2020")}
                      label="E.G. $85,000"
                      value={priceTax2020}
                      id="priceTax2020"
                      customClassLabel={priceTax2020 ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={priceTax2020Ref}
                    />
                  </Col>
                </Row>
                {priceTax2020Valid === valid.INVALID && (
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

export default Step22;
