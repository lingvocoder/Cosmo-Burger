import React from "react";
import styles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <nav className={styles.headerNavBar}>
          <a href="#" className={styles.headerLink}>
            <BurgerIcon type={"primary"} />
            <span className={styles.headerLinkText}>Конструктор</span>
          </a>
          <a href="#" className={styles.headerLink}>
            <ListIcon type={"secondary"} />
            <span className={styles.headerLinkText}>Лента заказов</span>
          </a>
          <Logo />
          <a href="#" className={styles.headerLink}>
            <ProfileIcon type={"secondary"} />
            <span className={styles.headerLinkText}>Личный кабинет</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
export default AppHeader;
