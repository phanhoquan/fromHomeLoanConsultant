/** @format */

import React, { useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  getZipCodeWithPlaceID,
  getZipCodeWithAddress,
} from "../utils/googleApi";
import "./InputGoogleAddress.scss";
import InputCustomMultiLine from "./InputCustomMultiLine";

const InputGoogleAddress = ({
  country,
  updateAddress,
  updateState,
  invalid,
  defaultValue,
  onFocus,
  onKeyDown,
  innerRef,
  onBlur,
  label ="Please enter your full residential address",
  id="textMultiLine",
  ...otherProps
}) => {
  useEffect(() => {
    if (defaultValue !== "") {
      getZipCodeWithAddress(defaultValue, updateState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${invalid ? "invalid " : ""}group-input`}>
      <GooglePlacesAutocomplete
        initialValue={defaultValue}
        placeholder=""
        autocompletionRequest={{
          componentRestrictions: {
            country: country,
          },
        }}
        renderInput={(params) => (
          <InputCustomMultiLine
            label={label}
            {...params}
            value={params?.value}
            type="email"
            id={id}
            customClassLabel={params?.value ? "active" : ""}
            iconLocation
            customClassWrap="email"
            onFocus={(e) => onFocus(e)}
            onKeyDown={onKeyDown}
            innerRef={innerRef}
            onBlur={onBlur}
          />
        )}
        onSelect={(place) => {
          updateAddress(place.description);
          getZipCodeWithPlaceID(place.place_id, updateState);
        }}
        {...otherProps}
      />
    </div>
  );
};

export default InputGoogleAddress;
