/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgKids from "../../../images/menu/kids.png";
import imgKidsBlue from "../../../images/menu/kids-blue.png";

const KidsOrDependents = ({ children, stepActive }) => {
  return (
    <li
      className={`${stepActive === 4 ? "active answerActive" : ""} `}
      onClick={() => {}}
      role="button"
    >
      <LazyLoadImage
        src={imgKids}
        alt=""
        width="25"
        height="25"
        className="light"
      />
      <LazyLoadImage
        src={imgKidsBlue}
        alt=""
        width="25"
        height="25"
        className="blue"
      />
      <div className="wrap-question ml-3 mt-1">
        <p className="question">Kids or Dependents</p>
        {children}
      </div>
    </li>
  );
};

export default KidsOrDependents;
