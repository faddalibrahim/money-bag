import { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import FilterTransactions from "./FilterTransactions";

class Dashboard extends Component {
  state = {
    transactions: [
      {
        transactionType: "income",
        amount: "200",
        source: "coffee",
        description: "I bought this on my way to school",
        date: "21/02/2021",
      },
      {
        transactionType: "expense",
        amount: "600",
        source: "coffee",
        description: "I bought this on my way to school",
        date: "21/02/2021",
      },
      {
        transactionType: "income",
        amount: "200",
        source: "banana",
        description: "I bought this on my way to school",
        date: "21/02/2021",
      },
      {
        transactionType: "income",
        amount: "200",
        source: "coffee",
        description: "I bought this on my way to school",
        date: "21/02/2021",
      },
      {
        transactionType: "expense",
        amount: "600",
        source: "pendrive",
        description: "I bought this on my way to school",
        date: "21/02/2021",
      },
      {
        transactionType: "income",
        amount: "200",
        source: "coffee",
        description: "I bought this on my way to school",
        date: "21/02/2021",
      },
    ],
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
      <div
        className="dashboard"
        style={{
          height: "100%",
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexGrow: "1",
          padding: "1rem",
        }}
      >
        <Paper
          elevation="1"
          style={{
            padding: "1rem",
            width: "100%",
            // flexGrow: "1",
            marginBottom: "1rem",
            background: "linear-gradient(45deg, #0c5fde, #333)",
            // background: "radial-gradient(circle,#0c5fde, #333)",
            color: "white",
            borderRadius: "0.5rem",
          }}
        >
          <Typography variant="h5" align="right">
            21
          </Typography>
        </Paper>

        <Paper
          elevation="3"
          style={{
            // padding: "1rem",
            width: "100%",
            // flexGrow: "5",
            height: "60vh",
            flexGrow: "1",
            overflowY: "auto",

            display: "flex",
            flexFlow: "column",
            alignItems: "space-between",
          }}
        >
          <div className="filter">
            <FilterTransactions />
          </div>

          <div
            className="transactions"
            style={{ padding: "1rem", flexGrow: "1", overflowY: "scroll" }}
          >
            {this.spitTransactions}
          </div>
        </Paper>
      </div>
    );
  }
}

export default Dashboard;
