import React from "react";
import styles from "./burger-ingredients.module.css";
import BurgerCard from "../burger-card/burger-card";
import data from "../../utils/data";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const types = [...new Set(data.map((card) => card.type))];

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("main");
  return (
    <div className={styles.burgerBoard}>
      <h1 className={styles.mainBoardHeading}>Соберите бургер</h1>
      <div className={styles.tab}>
        {types.map((type) => {
          return (
            <Tab
              key={type}
              active={current === `${type}`}
              value={type}
              onClick={setCurrent}
            >
              {type}
            </Tab>
          );
        })}
      </div>
      <div className={styles.mainBoardInner}>
        {types.map((type) => {
          return (
            <>
              <h2 className={styles.boardName}>{type}</h2>
              <div className={styles.mainBoardContent}>
                {data.map((card) => {
                  return card.type === type ? (
                    <BurgerCard key={card._id} data={card} />
                  ) : null;
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default BurgerIngredients;
