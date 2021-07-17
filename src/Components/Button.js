import React from 'react';
import { Button as Btn } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, onClick, children, className, ...otherProps }) => {
    return (
        <Btn
            className={`${type} ${className}`}
            onClick={onClick}
            {...otherProps}>
            {children}
        </Btn>
    );
};

export const type = {
    NEXT: 'next',
    BACK: 'back',
    SUBMIT: 'submit',
};

Button.propTypes = {
    type: PropTypes.oneOf(Object.values(type)).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
