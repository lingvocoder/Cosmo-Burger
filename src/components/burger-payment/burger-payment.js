import React from "react";
import styles from "../burger-payment/burger-payment.module.css";
import PropTypes from "prop-types";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerPayment = ({ paymentData, handleClick }) => {
  return (
    <div className={styles.constructorPayment}>
      <span className={styles.constructorTotal}>{paymentData}</span>
      <CurrencyIcon type={"primary"} />
      <Button type={"primary"} size={"large"} onClick={handleClick}>
        Оформить заказ
      </Button>
    </div>
  );
};

BurgerPayment.propTypes = {
  paymentData: PropTypes.arrayOf(PropTypes.object),
};
export default BurgerPayment;
