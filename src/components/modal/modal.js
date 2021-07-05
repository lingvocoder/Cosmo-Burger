import React, { useCallback, useEffect } from "react";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import * as ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById("modal");

const Modal = ({ children, header, onClose, show }) => {
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
            header
              ? `${styles.modalWrapperIngredients}`
              : `${styles.modalWrapperOrder}`
          }
        >
          <div className={`${styles.modalItem} ${styles.modalTitle} `}>
            {header && (
              <span className={` text text_type_main-large`}>{header}</span>
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

export default Modal;
