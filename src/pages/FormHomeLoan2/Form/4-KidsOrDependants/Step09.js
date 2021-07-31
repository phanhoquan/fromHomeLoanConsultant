/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import formatCurrency from "../../../../utils/formatCurrency";
import ChillApplicantAge from "../Components/ChillApplicantAge";

const Step09 = () => {
  const [chillApplicantAge, setChillApplicantAge] = useState(
    localStorage.getItem("chillApplicantAge")
      ? JSON.parse(localStorage.getItem("chillApplicantAge"))
      : {}
  );

  const childrenNumber = localStorage.getItem("childrenNumber") || 2;
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
  const finAgeValid = chillApplicantAge && Object.values(chillApplicantAge);
  const onBlur = (e, name) => {
    checkChillApplicantAgeStatus(e?.target?.value || "", name);
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

  const onFocus = (name) => {
    setChillApplicantAgeValid({
      ...chillApplicantAgeValid,
      [name]: valid.NON_VALID,
    });
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

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-5">
                9. What are the age of these kids\dependants?
              </h2>
            </Col>
            <Row className="info-customer">{renderListChillApplicantAge()}</Row>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step09;
