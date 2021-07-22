/** @format */

import React from "react";
import { Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import { valid } from "../../../../utils/constant";

const ChillApplicantAge = ({
  chillApplicantAgeValid,
  valueItem,
  validMessage,
  onKeyUp,
  onBlur,
  onFocus,
  id,
  numberKey,
  onKeyPress,
}) => {
  return (
    <Col xs={12}>
      <Row className="info-customer max-280">
        <Col xs={12}>
          <InputCustom2
            onChange={onKeyUp}
            label={`Dependant Age ${numberKey || 1}`}
            value={valueItem}
            type="text"
            customClassLabel={valueItem ? "active" : ""}
            maxLength="3"
            id={id}
            customClassWrap="email"
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyPress={onKeyPress}
          />
          {chillApplicantAgeValid === valid.INVALID ? (
            <div className="text-error mt-2">
              <p>{validMessage}</p>
            </div>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Col>
  );
};

export default ChillApplicantAge;
