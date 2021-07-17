/** @format */

import {
  geocodeByPlaceId,
  geocodeByAddress,
} from "react-google-places-autocomplete";

const getZipCodeWithPlaceID = (id, success, error) => {
  return geocodeByPlaceId(id)
    .then((data) => {
      if (data[0]) {
        let streetNumber;
        let route;
        let city;
        let state;
        let postcode;
        for (var i = 0; i < data[0].address_components.length; i++) {
          if (
            data[0].address_components[i].types[0] ===
            "administrative_area_level_1"
          ) {
            state = data[0].address_components[i].short_name;
          }
          if (data[0].address_components[i].types[0] === "locality") {
            city = data[0].address_components[i].short_name;
          }
          if (data[0].address_components[i].types[0] === "postal_code") {
            postcode = data[0].address_components[i].short_name;
          }
          if (data[0].address_components[i].types[0] === "street_number") {
            streetNumber = data[0].address_components[i].short_name;
          }
          if (data[0].address_components[i].types[0] === "route") {
            route = data[0].address_components[i].short_name;
          }
        }
        if (streetNumber === undefined || route === undefined) {
          success({});
        } else {
          success({
            street: `${streetNumber} ${route}`,
            city,
            state,
            postcode,
          });
        }
      } else {
        error("get zipcode failed");
      }
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

const getZipCodeWithAddress = (address, success, error) => {
  if (address && address.length > 2) {
    return geocodeByAddress(address)
      .then((data) => {
        if (data[0]) {
          let streetNumber;
          let route;
          let city;
          let state;
          let postcode;
          for (var i = 0; i < data[0].address_components.length; i++) {
            if (
              data[0].address_components[i].types[0] ===
              "administrative_area_level_1"
            ) {
              state = data[0].address_components[i].short_name;
            }
            if (data[0].address_components[i].types[0] === "locality") {
              city = data[0].address_components[i].short_name;
            }
            if (data[0].address_components[i].types[0] === "postal_code") {
              postcode = data[0].address_components[i].short_name;
            }
            if (data[0].address_components[i].types[0] === "street_number") {
              streetNumber = data[0].address_components[i].short_name;
            }
            if (data[0].address_components[i].types[0] === "route") {
              route = data[0].address_components[i].short_name;
            }
          }
          if (streetNumber === undefined || route === undefined) {
            success({});
          } else {
            success({
              street: `${streetNumber} ${route}`,
              city,
              state,
              postcode,
            });
          }
        } else {
          error("get zipcode failed");
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }
};

export { getZipCodeWithAddress, getZipCodeWithPlaceID };
