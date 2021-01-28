import { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import FilterTransactions from "./FilterTransactions";
import TransactionsCard from "./TransactionsCard";

import "../../scss/dashboard.scss";

import { dummy_data } from "./../../utils/dummy_data";

class Dashboard extends Component {
  state = {
    transactions: [...dummy_data],
  };

  spitTransactions = this.state.transactions.map((transaction) => {
    return (
      <Paper
        elevation="0"
        variant="outlined"
        style={{
          padding: "1rem",
          marginBottom: "1rem",
          borderLeft: `${
            transaction.transactionType === "expense"
              ? "0.2rem solid crimson"
              : "0.2rem solid teal"
          }`,
        }}
      >
        <Typography
          variant="caption"
          style={{
            background: `${
              transaction.transactionType === "expense" ? "crimson" : "teal"
            }`,
            padding: "0.4rem",
            color: "white",
            borderRadius: "10%",
          }}
        >
          {transaction.source}
        </Typography>
        {/* <Typography variant="caption">{transaction.description}</Typography> */}
        <Typography
          variant="subtitle2"
          align="right"
          // color="primary"
          style={{
            color: `${
              transaction.transactionType === "expense" ? "crimson" : "teal"
            }`,
          }}
        >
          GHC {transaction.amount}
        </Typography>
      </Paper>
    );
  });

  render() {
    return (
      <div className="dashboard">
        <TransactionsCard />

        <Paper className="transanctions-list-filter-paper" elevation="1">
          <FilterTransactions />

          <div className="transactions-list">{this.spitTransactions}</div>
        </Paper>
      </div>
    );
  }
}

export default Dashboard;
