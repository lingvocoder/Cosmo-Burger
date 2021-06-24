import React from "react";
import "./app.module.css";
import AppHeader from "../app-header/app-header";
import MainContent from "../main-content/main-content";

class App extends React.Component {
  render() {
    return (
      <>
        <AppHeader />
        <MainContent />
      </>
    );
  }
}
export default App;
