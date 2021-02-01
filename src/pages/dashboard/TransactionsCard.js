import { Paper, Typography } from "@material-ui/core";
import { Component } from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

class TransactionsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Paper className="transactions-card" square variant="outlined">
        <div className="income-box">
          <TrendingUpIcon />
          <h1 className="amount">304</h1>
          <small>income</small>
        </div>
        <div className="expenses-box">
          <TrendingDownIcon />
          <h1 className="amount">740</h1>
          <small>expenses</small>
        </div>
        <div className="investments-box">
          <AccountBalanceWalletIcon />
          <h1 className="amount">240</h1>
          <small>investments</small>
        </div>
        <div className="savings-box">
          <AccountBalanceIcon />
          <h1 className="amount">240</h1>
          <small>Savings</small>
        </div>
      </Paper>
    );
  }
}

export default TransactionsCard;
