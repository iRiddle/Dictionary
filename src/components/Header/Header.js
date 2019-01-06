import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar className="header">
          <Typography variant="h6" className="logo">
            <Link to="/" className="link">
              Словарь
            </Link>
          </Typography>
          <Typography variant="h6" style={{ marginRight: "12px" }}>
            <Link to="/signin" className="link">
              Вход
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/signup" className="link">
              Регистрация
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
