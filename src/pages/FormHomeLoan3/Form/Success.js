/** @format */

import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { getIPClient, sendDataToDatabowl } from "../../../utils/api";
import { getTimeNow } from "../../../utils/formatTime";

const getDataMore = () => {
  const dataMore = {};
  const uid = localStorage.getItem("uid");
  const f_64_clickid = localStorage.getItem("aff_click_id");
  const f_457_utm_source = localStorage.getItem("utm_source");
  const f_458_utm_medium = localStorage.getItem("utm_medium");
  const f_589_utm_campaign = localStorage.getItem("utm_campaign");

  if (uid !== null && uid !== "") {
    dataMore.uid = uid;
  } else {
    dataMore.sid = 17;
  }
  if (f_457_utm_source !== null && f_457_utm_source !== "") {
    dataMore.f_457_utm_source = f_457_utm_source;
  }
  if (f_64_clickid !== null && f_64_clickid !== "") {
    dataMore.f_64_clickid = f_64_clickid;
  }
  if (f_458_utm_medium !== null && f_458_utm_medium !== "") {
    dataMore.f_458_utm_medium = f_458_utm_medium;
  }
  if (f_589_utm_campaign !== null && f_589_utm_campaign !== "") {
    dataMore.f_589_utm_campaign = f_589_utm_campaign;
  }

  return dataMore;
};

export const types = {
  1: "Personal Loans",
  2: "Car Loans",
  3: "HECS debt",
  4: "None of the above",
};

export const types2 = {
  1: "YES",
  2: "NO",
};

