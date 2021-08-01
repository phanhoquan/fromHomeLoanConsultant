/** @format */

import React from "react";
import { Col } from "react-bootstrap";
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
    <Col xs={12} md={6} className="mb-3">
      <InputCustom2
        onChange={onKeyUp}
        label={`Dependant Age ${numberKey || 1}`}
        value={valueItem}
        type="text"
        customClassLabel={valueItem ? "active" : ""}
        maxLength="3"
        id={id}
        customClassWrap=" text-center"
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
  );
};

export default ChillApplicantAge;
