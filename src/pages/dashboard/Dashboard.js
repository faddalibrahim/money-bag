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
    filtered: [],
  };

  filter = (keyword) => {
    const filtered = this.state.transactions.filter(
      (transaction) => transaction.transactionType === keyword
    );

    this.setState({
      filtered,
    });
  };

  render() {
    return (
      <div className="dashboard">
        <TransactionsCard />

        <Paper className="transanctions-list-filter-paper" elevation="0">
          <FilterTransactions filter={this.filter} />

          <TransactionsList
            transactions={
              this.state.filtered.length === 0
                ? this.state.transactions
                : this.state.filtered
            }
          />
        </Paper>
      </div>
    );
  }
}

export default Dashboard;
