/** @format */

import React from "react";
import { Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import InputNumber from "../../../../Components/InputNumber";

import iconPlus from "../../../../images/iconPlus.png";
import iconClose from "../../../../images/minus.png";


const Step36A = ({
  handleSetMakeModelValid,
  nameCard,
  indexCard=1,
  make,
  model,
  value,
  onKeyUpHandle,
  handleBlur,
  makeModelValid,
  handlePlusItem,
  childrenNumber,
  handleRemoveItem
}) => {
  return (
    <>
      <Col xs={12}>
        <Row className="info-customer mt-2 position-relative">
          <Col xs={4} className="wForm-input">
            <InputCustom2
              onFocus={() =>
                handleSetMakeModelValid(
                  valid.NON_VALID,
                  `make${nameCard}${indexCard}`
                )
              }
              onChange={(e) =>
                onKeyUpHandle(e.target.value, `make${nameCard}${indexCard}`)
              }
              label="Make"
              value={make}
              id={`make${nameCard}${indexCard}`}
              customClassLabel={make ? "active" : ""}
              onBlur={() => handleBlur(make, 'make', `make${nameCard}${indexCard}`)}
            />
          </Col>
          <Col xs={4} className="wForm-input">
            <InputCustom2
                onFocus={() =>
                  handleSetMakeModelValid(
                    valid.NON_VALID,
                    `model${nameCard}${indexCard}`
                  )
                }
                onChange={(e) =>
                  onKeyUpHandle(e.target.value, `model${nameCard}${indexCard}`)
                }
                label="Model"
                value={model}
                id={`model${nameCard}${indexCard}`}
                customClassLabel={model ? "active" : ""}
                onBlur={() => handleBlur(model, 'model', `model${nameCard}${indexCard}`)}
              />
          </Col>
          <Col xs={4} className="wForm-input">
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
                handleSetMakeModelValid(
                  valid.NON_VALID,
                  `value${nameCard}${indexCard}`
                )
              }
              onChange={(e) =>
                onKeyUpHandle(e.target.value, `value${nameCard}${indexCard}`)
              }
              customClassLabel={value ? "active" : ""}
              label="Value"
              value={value}
              id={`value${nameCard}${indexCard}`}
              customClassWrap="five"
              onBlur={() => handleBlur(value, 'value', `value${nameCard}${indexCard}`)}
            />
          </Col>
          {indexCard ===1 ? (
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
      </Col>
      {console.log(makeModelValid, '')}
      <Col xs={12}>
        {makeModelValid ? (
          <div className="text-error">
            <p>Please enter in a valid Make\Model\Value</p>
          </div>
        ):''}
      </Col>
    </>
  );
};

export default Step36A;
