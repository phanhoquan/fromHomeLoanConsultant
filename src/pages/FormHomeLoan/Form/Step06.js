/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import useOnClickOutside from "../../../hooks/useClickOutSide";

const listHomeLoan = ["Spouse", "Defacto", "Sibling", "Parent", "Offspring"];

const Step06 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const relationshipYourRef = useRef(null);
  const wrapperInfoRef = useRef();
  const firstNameOther = localStorage.getItem("firstNameOther");

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [relationshipYour, setRelationshipYour] = useState(
    localStorage.getItem("relationshipYour") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [relationshipYourValid, setRelationshipYourValid] = useState(
    valid.NON_VALID
  );

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const checkRelationshipYourStatus = (value) => {
    const test = listHomeLoan.includes(value);
    setRelationshipYourValid(Number(test));
    setIsShowModal(false);
    return test;
  };
  
  const finDataStep = listDataSubmit.find((item) => item.id === 6);

  const nextStep = (value) => {
    window.localStorage.setItem("relationshipYour", value);
    const step6 = {
      id: 6,
      question: `What is your relationship with ${firstNameOther}`,
      answer: value,
      skip: "",
    };
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 6 ? step6 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step6])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-07`,
    });
  };
  const onClickSelect = (value) => {
    setRelationshipYour(value);
    setRelationshipYourValid(valid.NON_VALID);
    setIsShowModal(false);
    window.localStorage.setItem("relationshipYour", value);
    setTimeout(() => {
      nextStep(value);
    }, 500);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkRelationshipYourStatus(relationshipYour);
    if (checkRelationshipYourStatus(relationshipYour)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(relationshipYour);
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
    history.push({
      pathname: `/refinance-fact-find/step-07`,
    });
    const skipStep6 = {
      id: 6,
      question: `What is your relationship with ${firstNameOther}`,
      answer: relationshipYour,
      skip: "Skipped",
    };
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 6 ? skipStep6 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep6])
      );
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={6}>
      <section
        className={`formContent-step-second formContent-life-insurance ${
          isShowModal ? "mb-10" : "mb-2"
        }`}
      >
        <Container>
          <div
            className={
              "wForm wow " +
              (history?.location?.back ? "fadeInDown" : "fadeInUp")
            }
          >
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">
                  6. What is your relationship with {firstNameOther}
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col
                    xs={12}
                    className="wForm-input pl-0 bankProviders"
                    ref={wrapperInfoRef}
                  >
                    <InputCustom2
                      onFocus={() => {
                        setIsShowModal(true);
                        setRelationshipYourValid(valid.NON_VALID);
                      }}
                      onKeyPress={onKeyDown}
                      onChange={() => () => {}}
                      label="Select your relationship with the applicant"
                      value={relationshipYour}
                      id="price-input"
                      customClassLabel={relationshipYour ? "active" : ""}
                      iconArrow
                      customClassWrap="email five"
                      innerRef={relationshipYourRef}
                      readOnly
                    />
                    <ul
                      className={`list-occupation ${
                        isShowModal ? "d-block" : "d-none"
                      }`}
                    >
                      {listHomeLoan &&
                        listHomeLoan.map((name, index) => (
                          <li
                            key={index + 1}
                            onClick={() => onClickSelect(name)}
                            className={
                              relationshipYour === name ? "active" : ""
                            }
                          >
                            {name}
                          </li>
                        ))}
                    </ul>
                  </Col>
                </Row>
                {relationshipYourValid === valid.INVALID && (
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

export default Step06;
