import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import AuthSignUp from '../Auth/AuthSignUp'

class MainSection extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" />
        <Route path="/signin"/>
        <Route path="/signup" component = {AuthSignUp}/>
      </Switch>
    );
  }
}

export default MainSection