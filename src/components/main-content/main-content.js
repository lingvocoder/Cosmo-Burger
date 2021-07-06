import React from "react";
import styles from "./main-content.module.css";
import PropTypes from "prop-types";
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

MainContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default MainContent;
