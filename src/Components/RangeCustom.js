/** @format */

import React, { useRef, useEffect } from "react";

import "./RangeCustom.scss";

const RangeCustom = ({
  onChange,
  onClick,
  value,
  min,
  max,
  step,
  tooltipValue,
  ...otherProps
}) => {
  const eleInput = useRef(null);
  const eleValue = useRef(null);

  useEffect(() => {
    const valueCacl = (value - min) / (max - min);
    const percent = valueCacl * 100;
    if (eleInput.current) {
      let positionGradient = `${percent}%`;
      if (percent > 50 && percent < 100) {
        positionGradient = `calc(${percent}% - ${0.015 * percent - 0.75}rem)`;
      }
      if (percent <= 50) {
        positionGradient = `calc(${percent}% + ${-0.015 * percent + 0.75}rem)`;
      }
      eleInput.current.style.backgroundImage = `linear-gradient(to right, #51b5f7 ${positionGradient}, 0, transparent),
            radial-gradient(circle at center left, #51b5f7 ${positionGradient}, 0, transparent)`;
    }
    // if (eleValue.current) {
    //     eleValue.current.style.left = `calc(${percent}% - ${0.03 * percent + 3}rem)`;
    // }
  });

  return (
    <div className="range-custom" {...otherProps}>
      <div ref={eleValue} className="value">
        {tooltipValue}
      </div>
      <input
        ref={eleInput}
        onClick={onClick}
        onChange={onChange}
        className="slider"
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};

export default RangeCustom;
