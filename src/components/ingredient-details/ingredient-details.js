import React from "react";
import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ cardData }) => {
  return (
    <>
      <div className={styles.ingredientCardInner}>
        <div
          className={`${styles.ingredientCardItem} ${styles.ingredientCardImageWrapper}`}
        >
          <img
            className={styles.ingredientCardImage}
            src={cardData.image}
            alt={cardData.name}
          />
        </div>
        <div
          className={`${styles.ingredientCardItem} ${styles.ingredientCardSubTitle}`}
        >
          <span className={` text text_type_main-medium`}>
            Биокотлета из марсианской Магнолии
          </span>
        </div>

        <div
          className={`${styles.ingredientCardItem} ${styles.ingredientCardInfo} text_color_inactive`}
        >
          <div className={styles.ingredientCardInfoItem}>
            <span className="text text_type_main-default">Калории, ккал</span>
            <span className="text text_type_digits-default">
              {cardData.calories}
            </span>
          </div>
          <div className={styles.ingredientCardInfoItem}>
            <span className="text text_type_main-default">Белки, г</span>
            <span className="text text_type_digits-default">
              {cardData.proteins}
            </span>
          </div>
          <div className={styles.ingredientCardInfoItem}>
            <span className="text text_type_main-default">Жиры, г</span>
            <span className="text text_type_digits-default">
              {cardData.fat}
            </span>
          </div>
          <div className={styles.ingredientCardInfoItem}>
            <span className="text text_type_main-default">Углеводы, г</span>
            <span className="text text_type_digits-default">
              {cardData.carbohydrates}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IngredientDetails;
