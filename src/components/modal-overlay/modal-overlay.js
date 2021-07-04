import React from "react";
import styles from "./modal-overlay.module.css";

const ModalOverlay = ({ onClose, children }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      {children}
    </div>
  );
};

export default ModalOverlay;
