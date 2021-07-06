import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import BurgerPayment from "../burger-payment/burger-payment";
import ConstructorItem from "../constructor-item/constructor-item";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ constructor }) => {
  const newData = constructor
    .filter((elem) => elem.type !== "bun")
    .map((elem) => elem);
  const fixedBun = constructor.filter((elem) => elem.type === "bun")[0];

  const [showModal, setShowModal] = useState(false);
  const [activeOrder, setActiveOrder] = useState({
    total: 1000,
    id: 0,
  });

  const handlePaymentClick = () => {
    setShowModal(true);
    setActiveOrder((prevState) => {
      return { ...prevState, id: 12345 };
    });
  };
  console.log(fixedBun);

  return (
    <section className={styles.ingredientBoard}>
      <h1 className={styles.mainBoardHeading}>Соберите бургер</h1>
      {fixedBun && (
        <div
          key={fixedBun._id + "top"}
          className={styles.constructorFixedElement}
        >
          <DragIcon type={"primary"} />
          <ConstructorElement
            type={"top"}
            text={fixedBun.name}
            thumbnail={fixedBun.image}
            price={fixedBun.price}
            isLocked={true}
          />
        </div>
      )}
      <div className={styles.mainBoardInner}>
        <ul className={styles.mainBoardContent}>
          {newData.length &&
            newData.map((item) => (
              <ConstructorItem item={item} key={item._id}>
                <DragIcon type={"primary"} />
                <ConstructorElement
                  text={item.name}
                  thumbnail={item.image}
                  price={item.price}
                  isLocked={false}
                />
              </ConstructorItem>
            ))}
        </ul>
      </div>
      {fixedBun && (
        <div
          key={fixedBun._id + "bottom"}
          className={styles.constructorFixedElement}
        >
          <DragIcon type={"primary"} />
          <ConstructorElement
            type={"bottom"}
            text={fixedBun.name}
            thumbnail={fixedBun.image}
            price={fixedBun.price}
            isLocked={true}
          />
        </div>
      )}
      <BurgerPayment
        orderData={activeOrder}
        handleClick={() => handlePaymentClick()}
      />
      <Modal show={showModal} onClose={() => setShowModal(false)} header={null}>
        <OrderDetails orderData={activeOrder} />
      </Modal>
    </section>
  );
};

BurgerConstructor.propTypes = {
  constructor: PropTypes.arrayOf(PropTypes.object),
};

export default BurgerConstructor;
