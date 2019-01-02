import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainSection from '../../containers/Sections/MainSection'
import Header from "../Header/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <MainSection />
        </div>
      </Router>
    );
  }
}

export default App;
