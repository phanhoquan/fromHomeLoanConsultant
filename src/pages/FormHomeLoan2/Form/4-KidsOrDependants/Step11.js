/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import formatCurrency from "../../../../utils/formatCurrency";
import ChillApplicantAge from "../Components/ChillApplicantAge";

const Step11 = () => {
  const [otherChillApplicantAge, setOtherChillApplicantAge] = useState(
    localStorage.getItem("otherChillApplicantAge")
      ? JSON.parse(localStorage.getItem("otherChillApplicantAge"))
      : {}
  );
  const otherChildrenNumber = localStorage.getItem("otherChildrenNumber") || 4;

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
  const finAgeValid =
    otherChillApplicantAge && Object.values(otherChillApplicantAge);

  const onBlur = (e, name) => {
    checkOtherChillApplicantAgeStatus(e?.target?.value || "", name);
    window.localStorage.setItem(
      "otherChillApplicantAge",
      JSON.stringify(otherChillApplicantAge)
    );
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

  const onFocus = (name) => {
    setOtherChillApplicantAgeValid({
      ...otherChillApplicantAgeValid,
      [name]: valid.NON_VALID,
    });
  };

  const renderlistOtherChillApplicantAge = () => {
    const listOtherChillApplicantAge = [];
    for (let i = 1; i <= parseInt(otherChildrenNumber, 10); i += 1) {
      listOtherChillApplicantAge.push(
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
    return listOtherChillApplicantAge;
  };

  return (
    <section className="formContent-step-first pb-5">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-5">
                11. What are the age of these other dependants?
              </h2>
            </Col>
            <Row className="info-customer">
              {renderlistOtherChillApplicantAge()}
            </Row>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step11;
