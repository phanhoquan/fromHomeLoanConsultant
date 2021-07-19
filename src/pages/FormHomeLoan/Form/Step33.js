/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../index";

const Step33 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];

  const noteValueRef = useRef(null);

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [noteVale, setNoteVale] = useState(
    localStorage.getItem("noteVale") || ""
  );

  useEffect(() => {
    setTimeout(() => {
      noteValueRef?.current?.focus();
    }, 400);
  }, []);

  const finDataStep = listDataSubmit.find((item) => item.id === 33);

  const step33 = {
    id: 33,
    question: "Please enter any additional notes",
    answer: noteVale,
    skip: "",
  };

  const nextStep = () => {
    localStorage.setItem("noteVale", noteVale);
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 33 ? step33 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step33])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-success`,
    });
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (!showLoading) {
      setTimeout(function () {
        nextStep();
      }, 500);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickNext();
    }
  };

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep33 = {
      id: 33,
      question: "Please enter any additional notes",
      answer: noteVale,
      skip: !noteVale && "Skipped",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 33 ? skipStep33 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep33])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-success`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={31}>
      <section className="formContent-step-second formContent-life-insurance mb-2">
        <Container>
          <div
            className={
              "wForm wow " +
              (history?.location?.back ? "fadeInDown" : "fadeInUp")
            }
          >
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">33. Please enter any additional notes</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col xs={12} className="wForm-input pl-0">
                    <textarea
                      className="form-control noteVale"
                      value={noteVale || ""}
                      ref={noteValueRef}
                      onKeyPress={onKeyDown}
                      onChange={(e) => setNoteVale(e.target.value)}
                      placeholder="Please enter your additional notes here..."
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className="fadeInDown wow  mt-4">
                <div className="group-btn-footer col d-flex justify-content-center">
                  <Button
                    className="btnPrimary life wow fadeInUp mt-0 back"
                    type="next"
                    onClick={onClickBack}
                  >
                    BACK
                  </Button>
                  <Button
                    className="btnPrimary life wow fadeInUp mt-0 in-progress"
                    type="next"
                    onClick={onClickNext}
                  >
                    {showLoading && <Spinner animation="border" />}
                    SUBMIT
                  </Button>
                </div>
                <div
                  className="SKIP"
                  onClick={() => handleSkip()}
                  role="button"
                >
                  SKIP
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default Step33;
