import React, { Component, Fragment } from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import './auth.scss'

class Chart extends Component {
  render() {
    return (
      <Fragment>
        <Paper className="container__chart">
          <Typography variant="h5" align="center" className="page__description">
           Test
          </Typography>
        </Paper>
      </Fragment>
    );
  }
}

export default Chart;
