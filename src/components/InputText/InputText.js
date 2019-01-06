import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class InputText extends Component {
  render() {
    const {
      label,
      placeholder,
      value,
      onChange,
      type,
      error,
      classes
    } = this.props;
    return (
      <TextField
        error={error}
        value={value}
        type={type}
        label={label}
        onChange={onChange}
        placeholder={`Введите ${placeholder}`}
        variant="outlined"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          },
          shrink: true
        }}
        InputProps={{
          classes: {
            input: classes.multilineColor,
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }
        }}
      />
    );
  }
}

export default InputText;
