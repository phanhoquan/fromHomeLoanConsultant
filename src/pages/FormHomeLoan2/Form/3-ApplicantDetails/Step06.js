/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

const listHomeLoan = ["Spouse", "Defacto", "Sibling", "Parent", "Offspring"];
export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step06 = ({ applicationStatus, loan2firstNameOther }) => {
  let listDataSubmit = localStorage.getItem("loan2listDataSubmit")
    ? JSON.parse(localStorage.getItem("loan2listDataSubmit"))
    : [];
  const relationshipYourRef = useRef(null);
  const wrapperInfoRef = useRef();
  const [relationshipYour, setRelationshipYour] = useState(
    localStorage.getItem("loan2relationshipYour") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setRelationshipYour(value);
    setIsShowModal(false);
    localStorage.setItem("loan2relationshipYour", value);
  };

  const step6 = {
    id: 6,
    question: `6. What is your relationship with ${loan2firstNameOther}?`,
  };
  const finDataStep6 = listDataSubmit?.find((item) => item.id === 6);
  const updateDataStep6 = listDataSubmit?.map((item) =>
    item.id === 6 ? step6 : item
  );

  useMemo(() => {
    setRelationshipYour(localStorage.getItem("loan2relationshipYour"));
    if (relationshipYour) {
      if (finDataStep6) {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify(updateDataStep6)
        );
      } else {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify([...listDataSubmit, step6])
        );
      }
    }

    // eslint-disable-next-line
  }, [relationshipYour, loan2firstNameOther]);

  useMemo(() => {
    setRelationshipYour(localStorage.getItem("loan2relationshipYour"));
    // eslint-disable-next-line
  }, [applicationStatus]);

  return (
    <section
      className={`formContent-step-second formContent-life-insurance ${
        isShowModal ? "mb-10" : "mb-2"
      } ${applicationStatus !== types[2] ? "opacity-03" : ""}`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                6. What is your relationship with {loan2firstNameOther}?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-4 pt-2">
                <Col
                  xs={12}
                  className="wForm-input pl-0 bankProviders"
                  ref={wrapperInfoRef}
                >
                  <InputCustom2
                    onFocus={() => {
                      setIsShowModal(true);
                    }}
                    onChange={() => () => {}}
                    label="Select your relationship with the applicant"
                    value={relationshipYour}
                    id="relationshipYour"
                    customClassLabel={relationshipYour ? "active" : ""}
                    iconArrow
                    customClassWrap=" five"
                    innerRef={relationshipYourRef}
                    readOnly
                  />
                  <ul
                    className={`list-occupation ${
                      isShowModal ? "d-block" : "d-none"
                    }`}
                  >
                    {listHomeLoan &&
                      listHomeLoan.map((name, index) => (
                        <li
                          key={index + 1}
                          onClick={() => onClickSelect(name)}
                          className={relationshipYour === name ? "active" : ""}
                        >
                          {name}
                        </li>
                      ))}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step06;
