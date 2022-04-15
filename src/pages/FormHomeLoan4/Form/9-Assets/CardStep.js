/** @format */

import React from "react";
import { Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import InputNumber from "../../../../Components/InputNumber";
import SelectDropdown from "../../../../Components/Select/index";
import iconPlus from "../../../../images/iconPlus.png";
import iconClose from "../../../../images/minus.png";

const listOption = [
  {
    value: "Car",
    label: "Car",
  },
  {
    value: "Boat",
    label: "Boat",
  },
  {
    value: "Truck",
    label: "Truck",
  },
  {
    value: "Caravan",
    label: "Caravan",
  },
  {
    value: "Motorcycle",
    label: "Motorcycle",
  },
];

const Step36A = ({
  nameCard,
  indexCard=1,
  make,
  model,
  value,
  onKeyUpHandle,
  handleBlur,
  handlePlusItem,
  childrenNumber,
  handleRemoveItem,
  typeOption
}) => {
  return (
    <>
      <Col xs={12}>
        <Row className="info-customer mt-2 position-relative max-650">
          <Col
            xs={6} md={3}
            className="wForm-input mb-2"
          >
            <SelectDropdown
              customClass="selectType"
              placeholder="Type"
              listItem={listOption}
              onChange={(option) => {
                onKeyUpHandle(option, `type${nameCard}${indexCard}`)
              }}
              option={typeOption || null}
            />
          </Col>
          <Col xs={6} md={3} className="wForm-input mb-2">
            <InputCustom2
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
          <Col xs={6} md={3} className="wForm-input mb-2">
            <InputCustom2
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
          <Col xs={6} md={3} className="wForm-input mb-2">
            <InputNumber
              inputMode="numeric"
              options={{
                numericOnly: true,
                numeral: true,
                numeralDecimalMark: "",
                delimiter: ",",
                numeralThousandsGroupStyle: "thousand",
              }}
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
    </>
  );
};

export default Step36A;
