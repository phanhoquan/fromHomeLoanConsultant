/** @format */

import React from "react";
import ItemCart from "./ItemCart";

const AccordionDiscretionary = ({
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
        title="Entertainment"
        name="entertainment"
        nameSelect="frequencyEntertainment"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.entertainmentTotalAmount || "$0.00"}
        value={dataForm?.entertainment || ""}
        optionSelect={dataForm?.frequencyEntertainment || listOption[5]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including pay tv, Spotify, Netflix, movie tickets, magazine subscriptions"
      />
      <ItemCart
        onChange={onChange}
        title="Dining Out"
        name="diningOut"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.diningOutTotalAmount || "$0.00"}
        nameSelect="frequencyDiningOut"
        value={dataForm?.diningOut}
        optionSelect={dataForm?.frequencyDiningOut || listOption[5]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including take away, coffee, restaurants, eating out, bars, clubs"
      />
      <ItemCart
        onChange={onChange}
        title="Alcohol and Tobacco"
        name="alcoholAndTobacco"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.alcoholAndTobaccoTotalAmount || "$0.00"}
        nameSelect="frequencyAlcoholAndTobacco"
        value={dataForm?.alcoholAndTobacco}
        optionSelect={dataForm?.frequencyAlcoholAndTobacco || listOption[5]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including tobacco and bottle shops"
      />
      <ItemCart
        onChange={onChange}
        title="Schooling"
        name="schooling"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.schoolingTotalAmount || "$0.00"}
        nameSelect="frequencySchooling"
        value={dataForm?.schooling}
        optionSelect={dataForm?.frequencySchooling || listOption[1]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including books, uniforms, incidentals, not including private school fees"
      />
      <ItemCart
        onChange={onChange}
        title="Clothing and Footwear"
        name="clothingAndFootwear"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.clothingAndFootwearTotalAmount || "$0.00"}
        nameSelect="frequencyClothingAndFootwear"
        value={dataForm?.clothingAndFootwear}
        optionSelect={dataForm?.frequencyClothingAndFootwear || listOption[2]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including footwear, jewellery, handbags"
      />
      <ItemCart
        onChange={onChange}
        title="Personal"
        name="personal"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.personalTotalAmount || "$0.00"}
        nameSelect="frequencyPersonal"
        value={dataForm?.personal}
        optionSelect={dataForm?.frequencyPersonal || listOption[5]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including grooming, personal care, toiletries, cosmetics, hair cuts"
      />
      <ItemCart
        onChange={onChange}
        title="Sports and Recreation"
        name="sportsAndRecreation"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.sportsAndRecreationTotalAmount || "$0.00"}
        nameSelect="frequencySportsAndRecreation"
        value={dataForm?.sportsAndRecreation}
        optionSelect={dataForm?.frequencySportsAndRecreation || listOption[2]}
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including hobbies, kids sport, gym membership, personal training, yoga"
      />
      <ItemCart
        onChange={onChange}
        title="Other Discretionary Expenses"
        name="otherDiscretionaryExpenses"
        onBlurHandle={onBlurHandle}
        totalAmount={dataForm?.otherDiscretionaryExpensesTotalAmount || "$0.00"}
        nameSelect="frequencyOtherDiscretionaryExpenses"
        value={dataForm?.otherDiscretionaryExpenses}
        optionSelect={
          dataForm?.frequencyOtherDiscretionaryExpenses || listOption[2]
        }
        onChangeSelect={onChangeSelect}
        isShowTooltip
        contentTooltip="Including holidays, celebrations, charity donations, lottery tickets"
      />
    </>
  );
};

export default AccordionDiscretionary;
