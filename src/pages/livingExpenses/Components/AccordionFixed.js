/** @format */

import React from "react";
import ItemCart from "./ItemCart";

const AccordionFixed = ({
  onChange,
  dataForm,
  onChangeSelect,
  onBlurHandle,
}: Props) => {
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
  return (
    <>
      <ItemCart
        onChange={onChange}
        title="Rent / Board"
        name="board"
        nameSelect="frequencyBoard"
        onBlurHandle={onBlurHandle}
        totalAmount="$0.00"
        value={dataForm?.board || ""}
        optionSelect={dataForm?.frequencyBoard || listOption[5]}
        onChangeSelect={onChangeSelect}
      />
      <ItemCart
        onChange={onChange}
        title="Childcare Costs"
        name="childcareCosts"
        onBlurHandle={onBlurHandle}
        totalAmount="$0.00"
        nameSelect="frequencyChildcareCosts"
        value={dataForm?.childcareCosts}
        optionSelect={dataForm?.frequencyChildcareCosts || listOption[5]}
        onChangeSelect={onChangeSelect}
      />
    </>
  );
};

export default AccordionFixed;
