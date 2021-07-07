import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("modal");

const Modal = ({ children, title, onClose, show }) => {
  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  if (!show) return null;
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            title
              ? `${styles.modalWrapperIngredients}`
              : `${styles.modalWrapperOrder}`
          }
        >
          <div className={`${styles.modalItem} ${styles.modalTitle} `}>
            {title && (
              <span className={` text text_type_main-large`}>{title}</span>
            )}
            <CloseIcon type={"primary"} onClick={onClose} />
          </div>
          {children}
        </div>
      </ModalOverlay>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func,
  show: PropTypes.bool.isRequired,
  header: PropTypes.string,
};

export default Modal;
