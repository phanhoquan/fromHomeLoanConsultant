/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgCard from "../../../images/menu/card.png";
import imgCardBlue from "../../../images/menu/card-blue.png";

const CreditCards = ({ children, stepActive }) => {
  return (
    <li
      className={`${stepActive === 7 ? "active answerActive" : ""} `}
      onClick={() => {}}
      role="button"
    >
      <LazyLoadImage
        src={imgCard}
        alt=""
        width="25"
        height="25"
        className="light"
      />
      <LazyLoadImage
        src={imgCardBlue}
        alt=""
        width="25"
        height="25"
        className="blue"
      />
      <div className="wrap-question ml-3 mt-1">
        <p className="question">Credit Cards</p>
        {children}
      </div>
    </li>
  );
};

export default CreditCards;
