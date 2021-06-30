import React from "react";
import styles from "./main-content.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import data from "../../utils/data";

const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <div className={styles.mainInner}>
          <div className={styles.mainBoardLeft}>
            <BurgerIngredients ingredients={data} />
          </div>
          <div className={styles.mainBoardRight}>
            <BurgerConstructor constructor={data} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
