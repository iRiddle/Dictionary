import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputText from "../../components/InputText/InputText";
import ActionButton from "../../components/Button/ActionButton";

import "./auth.scss";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      login: "",
      password: "",
      confirmPassword: "",
      isConfirmed: true
    };
  }

  onChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
    // не рабочий вариант, юзается только когда больше 1 символа и все они равны
  };

  eraseFields = () => {
    this.setState({
      email: "",
      login: "",
      password: "",
      confirmPassword: ""
    });
  };

  //destroy
  confirmedPassword = event => {
    if (event.target.value !== this.state.password) {
      this.setState({
        isConfirmed: false
      });
    } else {
      this.setState({
        isConfirmed: true
      });
    }
  };

  render() {
    console.log(this.state);
    const { email, login, password, confirmPassword, isConfirmed } = this.state;
    return (
      <Paper className="auth-page">
        <Typography
          variant="h5"
          align="center"
          className="auth-page__description"
        >
          Вход
        </Typography>
        <InputText
          value={email}
          onChange={this.onChange("email")}
          type="email"
          label="E-mail"
          placeholder="e-mail"
        />
        <InputText
          value={login}
          onChange={this.onChange("login")}
          label="Логин"
          placeholder="логин"
        />
        <InputText
          value={password}
          onChange={this.onChange("password")}
          type="password"
          label="Пароль"
          placeholder="пароль"
        />
        <InputText
          error={!isConfirmed ? true : false}
          value={confirmPassword}
          confirmedPassword={this.confirmedPassword}
          onChange={this.onChange("confirmPassword")}
          type="password"
          label="Повторите пароль"
          placeholder="пароль еще раз"
        />
        <div className="auth-page__actions">
          <ActionButton
            id="erase"
            onClick={this.eraseFields}
            label="Стереть все"
            color="secondary"
          />
          <ActionButton id="signin" label="Вход" color="primary" />
        </div>
      </Paper>
    );
  }
}

export default Auth;
