import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import localize from "../../utils/localize";
import IngredientCard from "../ingredient-card/ingredient-card";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = ({ ingredients }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeCard, setActiveCard] = useState({});
  const [currentTab, setCurrentTab] = React.useState("main");
  const modalTitle = "Детали ингредиента";
  const key = "type";
  const types = [
    ...new Map(
      ingredients
        .map((item) => {
          return { type: item.type, id: item._id };
        })
        .map((item) => [item[key], item])
    ).values(),
  ];

  const handleActiveCardClick = (card) => {
    setShowModal(true);
    setActiveCard(card);
  };

  return (
    <section className={styles.burgerBoard}>
      <h1 className={`${styles.burgerBoardHeading} text text_type_main-large`}>
        Соберите бургер
      </h1>
      <ul className={styles.tab}>
        {types.map((type) => {
          return (
            <li key={type.id} className={styles.tabWrapper}>
              <Tab
                active={currentTab === type.type}
                value={type.type}
                onClick={setCurrentTab}
              >
                {localize(type.type)}
              </Tab>
            </li>
          );
        })}
      </ul>
      <div className={styles.burgerBoardInner}>
        {types.map((type) => {
          return (
            <React.Fragment key={type.id}>
              <h2 className={`${styles.boardName} text text_type_main-medium`}>
                {localize(type.type)}
              </h2>
              <div className={styles.burgerBoardContent}>
                {ingredients.map((card) => {
                  return card.type === type.type ? (
                    <IngredientCard
                      handleClick={() => handleActiveCardClick(card)}
                      key={card._id}
                      cardInfo={card}
                    />
                  ) : null;
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={modalTitle}
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
