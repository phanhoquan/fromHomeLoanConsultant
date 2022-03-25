/** @format */

import React, {useRef} from "react";
import { Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import InputGoogleAddress from "../../../../Components/InputGoogleAddress2";
import InputNumber from "../../../../Components/InputNumber";
import SelectDropdown from "../../../../Components/Select/index";
import iconPlus from "../../../../images/iconPlus.png";
import iconClose from "../../../../images/minus.png";

const listOption = [
  {
    value: "Fixed",
    label: "Fixed",
  },
  {
    value: "Variable",
    label: "Variable",
  }
];

const Step36A = ({
  nameCard,
  indexCard=1,
  address,
  loanAmount,
  lender,
  rentalIncome,
  interestRate,
  onKeyUpHandle,
  handleBlur,
  handlePlusItem,
  childrenNumber,
  handleRemoveItem,
  fixedOrVariable,
  onUpdateState,
  setFullAddress
}) => {
  const fullAddressRef1 = useRef(null);
  const fullAddressRef2 = useRef(null);
  const fullAddressRef3 = useRef(null);
  const fullAddressRef= {
    0: fullAddressRef1,
    1: fullAddressRef2,
    2: fullAddressRef3
  }

  return (
    <>
      <Col xs={12}>
      <Row className="info-customer mt-2 position-relative max-540">
            <Col xs={12} className={`text-center ${indexCard === 1? 'mb-4 mb-md-0': '0'}`}>
              <h3 className="mb-0">Investment properties #{indexCard}</h3>
            </Col>
        </Row>
        <Row className="info-customer mt-2 position-relative max-540">
          <Col xs={12} className="wForm-input mb-0">
              <InputGoogleAddress
                country="au"
                defaultValue={address || ""}
                label ="Please enter your full address"
                updateState={onUpdateState}
                id={`address${nameCard}${indexCard}`}
                updateAddress={(e) => onKeyUpHandle(e, `address${nameCard}${indexCard}`)}
                onFocus={(e) => onKeyUpHandle(e.target.value, `address${nameCard}${indexCard}`)}
                innerRef={fullAddressRef[indexCard] }
                onBlur={() => handleBlur(address, 'address', `address${nameCard}${indexCard}`)}
              />
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
          </Col>
        </Row>
        <Row className="info-customer mt-2 position-relative max-900">
          <Col xs={6} md={2} className="wForm-input mb-2">
            <InputNumber
                inputMode="numeric"
                options={{
                  numericOnly: true,
                  numeral: true,
                  numeralDecimalMark: "",
                  delimiter: ",",
                  numeralThousandsGroupStyle: "thousand",
                }}
                maxLength="10"
                onChange={(e) =>
                  onKeyUpHandle(e.target.value, `loanAmount${nameCard}${indexCard}`)
                }
                customClassLabel={loanAmount ? "active" : ""}
                label="Loan Amount"
                value={loanAmount}
                id={`loanAmount${nameCard}${indexCard}`}
                customClassWrap="five"
                onBlur={() => handleBlur(loanAmount, 'loanAmount', `loanAmount${nameCard}${indexCard}`)}
              />
          </Col>
          <Col xs={6} md={2} className="wForm-input mb-2">
            <InputNumber
              inputMode="numeric"
              options={{
                numericOnly: true,
                numeral: true,
                numeralDecimalMark: "",
                delimiter: ",",
                numeralThousandsGroupStyle: "thousand",
              }}
              maxLength="3"
              onChange={(e) =>
                onKeyUpHandle(e.target.value, `interestRate${nameCard}${indexCard}`)
              }
              customClassLabel={interestRate ? "active" : ""}
              label="Interest Rate"
              value={interestRate}
              id={`interestRate${nameCard}${indexCard}`}
              customClassWrap="five"
              onBlur={() => handleBlur(interestRate, 'interestRate', `interestRate${nameCard}${indexCard}`)}
            />
          </Col>
          <Col xs={6} md={2} className="wForm-input mb-2">
            <InputCustom2
                onChange={(e) =>
                  onKeyUpHandle(e.target.value, `lender${nameCard}${indexCard}`)
                }
                label="Lender"
                value={lender}
                id={`lender${nameCard}${indexCard}`}
                customClassLabel={lender ? "active" : ""}
                onBlur={() => handleBlur(lender, 'lender', `lender${nameCard}${indexCard}`)}
              />
          </Col>
          <Col
            xs={6} md={2}
            className="wForm-input mb-2"
          >
            <SelectDropdown
              customClass="selectType"
              placeholder="Fixed/Variable"
              listItem={listOption}
              onChange={(option) => {
                onKeyUpHandle(option, `fixedOrVariable${nameCard}${indexCard}`)
              }}
              option={fixedOrVariable || null}
            />
          </Col>
          <Col xs={6} md={2} className="wForm-input mb-2">
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
                onKeyUpHandle(e.target.value, `rentalIncome${nameCard}${indexCard}`)
              }
              maxLength="10"
              customClassLabel={rentalIncome ? "active" : ""}
              label="Rental Income"
              value={rentalIncome}
              id={`rentalIncome${nameCard}${indexCard}`}
              customClassWrap="five"
              onBlur={() => handleBlur(rentalIncome, 'rentalIncome', `rentalIncome${nameCard}${indexCard}`)}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Step36A;
