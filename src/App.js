import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import "./app.css";

const App = () => {
  return (
    <div className="main-container">
      <div className="content-wrap">
        <div id="bg" className="app">
          <Header />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
