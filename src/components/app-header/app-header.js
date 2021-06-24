import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerInner}>
          <div className={styles.headerItem}>
            <BurgerIcon type={"primary"} />
            <span className={styles.itemText}>Конструктор</span>
          </div>
          <div className={styles.headerItem}>
            <ListIcon type={"secondary"} />
            <span className={styles.itemText}>Лента заказов</span>
          </div>
          <Logo />
          <div className={styles.headerItem}>
            <ProfileIcon type={"secondary"} />
            <span className={styles.itemText}>Личный кабинет</span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default AppHeader;
