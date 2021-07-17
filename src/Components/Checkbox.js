import React from 'react';
import './Checkbox.scss';

export const CheckboxButton = ({
    name,
    children,
    invalid,
    classContainer,
    ...otherProps
}) => {
    return (
        <label
            className={`checkbox-button ${
                classContainer ? classContainer : ''
            }`}
        >
            {children}
            <input type="checkbox" name="name" {...otherProps} />
            <span className={`background${invalid ? ' invalid' : ''}`}></span>
            <span className="checkmark"></span>
        </label>
    );
};
