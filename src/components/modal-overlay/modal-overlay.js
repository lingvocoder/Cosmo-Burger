import React from "react";
import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ onClose, children }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element,
};
export default ModalOverlay;
