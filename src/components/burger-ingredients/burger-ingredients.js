import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import localize from "../../utils/localize";
import BurgerCard from "../burger-card/burger-card";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = ({ ingredients }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const handleActiveCardClick = (card) => {
    setShowModal(true);
    setActiveCard(card);
  };
  const header = "Детали ингредиента";

  const types = [...new Set(ingredients.map((card) => card.type))];
  const [currentTab, setCurrentTab] = React.useState("main");

  return (
    <section className={styles.burgerBoard}>
      <h1 className={styles.mainBoardHeading}>Соберите бургер</h1>
      <ul className={styles.tab}>
        {types.map((type, idx) => {
          return (
            <li key={idx} className={styles.tabWrapper}>
              <Tab
                active={currentTab === type}
                value={type}
                onClick={setCurrentTab}
              >
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
                    <BurgerCard
                      handleClick={() => handleActiveCardClick(card)}
                      key={card._id}
                      cardInfo={card}
                    />
                  ) : null;
                })}
              </div>
            </>
          );
        })}
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        header={header}
      >
        <IngredientDetails cardData={activeCard} />
      </Modal>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
};
export default BurgerIngredients;
