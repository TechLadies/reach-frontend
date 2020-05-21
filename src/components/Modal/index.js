import { Modal } from "react-bootstrap";
import React from "react";
import "./index.css";
import CloseIcon from "../../images/close.svg";

Modal.Close = ({ onClick }) => (
  <button className="modal-close" type="button" onClick={onClick}>
    <img alt="" aria-hidden="true" src={CloseIcon} />
    <span className="sr-only">Close</span>
  </button>
);

export default Modal;
