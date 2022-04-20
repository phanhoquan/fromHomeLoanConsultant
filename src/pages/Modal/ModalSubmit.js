/** @format */

import React from "react";
import { Button, Modal } from "react-bootstrap";
const ModalReset = ({
  handleClose,
  handleSubmit,
  isShow,
  isShowMess,
  isNoteVale
}: Props) => {
  return (
    <Modal
      show={isShow}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-submit"
    >
      <Modal.Header>
        <button onClick={handleClose} type="button" className="close">
          <span aria-hidden="true">×</span><span className="sr-only">Close</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <h4>Would you like to review the form?</h4>
        {isShowMess ? (
          <p style={{ color: "red" }}>
            You missing the User name & Email. Please check again.
          </p>
        ) : (
          ""
        )}
        {isNoteVale && !isShowMess ? (
          <p style={{ color: "red" }}>
            Maximum characters exceeded in Additional notes
          </p>
        ) : (
          ""
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} className="bnt-left">
          Let's review
        </Button>
        <Button onClick={handleSubmit} className="bnt-right">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalReset;
