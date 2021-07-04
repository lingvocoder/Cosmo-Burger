import React from "react";
import styles from "./order-details.module.css";
import { ReactComponent as CheckMarkIcon } from "../../images/checkicon.svg";

const OrderDetails = ({ paymentData }) => {
  return (
    <>
      <div className={styles.orderInner}>
        <div className={`${styles.orderItemID} ${styles.orderItem} `}>
          <span className="text text_type_digits-large">123467</span>
        </div>
        <div className={`${styles.orderItem} ${styles.orderSubTitle}`}>
          <span className={`text text_type_main-medium`}>
            идентификатор заказа
          </span>
        </div>
        <div className={`${styles.orderItem} ${styles.orderIconStatus}`}>
          <CheckMarkIcon />
        </div>
        <div className={`${styles.orderItem} ${styles.orderAnnouncement}`}>
          <span className="text text_type_main-default">
            Ваш заказ начали готовить
          </span>
        </div>
        <div className={`${styles.orderItem} ${styles.orderAnnouncement}`}>
          <span className="text text_type_main-default text_color_inactive ">
            Дождитесь готовности на орбитальной станции
          </span>
        </div>
      </div>
    </>
  );
};
export default OrderDetails;
