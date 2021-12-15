/** @format */

import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../../index";

import Step12 from "./Step12";
import Step13 from "./Step13";
import Step14 from "./Step14";
import Step15 from "./Step15";
import Step16 from "./Step16";
import Step16B from "./Step16B";
import Step17 from "./Step17";
import Step17B1 from "./Step17B1";
import Step17B2 from "./Step17B2";
import Step18 from "./Step18";
import Step19 from "./Step19";
import Step20 from "./Step20";

import Step21 from "./Step21";
import Step22 from "./Step22";
import Step23 from "./Step23";
import Step24 from "./Step24";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};
export const types2 = {
  1: "Full Time",
  2: "Part Time",
  3: "Casual",
  4: "Self Employed",
  5: "Unemployed",
  6: "Maternal Leave",
};

export const types3 = {
  1: "Full Time ",
  2: "Part Time ",
  3: "Casual ",
  4: "Self Employed ",
  5: "Unemployed ",
  6: "Maternal Leave ",
};
export const types4 = {
  1: "YES ",
  2: "NO ",
};

const listNumberYearWorking = {
  "Less than 12 months": 0,
  "1 year": 1,
  "2 years": 2,
  "3 years": 3,
  "4 years": 4,
  "5+ years": 5,
}


const EmploymentStatusSoleJoint = () => {
  const history = useHistory();
  const jointApplicationStatus =
    localStorage.getItem("loan2jointApplicationStatus") || "";
  let listMenuStep5 = localStorage.getItem("listMenuStep5")
    ? JSON.parse(localStorage.getItem("listMenuStep5"))
    : [];
  const employmentStatus = localStorage.getItem("loan2employmentStatus");
  const [employmentStatusStep, setEmploymentStatusStep] =
    useState(employmentStatus);

  const [dataListMenuStep5, setDataListMenuStep5] = useState(
    listMenuStep5 || []
  );

  const [loan2value, setLoan2value] = useState({
    workingStatus: localStorage.getItem("loan2workingStatus") || "",
    employmentWorkingStatus:
      localStorage.getItem("loan2employmentWorkingStatus") || "",
    numberPartnerReturn16:
      localStorage.getItem("loan2numberPartnerReturn16") || "",
    occupation: localStorage.getItem("loan2occupation") || "",
    loan2occupation17B1: localStorage.getItem("loan2occupation17B1") || "",
    numberYearWorking: localStorage.getItem("loan2numberYearWorking") || "",
    typeOfBusinessOther: localStorage.getItem("loan2typeOfBusinessOther") || "",
    businessBeenRegistered:
      localStorage.getItem("loan2businessBeenRegistered") || "",
    taxReturns: localStorage.getItem("loan2taxReturns") || "",
    priceTax2019: localStorage.getItem("loan2priceTax2019") || "",
    priceTax2020: localStorage.getItem("loan2priceTax2020") || "",
    partnersOccupation: localStorage.getItem("loan2partnersOccupation") || "",
    employmentPartnersWorkingStatus:
      localStorage.getItem("loan2employmentPartnersWorkingStatus") || "",
    numberPartnerReturn: localStorage.getItem("loan2numberPartnerReturn") || "",
    partnersSalary: localStorage.getItem("loan2partnersSalary") || "",
    loan2yourSalary: localStorage.getItem("loan2yourSalary") || "",
    numberYearWorking17b: localStorage.getItem("loan2numberYearWorking17b") || "",
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
    if (name === "employmentWorkingStatus") {
      setEmploymentStatusStep(value);
      switch (value.trim()) {
        case types2[1]:
        case types2[2]:
        case types2[3]:
          window.localStorage.setItem("loan2numberPartnerReturn16", "");
          window.localStorage.setItem("loan2typeOfBusinessOther", "");
          window.localStorage.setItem("loan2taxReturns", "");
          window.localStorage.setItem("loan2priceTax2019", "");
          window.localStorage.setItem("loan2priceTax2020", "");
          setLoan2value({
            ...loan2value,
            employmentWorkingStatus: value,
            numberPartnerReturn16: "",
            typeOfBusinessOther: "",
            taxReturns: "",
            priceTax2019: "",
            priceTax2020: "",
          });
          break;
        case types2[4]:
          window.localStorage.setItem("loan2numberPartnerReturn16", "");
          window.localStorage.setItem("loan2occupation", "");
          window.localStorage.setItem("loan2numberYearWorking", "");
          localStorage.setItem("loan2numberYearWorking17b", '');
          window.localStorage.setItem("loan2occupation17B1", "");
          window.localStorage.setItem("loan2yourSalary", "");
          setLoan2value({
            ...loan2value,
            employmentWorkingStatus: value,
            numberPartnerReturn16: "",
            loan2yourSalary: "",
            occupation: "",
            numberYearWorking: "",
            loan2occupation17B1: '',
            numberYearWorking17b:''
          });
          break;
        case types2[5]:
          window.localStorage.setItem("loan2numberPartnerReturn16", "");
          window.localStorage.setItem("loan2occupation", "");
          window.localStorage.setItem("loan2numberYearWorking", "");
          window.localStorage.setItem("loan2occupation17B1", "");
          window.localStorage.setItem("loan2numberYearWorking17b", "");
          window.localStorage.setItem("loan2typeOfBusinessOther", "");
          window.localStorage.setItem("loan2businessBeenRegistered", "");
          window.localStorage.setItem("loan2taxReturns", "");
          window.localStorage.setItem("loan2priceTax2019", "");
          window.localStorage.setItem("loan2priceTax2020", "");
          window.localStorage.setItem("loan2yourSalary", "");

          setLoan2value({
            ...loan2value,
            employmentWorkingStatus: value,
            numberPartnerReturn16: "",
            loan2yourSalary: "",
            occupation: "",
            numberYearWorking: "",
            typeOfBusinessOther: "",
            loan2occupation17B1: '',
            numberYearWorking17b: '',
            priceTax2019: "",
            priceTax2020: "",
          });

          break;
        default:
          break;
      }
    }

    if (name === "workingStatus") {
      window.localStorage.setItem("loan2employmentWorkingStatus", "");
    }

    if (name === "employmentPartnersWorkingStatus" && value !== types3[6]) {
      window.localStorage.setItem("loan2numberPartnerReturn", "");
    }
    if (name === "taxReturns" && value === types4[2]) {
      window.localStorage.setItem("loan2priceTax2019", "");
      window.localStorage.setItem("loan2priceTax2020", "");
      setLoan2value({
        ...loan2value,
        taxReturns: value,
        priceTax2019: "",
        priceTax2020: "",
      });
    }
  };
  const {
    workingStatus,
    employmentWorkingStatus,
    numberPartnerReturn16,
    occupation,
    numberYearWorking,
    loan2occupation17B1,
    typeOfBusinessOther,
    businessBeenRegistered,
    taxReturns,
    priceTax2019,
    priceTax2020,
    partnersOccupation,
    employmentPartnersWorkingStatus,
    numberPartnerReturn,
    partnersSalary,
    loan2yourSalary,
    numberYearWorking17b
  } = loan2value;

  const titleStep12 = `13. You mentioned that you are working ‘${employmentStatus}’ Is that correct?`;
  const step5 = [
    {
      id: 1,
      question: `${workingStatus ? titleStep12 : ""}`,
    },
    {
      id: 2,
      question: `${
        employmentWorkingStatus ? "14. What is your employment status?" : ""
      }`,
    },
    {
      id: 3,
      question: `${
        numberPartnerReturn16
          ? "15. When are you expected to return to work?"
          : ""
      }`,
    },
    {
      id: 4,
      question: `${occupation ? "16. What is your occupation?" : ""}`,
    },
    {
      id: 5,
      question: `${
        numberYearWorking
          ? "17. How long have you been working at this job for?"
          : ""
      }`,
    },
    {
      id: 6,
      question: `${
        loan2occupation17B1
          ? "17b. What was your previous occupation?"
          : ""
      }`,
    },
    {
      id: 7,
      question: `${
        numberYearWorking17b
          ? "17b. How long were you working at that job for?"
          : ""
      }`,
    },
    {
      id: 8,
      question: `${loan2yourSalary ? "18. What is your salary?" : ""}`,
    },
    {
      id: 9,
      question: `${
        typeOfBusinessOther ? "19. What type of business is this?" : ""
      }`,
    },
    {
      id: 10,
      question: `${
        businessBeenRegistered
          ? "20. How many years has the ABN for this business been registered for?"
          : ""
      }`,
    },
    {
      id: 11,
      question: `${
        taxReturns
          ? "21. Have the tax returns for 2019/2020 been completed?"
          : ""
      }`,
    },
    {
      id: 12,
      question: `${
        priceTax2019 ? "22. What was your 2019 taxable income?" : ""
      }`,
    },
    {
      id: 13,
      question: `${
        priceTax2020 ? "23. What was your 2020 taxable income?" : ""
      }`,
    },
    {
      id: 14,
      question: `${
        partnersOccupation && jointApplicationStatus === types[2]
          ? "24. What is your partners occupation?"
          : ""
      }`,
    },
    {
      id: 15,
      question: `${
        employmentPartnersWorkingStatus && jointApplicationStatus === types[2]
          ? "25. What is your partners employment status?"
          : ""
      }`,
    },
    {
      id: 16,
      question: `${
        numberPartnerReturn && jointApplicationStatus === types[2]
          ? "26. When is your partner expected to return to work?"
          : ""
      }`,
    },
    {
      id: 17,
      question: `${
        partnersSalary && jointApplicationStatus === types[2]
          ? "27. What is your partners salary?"
          : ""
      }`,
    },
  ];

  useMemo(() => {
    if (
      workingStatus ||
      employmentWorkingStatus ||
      numberPartnerReturn16 ||
      occupation ||
      numberYearWorking ||
      typeOfBusinessOther ||
      businessBeenRegistered ||
      taxReturns ||
      priceTax2019 ||
      priceTax2020 ||
      partnersOccupation ||
      employmentPartnersWorkingStatus ||
      numberPartnerReturn ||
      partnersSalary ||
      loan2yourSalary ||
      loan2occupation17B1 ||
      numberYearWorking17b
    ) {
      setDataListMenuStep5(step5);
    }
    window.localStorage.setItem("listMenuStep5", JSON.stringify(step5));
    // eslint-disable-next-line
  }, [
    workingStatus,
    employmentWorkingStatus,
    numberPartnerReturn16,
    occupation,
    numberYearWorking,
    typeOfBusinessOther,
    businessBeenRegistered,
    taxReturns,
    priceTax2019,
    priceTax2020,
    partnersOccupation,
    employmentPartnersWorkingStatus,
    numberPartnerReturn,
    partnersSalary,
    loan2yourSalary,
    numberYearWorking17b
  ]);
  
  const onClickNext = () => {
    history.push("/refinance-home-loan-consultant-test/Liabilities");
  };

  return (
    <LifeInsurance
      activeStep={5}
      numberScroll={1200}
      listMenuStep5={dataListMenuStep5}
      jointApplicationStatus={jointApplicationStatus}
    >
      <Step12 handleGetLoan2value={handleGetLoan2value} />
      <Step13
        handleGetLoan2value={handleGetLoan2value}
        workingStatus={workingStatus}
      />
      <Step14
        handleGetLoan2value={handleGetLoan2value}
        employmentWorkingStatus={employmentWorkingStatus}
      />
      <Step15
        handleGetLoan2value={handleGetLoan2value}
        employmentWorkingStatus={employmentWorkingStatus}
        workingStatus={workingStatus}
      />
      
      <Step16
        handleGetLoan2value={handleGetLoan2value}
        employmentWorkingStatus={employmentWorkingStatus}
        workingStatus={workingStatus}
      />
      {numberYearWorking&&listNumberYearWorking[numberYearWorking] < 3 ? (
        <>
          <Step17B1
            handleGetLoan2value={handleGetLoan2value}
            employmentWorkingStatus={employmentWorkingStatus}
            workingStatus={workingStatus}
          />
          <Step17B2
            handleGetLoan2value={handleGetLoan2value}
            employmentWorkingStatus={employmentWorkingStatus}
            workingStatus={workingStatus}
          />
        </>
      ):''}
      
      {employmentStatusStep.trim() !== types2[4] &&
      employmentStatusStep.trim() !== types2[5] ? (
        <Step16B handleGetLoan2value={handleGetLoan2value} />
      ) : (
        ""
      )}
      <Step17
        handleGetLoan2value={handleGetLoan2value}
        employmentWorkingStatus={employmentWorkingStatus}
        workingStatus={workingStatus}
      />
      
      <Step18
        handleGetLoan2value={handleGetLoan2value}
        employmentWorkingStatus={employmentWorkingStatus}
        workingStatus={workingStatus}
      />
      {employmentStatusStep.trim() === types2[4] ? (
        <>
          <Step19 handleGetLoan2value={handleGetLoan2value} />
          {taxReturns === types4[1] ? (
            <Step20 handleGetLoan2value={handleGetLoan2value} />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      <Step21
        handleGetLoan2value={handleGetLoan2value}
        jointApplicationStatus={jointApplicationStatus}
      />
      <Step22
        handleGetLoan2value={handleGetLoan2value}
        jointApplicationStatus={jointApplicationStatus}
      />
      <Step23
        handleGetLoan2value={handleGetLoan2value}
        jointApplicationStatus={jointApplicationStatus}
        employmentPartnersWorkingStatus={employmentPartnersWorkingStatus}
      />
      <Step24
        handleGetLoan2value={handleGetLoan2value}
        jointApplicationStatus={jointApplicationStatus}
      />

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

export default EmploymentStatusSoleJoint;
