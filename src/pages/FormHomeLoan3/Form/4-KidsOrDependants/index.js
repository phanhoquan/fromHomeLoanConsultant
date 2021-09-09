/** @format */

import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import imgAller from "../../../../images/aler.png";
import LifeInsurance from "../../index";

import Step08 from "./Step08";
import Step09 from "./Step09";
import Step10 from "./Step10";
import Step11 from "./Step11";

export const types = {
  1: "YES",
  2: "NO",
};

const KidsOrDependents = () => {
  const loan2jointApplicationStatus = localStorage.getItem(
    "loan2jointApplicationStatus"
  );
  const history = useHistory();
  let listMenuStep4 = localStorage.getItem("listMenuStep4")
    ? JSON.parse(localStorage.getItem("listMenuStep4"))
    : [];
  const [isShowMessSole, setIsShowMessSole] = useState(false);
  const [dataListMenuStep4, setDataListMenuStep4] = useState(
    listMenuStep4 || []
  );

  const [loan2value, setLoan2value] = useState({
    kidsOrDependant: localStorage.getItem("loan2kidsOrDependant") || "",
    chillApplicantAge: localStorage.getItem("loan2chillApplicantAge")
      ? JSON.parse(localStorage.getItem("loan2chillApplicantAge"))
      : null,
    otherDependents: localStorage.getItem("loan2otherDependents") || "",
    otherChillApplicantAge: localStorage.getItem("loan2otherChillApplicantAge")
      ? JSON.parse(localStorage.getItem("loan2otherChillApplicantAge"))
      : null,
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
    if (name === "kidsOrDependant" && value?.trim() === types[2]) {
      window.localStorage.setItem("loan2chillApplicantAge", JSON.stringify({}));
      window.localStorage.setItem("loan2childrenNumber", 0);
      window.localStorage.setItem(
        "loan2otherChillApplicantAge",
        JSON.stringify({})
      );
      window.localStorage.setItem("loan2otherChildrenNumber", 0);
      setLoan2value({
        ...loan2value,
        kidsOrDependant: value,
        chillApplicantAge: [],
        otherChillApplicantAge: [],
      });
    }
    if (name === "otherDependents") {
      if (value === types[2]) {
        window.localStorage.setItem(
          "loan2otherChillApplicantAge",
          JSON.stringify({})
        );
        window.localStorage.setItem("loan2otherChildrenNumber", 0);

        setLoan2value({
          ...loan2value,
          [name]: value,
          otherChillApplicantAge: [],
        });
      }
    }
  };

  const {
    kidsOrDependant,
    chillApplicantAge,
    otherDependents,
    otherChillApplicantAge,
  } = loan2value;

  const step4 = [
    {
      id: 1,
      question: `${
        kidsOrDependant ? "9. Do you have any kids or dependants?" : ""
      }`,
    },
    {
      id: 2,
      question: `${
        chillApplicantAge?.length > 0
          ? "10. What are the age of these kidsdependants?"
          : ""
      }`,
    },
    {
      id: 10,
      question: `${
        otherDependents ? "11. Do you have any other dependants?" : ""
      }`,
    },
    {
      id: 11,
      question: `${
        otherChillApplicantAge?.length > 0
          ? "12. What are the age of these other dependants?"
          : ""
      }`,
    },
  ];

  useMemo(() => {
    if (
      kidsOrDependant ||
      chillApplicantAge ||
      otherDependents ||
      otherChillApplicantAge
    ) {
      setDataListMenuStep4(step4);
    }
    window.localStorage.setItem("listMenuStep4", JSON.stringify(step4));
    // eslint-disable-next-line
  }, [
    kidsOrDependant,
    chillApplicantAge,
    otherDependents,
    otherChillApplicantAge,
    otherChillApplicantAge?.length,
    chillApplicantAge?.length,
  ]);

  const onClickNext = () => {
    if (!loan2jointApplicationStatus) {
      setIsShowMessSole(true);
      return;
    }
    history.push("/refinance-fact-find-3/EmploymentStatus");
  };

  return (
    <LifeInsurance
      activeStep={4}
      listMenuStep4={dataListMenuStep4}
      numberScroll={800}
    >
      <Step08 handleGetLoan2value={handleGetLoan2value} />
      {kidsOrDependant?.trim() === types[1] ? (
        <Step09 handleGetLoan2value={handleGetLoan2value} />
      ) : (
        ""
      )}
      <Step10 handleGetLoan2value={handleGetLoan2value} />

      {otherDependents === types[1] && kidsOrDependant?.trim() === types[1] ? (
        <Step11 handleGetLoan2value={handleGetLoan2value} />
      ) : (
        ""
      )}
      {isShowMessSole ? (
        <div className="col d-flex justify-content-center mb-3 text-error">
          <img src={imgAller} alt="" className="mr-3" /> This category is only
          accessible when you are the Sole applicant/Joint applicant
        </div>
      ) : (
        ""
      )}

      <div className="group-btn-footer col d-flex justify-content-center mb-5">
        <Button
          className="btnPrimary life wow fadeInUp mt-0 in-progress"
          type="next"
          onClick={onClickNext}
        >
          NEXT
        </Button>
      </div>
    </LifeInsurance>
  );
};

export default KidsOrDependents;
