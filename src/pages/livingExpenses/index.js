/** @format */

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import moment from "moment";
import { getAllTotalAmount, getTotalAmount } from "./helpers/index";
import checkEmail from "../../utils/checkEmail";
import ModalSend from "../Modal/ModalSend";

import FormIndex from "./Components/Form";

const listOption = [
  {
    value: "Annually",
    label: "Annually",
  },
  {
    value: "Quarterly",
    label: "Quarterly",
  },
  {
    value: "Monthly",
    label: "Monthly",
  },
  {
    value: "4Weekly",
    label: "4 Weekly",
  },
  {
    value: "Fortnightly",
    label: "Fortnightly",
  },
  {
    value: "Weekly",
    label: "Weekly",
  },
];

const types = {
  weekly: "Weekly",
  monthly: "Monthly",
  annually: "Annually",
};

const LivingExpenses = () => {
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100 body-living-expenses");
  }
  const [isShowSendSuccess, setIsShowSendSuccess] = useState(false);
  const [frequency, setFrequency] = useState(types.weekly);

  const initDefault = {
    frequencyBoard: listOption[5],
  };

  const [statusDataDetail, setStatusDataDetail] = useState({
    firstName: -1,
    lastName: -1,
    email: -1,
  });

  const [dataDetail, setDataDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [dataForm, setDataForm] = useState(initDefault);

  const { firstName, lastName, email } = dataDetail;
  const checkEmailStatus = (value) => {
    let test = checkEmail(value || "");
    return test;
  };

  const checkFirstNameStatus = (value) => {
    let test = /^([A-Za-z'’＇`]{2,})$/.test(value);
    return test;
  };

  const checkLastNameStatus = (value) => {
    let test = /^([A-Za-z'’＇`]{2,})$/.test(value);
    return test;
  };

  const handleGetDataDetail = (data) => {
    setDataDetail(data);
  };

  const onKeyUpHandle = (value, name) => {
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const myObjCurrency = {
    style: "currency",
    currency: "USD",
  };

  //========Sử lý tính toán==========\\\
  const fourWeekly = 4;
  const fortnightly = 2;
  const quarterly = 3;
  const annually = 12;
  const amountQuarterly = 13.04; // trung bình Tuần/quý
  // 1 Số ngày trong tháng
  const numberMonthly = moment(new Date(), "YYYY-MM").daysInMonth();
  const numberWeeklyOfYear = 52.1429; // Trung bình tổng số tuần /1 năm

  //2 Lấy số tuần trong tháng
  const weekLy = numberMonthly / 7.133;

  const onBlurHandle = (
    value,
    name,
    optionSelect,
    nameSelect,
    nameTotalAmount
  ) => {
    const valueSelect = optionSelect?.value;
    let amount = value ? parseInt(value.replace(/,/g, ""), 10) : 0;
    if (amount > 10000000) {
      amount = 10000000;
    }

    switch (frequency) {
      case types.weekly:
        switch (valueSelect) {
          case "Weekly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${amount.toLocaleString("en-US", myObjCurrency)}`
                : "$0.00",
            });
            break;

          case "Monthly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount / weekLy).toLocaleString("en-US", myObjCurrency)}`
                : "$0.00",
            });
            break;

          case "4Weekly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount / fourWeekly).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : `$0.00`,
            });
            break;
          case "Fortnightly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount / fortnightly).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : "$0.00",
            });
            break;
          case "Quarterly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount / amountQuarterly).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : "$0.00",
            });
            break;

          case "Annually":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount / numberWeeklyOfYear).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : "$0.00",
            });
            break;

          default:
            break;
        }

        break;
      case types.monthly:
        switch (valueSelect) {
          case "Weekly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount * weekLy).toLocaleString("en-US", myObjCurrency)}`
                : "$0.00",
            });
            break;

          case "Monthly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${amount.toLocaleString("en-US", myObjCurrency)}`
                : "$0.00",
            });
            break;

          case "4Weekly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount * (weekLy / fourWeekly)).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : "$0.00",
            });
            break;
          case "Fortnightly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount * (weekLy / fortnightly)).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : "$0.00",
            });
            break;
          case "Quarterly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount / quarterly).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : "$0.00",
            });
            break;

          case "Annually":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount / annually).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : "$0.00",
            });
            break;

          default:
            break;
        }

        break;
      case types.annually:
        switch (valueSelect) {
          case "Weekly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount * numberWeeklyOfYear).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : "$0.00",
            });
            break;

          case "Monthly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount * annually).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : "$0.00",
            });
            break;

          case "4Weekly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(
                    amount *
                    (numberWeeklyOfYear / fourWeekly)
                  ).toLocaleString("en-US", myObjCurrency)}`
                : "$0.00",
            });
            break;
          case "Fortnightly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(
                    amount *
                    (numberWeeklyOfYear / fortnightly)
                  ).toLocaleString("en-US", myObjCurrency)}`
                : "$0.00",
            });
            break;
          case "Quarterly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${(amount / fourWeekly).toLocaleString(
                    "en-US",
                    myObjCurrency
                  )}`
                : "$0.00",
            });
            break;

          case "Annually":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: amount
                ? `${amount.toLocaleString("en-US", myObjCurrency)}`
                : "$0.00",
            });
            break;

          default:
            break;
        }

        break;

      default:
        break;
    }
  };

  const onChangeSelect = (option, name) => {
    setDataForm({
      ...dataForm,
      [name]: option,
    });
  };

  const handleClickFrequency = (name) => {
    setFrequency(name);
  };

  useEffect(() => {
    setDataForm({
      ...dataForm,
      boardTotalAmount: getTotalAmount(
        dataForm?.board || 0,
        frequency,
        dataForm?.frequencyBoard || listOption[5]
      ),
      childcareCostsTotalAmount: getTotalAmount(
        dataForm?.childcareCosts || 0,
        frequency,
        dataForm?.frequencyChildcareCosts || listOption[5]
      ),
      privateSchoolFeesTotalAmount: getTotalAmount(
        dataForm?.privateSchoolFees || 0,
        frequency,
        dataForm?.frequencyPrivateSchoolFees || listOption[1]
      ),

      maintenanceTotalAmount: getTotalAmount(
        dataForm?.maintenance || 0,
        frequency,
        dataForm?.frequencyMaintenance || listOption[2]
      ),

      otherContractedExpensesTotalAmount: getTotalAmount(
        dataForm?.otherContractedExpenses || 0,
        frequency,
        dataForm?.frequencyOtherContractedExpenses || listOption[2]
      ),

      ratesTotalAmount: getTotalAmount(
        dataForm?.rates || 0,
        frequency,
        dataForm?.frequencyRates || listOption[1]
      ),

      insuranceTotalAmount: getTotalAmount(
        dataForm?.insurance || 0,
        frequency,
        dataForm?.frequencyInsurance || listOption[0]
      ),

      vehicleRegistrationTotalAmount: getTotalAmount(
        dataForm?.vehicleRegistration || 0,
        frequency,
        dataForm?.frequencyVehicleRegistration || listOption[0]
      ),

      phoneInternetTotalAmount: getTotalAmount(
        dataForm?.phoneInternet || 0,
        frequency,
        dataForm?.frequencyPhoneInternet || listOption[0]
      ),

      utilitiesTotalAmount: getTotalAmount(
        dataForm?.utilities || 0,
        frequency,
        dataForm?.frequencyUtilities || listOption[1]
      ),

      foodAndGroceriesTotalAmount: getTotalAmount(
        dataForm?.foodAndGroceries || 0,
        frequency,
        dataForm?.frequencyFoodAndGroceries || listOption[5]
      ),

      motorVehicleAndTransportTotalAmount: getTotalAmount(
        dataForm?.motorVehicleAndTransport || 0,
        frequency,
        dataForm?.frequencyMotorVehicleAndTransport || listOption[5]
      ),

      medicalTotalAmount: getTotalAmount(
        dataForm?.medical || 0,
        frequency,
        dataForm?.frequencyMedical || listOption[2]
      ),
      otherVariableTotalAmount: getTotalAmount(
        dataForm?.otherVariable || 0,
        frequency,
        dataForm?.frequencyOtherVariable || listOption[2]
      ),
      entertainmentTotalAmount: getTotalAmount(
        dataForm?.entertainment || 0,
        frequency,
        dataForm?.frequencyEntertainment || listOption[5]
      ),

      diningOutTotalAmount: getTotalAmount(
        dataForm?.diningOut || 0,
        frequency,
        dataForm?.frequencyDiningOut || listOption[5]
      ),

      alcoholAndTobaccoTotalAmount: getTotalAmount(
        dataForm?.alcoholAndTobacco || 0,
        frequency,
        dataForm?.frequencyAlcoholAndTobacco || listOption[5]
      ),

      clothingAndFootwearTotalAmount: getTotalAmount(
        dataForm?.clothingAndFootwear || 0,
        frequency,
        dataForm?.frequencyClothingAndFootwear || listOption[1]
      ),

      personalTotalAmount: getTotalAmount(
        dataForm?.personal || 0,
        frequency,
        dataForm?.frequencyPersonal || listOption[5]
      ),

      sportsAndRecreationTotalAmount: getTotalAmount(
        dataForm?.sportsAndRecreation || 0,
        frequency,
        dataForm?.frequencySportsAndRecreation || listOption[2]
      ),

      otherDiscretionaryExpensesTotalAmount: getTotalAmount(
        dataForm?.otherDiscretionaryExpenses || 0,
        frequency,
        dataForm?.frequencyOtherDiscretionaryExpenses || listOption[2]
      ),
    });
    // eslint-disable-next-line
  }, [frequency]);

  const handleSubmitForm = () => {
    setStatusDataDetail({
      email: checkEmailStatus(email),
      firstName: checkFirstNameStatus(firstName),
      lastName: checkLastNameStatus(lastName),
    });
    if (
      checkEmailStatus(email) &&
      checkFirstNameStatus(firstName) &&
      checkLastNameStatus(lastName)
    ) {
      console.log(dataDetail, "dataForm");
      setIsShowSendSuccess(true);
      setDataDetail({
        firstName: "",
        lastName: "",
        email: "",
      });
      setDataForm(initDefault);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const totalAmountLiving =
    getAllTotalAmount([
      dataForm?.boardTotalAmount,
      dataForm?.childcareCostsTotalAmount,
      dataForm?.privateSchoolFeesTotalAmount,
      dataForm?.maintenanceTotalAmount,
      dataForm?.otherContractedExpensesTotalAmount,
      dataForm?.ratesTotalAmount,
      dataForm?.insuranceTotalAmount,
      dataForm?.vehicleRegistrationTotalAmount,
      dataForm?.phoneInternetTotalAmount,
    ]) || "$0.00";

  const totalVariable =
    getAllTotalAmount([
      dataForm?.utilitiesTotalAmount,
      dataForm?.foodAndGroceriesTotalAmount,
      dataForm?.motorVehicleAndTransportTotalAmount,
      dataForm?.medicalTotalAmount,
      dataForm?.otherVariableTotalAmount,
    ]) || "$0.00";

  const totalDiscretionary =
    getAllTotalAmount([
      dataForm?.entertainmentTotalAmount,
      dataForm?.diningOutTotalAmount,
      dataForm?.alcoholAndTobaccoTotalAmount,
      dataForm?.schoolingTotalAmount,
      dataForm?.clothingAndFootwearTotalAmount,
      dataForm?.personalTotalAmount,
      dataForm?.sportsAndRecreationTotalAmount,
      dataForm?.otherDiscretionaryExpensesTotalAmount,
    ]) || "$0.00";

  const totalExpenses = getAllTotalAmount([
    totalAmountLiving,
    totalVariable,
    dataForm?.totalVariable,
    totalDiscretionary,
  ]);

  const handleClose = () => {
    setIsShowSendSuccess(false);
    window.location.assign("/living-expenses/");
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Living Expenses</title>
      </Helmet>
      <FormIndex
        frequency={frequency}
        dataForm={{
          ...dataForm,
          totalAmountLiving,
          totalVariable,
          totalDiscretionary,
        }}
        onChangeSelect={onChangeSelect}
        onBlurHandle={onBlurHandle}
        handleGetDataDetail={handleGetDataDetail}
        statusDataDetail={statusDataDetail}
        handleClickFrequency={handleClickFrequency}
        onKeyUpHandle={onKeyUpHandle}
        totalExpenses={totalExpenses}
        handleSubmitForm={handleSubmitForm}
      />
      <ModalSend isShow={isShowSendSuccess} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default LivingExpenses;
