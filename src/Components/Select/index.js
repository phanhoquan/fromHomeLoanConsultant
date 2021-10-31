/** @format */

// @flow
import React, { useState } from "react";
import Select, { components } from "react-select";

const SelectDropdown = ({
  placeholder = "",

  disabled = false,
  isSearchable = false,
  onBlur = null,
  onChange = () => {},
  innerRef = null,
  option = {},
  noOptionsMessage = () => {},
  listOptionString = [],
  customClass = "",
  noLabel = false,
  listItem,
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const DropdownIndicator = (props) => {
    setIsActive(props?.selectProps?.menuIsOpen);
    return (
      <components.DropdownIndicator {...props}>
        <div className="d-none" />
      </components.DropdownIndicator>
    );
  };

  return (
    <div
      className={`customer-select ${customClass.length > 0 ? customClass : ""}`}
    >
      <div className={`input__box ${isActive ? "down" : ""}`}>
        <Select
          placeholder={placeholder}
          components={{ DropdownIndicator }}
          ref={innerRef}
          classNamePrefix="customSelect"
          value={option || null}
          onChange={onChange}
          // menuIsOpen
          noOptionsMessage={noOptionsMessage}
          options={
            noLabel
              ? listOptionString.map((item) => ({
                  id: item.id,
                  value: item.name,
                  label: item.name,
                }))
              : listItem
          }
          blurInputOnSelect={onBlur}
          isDisabled={disabled}
          isSearchable={isSearchable}
        />
      </div>
    </div>
  );
};

export default SelectDropdown;
