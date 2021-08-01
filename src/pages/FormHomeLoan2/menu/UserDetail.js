/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgUserDetail from "../../../images/menu/user-detail.png";
import imgUserDetailBlue from "../../../images/menu/user-detail-blue.png";

const UserDetail = ({ children, stepActive }) => {
  return (
    <li
      className={`${stepActive === 1 ? "active answerActive" : ""} `}
      onClick={() => {}}
      role="button"
    >
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
