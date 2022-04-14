/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import imgUserDetail from "../../../images/menu/user-detail.png";
import imgUserDetailBlue from "../../../images/menu/user-detail-blue.png";
import imgArrowBlue from "../../../images/Rounded-Rectangle.png";

const UserDetail = ({ children, stepActive, answerActive }) => {
  const history = useHistory();
  return (
    <li
      className={`${stepActive === 1 ? "active" : ""} ${
        answerActive && answerActive?.question ? "answerActive" : ""
      }`}
      onClick={() => history.push("/updated-hlc-consultant-4/user-details")}
      role="button"
    >
      <LazyLoadImage src={imgArrowBlue} alt="" className="arrowBlue" />
      <LazyLoadImage
        src={imgUserDetail}
        alt=""
        width="25"
        height="25"
        className="light"
      />
      <LazyLoadImage
        src={imgUserDetailBlue}
        alt=""
        width="25"
        height="25"
        className="blue"
      />
      <div className="wrap-question ml-3 mt-1">
        <p className="question">User Details</p>
        {children}
      </div>
    </li>
  );
};

export default UserDetail;
