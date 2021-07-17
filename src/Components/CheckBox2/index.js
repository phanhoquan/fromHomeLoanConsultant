/** @format */

// @flow
import React, { memo } from "react";

export const CheckBox = ({
  id,
  name,
  label,
  disabled,
  customClass = "",
  handleToggleCheckbox,
  isChecked = false,
  onKeyPress = () => {},
  subLabel = "",
  handleClick = () => {},
  isShowSwitch = false,
}: Props) => {
  return (
    <div
      className={`${customClass} checkbox ${
        isChecked ? "checkbox--checked" : ""
      }`}
    >
      <label className="checkbox__label" htmlFor={id}>
        <input
          className="checkbox__input"
          type="checkbox"
          id={id}
          name={name}
          value={label}
          checked={isChecked}
          disabled={disabled}
          onKeyPress={onKeyPress}
          onChange={handleToggleCheckbox}
        />

        {isShowSwitch && (
          <label className="switch">
            <span className="slider round" />
          </label>
        )}
        <span>{label}</span>
      </label>
      <span onClick={handleClick} className="terms">
        {subLabel}
      </span>
    </div>
  );
};

export default memo<Props>(CheckBox);
