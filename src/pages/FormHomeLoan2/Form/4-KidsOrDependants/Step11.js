/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import formatCurrency from "../../../../utils/formatCurrency";
import ChillApplicantAge from "../Components/ChillApplicantAge";
import iconPlus from "../../../../images/iconPlus.png";
import iconClose from "../../../../images/minus.png";

export const types = {
  1: "YES",
  2: "NO",
};

const Step11 = ({ handleGetLoan2value, otherDependents }) => {
  const [otherChillApplicantAge, setOtherChillApplicantAge] = useState(
    localStorage.getItem("loan2otherChillApplicantAge")
      ? JSON.parse(localStorage.getItem("loan2otherChillApplicantAge"))
      : null
  );
  const [childrenNumber, setChildrenNumber] = useState(2);

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
      "loan2otherChillApplicantAge",
      JSON.stringify(otherChillApplicantAge)
    );
    if (finAgeValid?.length === 0) {
      setValidMessage({
        ...validMessage,
        otherName1: "This field is required",
        otherName2: "This field is required",
        otherName3: "This field is required",
        otherName4: "This field is required",
        otherName5: "This field is required",
      });
      setOtherChillApplicantAgeValid({
        ...otherChillApplicantAgeValid,
        otherName1: valid.INVALID,
        otherName2: valid.INVALID,
        otherName3: valid.INVALID,
        otherName4: valid.INVALID,
        otherName5: valid.INVALID,
      });
    }
  };

  const onFocus = (name) => {
    setOtherChillApplicantAgeValid({
      ...otherChillApplicantAgeValid,
      [name]: valid.NON_VALID,
    });
    setValidMessage({
      ...validMessage,
      childrenNumber: "",
    });
  };

  const renderListOtherChillApplicantAge = () => {
    const listOtherChillApplicantAge = [];
    for (let i = 1; i <= parseInt(childrenNumber, 10); i += 1) {
      listOtherChillApplicantAge.push(
        <ChillApplicantAge
          key={i}
          numberKey={i}
          onKeyUp={(e) => onKeyUp(e, `otherName${i}`)}
          onBlur={(e) => onBlur(e, `otherName${i}`)}
          onFocus={() => onFocus(`otherName${i}`)}
          chillApplicantAgeValid={otherChillApplicantAgeValid[`otherName${i}`]}
          validMessage={validMessage[`otherName${i}`]}
          valueItem={
            otherChillApplicantAge && otherChillApplicantAge[`otherName${i}`]
          }
          id={`otherName${i}`}
        />
      );
    }
    return listOtherChillApplicantAge;
  };

  const handlePlusItem = () => {
    if (childrenNumber <= 4) {
      setChildrenNumber(childrenNumber + 1);
      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });
    } else {
      setValidMessage({
        ...validMessage,
        childrenNumber: "Value must be less than or equal to 10",
      });
    }
  };

  const handleRemoveItem = () => {
    if (childrenNumber >= 2) {
      setChildrenNumber(childrenNumber - 1);
      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });
      setOtherChillApplicantAge({
        ...otherChillApplicantAge,
        [`otherName${childrenNumber}`]: "",
      });
    } else {
      setValidMessage({
        ...validMessage,
        childrenNumber: "Value must be greater than or equal to 1",
      });
    }
  };

  useMemo(() => {
    window.localStorage.setItem(
      "loan2otherChillApplicantAge",
      JSON.stringify(otherChillApplicantAge)
    );
    window.localStorage.setItem(
      "loan2otherChildrenNumber",
      finAgeValid?.length
    );

    handleGetLoan2value("otherChillApplicantAge", finAgeValid);
    // eslint-disable-next-line
  }, [otherChillApplicantAge]);

  useMemo(() => {
    setOtherChillApplicantAgeValid({
      ...otherChillApplicantAgeValid,
      otherName1: valid.NON_VALID,
      otherName2: valid.NON_VALID,
      otherName3: valid.NON_VALID,
      otherName4: valid.NON_VALID,
      otherName5: valid.NON_VALID,
    });
    window.localStorage.setItem(
      "loan2otherChillApplicantAge",
      JSON.stringify({})
    );
    window.localStorage.setItem("loan2otherChildrenNumber", 0);
    handleGetLoan2value("otherChillApplicantAge", []);
    setOtherChillApplicantAge({});
    setChildrenNumber(2);
    // eslint-disable-next-line
  }, [otherDependents]);

  return (
    <section
      className={`formContent-step-first mb-5 pb-5 ${
        otherDependents !== types[1] ? "opacity-03" : ""
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-5">
                11. What are the age of these other dependants?
              </h2>
            </Col>
            <Row className="info-customer position-relative w-100">
              {renderListOtherChillApplicantAge()}
              <div className="group-action">
                <div
                  className="btn-plus mr-2"
                  onClick={() => handlePlusItem()}
                  role="button"
                  tabIndex="0"
                >
                  <img src={iconPlus} alt="" title="Add" />
                </div>

                <div
                  className={`btn-plus ml-3 ${
                    childrenNumber <= 1 ? "opacity-03" : ""
                  }`}
                  onClick={() => handleRemoveItem()}
                  role="button"
                  tabIndex="0"
                >
                  <img src={iconClose} alt="" title="Remove" />
                </div>
              </div>
            </Row>
            <Col xs={12} className="text-center">
              {validMessage?.childrenNumber ? (
                <div className="text-error">
                  <p>{validMessage?.childrenNumber}</p>
                </div>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step11;
