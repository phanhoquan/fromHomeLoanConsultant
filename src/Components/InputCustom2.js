/** @format */

import React from "react";
import imgEmail from "../images/life/email.svg";
import imgPrice from "../images/life/price.svg";
import imgOccupation from "../images/life/occupation.svg";
import imgLocation from "../images/life/iconLocation.svg";
import imgCheck from "../images/life/iconCheck.svg";
import imgIconBank from "../images/life/bank.svg";
import imgIconArrow from "../images/life/arrow.svg";

const InputCustom2 = ({
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
  iconEmail = false,
  iconPrice = false,
  iconOccupation = false,
  iconLocation = false,
  onKeyDown = () => {},
  iconCheckPhone = false,
  iconBank = false,
  iconArrow = false,
}: Props) => {
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
        {iconOccupation && (
          <div className="icon">
            <img src={imgOccupation} alt="" className="iconEmail" />
          </div>
        )}
        {iconLocation && (
          <div className="icon">
            <img src={imgLocation} alt="" className="iconEmail imgLocation" />
          </div>
        )}
        {iconBank && (
          <div className="icon">
            <img src={imgIconBank} alt="" className="iconEmail imgLocation" />
          </div>
        )}
        <input
          className={`input-change ${
            customClass.length > 0 ? customClass : ""
          } ${
            variant !== "outline" ? `input--${variant}` : ""
          } ${customClassName} ${value ? "value" : ""}`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          type={type}
          ref={innerRef}
          onPaste={onPaste}
          onKeyPress={onKeyPress}
          readOnly={readOnly}
          onBlur={(e) => onBlur(e)}
          onFocus={(e) => onFocus(e)}
          onChange={(e) => onChange(e)}
          autoCapitalize="none"
          inputMode={inputMode}
          maxLength={maxLength}
          id={id}
          pattern={pattern}
          autoComplete={autocomplete}
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
        />
        {!!label && (
          <label htmlFor={id} className={`${customClassLabel} input__label`}>
            {label}
          </label>
        )}
        {iconCheckPhone && (
          <div className="icon check-phone">
            <img src={imgCheck} alt="" className="iconEmail " />
          </div>
        )}
        {iconArrow && (
          <div className="icon check-phone">
            <img src={imgIconArrow} alt="" className="iconEmail " />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCustom2;
