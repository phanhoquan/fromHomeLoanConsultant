/** @format */

import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../../index";

import Step31 from "./Step31";
import Step38B from "./Step38B";
import Step41E from "./Step41E";
// import Step38C from "./Step38C";
import Step32 from "./Step32";
import Step39B from "./Step39B";
import Step39D from "./Step39D";
import Step39C from "./Step39C";
import Step32B from "./Step32B";

export const types = {
  1: 'Owner Occupied',
  2: "Investment property",
};

const listNumberYearWorking = {
  "Less than 12 months": 0,
  "1 year": 1,
  "2 years": 2,
  "3 years": 3,
  "4 years": 4,
  "5+ years": 5,
}


const ResidentialInformation = () => {
  const history = useHistory();
  let listMenuStep9 = localStorage.getItem("listMenuStep9")
    ? JSON.parse(localStorage.getItem("listMenuStep9"))
    : [];

  const [dataListMenuStep9, setDataListMenuStep9] = useState(
    listMenuStep9 || []
  );

  const [loan2value, setLoan2value] = useState({
    fullAddress: localStorage.getItem("loan2fullAddress") || "",
    timeLiving39B: localStorage.getItem("timeLiving39B") || "",
    rentalPropertyIncome: localStorage.getItem("rentalPropertyIncome") || "",
    investmentProperty38B: localStorage.getItem("investmentProperty38B") || "",
    incomeProperty38C: localStorage.getItem("incomeProperty38C") || "",
    livingSituation41E: localStorage.getItem("livingSituation41E") || "",
    fullAddress39A: localStorage.getItem("loan2fullAddress39A") || "",
    fullAddress39C: localStorage.getItem("loan2fullAddress39C") || "",
    timeLiving39D: localStorage.getItem("timeLiving39D") || "",
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
    if (name === "investmentProperty38B") {
      localStorage.setItem("incomeProperty38C", "");
      localStorage.setItem("loan2fullAddress39C", "");
      localStorage.setItem("loan2street39C", "");
      localStorage.setItem("loan2city39C", "");
      localStorage.setItem("loan2state39C", "");
      localStorage.setItem("loan2postcode39C", "");
      localStorage.setItem("loan2fullAddress39A", "");
      localStorage.setItem("timeLiving39B", "");
      localStorage.setItem("rentalPropertyIncome", "");
      localStorage.setItem("timeLiving39D", "");
      localStorage.setItem("timeLiving39D", "");
      setLoan2value({
        ...loan2value,
        investmentProperty38B: value,
        incomeProperty38C: "",
        fullAddress39C:'',
        fullAddress39A:'',
        timeLiving39B: '',
        rentalPropertyIncome:'',
        timeLiving39D: '',
        livingSituation41E:''
      });
    }
    if (name ==="timeLiving39B" && listNumberYearWorking[name] < 3){
      localStorage.setItem("loan2fullAddress39C", "");
      localStorage.setItem("loan2street39C", "");
      localStorage.setItem("loan2city39C", "");
      localStorage.setItem("loan2state39C", "");
      localStorage.setItem("loan2postcode39C", "");
      localStorage.setItem("timeLiving39D", "");
      setLoan2value({
        ...loan2value,
        timeLiving39B: value,
        fullAddress39C: "",
        timeLiving39D: ''
      });
    }
  };

  const {
    fullAddress,
    rentalPropertyIncome,
    incomeProperty38C,
    investmentProperty38B,
    fullAddress39A,
    timeLiving39B,
    fullAddress39C,
    timeLiving39D,
    livingSituation41E
  } = loan2value;
  const step9 = [
    {
      id: 1,
      question: `${
        fullAddress
          ? "40a. What is the full residential address of your current property?"
          : ""
      }`,
    },
    {
      id: 2,
      question: `${
        investmentProperty38B
          ? "40b. Is this property Owner Occupied or an Investment Property?"
          : ""
      }`,
    },
    // {
    //   id: 3,
    //   question: `${
    //     incomeProperty38C
    //       ? "40c. What is the rental income of this property?"
    //       : ""
    //   }`,
    // },
    {
      id: 4,
      question: `${
        rentalPropertyIncome
          ? "41. How much rental income do you have on this property?"
          : ""
      }`,
    },
    {
      id: 5,
      question: `${
        fullAddress39A
          ? "42a. What is your current living address?"
          : ""
      }`,
    },
    {
      id: 6,
      question: `${
        timeLiving39B
          ? "42b. How long have you been living at this address for?"
          : ""
      }`,
    },
    {
      id: 7,
      question: `${
        fullAddress39C
          ? "42c. Since you have less than 3 years living history at your current address, where were you previously living?"
          : ""
      }`,
    },
    {
      id: 8,
      question: `${
        timeLiving39D
          ? "42d. How long were you living at that address for?"
          : ""
      }`,
    },
    {
      id: 9,
      question: `${
        livingSituation41E
          ? "42e. What is your current living situation?"
          : ""
      }`,
    },
  ];

  useMemo(() => {
    if (fullAddress || fullAddress39A || rentalPropertyIncome || incomeProperty38C ||
      investmentProperty38B || timeLiving39B || fullAddress39C || timeLiving39D ||livingSituation41E) {
      setDataListMenuStep9(step9);
    }
    window.localStorage.setItem("listMenuStep9", JSON.stringify(step9));
    // eslint-disable-next-line
  }, [fullAddress, fullAddress39A, rentalPropertyIncome, incomeProperty38C, investmentProperty38B, timeLiving39B, fullAddress39C, timeLiving39D||livingSituation41E]);
  const onClickNext = () => {
    history.push("/refinance-home-loan-consultant-test/InvestmentProperties");
  };
  return (
    <LifeInsurance
      activeStep={8}
      numberScroll={2000}
      listMenuStep9={dataListMenuStep9}
    >
      <Step31 handleGetLoan2value={handleGetLoan2value} />
      <Step38B handleGetLoan2value={handleGetLoan2value} />
      { investmentProperty38B === types[2] ?(
        <Step32B handleGetLoan2value={handleGetLoan2value} />
      ):''}

      {investmentProperty38B ? (
        <>
          { investmentProperty38B !== types[2] ?(
            <>
              <Step39B handleGetLoan2value={handleGetLoan2value} />
              {timeLiving39B && listNumberYearWorking[timeLiving39B] < 3 ? (
                <>
                  <Step39C handleGetLoan2value={handleGetLoan2value} />
                  <Step39D handleGetLoan2value={handleGetLoan2value} />
                </>
              ):""}
            </>
          ):
          <>
              <Step32 handleGetLoan2value={handleGetLoan2value} />  
              <Step39B handleGetLoan2value={handleGetLoan2value} />
              {timeLiving39B && listNumberYearWorking[timeLiving39B] < 3 ? (
                <>
                  <Step39C handleGetLoan2value={handleGetLoan2value} />
                  <Step39D handleGetLoan2value={handleGetLoan2value} />
                </>
              ):""}
          </>
          }
          <Step41E handleGetLoan2value={handleGetLoan2value} />
        </>
      ):''
    }
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

export default ResidentialInformation;
