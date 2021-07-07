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
            <span className="ml-2 text text_type_main-default">
              Конструктор
            </span>
          </a>
          <a href="#" className={styles.headerLink}>
            <ListIcon type={"secondary"} />
            <span className="ml-2 text text_type_main-default text_color_inactive">
              Лента заказов
            </span>
          </a>
          <Logo />
          <a href="#" className={styles.headerLink}>
            <ProfileIcon type={"secondary"} />
            <span className="ml-2 text text_type_main-default text_color_inactive">
              Личный кабинет
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};
export default AppHeader;
