/** @format */

import React, { useEffect, useRef } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import imgCheck from "../images/check.png";
import "./InputCustom.scss";

export const checkingStatus = {
  NONE: "none",
  PENDDING: "pendding",
  DONE: "done",
};

const InputCustom = ({
  prefix,
  children,
  validMessage,
  className,
  invalid,
  checking,
  ...otherProps
}) => {
  const innerRef = useRef();
  useEffect(() => innerRef.current && innerRef.current.focus());
  return (
    <div className="checkin-number input__box">
      <InputGroup className={className}>
        {prefix && (
          <InputGroup.Prepend>
            <InputGroup.Text>{prefix}</InputGroup.Text>
          </InputGroup.Prepend>
        )}
        <FormControl
          className={invalid ? "invalid" : ""}
          placeholder={children}
          ref={innerRef}
          {...otherProps}
        />
        <FormControl.Feedback
          type="invalid"
          style={{ visibility: invalid ? "visible" : "hidden" }}
        >
          {validMessage}
        </FormControl.Feedback>
      </InputGroup>
      {checking && (
        <div className="loading-check">
          {checking === checkingStatus.PENDDING && (
            <ClipLoader size={20} color={"#9e9e9e"} />
          )}
          {checking === checkingStatus.DONE && !invalid && (
            <img className="check" src={imgCheck} alt="checking" />
          )}
        </div>
      )}
    </div>
  );
};

export default InputCustom;
