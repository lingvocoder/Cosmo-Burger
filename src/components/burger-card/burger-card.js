import React from "react";
import PropTypes from "prop-types";
import styles from "./burger-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerCard = ({ cardInfo }) => {
  return (
    <div className={styles.burgerCard}>
      <div className={styles.burgerCardRowTop}>
        <Counter count={Math.floor((Math.random() * cardInfo.proteins) / 10)} />
        <span className={styles.burgerCardImageWrapper}>
          <img
            className={styles.burgerCardImage}
            src={cardInfo.image}
            alt={cardInfo.name}
          />
        </span>
      </div>
      <div className={styles.burgerCardRowBottom}>
        <div className={styles.burgerPriceItem}>
          <span className={styles.burgerCardPrice}>{cardInfo.price}</span>
          <CurrencyIcon type={"primary"} />
        </div>
        <span className={styles.burgerCardTitle}>{cardInfo.name}</span>
      </div>
    </div>
  );
};

BurgerCard.propTypes = {
  cardInfo: PropTypes.object,
};

export default BurgerCard;
