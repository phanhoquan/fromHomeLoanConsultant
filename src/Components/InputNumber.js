/** @format */

import React from "react";
import Cleave from "cleave.js/react";
import imgEmail from "../images/life/email.svg";
import imgPrice from "../images/life/price.svg";
import imgPhone from "../images/life/phone.svg";
import imgLocation from "../images/life/iconLocation.svg";
import imgCheck from "../images/life/iconCheck.svg";
import imgCheckError from "../images/life/close.svg";
import ClipLoader from "react-spinners/ClipLoader";

const InputNumber = ({
  placeholder = "",
  value = "",
  label = "",
  disabled = false,
  readOnly = false,
  type = "text",
  onBlur = () => {},
  onChange = () => {},
  customClassName = "",
  customClassWrap = "",
  customClassLabel = "",
  onFocus = () => {},
  onKeyPress = () => {},
  onPaste = () => {},
  variant = "outline",
  isShowIcon = false,
  id = "",
  customClass = "",
  innerRef = null,
  pattern = "",
  inputMode = "",
  maxLength = "",
  autocomplete = "off",
  autoFocus,
  options,
  iconEmail = false,
  iconPrice = false,
  iconPhone = false,
  iconLocation = false,
  iconCheckPhone = false,
  mobileChecking = "",
  iconCheckErrorPhone = false,
  isMobileChecking = false,
}: Props) => {
  const checkingStatus = {
    NONE: "none",
    PENDDING: "pendding",
    DONE: "done",
  };

  return (
    <div
      className={`input ${
        variant !== "outline" ? ` input__wrapper--${variant}` : ""
      }`}
    >
      <div
        className={`input__box ${customClassWrap} ${
          isShowIcon ? "input__box__custom" : ""
        }`}
      >
        {iconEmail && (
          <div className="icon">
            <img src={imgEmail} alt="" className="iconEmail" />
          </div>
        )}
        {iconPrice && (
          <div className="icon">
            <img src={imgPrice} alt="" className="iconEmail" />
          </div>
        )}
        {iconPhone && (
          <div className="icon">
            <img src={imgPhone} alt="" className="iconEmail imgLocation" />
          </div>
        )}
        {iconLocation && (
          <div className="icon">
            <img src={imgLocation} alt="" className="iconEmail imgLocation" />
          </div>
        )}
        <Cleave
          placeholder={placeholder}
          options={options}
          type={type}
          inputMode={inputMode}
          value={value}
          disabled={disabled}
          className={`input-change ${
            customClass.length > 0 ? customClass : ""
          } ${
            variant !== "outline" ? `input--${variant}` : ""
          } ${customClassName} ${value ? "value" : ""}`}
          ref={innerRef}
          onPaste={onPaste}
          onKeyPress={onKeyPress}
          readOnly={readOnly}
          onBlur={(e) => onBlur(e)}
          onFocus={(e) => onFocus(e)}
          onChange={(e) => onChange(e)}
          autoCapitalize="none"
          name={id}
          id={id}
          maxLength={maxLength}
          pattern={pattern}
          autoComplete={autocomplete}
          autoFocus={autoFocus}
        />
        {!!label && (
          <label htmlFor={id} className={`${customClassLabel} input__label`}>
            {label}
          </label>
        )}
        {(iconCheckPhone && mobileChecking === checkingStatus.DONE) ||
          (isMobileChecking && (
            <div className="icon check-phone">
              <img src={imgCheck} alt="" className="iconEmail " />
            </div>
          ))}
        {mobileChecking === checkingStatus.PENDDING && (
          <div className="icon check-phone">
            <ClipLoader size={20} color={"#9e9e9e"} />
          </div>
        )}
        {iconCheckErrorPhone && (
          <div className="icon check-phone">
            <img src={imgCheckError} alt="" className="iconEmail " />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputNumber;
