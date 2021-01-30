import { Paper, Typography } from "@material-ui/core";
import { Component } from "react";

class TransactionsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Paper className="transactions-card" elevation="2">
        <div className="income-box">
          <h1>304</h1>
          <small>income</small>
        </div>
        <div className="expenses-box">
          <h1>740</h1>
          <small>expenses</small>
        </div>
        <div className="investments-box">
          <h1>240</h1>
          <small>investments</small>
        </div>
      </Paper>
    );
  }
}

export default TransactionsCard;
