/** @format */

import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import imgEmail from "../images/life/email.svg";
import imgPrice from "../images/life/price.svg";
import imgOccupation from "../images/life/occupation.svg";
import imgLocation from "../images/life/iconLocation.svg";
import imgCheck from "../images/life/iconCheck.svg";

const InputCustomMultiLine = ({
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
  rows = "",
  onKeyUp = () => {},
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
        <TextareaAutosize
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
          onKeyUp={onKeyUp}
          rows={rows}
        />
        {!!label && (
          <label
            htmlFor={id}
            className={`${customClassLabel} input__label multiline`}
          >
            {label}
          </label>
        )}
        {iconCheckPhone && (
          <div className="icon check-phone">
            <img src={imgCheck} alt="" className="iconEmail " />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCustomMultiLine;
