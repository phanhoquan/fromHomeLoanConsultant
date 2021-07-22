/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import formatCurrency from "../../../utils/formatCurrency";
import ChillApplicantAge from "./Components/ChillApplicantAge";

const Step10 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const [chillApplicantAge, setChillApplicantAge] = useState(
    localStorage.getItem("chillApplicantAge")
      ? JSON.parse(localStorage.getItem("chillApplicantAge"))
      : {}
  );
  const childrenNumber = localStorage.getItem("childrenNumber") || 1;
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [chillApplicantAgeValid, setChillApplicantAgeValid] = useState({});
  const [validMessage, setValidMessage] = useState({});

  const checkChillApplicantAgeStatus = (amount, name) => {
    const originAmount = amount && Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage({
        ...validMessage,
        [name]: "This field is required",
      });
      setChillApplicantAgeValid({
        ...chillApplicantAgeValid,
        [name]: valid.INVALID,
      });
      return false;
    }

    if (originAmount > 100) {
      setValidMessage({
        ...validMessage,
        [name]: "Value should be less that 100",
      });
      setChillApplicantAgeValid({
        ...chillApplicantAgeValid,
        [name]: valid.INVALID,
      });
      return false;
    }
    setValidMessage({
      ...validMessage,
      [name]: "",
    });
    setChillApplicantAgeValid({
      ...chillApplicantAgeValid,
      [name]: valid.VALID,
    });

    return true;
  };

  const onKeyUp = (e, name) => {
    const valueConverted = formatCurrency(e?.target?.value);
    setChillApplicantAge({
      ...chillApplicantAge,
      [name]: valueConverted,
    });
  };

  const onBlur = (e, name) => {
    checkChillApplicantAgeStatus(e?.target?.value || "", name);
  };

  const onFocus = (name) => {
    setChillApplicantAgeValid({
      ...chillApplicantAgeValid,
      [name]: valid.NON_VALID,
    });
  };
  const finAgeValid = chillApplicantAge && Object.values(chillApplicantAge);
  const step10 = {
    id: 10,
    question: `What are the age of these kids/dependants`,
    answer: finAgeValid && finAgeValid.join("/"),
    skip: "",
  };

  const finDataStep = listDataSubmit.find((item) => item.id === 10);
  const nextStep = () => {
    window.localStorage.setItem(
      "chillApplicantAge",
      JSON.stringify(chillApplicantAge)
    );
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 10 ? step10 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step10])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-11`,
    });
  };

  const onClickNext = () => {
    window.localStorage.setItem(
      "chillApplicantAge",
      JSON.stringify(chillApplicantAge)
    );
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
        name6: "This field is required",
        name7: "This field is required",
        name8: "This field is required",
        name9: "This field is required",
        name10: "This field is required",
      });
      setChillApplicantAgeValid({
        ...chillApplicantAgeValid,
        name1: valid.INVALID,
        name2: valid.INVALID,
        name3: valid.INVALID,
        name4: valid.INVALID,
        name5: valid.INVALID,
        name6: valid.INVALID,
        name7: valid.INVALID,
        name8: valid.INVALID,
        name9: valid.INVALID,
        name10: valid.INVALID,
      });
    }
  };

  const renderListChillApplicantAge = () => {
    const listChillApplicantAge = [];
    for (let i = 1; i <= parseInt(childrenNumber, 10); i += 1) {
      listChillApplicantAge.push(
        <ChillApplicantAge
          key={i}
          numberKey={i}
          onKeyUp={(e) => onKeyUp(e, `name${i}`)}
          onBlur={(e) => onBlur(e, `name${i}`)}
          onFocus={() => onFocus(`name${i}`)}
          chillApplicantAgeValid={chillApplicantAgeValid[`name${i}`]}
          validMessage={validMessage[`name${i}`]}
          valueItem={chillApplicantAge[`name${i}`]}
          id={`name${i}`}
        />
      );
    }
    return listChillApplicantAge;
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const skipStep10 = {
    id: 10,
    question: "What are the age of these kids/dependants",
    answer: finAgeValid && finAgeValid.join("/"),
    skip: !finAgeValid.join("/") && "Skipped",
  };
  const handleSkip = () => {
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 10 ? skipStep10 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep10])
      );
    }

    history.push({
      pathname: `/refinance-fact-find/step-11`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={10} numberScroll={530}>
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
                  10. What are the age of these kids\dependants?
                </h2>
              </Col>
              {renderListChillApplicantAge()}
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

export default Step10;
