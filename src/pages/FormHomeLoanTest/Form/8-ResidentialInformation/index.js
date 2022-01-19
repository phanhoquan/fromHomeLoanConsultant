/** @format */

import React, { useMemo, useState } from "react";
import LifeInsurance from "../../index";

import Step31 from "./Step31";
import Step38B from "./Step38B";
// import Step38C from "./Step38C";
import Step32 from "./Step32";
import Step39B from "./Step39B";
import Step39D from "./Step39D";
import Step39C from "./Step39C";
import Step32B from "./Step32B";
import Step33 from "./Step33";

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
  let listMenuStep9 = localStorage.getItem("listMenuStep9")
    ? JSON.parse(localStorage.getItem("listMenuStep9"))
    : [];

  const [dataListMenuStep9, setDataListMenuStep9] = useState(
    listMenuStep9 || []
  );

  const [loan2value, setLoan2value] = useState({
    fullAddress: localStorage.getItem("loan2fullAddress") || "",
    timeLiving39B: localStorage.getItem("timeLiving39B") || "",
    timeRefinancing: localStorage.getItem("loan2timeRefinancing") || "",
    rentalPropertyIncome: localStorage.getItem("rentalPropertyIncome") || "",
    investmentProperty38B: localStorage.getItem("investmentProperty38B") || "",
    incomeProperty38C: localStorage.getItem("incomeProperty38C") || "",

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
      setLoan2value({
        ...loan2value,
        investmentProperty38B: value,
        incomeProperty38C: "",
        fullAddress39C:'',
        fullAddress39A:'',
        timeLiving39B: '',
        rentalPropertyIncome:'',
        timeLiving39D: ''
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
    timeRefinancing,
    rentalPropertyIncome,
    incomeProperty38C,
    investmentProperty38B,
    fullAddress39A,
    timeLiving39B,
    fullAddress39C,
    timeLiving39D
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
        fullAddress39A
          ? "41a. What is your current living address?"
          : ""
      }`,
    },
    {
      id: 5,
      question: `${
        timeLiving39B
          ? "41b. How long have you been living at this address for?"
          : ""
      }`,
    },
    {
      id: 6,
      question: `${
        fullAddress39C
          ? "41c. Since you have less than 3 years living history at your current address, where were you previously living?"
          : ""
      }`,
    },
    {
      id: 7,
      question: `${
        timeLiving39D
          ? "41d. How long were you living at that address for?"
          : ""
      }`,
    },
    {
      id: 8,
      question: `${
        rentalPropertyIncome
          ? "42. How much rental income do you have on this property?"
          : ""
      }`,
    },
    {
      id: 9,
      question: `${
        timeRefinancing
          ? "43. What kind of time frame are you thinking of refinancing?"
          : ""
      }`,
    },
  ];

  useMemo(() => {
    if (fullAddress || fullAddress39A || rentalPropertyIncome || incomeProperty38C ||
      investmentProperty38B || timeLiving39B || fullAddress39C || timeLiving39D) {
      setDataListMenuStep9(step9);
    }
    window.localStorage.setItem("listMenuStep9", JSON.stringify(step9));
    // eslint-disable-next-line
  }, [fullAddress, fullAddress39A, timeRefinancing, rentalPropertyIncome, incomeProperty38C, investmentProperty38B, timeLiving39B, fullAddress39C, timeLiving39D]);

  return (
    <LifeInsurance
      activeStep={8}
      numberScroll={2000}
      listMenuStep9={dataListMenuStep9}
    >
      <Step31 handleGetLoan2value={handleGetLoan2value} />
      <Step38B handleGetLoan2value={handleGetLoan2value} />
      {investmentProperty38B ? (
        <>
          { investmentProperty38B !== types[2] ?(
            <>
              <Step39B handleGetLoan2value={handleGetLoan2value} />
              <Step33 handleGetLoan2value={handleGetLoan2value} />
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
            <Step32B handleGetLoan2value={handleGetLoan2value} />
          </>
          }
        </>
      ):''
    }
    </LifeInsurance>
  );
};

export default ResidentialInformation;
