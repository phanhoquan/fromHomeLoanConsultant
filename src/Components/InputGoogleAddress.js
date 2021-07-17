import React, { useState } from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress } from 'react-google-places-autocomplete';
import { MenuListDefault, MenuListWithNoOption, MenuDefault, MenuWithNoOption } from './Select';
import './Select.scss';

const InputGoogleAddress = ({
    country,
    onValueChange,
    invalid,
    defaultValue,
    inputMode,
    ...otherProps
}) => {
    const [value, setValue] = useState(defaultValue);
    const [noOption, setNoOption] = useState(false);

    return (
        <GooglePlacesAutocomplete
            placeholder="Enter your address"
            autocompletionRequest={{
                componentRestrictions: {
                    country: country,
                },
            }}
            selectProps={{
                value: value,
                classNamePrefix: 'zaselect',
                placeholder: 'Street Address...',
                onChange: (value) => {
                    setValue(value);
                    onValueChange(value);
                },
                onInputChange: (value) => setNoOption(!!value),
                components: {
                    MenuList: noOption ? MenuListDefault : MenuListWithNoOption,
                    Menu: noOption ? MenuDefault : MenuWithNoOption,
                },
            }}
            {...otherProps}
        />
    );
};

export const getInfoAddress = async (label) => {
    const result = await geocodeByAddress(label);
    return parseToData(result);
};

const parseToData = (data) => {
    if (data[0]) {
        let streetNumber;
        let route;
        let city;
        let state;
        let postcode;
        for (var i = 0; i < data[0].address_components.length; i++) {
            if (data[0].address_components[i].types[0] === 'administrative_area_level_1') {
                state = data[0].address_components[i].short_name;
            }
            if (data[0].address_components[i].types[0] === 'locality') {
                city = data[0].address_components[i].short_name;
            }
            if (data[0].address_components[i].types[0] === 'postal_code') {
                postcode = data[0].address_components[i].short_name;
            }
            if (data[0].address_components[i].types[0] === 'street_number') {
                streetNumber = data[0].address_components[i].short_name;
            }
            if (data[0].address_components[i].types[0] === 'route') {
                route = data[0].address_components[i].short_name;
            }
        }
        if (streetNumber === undefined || route === undefined) {
            return {};
        } else {
            return {
                address: data[0].formatted_address,
                street: `${streetNumber} ${route}`,
                city,
                state,
                postcode,
            };
        }
    } else {
        console.log('get zipcode failed');
    }
};

export default InputGoogleAddress;
