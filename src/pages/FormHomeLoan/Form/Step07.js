/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import formatCurrency from "../../../utils/formatCurrency";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step02 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const typesApplication =
    localStorage.getItem("jointApplicationStatus") || "Sole Applicant";
  const [soleApplicantAge, setSoleApplicantAge] = useState(
    localStorage.getItem("soleApplicantAge") || ""
  );
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [soleApplicantAgeValid, setSoleApplicantAgeValid] = useState(
    valid.NON_VALID
  );

  const [jointApplicantAge, setJointApplicantAge] = useState(
    localStorage.getItem("jointApplicantAge") || ""
  );

  const [jointApplicantAgeValid, setJointApplicantAgeValid] = useState(
    valid.NON_VALID
  );
  const [validMessage, setValidMessage] = useState("This field is required");
  const [validMessage2, setValidMessage2] = useState("This field is required");

  const checkSoleApplicantAgeStatus = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage("This field is required");
      setSoleApplicantAgeValid(valid.INVALID);
      return false;
    }
    if (originAmount < 18) {
      setValidMessage("Value must be greater than or equal to 18");
      setSoleApplicantAgeValid(valid.INVALID);
      return false;
    }
    if (originAmount > 100) {
      setValidMessage("Value should be less that 100");
      setSoleApplicantAgeValid(valid.INVALID);
      return false;
    }
    setSoleApplicantAgeValid(valid.VALID);
    return true;
  };

  const checkJointApplicantAgeStatus2 = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage2("This field is required");
      setJointApplicantAgeValid(valid.INVALID);
      return false;
    }
    if (originAmount < 18) {
      setValidMessage2("Value must be greater than or equal to 18");
      setJointApplicantAgeValid(valid.INVALID);
      return false;
    }
    if (originAmount > 100) {
      setValidMessage2("Value should be less that 100");
      setJointApplicantAgeValid(valid.INVALID);
      return false;
    }
    setJointApplicantAgeValid(valid.VALID);
    return true;
  };

  const onKeyUp = (e, name) => {
    const valueConverted = formatCurrency(e.target.value);
    e.target.value = valueConverted;
    switch (name) {
      case "soleApplicantAge":
        setSoleApplicantAge(valueConverted);
        break;
      case "jointApplicantAge":
        setJointApplicantAge(valueConverted);
        break;
      default:
        break;
    }
  };

  const onBlur = (e, name) => {
    switch (name) {
      case "soleApplicantAge":
        checkSoleApplicantAgeStatus(e.target.value);
        break;
      case "jointApplicantAge":
        checkJointApplicantAgeStatus2(e.target.value);
        break;
      default:
        break;
    }
  };
  const onFocus = (name) => {
    switch (name) {
      case "soleApplicantAge":
        setSoleApplicantAgeValid(valid.NON_VALID);
        break;
      case "jointApplicantAge":
        setJointApplicantAgeValid(valid.NON_VALID);
        break;
      default:
        break;
    }
  };
  const step7 = {
    id: 7,
    question: `What is the age of the applicant?`,
    answer: soleApplicantAge,
    answer2: jointApplicantAge,
    skip: "",
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 7);

  const nextStep = () => {
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 7 ? step7 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step7])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-08`,
    });
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkSoleApplicantAgeStatus(soleApplicantAge);
    checkJointApplicantAgeStatus2(jointApplicantAge);
    if (typesApplication === types[1]) {
      if (checkSoleApplicantAgeStatus(soleApplicantAge)) {
        if (!showLoading) {
          setTimeout(function () {
            nextStep();
          }, 500);
        }
      }
    }
    if (typesApplication === types[2]) {
      if (checkJointApplicantAgeStatus2(jointApplicantAge)) {
        if (!showLoading) {
          setTimeout(function () {
            nextStep();
          }, 500);
        }
      }
    }
  };

  useMemo(() => {
    localStorage.setItem("soleApplicantAge", soleApplicantAge);
    // eslint-disable-next-line
  }, [soleApplicantAge]);

  useMemo(() => {
    localStorage.setItem("jointApplicantAge", jointApplicantAge);
    // eslint-disable-next-line
  }, [jointApplicantAge]);

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    history.push({
      pathname: `/refinance-fact-find/step-08`,
    });
    const skipStep7 = {
      id: 7,
      question: "What is the age of the applicant?",
      answer: soleApplicantAge,
      answer2: jointApplicantAge,
      skip: "Skipped",
    };
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 7 ? skipStep7 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep7])
      );
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={7}>
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
                <h2 className="mb-4">7. What is the age of the applicant?</h2>
              </Col>
              {typesApplication === types[1] ? (
                <Col xs={12}>
                  <Row className="info-customer">
                    <Col xs={12}>
                      <InputCustom2
                        onChange={(e) => onKeyUp(e, "soleApplicantAge")}
                        label="Sole Applicant Age"
                        value={soleApplicantAge}
                        type="text"
                        id="email-input"
                        customClassLabel={soleApplicantAge ? "active" : ""}
                        maxLength="3"
                        customClassWrap="email"
                        onBlur={(e) => onBlur(e, "soleApplicantAge")}
                        onFocus={() => onFocus("soleApplicantAge")}
                      />
                    </Col>
                  </Row>
                  {soleApplicantAgeValid === valid.INVALID && (
                    <div className="text-error mb-3">
                      <p>{validMessage}</p>
                    </div>
                  )}
                </Col>
              ) : (
                ""
              )}
              {typesApplication === types[2] ? (
                <Col xs={12}>
                  <Row className="info-customer">
                    <Col xs={12}>
                      <InputCustom2
                        onChange={(e) => onKeyUp(e, "jointApplicantAge")}
                        label="Joint Applicant Age"
                        value={jointApplicantAge}
                        type="text"
                        id="email-input"
                        customClassLabel={jointApplicantAge ? "active" : ""}
                        maxLength="3"
                        customClassWrap="email"
                        onBlur={(e) => onBlur(e, "jointApplicantAge")}
                        onFocus={() => onFocus("jointApplicantAge")}
                      />
                    </Col>
                  </Row>
                  {jointApplicantAgeValid === valid.INVALID && (
                    <div className="text-error">
                      <p>{validMessage2}</p>
                    </div>
                  )}
                </Col>
              ) : (
                ""
              )}

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

export default Step02;
