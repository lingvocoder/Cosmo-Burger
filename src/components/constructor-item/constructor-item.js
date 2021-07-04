import React from "react";
import styles from "./constructor-item.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorItem = ({ item, handleClick }) => {
  return (
    <li
      key={item._id}
      className={styles.constructorElement}
      onClick={handleClick}
    >
      <DragIcon type={"primary"} />
      <ConstructorElement
        text={item.name}
        thumbnail={item.image}
        price={item.price}
        isLocked={false}
      />
    </li>
  );
};

export default ConstructorItem;
