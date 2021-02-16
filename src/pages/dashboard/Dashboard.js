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
    currentFilter: "all",
  };

  filter = (keyword) => {
    const filtered = this.state.transactions.filter(
      (transaction) => transaction.transactionType === keyword
    );

    this.setState({
      filtered,
      currentFilter: keyword,
    });
  };

  search = (keyword) => {
    const filtered = this.state.transactions.filter(
      (transaction) =>
        JSON.stringify(transaction).includes(keyword) &&
        transaction.transactionType === this.state.currentFilter
    );
    this.setState({ filtered });
  };

  render() {
    // alert(this.state.currentFilter);
    console.log(this.state);

    return (
      <div className="dashboard">
        <TransactionsCard />

        <Paper className="transanctions-list-filter-paper" elevation="0">
          <FilterTransactions filter={this.filter} search={this.search} />

          <TransactionsList
            transactions={
              this.state.filtered.length
                ? this.state.filtered
                : this.state.transactions
            }
          />
        </Paper>
      </div>
    );
  }
}

export default Dashboard;
