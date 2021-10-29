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
        totalAmount={dataForm?.boardTotalAmount || "$0.00"}
        value={dataForm?.board || ""}
        optionSelect={dataForm?.frequencyBoard || listOption[5]}
        onChangeSelect={onChangeSelect}
      />
      <ItemCart
        onChange={onChange}
        title="Childcare Costs"
        name="childcareCosts"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.childcareCostsTotalAmount || "$0.00"}
        nameSelect="frequencyChildcareCosts"
        value={dataForm?.childcareCosts}
        optionSelect={dataForm?.frequencyChildcareCosts || listOption[5]}
        onChangeSelect={onChangeSelect}
      />
      <ItemCart
        onChange={onChange}
        title="Private School Fees"
        name="privateSchoolFees"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.privateSchoolFeesTotalAmount || "$0.00"}
        nameSelect="frequencyPrivateSchoolFees"
        value={dataForm?.privateSchoolFees}
        optionSelect={dataForm?.frequencyPrivateSchoolFees || listOption[1]}
        onChangeSelect={onChangeSelect}
      />
      <ItemCart
        onChange={onChange}
        title="Child Support / Maintenance"
        name="maintenance"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.maintenanceTotalAmount || "$0.00"}
        nameSelect="frequencyMaintenance"
        value={dataForm?.maintenance}
        optionSelect={dataForm?.frequencyMaintenance || listOption[2]}
        onChangeSelect={onChangeSelect}
      />
      <ItemCart
        onChange={onChange}
        title="Other Contracted Expenses"
        name="otherContractedExpenses"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.otherContractedExpensesTotalAmount || "$0.00"}
        nameSelect="frequencyOtherContractedExpenses"
        value={dataForm?.otherContractedExpenses}
        optionSelect={
          dataForm?.frequencyOtherContractedExpenses || listOption[2]
        }
        onChangeSelect={onChangeSelect}
      />
      <ItemCart
        onChange={onChange}
        title="Rates"
        name="rates"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.ratesTotalAmount || "$0.00"}
        nameSelect="frequencyRates"
        value={dataForm?.rates}
        optionSelect={dataForm?.frequencyRates || listOption[1]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including body corporate"
      />
      <ItemCart
        onChange={onChange}
        title="Insurance"
        name="insurance"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.insuranceTotalAmount || "$0.00"}
        nameSelect="frequencyInsurance"
        value={dataForm?.insurance}
        optionSelect={dataForm?.frequencyInsurance || listOption[0]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including home, contents, car, life, health, boat and pet"
      />
      <ItemCart
        onChange={onChange}
        title="Vehicle Registration"
        name="vehicleRegistration"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.vehicleRegistrationTotalAmount || "$0.00"}
        nameSelect="frequencyVehicleRegistration"
        value={dataForm?.vehicleRegistration}
        optionSelect={dataForm?.frequencyVehicleRegistration || listOption[0]}
        onChangeSelect={onChangeSelect}
      />
      <ItemCart
        onChange={onChange}
        title="Phone / Internet"
        name="phoneInternet"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.phoneInternetTotalAmount || "$0.00"}
        nameSelect="frequencyPhoneInternet"
        value={dataForm?.phoneInternet}
        optionSelect={dataForm?.frequencyPhoneInternet || listOption[0]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including home, mobile, internet"
      />
    </>
  );
};

export default AccordionFixed;
