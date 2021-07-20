/** @format */

import React, { useState, useEffect, useMemo } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { useHistory } from "react-router-dom";
import { redirectTo } from "../../../utils/beginPage";
import { parseZipCodeToObject } from "../../../utils/zipCodes";
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

export default function Success() {
  const history = useHistory();

  const firstNameText = localStorage.getItem("firstName");
  const lastNameText = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const postcodeOptions = localStorage.getItem("postcodeOptions");
  const propertyValue = localStorage.getItem("propertyValue");
  const borrowAmount = localStorage.getItem("borrowAmount");
  const priceOwing = localStorage.getItem("priceOwing");
  const checkboxRefinancePurchase = localStorage.getItem(
    "checkboxRefinancePurchase"
  );
  const employmentStatus = localStorage.getItem("employmentStatus");
  const pricePreTax = localStorage.getItem("pricePreTax");
  const phone = localStorage.getItem("phone");
  const refinanceBank = localStorage.getItem("refinanceBank");

  const { city, state, postcode } = parseZipCodeToObject(
    localStorage.getItem("postcodeOptions") || ""
  );
  const [dataState, setDataState] = useState(false);
  const [timeSubmit, setTimeSubmit] = useState(false);

  useEffect(() => {
    setTimeSubmit(new Date().getTime());
    getIPClient(setDataStateWithIpClient);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setDataStateWithIpClient = (ipClient) => {
    setDataState({
      ...getDataMore(),
      f_1_email: email,
      f_3_firstname: firstNameText,
      f_4_lastname: lastNameText,
      f_15_mobile: phone,
      f_40_city: city,
      f_41_state: state,
      f_11_postcode: postcode,
      f_1251_Refinance_Amount: priceOwing,
      f_88_employment_status: employmentStatus,
      f_78_income: pricePreTax,
      f_17_ipaddress: ipClient,
      f_58_submissiondate: getTimeNow(),
      f_76_user_agent: navigator.userAgent,
      f_391_borrow_amount: borrowAmount || "", //2
      f_92_property_type: checkboxRefinancePurchase, //1
      f_87_value_of_property: propertyValue, //3
      f_721_mortgage_lender: refinanceBank || "", //4
      cid: 8039,
      f_83_offer_url: "https://enquiry.makescents.com.au/refinance-fact-find",
    });
  };

  const redirectThank = (data) => {
    const fname = localStorage.getItem("firstName");
    redirectTo("/refinance-fact-find");
    window.location = `https://makescents.com.au/thank-you-echoice/?f=${fname}`;
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
      if (
        lastNameText &&
        firstNameText &&
        email &&
        employmentStatus &&
        phone &&
        pricePreTax &&
        postcodeOptions
      ) {
        sendDataToDatabowl(dataState, success, success);
      } else {
        history.push({
          pathname: `/refinance-fact-find/step-eight`,
        });
      }
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
