/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import imgCard from "../../../images/menu/card.png";
import imgCardBlue from "../../../images/menu/card-blue.png";
import imgArrowBlue from "../../../images/Rounded-Rectangle.png";

const Assets = ({ children, stepActive, answerActive }) => {
  const history = useHistory();
  return (
    <li
      className={`${stepActive === 9 ? "active" : ""} ${
        answerActive && answerActive?.question ? "answerActive" : ""
      }`}
      onClick={() => history.push("/refinance-fact-find-v3/Assets")}
      role="button"
    >
      <LazyLoadImage src={imgArrowBlue} alt="" className="arrowBlue" />
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
        <p className="question">Assets</p>
        {children}
      </div>
    </li>
  );
};

export default Assets;
