import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './TooltipCustom.scss';
import imgTip from '../images/tip.png';

export const placementType = {
    TOP: 'top',
    BOTTOM: 'bottom',
};

const TooltipCustom = ({
    placement,
    element,
    children,
    className,
    tip = true,
    ...otherProps
}) => {
    return (
        <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
                <Tooltip
                    className={`tooltip-custom ${className || ''}`}
                    id={`tooltip-${placement}`}
                >
                    {children}
                </Tooltip>
            }
            {...otherProps}
        >
            <div className={`element ${className || ''}`}>
                {element}
                {tip && <img className="tip" src={imgTip} alt="tip" />}
            </div>
        </OverlayTrigger>
    );
};

export default TooltipCustom;
