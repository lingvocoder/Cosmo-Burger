import React from "react";
import styles from "./burger-card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerCard = ({ data }) => {
  return (
    <div className={styles.burgerCard}>
      <div className={styles.burgerCardRowTop}>
        <Counter count={Math.floor(Math.random() * 10)} />
        <span className={styles.burgerCardImageWrapper}>
          <img
            className={styles.burgerCardImage}
            src={data.image}
            alt={data.name}
          />
        </span>
      </div>
      <div className={styles.burgerCardRowBottom}>
        <div className={styles.burgerPriceItem}>
          <span className={styles.burgerCardPrice}>{data.price}</span>
          <CurrencyIcon type={"primary"} />
        </div>
        <span className={styles.burgerCardTitle}>{data.name}</span>
      </div>
    </div>
  );
};

export default BurgerCard;
