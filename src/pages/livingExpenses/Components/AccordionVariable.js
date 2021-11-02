/** @format */

import React from "react";
import ItemCart from "./ItemCart";

const AccordionVariable = ({
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
        title="Utilities"
        name="utilities"
        nameSelect="frequencyUtilities"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.utilitiesTotalAmount || "$0.00"}
        value={dataForm?.utilities || ""}
        optionSelect={dataForm?.frequencyUtilities || listOption[1]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including electricity, gas, water and other utility expenses"
      />
      <ItemCart
        onChange={onChange}
        title="Food and Groceries"
        name="foodAndGroceries"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.foodAndGroceriesTotalAmount || "$0.00"}
        nameSelect="frequencyFoodAndGroceries"
        value={dataForm?.foodAndGroceries}
        optionSelect={dataForm?.frequencyFoodAndGroceries || listOption[5]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including supermarket, butcher, bakery, fruit and vegetable markets"
      />
      <ItemCart
        onChange={onChange}
        title="Motor Vehicle and Transport"
        name="motorVehicleAndTransport"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.motorVehicleAndTransportTotalAmount || "$0.00"}
        nameSelect="frequencyMotorVehicleAndTransport"
        value={dataForm?.motorVehicleAndTransport}
        optionSelect={
          dataForm?.frequencyMotorVehicleAndTransport || listOption[5]
        }
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including fuel, public transport, parking, toll roads, tyres, maintenance"
        customClassSelect="position-top mobile"
      />
      <ItemCart
        onChange={onChange}
        title="Medical"
        name="medical"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.medicalTotalAmount || "$0.00"}
        nameSelect="frequencyMedical"
        value={dataForm?.medical}
        optionSelect={dataForm?.frequencyMedical || listOption[2]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including medicine, doctor, vet"
        customClassSelect="position-top"
        placementClass="top41"
      />
      <ItemCart
        onChange={onChange}
        title="Other variable"
        name="otherVariable"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.otherVariableTotalAmount || "$0.00"}
        nameSelect="frequencyOtherVariable"
        value={dataForm?.otherVariable}
        optionSelect={dataForm?.frequencyOtherVariable || listOption[2]}
        onChangeSelect={onChangeSelect}
        customClassSelect="position-top"
      />
    </>
  );
};

export default AccordionVariable;
