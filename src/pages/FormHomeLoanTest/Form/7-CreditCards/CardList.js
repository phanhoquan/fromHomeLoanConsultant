/** @format */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import InputNumber from "../../../../Components/InputNumber";

import iconPlus from "../../../../images/iconPlus.png";
import iconClose from "../../../../images/minus.png";

const CardList = ({
    indexItem=1,
    valueCreditCardValid,
    handleSetValueCreditCardValid,
    onKeyUpHandle,
    valueCreditCard, 
    checkValueCreditCardStatus,
    valueCreditCardAmount,
    checkValueCreditCardAmountStatus,
    valueCreditCardAmountValid,
    handlePlusItem,
    handleRemoveItem,
    childrenNumber
}) => {
  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                What institution is the credit card #{indexItem} with ans what is the limit?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3 position-relative">
                <Col xs={6} className="wForm-input pl-0">
                  <InputCustom2
                    onFocus={() => handleSetValueCreditCardValid(valid.NON_VALID, `valueCreditCard35${indexItem}`)}
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, `valueCreditCard35${indexItem}`)
                    }
                    label="Institution Name"
                    value={
                      valueCreditCard &&
                      valueCreditCard[0].toUpperCase() +
                        valueCreditCard.slice(1)
                    }
                    id={`valueCreditCard35${indexItem}`}
                    customClassLabel={valueCreditCard ? "active" : ""}
                    customClassWrap="email five"
                    onBlur={() => {
                      checkValueCreditCardStatus(valueCreditCard, `valueCreditCard35${indexItem}`);
                    }}
                  />
                </Col>
                <Col xs={6} className="wForm-input pl-0">
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
                        handleSetValueCreditCardValid(valid.NON_VALID, `valueCreditCard35Amount${indexItem}`)
                    }
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, `valueCreditCard35Amount${indexItem}`)
                    }
                    label="Limit"
                    value={valueCreditCardAmount}
                    id={`valueCreditCard35Amount${indexItem}`}
                    customClassLabel={valueCreditCardAmount ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    onBlur={() => {
                      checkValueCreditCardAmountStatus(valueCreditCardAmount, `valueCreditCard35Amount${indexItem}`);
                    }}
                  />
                </Col>
                {indexItem ===1 ? (
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
                ):''}
                
              </Row>
              {valueCreditCardValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter your Car Loan Institution</p>
                </div>
              )}
               {valueCreditCardAmountValid === valid.INVALID && (
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

export default CardList;
