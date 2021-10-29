/** @format */

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import moment from "moment";
import { getAllTotalAmount } from "./helpers/index";
import checkEmail from "../../utils/checkEmail";

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
    root.setAttribute("class", "fonts100");
  }

  const [frequency, setFrequency] = useState(types.weekly);

  const initDefault = {
    frequencyBoard: listOption[5],
    totalAmountLiving: 0,
    totalVariable: 0,
    totalDiscretionary: 0,
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

  const handleClickFrequency = (name) => {
    setFrequency(name);
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
  const quarterly = 4;

  const amountQuarterly = 13.04; // trung bình Tuần/quý

  var weekNumber = moment(new Date(), "MM-DD-YYYY").week();
  // 1 Số ngày trong tháng
  const numberMonthly = moment(new Date(), "YYYY-MM").daysInMonth();
  const numberWeeklyOfYear = 52.08; // Trung bình tổng số tuần /1 năm

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
              [nameTotalAmount]: `${amount.toLocaleString(
                "en-US",
                myObjCurrency
              )}`,
            });
            break;

          case "Monthly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: `${(amount / weekLy).toLocaleString(
                "en-US",
                myObjCurrency
              )}`,
            });
            break;

          case "4Weekly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: `${(amount / fourWeekly).toLocaleString(
                "en-US",
                myObjCurrency
              )}`,
            });
            break;
          case "Fortnightly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: `${(amount / fortnightly).toLocaleString(
                "en-US",
                myObjCurrency
              )}`,
            });
            break;
          case "Quarterly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: `${(amount / amountQuarterly).toLocaleString(
                "en-US",
                myObjCurrency
              )}`,
            });
            break;

          case "Annually":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: `${(
                amount / numberWeeklyOfYear
              ).toLocaleString("en-US", myObjCurrency)}`,
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
              [nameTotalAmount]: `${amount.toLocaleString(
                "en-US",
                myObjCurrency
              )}`,
            });
            break;

          case "Monthly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: `${(amount / weekLy).toLocaleString(
                "en-US",
                myObjCurrency
              )}`,
            });
            break;

          case "4Weekly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: `${(amount / fourWeekly).toLocaleString(
                "en-US",
                myObjCurrency
              )}`,
            });
            break;
          case "Fortnightly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: `${(amount / fortnightly).toLocaleString(
                "en-US",
                myObjCurrency
              )}`,
            });
            break;
          case "Quarterly":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: `${(amount / amountQuarterly).toLocaleString(
                "en-US",
                myObjCurrency
              )}`,
            });
            break;

          case "Annually":
            setDataForm({
              ...dataForm,
              [nameSelect]: optionSelect,
              [name]: amount,
              [nameTotalAmount]: `${(
                amount / numberWeeklyOfYear
              ).toLocaleString("en-US", myObjCurrency)}`,
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
      console.log(
        checkEmailStatus(email),
        "email",
        checkFirstNameStatus(firstName),
        "first",
        checkLastNameStatus(lastName),
        "sssss"
      );
    }
  };

  useEffect(() => {
    setDataForm({
      ...dataForm,
      totalAmountLiving: getAllTotalAmount([
        dataForm?.boardTotalAmount,
        dataForm?.childcareCostsTotalAmount,
        dataForm?.privateSchoolFeesTotalAmount,
        dataForm?.maintenanceTotalAmount,
        dataForm?.otherContractedExpensesTotalAmount,
        dataForm?.ratesTotalAmount,
        dataForm?.insuranceTotalAmount,
        dataForm?.vehicleRegistrationTotalAmount,
        dataForm?.phoneInternetTotalAmount,
      ]),
    });
    // eslint-disable-next-line
  }, [
    dataForm?.boardTotalAmount,
    dataForm?.childcareCostsTotalAmount,
    dataForm?.privateSchoolFeesTotalAmount,
    dataForm?.maintenanceTotalAmount,
    dataForm?.otherContractedExpensesTotalAmount,
    dataForm?.ratesTotalAmount,
    dataForm?.insuranceTotalAmount,
    dataForm?.vehicleRegistrationTotalAmount,
    dataForm?.phoneInternetTotalAmount,
  ]);

  useEffect(() => {
    setDataForm({
      ...dataForm,
      totalVariable: getAllTotalAmount([
        dataForm?.utilitiesTotalAmount,
        dataForm?.foodAndGroceriesTotalAmount,
        dataForm?.motorVehicleAndTransportTotalAmount,
        dataForm?.medicalTotalAmount,
        dataForm?.otherVariableTotalAmount,
      ]),
    });
    // eslint-disable-next-line
  }, [
    dataForm?.utilitiesTotalAmount,
    dataForm?.foodAndGroceriesTotalAmount,
    dataForm?.motorVehicleAndTransportTotalAmount,
    dataForm?.medicalTotalAmount,
    dataForm?.otherVariableTotalAmount,
  ]);

  useEffect(() => {
    setDataForm({
      ...dataForm,
      totalDiscretionary: getAllTotalAmount([
        dataForm?.entertainmentTotalAmount,
        dataForm?.diningOutTotalAmount,
        dataForm?.alcoholAndTobaccoTotalAmount,
        dataForm?.schoolingTotalAmount,
        dataForm?.clothingAndFootwearTotalAmount,
        dataForm?.personalTotalAmount,
        dataForm?.sportsAndRecreationTotalAmount,
        dataForm?.otherDiscretionaryExpensesTotalAmount,
      ]),
    });
    // eslint-disable-next-line
  }, [
    dataForm?.entertainmentTotalAmount,
    dataForm?.diningOutTotalAmount,
    dataForm?.alcoholAndTobaccoTotalAmount,
    dataForm?.schoolingTotalAmount,
    dataForm?.clothingAndFootwearTotalAmount,
    dataForm?.personalTotalAmount,
    dataForm?.sportsAndRecreationTotalAmount,
    dataForm?.otherDiscretionaryExpensesTotalAmount,
  ]);

  const totalExpenses = getAllTotalAmount([
    dataForm?.totalDiscretionary,
    dataForm?.totalAmountLiving,
    dataForm?.totalVariable,
  ]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Living Expenses</title>
      </Helmet>
      <FormIndex
        frequency={frequency}
        dataForm={dataForm}
        onChangeSelect={onChangeSelect}
        onBlurHandle={onBlurHandle}
        handleGetDataDetail={handleGetDataDetail}
        statusDataDetail={statusDataDetail}
        handleClickFrequency={handleClickFrequency}
        onKeyUpHandle={onKeyUpHandle}
        totalExpenses={totalExpenses}
        handleSubmitForm={handleSubmitForm}
      />
    </React.Fragment>
  );
};

export default LivingExpenses;
