/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import InputNumber from "../../../Components/InputNumber";

const Step27C = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const HECSDebtRef = useRef(null);
  const HECSDebtAmountRef = useRef(null);

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [HECSDebt, setHECSDebt] = useState(
    localStorage.getItem("HECSDebt") || ""
  );
  const [HECSDebtValid, setHECSDebtValid] = useState(valid.NON_VALID);

  const [HECSDebtAmount, setHECSDebtAmount] = useState(
    localStorage.getItem("HECSDebtAmount") || ""
  );
  const [HECSDebtAmountValid, setHECSDebtAmountValid] = useState(
    valid.NON_VALID
  );

  useEffect(() => {
    setTimeout(() => {
      HECSDebtRef?.current?.element?.focus();
    }, 400);
  }, []);

  const checkHECSDebtStatus = (value) => {
    let test = value.length > 1;
    setHECSDebtValid(Number(test));
    return test;
  };

  const checkHECSDebtAmountStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setHECSDebtAmountValid(Number(test));
    return test;
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 27);
  const step27 = {
    id: 27,
    question: "Which institution is the HECS debt with?",
    answer: HECSDebt,
    question2: "What is the limit on the HECS Debt amount?",
    answer2: HECSDebtAmount
      ? parseInt(HECSDebtAmount, 10).toLocaleString("en")
      : "",
    skip: "",
    menu: "27c",
  };

  const nextStep = () => {
    window.localStorage.setItem("HECSDebt", HECSDebt);
    window.localStorage.setItem(
      "HECSDebtAmount",
      HECSDebtAmount && parseInt(HECSDebtAmount.replace(/,/g, ""), 10)
    );
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
    history.push({
      pathname: `/refinance-fact-find/step-28`,
    });
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "HECSDebt") {
      setHECSDebt(value);
    }
    if (name === "HECSDebtAmount") {
      setHECSDebtAmount(value);
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkHECSDebtStatus(HECSDebt);
    checkHECSDebtAmountStatus(HECSDebtAmount);
    if (
      checkHECSDebtStatus(HECSDebt) &&
      checkHECSDebtAmountStatus(HECSDebtAmount)
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
    const skipStep27 = {
      id: 27,
      question: "Which institution is the HECS debt with?",
      answer: HECSDebt,
      question2: "What is the limit on the HECS Debt amount?",
      answer2: HECSDebtAmount
        ? parseInt(HECSDebtAmount, 10).toLocaleString("en")
        : "",
      skip: (!HECSDebtAmount && "Skipped") || (!HECSDebt && "Skipped"),
      menu: "27c",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 27 ? skipStep27: item
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
    history.push({
      pathname: `/refinance-fact-find/step-28`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={27} numberScroll={1750}>
      <section className="formContent-step-second formContent-life-insurance mb-2">
        <Container>
          <div className="wForm wow fadeInUp">
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">
                  27. Which institution is the HECS debt with?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setHECSDebtValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle(e.target.value, "HECSDebt")
                      }
                      label="HECS debt Institution"
                      value={
                        HECSDebt &&
                        HECSDebt[0].toUpperCase() + HECSDebt.slice(1)
                      }
                      id="price-input"
                      customClassLabel={HECSDebt ? "active" : ""}
                      customClassWrap="email five"
                      innerRef={HECSDebtRef}
                    />
                  </Col>
                </Row>
                {HECSDebtValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter your Car Loan Institution</p>
                  </div>
                )}
              </Col>

              <Col xs={12} className="text-center mt-4">
                <h2 className="mb-3">
                  27. What is the limit on the HECS Debt amount?
                </h2>
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
                      onFocus={() => setHECSDebtAmountValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle(e.target.value, "HECSDebtAmount")
                      }
                      label="E.G. $10,000"
                      value={HECSDebtAmount}
                      id="price-input"
                      customClassLabel={HECSDebtAmount ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={HECSDebtAmountRef}
                    />
                  </Col>
                </Row>
                {HECSDebtAmountValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Value should be in between $0 - $10,000,000</p>
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

export default Step27C;
