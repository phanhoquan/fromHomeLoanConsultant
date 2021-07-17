/** @format */

import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import imgArrowDown from "../images/arrow-down.png";
import { Link, useLocation } from "react-router-dom";

const Progress = (props) => {
  const location = useLocation();
  return (
    <CircularProgressbarWithChildren
      background={`#fff`}
      strokeWidth={12}
      value={props.percentage}
      styles={buildStyles({
        strokeLinecap: "butt",
        trailColor: "#eee",
        backgroundColor: "#fff",
      })}
    >
      <div
        style={{
          fontSize: "20px",
          color: "#364047",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 300,
          textAlign: "center",
        }}
      >
        {props.percentage === 0 ? (
          <Link
            to={{
              pathname: `/${props.currentPage}/step-first`,
              hash: "#archor",
              search: location.search,
            }}
            style={{ textDecoration: "none" }}
            rel="dns-prefetch"
          >
            <div
              style={{
                fontWeight: "600",
                marginTop: "25px",
                color: "#364047",
              }}
            >
              START
            </div>
            <img src={imgArrowDown} alt="archor" />
          </Link>
        ) : (
          <>
            <div style={{ fontWeight: "600" }}>
              {props.percentage === 100 ? 99 : props.percentage}%
            </div>
            <div style={{ fontSize: "10px", fontWeight: "600" }}>COMPLETED</div>
          </>
        )}
      </div>
    </CircularProgressbarWithChildren>
  );
};

export default Progress;