export default function Success() {
  const history = useHistory();
  const [dataState, setDataState] = useState(false);
  const [timeSubmit, setTimeSubmit] = useState(false);

  useEffect(() => {
    setTimeSubmit(new Date().getTime());
    getIPClient(setDataStateWithIpClient);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const chillApplicantAge = localStorage.getItem("loan2chillApplicantAge")
    ? JSON.parse(localStorage.getItem("loan2chillApplicantAge"))
    : {};

  const otherChillApplicantAge = localStorage.getItem(
    "loan2otherChillApplicantAge"
  )
    ? JSON.parse(localStorage.getItem("loan2otherChillApplicantAge"))
    : {};

  const personalLoansStatus = localStorage.getItem("loan2personalLoansStatus")
    ? localStorage.getItem("loan2personalLoansStatus").split(",")
    : [];

  const setDataStateWithIpClient = (ipClient) => {
    setDataState({
      ...getDataMore(),
      f_1_email: localStorage.getItem("loan2email") || "",
      f_3_firstname: localStorage.getItem("loan2firstName") || "",
      f_4_lastname: localStorage.getItem("loan2lastName") || "",
      f_88_employment_status:
        localStorage.getItem("loan2employmentStatus") || "", //1

      f_40_city: localStorage.getItem("loan2city") || "",
      f_41_state: localStorage.getItem("loan2state") || "",
      f_11_postcode: localStorage.getItem("loan2postcode") || "",
      f_6_address1: localStorage.getItem("loan2fullAddress") || "", //30

      f_17_ipaddress: ipClient,
      f_58_submissiondate: getTimeNow(),
      f_76_user_agent: navigator.userAgent,
      f_85_type_of_loan: localStorage.getItem("loan2currentLoanStatus") || "", //2

      f_1579_current_interest_rate_fixed:
        localStorage.getItem("loan2valueInterestRate") ||
        localStorage.getItem("loan2valueInterestRateSplit") ||
        "", //3

      f_1580_current_interest_rate_variable:
        localStorage.getItem("loan2valueInterestRate2Variable") ||
        localStorage.getItem("loan2valueInterestRate2Split") ||
        "", //3

      f_1581_sole_or_joint_applicant:
        localStorage.getItem("loan2jointApplicationStatus") || "", //4

      f_1582_firstname_joint_applicant:
        localStorage.getItem("loan2firstNameOther") || "", //5
      f_1583_lastname_joint_applicant:
        localStorage.getItem("loan2lastNameOther") || "", // 5

      f_1584_joint_applicant_relationship_status:
        localStorage.getItem("loan2relationshipYour") || "", // 6
      f_1711_partners_email_address:
        localStorage.getItem("loan2emailApplicants") || "", // 6

      f_1585_age_sole_applicant:
        localStorage.getItem("loan2soleApplicantAge") || "", //7
      f_1586_age_joint_applicant:
        localStorage.getItem("loan2jointApplicantAge") || "", // 7

      f_1587_kid_dependants: localStorage.getItem("loan2kidsOrDependant") || "", // 8
      f_1588_number_of_kids_dependants:
        localStorage.getItem("loan2childrenNumber") || "", //9

      f_1589_age_of_kid_dependant_1: chillApplicantAge?.name1 || "",
      f_1590_age_of_kid_dependant_2: chillApplicantAge?.name2 || "",
      f_1591_age_of_kid_dependant_3: chillApplicantAge?.name3 || "",
      f_1592_age_of_kid_dependant_4: chillApplicantAge?.name4 || "",
      f_1593_age_of_kid_dependant_5: chillApplicantAge?.name5 || "",
      f_1594_age_of_kid_dependant_6: chillApplicantAge?.name6 || "",
      f_1595_age_of_kid_dependant_7: chillApplicantAge?.name7 || "",
      f_1596_age_of_kid_dependant_8: chillApplicantAge?.name8 || "",
      f_1597_age_of_kid_dependant_9: chillApplicantAge?.name9 || "",
      f_1598_age_of_kid_dependant_1: chillApplicantAge?.name10 || "", //10

      f_1599_other_dependats:
        localStorage.getItem("loan2otherDependents") || "", //11
      f_1606_number_of_other_dependants:
        localStorage.getItem("loan2otherChildrenNumber") || "", //12

      f_1600_age_other_dependants_1: otherChillApplicantAge?.otherName1 || "",
      f_1601_age_other_dependants_2: otherChillApplicantAge?.otherName2 || "",
      f_1602_age_other_dependants_3: otherChillApplicantAge?.otherName3 || "",
      f_1603_age_other_dependants_4: otherChillApplicantAge?.otherName4 || "",
      f_1604_age_other_dependants_5: otherChillApplicantAge?.otherName5 || "", //13

      f_1605_confirm_employment_status:
        localStorage.getItem("loan2workingStatus") || "", //14
      f_1607_update_employment_status:
        localStorage.getItem("loan2employmentWorkingStatus") || "", //15
      f_1608_job_role_sole_applicant:
        localStorage.getItem("loan2occupation") || "", //16
      f_1713_sole_applicants_salary:
        localStorage.getItem("loan2yourSalary") || "", //16B
      f_1609_job_duration_sole_applicant:
        localStorage.getItem("loan2numberYearWorking") || "", //17

      f_1610_self_employed_business_type:
        localStorage.getItem("loan2typeOfBusinessOther") || "", //19
      f_1612_self_employed_abn_years:
        localStorage.getItem("loan2businessBeenRegistered") || "", //20

      f_1615_tax_completed: localStorage.getItem("loan2taxReturns") || "", //21

      f_1613_tax_2019: localStorage.getItem("loan2priceTax2019") || "", //22
      f_1614_tax_2020: localStorage.getItem("loan2priceTax2020") || "", //22

      f_1616_joint_applicant_occupation:
        localStorage.getItem("loan2partnersOccupation") || "", //23
      f_1617_joint_applicant_employment_status:
        localStorage.getItem("loan2employmentPartnersWorkingStatus") || "", //24
      f_1618_joint_applicant_maternity:
        localStorage.getItem("loan2numberPartnerReturn") || "", //25

      f_1630_personal_loan_confirm:
        (personalLoansStatus && !!personalLoansStatus?.includes(types[1])
          ? types[1]
          : "") || "", //26
      f_1629_car_loan_confirm:
        (personalLoansStatus && !!personalLoansStatus?.includes(types[2])
          ? types[2]
          : "") || "",
      f_1631_hecs_debt_confirm:
        (personalLoansStatus && !!personalLoansStatus?.includes(types[3])
          ? types[3]
          : "") || "",

      f_1620_car_loan_institution:
        localStorage.getItem("loan2personalLoan") || "", //27a,
      f_1621_car_loan_amount:
        localStorage.getItem("loan2personalLoanAmount") || "", // 27a,

      f_1624_personal_loan_institution:
        localStorage.getItem("loan2carLoan") || "", //27b
      f_1625_personal_loan_amount:
        localStorage.getItem("loan2carLoanAmount") || "", //27b

      f_1622_hecs_institution: localStorage.getItem("loan2HECSDebt") || "", //27c
      f_1623_hecs_amount: localStorage.getItem("loan2HECSDebtAmount") || "", // 27c

      f_1628_credit_card_confirm: localStorage.getItem("loan2creditCard") || "", //29

      f_1626_credit_card_institution:
        localStorage.getItem("loan2valueCreditCard") || "", // 30

      f_1627_credit_card_amount:
        localStorage.getItem("loan2valueCreditCardAmount") || "", // 30

      f_1632_loan_type:
        localStorage.getItem("loan2currentlyRenting") === types2[1]
          ? "Investment"
          : "Owner Occupied" || "", //32,
      f_1633_additional_notes: localStorage.getItem("contentNoteVale") || "", //33
      f_1678_timeframe: localStorage.getItem("loan2timeRefinancing") || "", //34
      f_1712_rental_property_income:
        localStorage.getItem("rentalPropertyIncome") || "",

      f_92_property_type: localStorage.getItem("loan2loanOptionType") || "",
      f_391_borrow_amount:
        localStorage.getItem("priceBorrow") ||
        localStorage.getItem("priceOwing") ||
        "",

      f_87_value_of_property:
        localStorage.getItem("propertyValue") ||
        localStorage.getItem("priceBuy") ||
        "",
      f_721_mortgage_lender: localStorage.getItem("priceBuy") || "",
      f_78_income: localStorage.getItem("pricePreTax"),

      cid: 10679,
      f_83_offer_url: "https://enquiry.makescents.com.au/refinance-fact-find-3",
    });
  };

  const redirectThank = (data) => {
    history.push({
      pathname: `/refinance-fact-find-3/step-reset`,
    });
  };

  const success = (data) => {
    const longTimeSubmit = new Date().getTime() - timeSubmit;
    if (longTimeSubmit > 1000) {
      redirectThank(data);
    } else {
      setTimeout(() => {
        redirectThank(data);
      }, 1000 - longTimeSubmit);
    }
  };

  useMemo(() => {
    if (dataState) {
      sendDataToDatabowl(dataState, success, success);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataState]);

  return (
    <div className="loadingSection loadingLifeInsurance">
      <FadeLoader margin={10} />
      <p className="text-center mt-5">Processing...</p>
    </div>
  );
}
