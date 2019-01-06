import React, { Component } from "react";

import { connect } from "react-redux";

import { signUp } from "../../core/actions/auth";

import { isErrorSignUp, isPendingSignUp } from "../../core/selectors/auth";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import Chart from "./Chart";
import InputText from "../../components/InputText/InputText";
import ActionButton from "../../components/Button/ActionButton";

import { withStyles } from "@material-ui/core/styles";

import "./auth.scss";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      login: "",
      password: "",
      experience: 0,
      confirmPassword: "",
      isConfirmed: true
    };
  }

  onChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  eraseFields = () => {
    this.setState({
      email: "",
      login: "",
      password: "",
      confirmPassword: ""
    });
  };

  signIn = () => {
    this.props.signUp(this.state);
  };

  render() {
    const { email, login, password, confirmPassword, isConfirmed } = this.state;
    const { classes, isErrorSignUp, isPendingSignUp } = this.props;
    return (
      <Grid container className="content">
        <Grid xs={6} className="content__charts">
          <Chart />
          <Chart />
          <Chart />
        </Grid>
        <Grid xs={6} className="container__form">
          <Typography variant="h4" align="center" className="form__description">
            Регистрация
          </Typography>
          <form className="form__block-inputs">
            <InputText
              value={email}
              onChange={this.onChange("email")}
              type="email"
              label="E-mail"
              placeholder="e-mail"
              className="block-inputs__input"
              classes={classes}
            />
            <InputText
              value={login}
              onChange={this.onChange("login")}
              label="Логин"
              placeholder="логин"
              className="block-inputs__input"
              classes={classes}
            />
            <InputText
              value={password}
              onChange={this.onChange("password")}
              type="password"
              label="Пароль"
              placeholder="пароль"
              className="block-inputs__input"
              classes={classes}
            />
            <InputText
              error={!isConfirmed ? true : false}
              value={confirmPassword}
              confirmedPassword={this.confirmedPassword}
              onChange={this.onChange("confirmPassword")}
              type="password"
              label="Повторите пароль"
              placeholder="пароль еще раз"
              className="block-inputs__input"
              classes={classes}
            />
            <div className="form__input-actions">
              <ActionButton
                id="erase"
                onClick={this.eraseFields}
                label="Стереть все"
                color="secondary"
                className="actions__erase"
              />
              <ActionButton
                id="signin"
                label="Регистрация"
                color="primary"
                onClick={this.signIn}
              />
            </div>
            {isPendingSignUp && (
              <CircularProgress
                className="block-inputs_progress"
                color="secondary"
              />
            )}
            {isErrorSignUp && (
              <p style={{ color: "white", margin: "0 auto" }}>
                {isErrorSignUp}
              </p>
            )}
          </form>
        </Grid>
      </Grid>
    );
  }
}

const styles = () => ({
  multilineColor: {
    color: "#ffffff"
  },
  cssLabel: {
    "&$cssFocused": {
      color: "#ffffff"
    },
    color: "#ffffff"
  },
  cssFocused: {},
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#ffffff"
    }
  },
  notchedOutline: { borderColor: "#ffffff !important" }
});

const mapStateToProps = state => ({
  isErrorSignUp: isErrorSignUp(state),
  isPendingSignUp: isPendingSignUp(state)
});

const mapDispatchToProps = dispatch => {
  return {
    signUp: credentionals => dispatch(signUp(credentionals))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Auth));
