/** @format */

import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { Helmet } from "react-helmet";
import imgMenu from "../../images/menu.png";
import useOnClickOutside from "../../hooks/useClickOutSide";
import imgMenuClose from "../../images/closemenu.png";
import imgNote from "../../images/note.png";
import imgArrowNote from "../../images/arrow-white.svg";

const HomeLoan = ({
  children,
  className = "",
  activeStep,
  numberScroll = 10,
}) => {
  var root = document.getElementsByTagName("html")[0];
  const wrapperInfoRef = useRef();
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }
  const history = useHistory();
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];

  const [contentNoteVale, setContentNoteVale] = useState("");

  const [isShowNoteVale, setIsShowNoteVale] = useState(false);

  listDataSubmit &&
    listDataSubmit.sort(function (a, b) {
      return a.id - b.id;
    });

  const [isShowMenu, setIsShowMenu] = useState(false);
  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowMenu(false);
  });

  const renderListQuestion =
    listDataSubmit &&
    listDataSubmit.map((item, index) => {
      const idItem =
        item.id < 10 ? `0${item.id}` : item.id === 28 ? item.menu : item.id;
      return (
        <>
          <li
            key={item.id}
            className={`${activeStep === item.id ? "active " : ""} ${
              item?.answer?.trim() ? " answerActive" : ""
            }${item.skip ? " answerSkip" : ""}
      `}
            onClick={() =>
              history.push(`/refinance-fact-find-2/step-${idItem}`)
            }
            role="button"
          >
            <div className={` step`}>Step {item.id}</div>
            <div className="wrap-question">
              <p className="question">
                {item.question || item.question2 || ""}
              </p>
              <p className="answer">
                {item.answer?.trim() || item?.answer2?.trim() || item.skip}
              </p>
            </div>
          </li>
          {item?.id === 22 || item?.id === 28 || item?.id === 30 ? (
            <li
              key={index}
              onClick={() =>
                history.push(`/refinance-fact-find-2/step-${idItem}`)
              }
              className={`${activeStep === item.id ? "active " : ""} ${
                item.skip && !item?.answer2?.trim()
                  ? " answerSkip answerSkip2"
                  : ""
              }
      `}
              role="button"
            >
              <div className={` step`}></div>
              <div className="wrap-question">
                <p className="question">{item.question2 || ""}</p>
                <p className="answer">{item?.answer2?.trim() || item.skip}</p>
              </div>
            </li>
          ) : (
            ""
          )}

          {item?.id === 28 ? (
            <>
              <li
                key={index}
                onClick={() =>
                  history.push(`/refinance-fact-find-2/step-${idItem}`)
                }
                className={`${activeStep === item.id ? "active " : ""} ${
                  item.skip && !item?.answer3?.trim()
                    ? " answerSkip answerSkip2"
                    : ""
                }
                ${item.question3 ? "" : " d-none"}
      `}
                role="button"
              >
                <div className={` step`}></div>
                <div className="wrap-question">
                  <p className="question">{item.question3 || ""}</p>
                  <p className="answer">{item?.answer3?.trim() || item.skip}</p>
                </div>
              </li>

              <li
                key={index}
                onClick={() =>
                  history.push(`/refinance-fact-find-2/step-${idItem}`)
                }
                className={`${activeStep === item.id ? "active " : ""} ${
                  item.skip && !item?.answer4?.trim()
                    ? " answerSkip answerSkip2"
                    : ""
                }
                ${item.question4 ? "" : " d-none"}
      `}
                role="button"
              >
                <div className={` step`}></div>
                <div className="wrap-question">
                  <p className="question">{item.question4 || ""}</p>
                  <p className="answer">{item?.answer4?.trim() || item.skip}</p>
                </div>
              </li>

              <li
                key={index}
                onClick={() =>
                  history.push(`/refinance-fact-find-2/step-${idItem}`)
                }
                className={`${activeStep === item.id ? "active " : ""} ${
                  item.skip && !item?.answer5?.trim()
                    ? " answerSkip answerSkip2"
                    : ""
                }
                ${item.question5 ? "" : " d-none"}
      `}
                role="button"
              >
                <div className={` step`}></div>
                <div className="wrap-question">
                  <p className="question">{item.question5 || ""}</p>
                  <p className="answer">{item?.answer5?.trim() || item.skip}</p>
                </div>
              </li>

              <li
                key={index}
                onClick={() =>
                  history.push(`/refinance-fact-find-2/step-${idItem}`)
                }
                className={`${activeStep === item.id ? "active " : ""} ${
                  item.skip && !item?.answer6?.trim()
                    ? " answerSkip answerSkip2"
                    : ""
                }
                ${item.question6 ? "" : " d-none"}
      `}
                role="button"
              >
                <div className={` step`}></div>
                <div className="wrap-question">
                  <p className="question">{item.question6 || ""}</p>
                  <p className="answer">{item?.answer6?.trim() || item.skip}</p>
                </div>
              </li>
            </>
          ) : (
            ""
          )}
        </>
      );
    });

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const scrollToBottom = () => {
    wrapperInfoRef.current?.scrollTo({
      block: "end",
      top: numberScroll,
    });
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = () => {};

  const handleTogglesAddNote = () => {
    setIsShowNoteVale(!isShowNoteVale);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Home Loan Consultant 2</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan">
        <Header handleSubmit={handleSubmit} />
        <div className="iconMenu">
          <div
            className="sub-iconMenu"
            role="button"
            onClick={() => handleShowMenu()}
          >
            <img src={imgMenu} alt="MENU" />
          </div>
        </div>

        <main className={`life-insurance__MainCt ${className}`}>
          <div
            className={`nav-left ${isShowMenu ? "open" : ""}`}
            ref={wrapperInfoRef}
            id="navLeft"
          >
            <div className="iconMenuClose">
              <div
                className="sub-iconMenu"
                role="button"
                onClick={() => setIsShowMenu(false)}
              >
                <img src={imgMenuClose} alt="CLOSE MENU" />
              </div>
            </div>
            <ul className="listAnswer">{renderListQuestion}</ul>
          </div>
          <div className="nav-right">{children}</div>
        </main>
      </div>

      <div className={`addNote ${isShowNoteVale ? "show" : ""}`}>
        <div className="addHeader" onClick={handleTogglesAddNote}>
          <img src={imgNote} alt="" className="icon-note" />
          Additional notes
          <img src={imgArrowNote} alt="" className="arrow-note" />
        </div>
        <div className="content-note">
          <textarea
            className="form-control noteVale"
            value={contentNoteVale}
            onChange={(e) => setContentNoteVale(e.target.value)}
            placeholder="Please enter your additional notes here..."
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeLoan;
