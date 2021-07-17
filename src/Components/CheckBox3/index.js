/** @format */

import React from "react";
import { CheckBox } from "../CheckBox2";

export const CheckboxButton = ({
  name,
  classContainer,
  checkBox,
  onClick,
  isShowSwitch = false,
  handleToggleCheckbox = () => {},
  disabled = false,
}) => {
  return (
    <label
      className={`checkbox-button ${classContainer ? classContainer : ""}`}
      onClick={onClick}
    >
      <CheckBox
        label={name}
        id={name}
        disabled={disabled}
        handleToggleCheckbox={handleToggleCheckbox}
        isChecked={checkBox}
        isShowSwitch={isShowSwitch}
      />
    </label>
  );
};
