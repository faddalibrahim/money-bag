import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { Component } from "react";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

class FilterTransactions extends Component {
  render() {
    return (
      <Paper className="filter-transactions" elevation="0">
        <TextField
          id="source"
          label="search"
          type="search"
          variant="outlined"
          fullWidth
          size="small"
          //   onChange={this.handleChange}
        />
        <br></br>
        <RadioGroup
          row
          aria-label="transaction-type"
          name="transactionType"
          //   value={this.state.transactionType}
          //   onChange={this.handleChange}
        >
          {/* <FormControlLabel
            value="All"
            control={<Radio color="primary" id="transactionType" />}
            label="All"
          /> */}
          <FormControlLabel
            value="income"
            control={<Radio color="primary" id="transactionType" />}
            label={<TrendingUpIcon />}
          />
          <FormControlLabel
            value="expenses"
            control={<Radio color="primary" id="transactionType" />}
            label={<TrendingDownIcon />}
          />
          <FormControlLabel
            value="investments"
            control={<Radio color="primary" id="transactionType" />}
            label={<AccountBalanceWalletIcon />}
          />
          <FormControlLabel
            value="savings"
            control={<Radio color="primary" id="transactionType" />}
            label={<AccountBalanceIcon />}
          />
        </RadioGroup>
      </Paper>
    );
  }
}

export default FilterTransactions;
