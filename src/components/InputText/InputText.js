import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class InputText extends Component {
  render() {
    const { label, placeholder, value, onChange, type, error } = this.props;
    return (
      <TextField
        error={error}
        value={value}
        type={type}
        label={label}
        onChange={onChange}
        className="auth-page__input"
        placeholder={`Введите ${placeholder}`}
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
    );
  }
}

export default InputText;
