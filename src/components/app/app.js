import React, { useEffect, useState } from "react";
import "./index.css";
import AppHeader from "../app-header/app-header";
import MainContent from "../main-content/main-content";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import getBurgerData from "../../utils/getData";

const App = () => {
  const [burgerData, setBurgerData] = useState([]);

  useEffect(() => {
    getBurgerData(setBurgerData);
  }, []);

  return (
    <>
      {/*<IngredientDetails />*/}
      {/*<Modal />*/}
      <AppHeader />
      <MainContent data={burgerData} />
    </>
  );
};

export default App;
