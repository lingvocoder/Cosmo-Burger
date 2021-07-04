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
  const [showModal, setShowModal] = useState(false);
  const [activeOrder, setActiveOrder] = useState(0);

  const handlePaymentClick = (total) => {
    setShowModal(true);
    setActiveOrder(total);
  };
  const fixedBun = constructor.filter((elem) => elem.type === "bun");
  const newData = constructor
    .filter((elem) => elem.type !== "bun")
    .map((elem) => elem);
  const total = newData.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <section className={styles.ingredientBoard}>
      <h1 className={styles.mainBoardHeading}>Соберите бургер</h1>
      {fixedBun.length &&
        [fixedBun.shift()].map((bun) => (
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
      {fixedBun.length &&
        [fixedBun.pop()].map((bun) => (
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
      <BurgerPayment
        paymentData={activeOrder}
        handleClick={() => handlePaymentClick(total)}
      />
      <Modal show={showModal} onClose={() => setShowModal(false)} header={null}>
        <OrderDetails paymentData={activeOrder} />
      </Modal>
    </section>
  );
};

BurgerConstructor.propTypes = {
  constructor: PropTypes.arrayOf(PropTypes.object),
};

export default BurgerConstructor;
