import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Auth from '../Auth/Auth'

class MainSection extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" />
        <Route path="/signin"/>
        <Route path="/signup" component = {Auth}/>
      </Switch>
    );
  }
}

export default MainSection