import React from 'react';
import './CheckboxCustom.scss';

const checkBoxType = {
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
};

const CheckBoxCustom = ({ children, checkbox, ...otherProps }) => {
    return (
        <label className="checkbox-container">
            <input
                type={checkbox ? checkBoxType.CHECKBOX : checkBoxType.RADIO}
                name="option"
                {...otherProps}
            />
            <span className="checkmark">{children}</span>
        </label>
    );
};

export const CheckBoxSecondary = ({ children, checkbox, ...otherProps }) => {
    return (
        <label className="checkbox-container-secondary">
            <input
                type={checkbox ? checkBoxType.CHECKBOX : checkBoxType.RADIO}
                name="option"
                {...otherProps}
            />
            <span className="checkmark">{children}</span>
        </label>
    );
};

export default CheckBoxCustom;
