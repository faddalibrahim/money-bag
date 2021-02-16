import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { Component } from "react";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class FilterTransactions extends Component {
  handleChange = (e) => {
    this.props.filter(e.target.value);
  };

  render() {
    return (
      <Paper
        className="filter-transactions"
        elevation="0"
        // variant="outlined"
        square
      >
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
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="All"
            control={<Radio color="primary" id="transactionType" />}
            label="All"
          />
          <FormControlLabel
            value="income"
            control={<Radio color="primary" id="transactionType" />}
            label={<small>Income</small>}
          />
          <FormControlLabel
            value="expenses"
            control={<Radio color="primary" id="transactionType" />}
            label={<small>Expenses</small>}
          />
          <FormControlLabel
            value="investments"
            control={<Radio color="primary" id="transactionType" />}
            label={<small>investments</small>}
          />
          <FormControlLabel
            value="savings"
            control={<Radio color="primary" id="transactionType" />}
            label={<small>Savings</small>}
          />
        </RadioGroup>
      </Paper>
    );
  }
}

export default FilterTransactions;
