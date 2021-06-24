import React from "react";
import styles from "./burger-constructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data";

const BurgerConstructor = () => {
  const topElement = data.slice(0, 1);
  const bottomElement = data.slice(data.length - 1);
  const newData = data.slice(1, data.length - 1);
  return (
    <div className={styles.ingredientBoard}>
      <h1 className={styles.mainBoardHeading}>Соберите бургер</h1>
      {topElement.map((elem) => (
        <div className={styles.constructorElementTop}>
          <ConstructorElement
            key={elem._id}
            type={"top"}
            text={elem.name}
            thumbnail={elem.image}
            price={elem.price}
            isLocked={true}
          />
        </div>
      ))}
      <div className={styles.mainBoardInner}>
        <div className={styles.mainBoardContent}>
          {newData.map((card) => (
            <div className={styles.constructorElement}>
              <DragIcon type={"primary"} />
              <ConstructorElement
                key={card._id}
                text={card.name}
                thumbnail={card.image}
                price={card.price}
                isLocked={Math.random() < 0.5}
              />
            </div>
          ))}
        </div>
      </div>
      {bottomElement.map((elem) => (
        <div className={styles.constructorElementBottom}>
          <ConstructorElement
            key={elem._id}
            type={"bottom"}
            text={elem.name}
            thumbnail={elem.image}
            price={elem.price}
            isLocked={true}
          />
        </div>
      ))}
      <div className={styles.constructorPayment}>
        <span className={styles.constructorTotal}>
          {newData.reduce((acc, curr) => acc + curr.price, 0)}
        </span>
        <CurrencyIcon type={"primary"} />
        <Button type={"primary"} size={"large"}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default BurgerConstructor;
