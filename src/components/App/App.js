import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainSection from "../../containers/Sections/MainSection";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "../../styles/app.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-section">
          <Header />
          <MainSection />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
