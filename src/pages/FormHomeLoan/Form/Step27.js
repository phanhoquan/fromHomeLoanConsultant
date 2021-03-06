/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep27 } from "../../../utils/listLocalStorage";
import LifeInsurance from "../index";

export const types = {
  1: "Personal Loans",
  2: "Car Loans",
  3: "HECS debt",
  4: "None of the above",
};

const Step27 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [personalLoansStatus, setPersonalLoansStatus] = useState(
    localStorage.getItem("personalLoansStatus")
      ? localStorage.getItem("personalLoansStatus").split(",")
      : []
  );

  const [personalLoansStatusValid, setPersonalLoansStatusValid] = useState(
    valid.NON_VALID
  );

  const checkStatusValid = (option) => {
    let test = option && option.length > 0;
    setPersonalLoansStatusValid(Number(test));
    return test;
  };

  const onCheck = (id) => {
    setPersonalLoansStatusValid(valid.NON_VALID);
    let dataSubmit = [];
    if (id !== types[4]) {
      if (personalLoansStatus.includes(id)) {
        dataSubmit = personalLoansStatus.filter((item) => item !== id);
      } else {
        dataSubmit = [...personalLoansStatus, id];
      }
      const dataUpdate = dataSubmit.filter((item) => item !== types[4]);
      setPersonalLoansStatus(dataUpdate);
    } else {
      if (personalLoansStatus.includes(id)) {
        dataSubmit = personalLoansStatus.filter((item) => item !== id);
      } else {
        dataSubmit = [id];
      }
      setPersonalLoansStatus(dataSubmit);
    }
  };

  const finDataStep = listDataSubmit.find((item) => item.id === 27);

  const nextStep = (option) => {
    const step27 = {
      id: 27,
      question:
        "Are you currently paying off any personal loans, car loans or HECS debt?",
      answer: option.toString(),
      skip: "",
    };
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

    if (localStorage.getItem("personalLoansStatus") !== option.toString()) {
      currentStep(27, itemStep27);
    }

    window.localStorage.setItem("personalLoansStatus", option);

    if (option?.length === 1 && !!option?.includes(types[1])) {
      history.push({
        pathname: `/refinance-fact-find/step-28a`,
      });
    } else if (option?.length === 1 && !!option?.includes(types[2])) {
      history.push({
        pathname: `/refinance-fact-find/step-28b`,
      });
    } else if (option?.length === 1 && !!option?.includes(types[3])) {
      history.push({
        pathname: `/refinance-fact-find/step-28c`,
      });
    } else if (option?.length > 1) {
      history.push({
        pathname: `/refinance-fact-find/step-28`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-29`,
      });
    }
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkStatusValid(personalLoansStatus);
    setTimeout(() => setShowLoading(false), 500);

    if (checkStatusValid(personalLoansStatus)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(personalLoansStatus);
        }, 500);
      }
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep27 = {
      id: 27,
      question:
        "Are you currently paying off any personal loans, car loans or HECS debt?",
      answer: personalLoansStatus.toString(),
      skip: !personalLoansStatus.toString() && "Skipped",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 27 ? skipStep27 : item
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

    if (
      personalLoansStatus?.length === 1 &&
      !!personalLoansStatus?.includes(types[1])
    ) {
      history.push({
        pathname: `/refinance-fact-find/step-28a`,
      });
    } else if (
      personalLoansStatus?.length === 1 &&
      !!personalLoansStatus?.includes(types[2])
    ) {
      history.push({
        pathname: `/refinance-fact-find/step-28b`,
      });
    } else if (
      personalLoansStatus?.length === 1 &&
      !!personalLoansStatus?.includes(types[3])
    ) {
      history.push({
        pathname: `/refinance-fact-find/step-28c`,
      });
    } else if (personalLoansStatus?.length > 1) {
      history.push({
        pathname: `/refinance-fact-find/step-28`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-29`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={27} numberScroll={1750}>
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
                <h2 className="mb-2">
                  27. Are you currently paying off any personal loans, <br />
                  car loans or HECS debt?
                </h2>
                <p style={{ fontFamily: "Lato", color: "red" }}>
                  Select multiple options that apply.
                </p>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 w-600">
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      handleToggleCheckbox={() => onCheck(types[1])}
                      checkBox={!!personalLoansStatus?.includes(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      handleToggleCheckbox={() => onCheck(types[2])}
                      checkBox={!!personalLoansStatus?.includes(types[2])}
                      name={types[2]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      handleToggleCheckbox={() => onCheck(types[3])}
                      checkBox={!!personalLoansStatus?.includes(types[3])}
                      name={types[3]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      name={types[4]}
                      handleToggleCheckbox={() => onCheck(types[4])}
                      checkBox={!!personalLoansStatus?.includes(types[4])}
                    />
                  </Col>
                </Row>
                {personalLoansStatusValid === valid.INVALID && (
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

export default Step27;
