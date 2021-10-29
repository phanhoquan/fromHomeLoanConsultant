/** @format */
const myObjCurrency = {
  maximumFractionDigits: 2,
};

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
