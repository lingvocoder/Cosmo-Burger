import React from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ constructor }) => {
  const fixedBun = constructor.filter((elem) => elem.type === "bun");
  const newData = constructor
    .filter((elem) => elem.type !== "bun")
    .map((elem) => elem);
  return (
    <section className={styles.ingredientBoard}>
      <h1 className={styles.mainBoardHeading}>Соберите бургер</h1>
      {[fixedBun.shift()].map((bun) => (
        <div key={bun._id} className={styles.constructorFixedElement}>
          <DragIcon type={"primary"} />
          <ConstructorElement
            type={"top"}
            text={bun.name}
            thumbnail={bun.image}
            price={bun.price}
            isLocked={true}
          />
        </div>
      ))}
      <div className={styles.mainBoardInner}>
        <ul className={styles.mainBoardContent}>
          {newData.map((item) => (
            <li key={item._id} className={styles.constructorElement}>
              <DragIcon type={"primary"} />
              <ConstructorElement
                text={item.name}
                thumbnail={item.image}
                price={item.price}
                isLocked={false}
              />
            </li>
          ))}
        </ul>
      </div>
      {[fixedBun.pop()].map((bun) => (
        <div key={bun._id} className={styles.constructorFixedElement}>
          <DragIcon type={"primary"} />
          <ConstructorElement
            type={"bottom"}
            text={bun.name}
            thumbnail={bun.image}
            price={bun.price}
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
    </section>
  );
};
BurgerConstructor.propTypes = {
  constructor: PropTypes.arrayOf(PropTypes.object),
};

export default BurgerConstructor;
