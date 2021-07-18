/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import formatCurrency from "../../../utils/formatCurrency";
import ChillApplicantAge from "./Components/ChillApplicantAge";

const Step13 = () => {
  const [otherChillApplicantAge, setOtherChillApplicantAge] = useState(
    localStorage.getItem("otherChillApplicantAge")
      ? JSON.parse(localStorage.getItem("otherChillApplicantAge"))
      : {}
  );
  const childrenNumber = localStorage.getItem("childrenNumber") || 4;
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [otherChillApplicantAgeValid, setOtherChillApplicantAgeValid] =
    useState({});

  const [validMessage, setValidMessage] = useState({});

  const checkOtherChillApplicantAgeStatus = (amount, name) => {
    const originAmount = amount && Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage({
        ...validMessage,
        [name]: "This field is required",
      });
      setOtherChillApplicantAgeValid({
        ...otherChillApplicantAgeValid,
        [name]: valid.INVALID,
      });
      return false;
    }

    if (originAmount > 100) {
      setValidMessage({
        ...validMessage,
        [name]: "Value should be less that 100",
      });
      setOtherChillApplicantAgeValid({
        ...otherChillApplicantAgeValid,
        [name]: valid.INVALID,
      });
      return false;
    }
    setValidMessage({
      ...validMessage,
      [name]: "",
    });
    setOtherChillApplicantAgeValid({
      ...otherChillApplicantAgeValid,
      [name]: valid.VALID,
    });

    return true;
  };

  const onKeyUp = (e, name) => {
    const valueConverted = formatCurrency(e?.target?.value);
    setOtherChillApplicantAge({
      ...otherChillApplicantAge,
      [name]: valueConverted,
    });
  };

  const onBlur = (e, name) => {
    checkOtherChillApplicantAgeStatus(e?.target?.value || "", name);
  };

  const onFocus = (name) => {
    setOtherChillApplicantAgeValid({
      ...otherChillApplicantAgeValid,
      [name]: valid.NON_VALID,
    });
  };

  const nextStep = () => {
    window.localStorage.setItem(
      "otherChillApplicantAge",
      JSON.stringify(otherChillApplicantAge)
    );
    history.push({
      pathname: `/refinance-fact-find/step-11`,
    });
  };

  const finAgeValid =
    otherChillApplicantAge && Object.values(otherChillApplicantAge);
  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (!showLoading && finAgeValid?.length === parseInt(childrenNumber, 10)) {
      setTimeout(function () {
        nextStep();
      }, 500);
      return;
    }
    if (finAgeValid?.length === 0) {
      setValidMessage({
        ...validMessage,
        name1: "This field is required",
        name2: "This field is required",
        name3: "This field is required",
        name4: "This field is required",
        name5: "This field is required",
      });
      setOtherChillApplicantAgeValid({
        ...otherChillApplicantAgeValid,
        name1: valid.INVALID,
        name2: valid.INVALID,
        name3: valid.INVALID,
        name4: valid.INVALID,
        name5: valid.INVALID,
      });
    }
  };

  const renderListotherChillApplicantAge = () => {
    const listotherChillApplicantAge = [];
    for (let i = 1; i <= parseInt(childrenNumber, 10); i += 1) {
      listotherChillApplicantAge.push(
        <ChillApplicantAge
          key={i}
          numberKey={i}
          onKeyUp={(e) => onKeyUp(e, `name${i}`)}
          onBlur={(e) => onBlur(e, `name${i}`)}
          onFocus={() => onFocus(`name${i}`)}
          chillApplicantAgeValid={otherChillApplicantAgeValid[`name${i}`]}
          validMessage={validMessage[`name${i}`]}
          valueItem={otherChillApplicantAge[`name${i}`]}
          id={`name${i}`}
        />
      );
    }
    return listotherChillApplicantAge;
  };

  return (
    <LifeInsurance isShowHeader>
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
                <h2 className="mb-5">
                  13. What are the age of these other dependants?
                </h2>
              </Col>
              {renderListotherChillApplicantAge()}
              <Col xs={12} className="fadeInDown wow  mt-4">
                <div className="group-btn-footer col d-flex justify-content-center">
                  <Button
                    className="btnPrimary life wow fadeInUp mt-0 back"
                    type="next"
                    onClick={onClickNext}
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
                <div className="SKIP">SKIP</div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default Step13;
