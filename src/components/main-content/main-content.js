import React from "react";
import styles from "./main-content.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const MainContent = ({ data }) => {
  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <div className={styles.mainInner}>
          <BurgerIngredients ingredients={data} />
          <BurgerConstructor constructor={data} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
