import { Component } from "react";
import { Paper } from "@material-ui/core";
import FilterTransactions from "./FilterTransactions";
import TransactionsCard from "./TransactionsCard";
import TransactionsList from "./TransactionsList";

import "../../scss/dashboard.scss";

import { dummy_data } from "./../../utils/dummy_data";

class Dashboard extends Component {
  state = {
    transactions: [...dummy_data],
  };

  render() {
    return (
      <div className="dashboard">
        <TransactionsCard />

        <Paper className="transanctions-list-filter-paper" elevation="0">
          <FilterTransactions />
          {/* <hr /> */}

          <TransactionsList transactions={this.state.transactions} />
        </Paper>
      </div>
    );
  }
}

export default Dashboard;
