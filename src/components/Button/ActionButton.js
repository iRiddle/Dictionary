import React, { Component } from "react";
import cx from "classnames";

import Button from "@material-ui/core/Button";

class ActionButton extends Component {
  render() {
    const { label, color, id, onClick } = this.props;
    return (
      <Button
        onClick={onClick}
        variant="contained"
        color={color}
        className={cx({ actions__erase: id === "erase" })}
      >
        {label}
      </Button>
    );
  }
}

export default ActionButton;
