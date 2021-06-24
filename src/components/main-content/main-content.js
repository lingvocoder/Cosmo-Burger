import React from "react";
import styles from "./main-content.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const MainContent = () => {
  return (
    <main className={styles.main}>
      <section className={styles.mainWrapper}>
        <div className={styles.mainInner}>
          <div className={styles.mainBoardLeft}>
            <BurgerIngredients />
          </div>
          <div className={styles.mainBoardRight}>
            <BurgerConstructor />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
