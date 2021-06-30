import React from "react";
import styles from "../burger-payment/burger-payment.module.css";
import PropTypes from "prop-types";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerPayment = ({ paymentData }) => {
  return (
    <div className={styles.constructorPayment}>
      <span className={styles.constructorTotal}>
        {paymentData.reduce((acc, curr) => acc + curr.price, 0)}
      </span>
      <CurrencyIcon type={"primary"} />
      <Button type={"primary"} size={"large"}>
        Оформить заказ
      </Button>
    </div>
  );
};

BurgerPayment.propTypes = {
  paymentData: PropTypes.arrayOf(PropTypes.object),
};
export default BurgerPayment;
