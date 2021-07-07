import React from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientCard = ({ cardInfo, handleClick }) => {
  return (
    <div className={styles.ingredientCard} onClick={handleClick}>
      <div className={styles.ingredientCardRowTop}>
        <Counter count={Math.floor((Math.random() * cardInfo.proteins) / 10)} />
        <span className={styles.ingredientCardImageWrapper}>
          <img
            className={styles.ingredientCardImage}
            src={cardInfo.image}
            alt={cardInfo.name}
          />
        </span>
      </div>
      <div className={styles.ingredientCardRowBottom}>
        <div className={styles.ingredientPriceItem}>
          <span
            className={`${styles.ingredientCardPrice} text text_type_digits-default`}
          >
            {cardInfo.price}
          </span>
          <CurrencyIcon type={"primary"} />
        </div>
        <span
          className={`${styles.ingredientCardTitle} text text_type_main-default`}
        >
          {cardInfo.name}
        </span>
      </div>
    </div>
  );
};

IngredientCard.propTypes = {
  cardInfo: PropTypes.object,
  handleClick: PropTypes.func,
};

export default IngredientCard;
