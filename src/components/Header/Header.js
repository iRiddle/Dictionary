import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./header.scss";

class Header extends Component {
  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className="grow">
              <Link to="/" className="link">
                <Button color="inherit"> Словарь</Button>
              </Link>
            </Typography>
            <Link to="/signin" className="link">
              <Button color="inherit">Вход</Button>
            </Link>
            <Link to="/signup" className="link">
              <Button color="inherit">Регистрация</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
