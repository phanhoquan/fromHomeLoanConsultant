/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import formatCurrency from "../../../../utils/formatCurrency";

export const types = {
  1: "Fixed",
  2: "Variable",
  3: "Split",
};

const Step03 = ({ loan2currentLoanStatus }) => {
  let listDataSubmit = localStorage.getItem("loan2listDataSubmit")
    ? JSON.parse(localStorage.getItem("loan2listDataSubmit"))
    : [];
  const [valueInterestRate2, setValueInterestRate2] = useState(
    localStorage.getItem("valueInterestRate2") || ""
  );

  const [valueInterestRateValid2, setValueInterestRateValid2] = useState(
    valid.NON_VALID
  );
  const [validMessage2, setValidMessage2] = useState("This field is required");

  const checkValueInterestRateStatus2 = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage2("This field is required");
      setValueInterestRateValid2(valid.INVALID);
      return false;
    }

    if (originAmount > 100) {
      setValidMessage2("Value should be less that 100%");
      setValueInterestRateValid2(valid.INVALID);
      return false;
    }
    setValueInterestRateValid2(valid.VALID);
    return true;
  };

  const onKeyUp = (e, name) => {
    const valueConverted = formatCurrency(e.target.value);
    e.target.value = valueConverted;
    setValueInterestRate2(valueConverted);
  };

  const onBlur = (e) => {
    checkValueInterestRateStatus2(e.target.value);
  };

  const onFocus = () => {
    setValueInterestRateValid2(valid.NON_VALID);
  };

  const step3 = {
    id: 3,
    question:
      " 3. What is the current interest rate you are paying on your loan?",
  };
  const finDataStep3 = listDataSubmit?.find((item) => item.id === 3);
  // const finDataStep3Remove = listDataSubmit?.filter((item) => item.id !== 3);
  const updateDataStep3 = listDataSubmit?.map((item) =>
    item.id === 3 ? step3 : item
  );

  useMemo(() => {
    localStorage.setItem("valueInterestRate2", valueInterestRate2);
    if (valueInterestRate2) {
      if (finDataStep3) {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify(updateDataStep3)
        );
      } else {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify([...listDataSubmit, step3])
        );
      }
    }
    // else {
    //   window.localStorage.setItem(
    //     "loan2listDataSubmit",
    //     finDataStep3Remove
    //       ? JSON.stringify(finDataStep3Remove)
    //       : JSON.stringify([])
    //   );
    // }
    // eslint-disable-next-line
  }, [valueInterestRate2]);

  useMemo(() => {
    setValueInterestRateValid2(valid.NON_VALID);
    setValueInterestRate2("");
    // eslint-disable-next-line
  }, [loan2currentLoanStatus]);

  return (
    <section
      className={`formContent-step-first ${
        loan2currentLoanStatus !== types[2] ? "opacity-03" : ""
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                3. What is the current interest rate you are <br />
                paying on your loan?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer">
                <Col xs={12}>
                  <InputCustom2
                    onChange={(e) => onKeyUp(e)}
                    label="Variable interest rate"
                    value={valueInterestRate2}
                    type="text"
                    id="email-input"
                    customClassLabel={valueInterestRate2 ? "active" : ""}
                    iconRate
                    maxLength="5"
                    customClassWrap="email"
                    onBlur={(e) => onBlur(e)}
                    onFocus={() => onFocus()}
                  />
                </Col>
              </Row>
              {valueInterestRateValid2 === valid.INVALID && (
                <div className="text-error">
                  <p>{validMessage2}</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step03;
