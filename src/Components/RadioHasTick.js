import React from 'react';
import './Radio.scss';

export const RadioHasTick = ({
    name,
    children,
    invalid,
    classContainer,
    ...otherProps
}) => {
    return (
        <label
            className={`radio-button radio-button-tick ${classContainer ? classContainer : ''}`}
        >
            {children}
            <input type="radio" name="name" {...otherProps} />
            <span className={`background${invalid ? ' invalid' : ''}`}></span>
            <span className="tick"></span>
        </label>
    );
};
