/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputNumber from "../../../../Components/InputNumber";

export const types = {
  1: "YES",
  2: "NO",
};

const Step40 = ({ handleGetLoan2value }) => {
  const rentalPropertyIncomeRef = useRef(null);

  const [rentalPropertyIncome, setRentalPropertyIncome] = useState(
    localStorage.getItem("rentalPropertyIncome") || ""
  );
  const [rentalPropertyIncomeValid, setRentalPropertyIncomeValid] = useState(
    valid.NON_VALID
  );

  const checkRentalPropertyIncomeStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setRentalPropertyIncomeValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value) => {
    setRentalPropertyIncome(value);
  };

  useMemo(() => {
    window.localStorage.setItem(
      "rentalPropertyIncome",
      rentalPropertyIncome &&
        parseInt(rentalPropertyIncome.replace(/,/g, ""), 10)
    );
  }, [rentalPropertyIncome]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center mt-0">
              <h2 className="mb-3">
                41. How much rental income do you have on this property?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={12} className="wForm-input pl-0">
                  <InputNumber
                    inputMode="numeric"
                    options={{
                      numericOnly: true,
                      numeral: true,
                      numeralDecimalMark: "",
                      delimiter: ",",
                      numeralThousandsGroupStyle: "thousand",
                    }}
                    onFocus={() =>
                      setRentalPropertyIncomeValid(valid.NON_VALID)
                    }
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "rentalPropertyIncome")
                    }
                    label="E.G. $10,000"
                    value={rentalPropertyIncome}
                    id="rentalPropertyIncome"
                    customClassLabel={rentalPropertyIncome ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={rentalPropertyIncomeRef}
                    onBlur={() => {
                      checkRentalPropertyIncomeStatus(rentalPropertyIncome);
                      handleGetLoan2value(
                        "rentalPropertyIncome",
                        rentalPropertyIncome
                      );
                    }}
                  />
                </Col>
              </Row>
              {rentalPropertyIncomeValid === valid.INVALID && (
                <div className="text-error">
                  <p>Value should be in between $0 - $10,000,000</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step40;
