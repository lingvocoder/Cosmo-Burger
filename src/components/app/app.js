import React, { useEffect, useState } from "react";
import "./index.css";
import AppHeader from "../app-header/app-header";
import MainContent from "../main-content/main-content";
import getBurgerData from "../../utils/getData";

const App = () => {
  const [burgerData, setBurgerData] = useState([]);

  useEffect(() => {
    getBurgerData(setBurgerData);
  }, []);

  return (
    <>
      <AppHeader />
      <MainContent data={burgerData} />
    </>
  );
};

export default App;
