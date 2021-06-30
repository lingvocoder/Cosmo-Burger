import React from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import BurgerCard from "../burger-card/burger-card";
import data from "../../utils/data";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import localize from "../../utils/localize";

const types = [...new Set(data.map((card) => card.type))];

const BurgerIngredients = ({ ingredients }) => {
  const [current, setCurrent] = React.useState("main");

  return (
    <section className={styles.burgerBoard}>
      <h1 className={styles.mainBoardHeading}>Соберите бургер</h1>
      <ul className={styles.tab}>
        {types.map((type, idx) => {
          return (
            <li key={idx} className={styles.tabWrapper}>
              <Tab active={current === type} value={type} onClick={setCurrent}>
                {localize(type)}
              </Tab>
            </li>
          );
        })}
      </ul>
      <div className={styles.mainBoardInner}>
        {types.map((type) => {
          return (
            <>
              <h2 className={styles.boardName}>{localize(type)}</h2>
              <div className={styles.mainBoardContent}>
                {ingredients.map((card) => {
                  return card.type === type ? (
                    <BurgerCard key={card._id} cardInfo={card} />
                  ) : null;
                })}
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
};
export default BurgerIngredients;
