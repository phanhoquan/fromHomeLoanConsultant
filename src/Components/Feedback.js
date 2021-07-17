import React from 'react';
import { Form } from 'react-bootstrap';
import './Radio.scss';

const Feedback = ({ show, children, ...otherProps }) => {
    return (
        <Form.Control.Feedback
            type="invalid"
            style={{
                marginTop: 0,
                display: 'block',
                visibility: show ? 'visible' : 'hidden',
            }}
            {...otherProps}
        >
            {children}
        </Form.Control.Feedback>
    );
};

export default Feedback;
