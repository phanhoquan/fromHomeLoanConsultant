/** @format */

import React from "react";
import InputNumber from "../../../Components/InputNumber";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import SelectDropdown from "../../../Components/Select/index";
import imageTooltip from "../../../images/iconToltip.png";

const ItemCart = ({
  onChange,
  title,
  name,
  value,
  onChangeSelect,
  totalAmount,
  onBlurHandle,
  optionSelect,
  contentTooltip,
  isShowTooltip,
  nameSelect,
  customClassSelect,
  placement = "left",
  placementClass = "",
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
    // {
    //   value: "4Weekly",
    //   label: "4 Weekly",
    // },
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
      <div className="item">
        <div className="titleName text-left">{title}</div>
        <div className="amount text-center">
          <InputNumber
            inputMode="numeric"
            options={{
              numericOnly: true,
              numeral: true,
              numeralDecimalMark: "",
              delimiter: ",",
              numeralThousandsGroupStyle: "thousand",
            }}
            onChange={(e) => onChange(e.target.value, name)}
            value={value || ""}
            label="$"
            onBlur={(e) =>
              onBlurHandle(
                e.target.value,
                name,
                optionSelect,
                nameSelect,
                `${name}TotalAmount`
              )
            }
            maxLength="10"
            placeholder="0"
          />
        </div>
        <div className="frequency text-center">
          <SelectDropdown
            placeholder=""
            customClass={customClassSelect}
            listItem={listOption}
            onChange={(option) => {
              onChangeSelect(option, nameSelect);
              onBlurHandle(
                `${value}`,
                name,
                option,
                nameSelect,
                `${name}TotalAmount`
              );
            }}
            option={optionSelect || listOption[0]}
          />
          {isShowTooltip ? (
            <div className="tooltipWrap">
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Tooltip className={placementClass} id={name}>
                    {contentTooltip}
                  </Tooltip>
                }
              >
                <span className="d-inline-block">
                  <img src={imageTooltip} alt="" />
                </span>
              </OverlayTrigger>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="totalAmount text-center">{totalAmount}</div>
      </div>
    </>
  );
};

export default ItemCart;
