/** @format */
import moment from "moment";

const types = {
  weekly: "Weekly",
  monthly: "Monthly",
  annually: "Annually",
};
const myObjCurrency2 = {
  style: "currency",
  currency: "USD",
};
const myObjCurrency = {
  maximumFractionDigits: 2,
};

const numberWeeklyOfYear = 52; //52.1429 Trung bình tổng số tuần /1 năm
const fourWeekly = 4;
const annually = 12;
const quarterly = 3;
const fortnightly = 2;
const amountQuarterly = 13.04; // trung bình Tuần/quý
const Fortnightly = 26;
// 1 Số ngày trong tháng
const numberMonthly = moment(new Date(), "YYYY-MM").daysInMonth();

//2 Lấy số tuần trong tháng
const weekLy = numberMonthly / 7.133;

export const getAllTotalAmount = (listItem) => {
  let sum = 0;
  for (let i = 0; i < listItem.length; i++) {
    const totalAmount = listItem[i]
      ? parseFloat(listItem[i].replace("$", "").replace(/,/g, ""))
      : 0;
    sum += totalAmount;
  }

  return `$${sum.toLocaleString("en", myObjCurrency)}`;
};

export const getTotalAmount = (amount, type, typeSelect) => {
  let sum = 0;

  const totalAmount = amount || 0;

  switch (type) {
    case types.weekly:
      switch (typeSelect?.value) {
        case "Weekly":
          sum = totalAmount;
          break;

        case "Monthly":
          sum = totalAmount / weekLy;
          break;

        case "4Weekly":
          sum = totalAmount / fourWeekly;
          break;
        case "Fortnightly":
          sum = totalAmount / fortnightly;
          break;
        case "Quarterly":
          sum = totalAmount / amountQuarterly;
          break;

        case "Annually":
          sum = totalAmount / numberWeeklyOfYear;
          break;

        default:
          break;
      }

      break;
    case types.monthly:
      switch (typeSelect?.value) {
        case "Weekly":
          sum = (totalAmount * numberWeeklyOfYear) / annually;

          break;

        case "Monthly":
          sum = totalAmount;
          break;

        case "4Weekly":
          sum = totalAmount * (weekLy / fourWeekly);
          break;
        case "Fortnightly":
          sum = (totalAmount * Fortnightly) / annually;
          break;
        case "Quarterly":
          sum = totalAmount / quarterly;
          break;

        case "Annually":
          sum = totalAmount / annually;
          break;

        default:
          break;
      }

      break;
    case types.annually:
      switch (typeSelect?.value) {
        case "Weekly":
          sum = totalAmount * numberWeeklyOfYear;
          break;

        case "Monthly":
          sum = totalAmount * annually;
          break;

        case "4Weekly":
          sum = totalAmount * (numberWeeklyOfYear / fourWeekly);

          break;
        case "Fortnightly":
          sum = totalAmount * (numberWeeklyOfYear / fortnightly);
          break;
        case "Quarterly":
          sum = totalAmount / fourWeekly;
          break;

        case "Annually":
          sum = totalAmount;
          break;

        default:
          break;
      }

      break;

    default:
      break;
  }
  return sum ? `${sum.toLocaleString("en-US", myObjCurrency2)}` : "$0.00";
};
