/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { CheckboxButton } from "../../../Components/CheckBox3";
import LifeInsurance from "../index";

export const types = {
  1: "Personal Loans",
  2: "Car Loans",
  3: "HECS debt",
  4: "None of the above",
};

const Step26 = () => {
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
    let test =
      option && option.length > 0 && Object.values(types).includes(option[0]);
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

  const finDataStep = listDataSubmit.find((item) => item.id === 26);

  const nextStep = (option) => {
    window.localStorage.setItem("personalLoansStatus", option);
    const step26 = {
      id: 26,
      question:
        "Are you currently paying off any personal loans, \n car loans or HECS debt?",
      answer: option.toString(),
      skip: "",
    };
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
    if (option?.length === 1 && !!option?.includes(types[1])) {
      history.push({
        pathname: `/refinance-fact-find/step-27a`,
      });
    } else if (option?.length === 1 && !!option?.includes(types[2])) {
      history.push({
        pathname: `/refinance-fact-find/step-27b`,
      });
    } else if (option?.length === 1 && !!option?.includes(types[3])) {
      history.push({
        pathname: `/refinance-fact-find/step-27c`,
      });
    } else if (option?.length > 1) {
      history.push({
        pathname: `/refinance-fact-find/step-27`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-28`,
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
    const skipStep26 = {
      id: 26,
      question:
        "Are you currently paying off any personal loans, \n car loans or HECS debt?",
      answer: personalLoansStatus.toString(),
      skip: !personalLoansStatus.toString() && "Skipped",
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

    if (
      personalLoansStatus?.length === 1 &&
      !!personalLoansStatus?.includes(types[1])
    ) {
      history.push({
        pathname: `/refinance-fact-find/step-27a`,
      });
    } else if (
      personalLoansStatus?.length === 1 &&
      !!personalLoansStatus?.includes(types[2])
    ) {
      history.push({
        pathname: `/refinance-fact-find/step-27b`,
      });
    } else if (
      personalLoansStatus?.length === 1 &&
      !!personalLoansStatus?.includes(types[3])
    ) {
      history.push({
        pathname: `/refinance-fact-find/step-27c`,
      });
    } else if (personalLoansStatus?.length > 1) {
      history.push({
        pathname: `/refinance-fact-find/step-27`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-28`,
      });
    }
  };
  console.log(
    personalLoansStatus?.length === 1,
    !!personalLoansStatus?.includes(types[2])
  );
  console.log(personalLoansStatus, "personalLoansStatus");
  return (
    <LifeInsurance isShowHeader activeStep={26} numberScroll={1750}>
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
                  26. Are you currently paying off any personal loans, <br />
                  car loans or HECS debt?
                </h2>
                <p style={{ fontFamily: "Lato", color: "red" }}>
                  Select multiple options that apply.
                </p>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 w-600">
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      handleToggleCheckbox={() => onCheck(types[1])}
                      checkBox={!!personalLoansStatus?.includes(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      handleToggleCheckbox={() => onCheck(types[2])}
                      checkBox={!!personalLoansStatus?.includes(types[2])}
                      name={types[2]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
                    <CheckboxButton
                      handleToggleCheckbox={() => onCheck(types[3])}
                      checkBox={!!personalLoansStatus?.includes(types[3])}
                      name={types[3]}
                    />
                  </Col>
                  <Col xs={12} sm={6} className="wForm-input">
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

export default Step26;
