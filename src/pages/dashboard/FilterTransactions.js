import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { Component } from "react";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class FilterTransactions extends Component {
  render() {
    return (
      <Paper className="filter-transactions" elevation="1">
        <TextField
          id="source"
          label="search"
          type="search"
          variant="outlined"
          fullWidth
          size="small"
          //   onChange={this.handleChange}
        />
        <RadioGroup
          row
          aria-label="transaction-type"
          name="transactionType"
          //   value={this.state.transactionType}
          //   onChange={this.handleChange}
        >
          <FormControlLabel
            value="All"
            control={<Radio color="primary" id="transactionType" />}
            label="All"
          />
          <FormControlLabel
            value="income"
            control={<Radio color="primary" id="transactionType" />}
            label="Income"
          />
          <FormControlLabel
            value="expenses"
            control={<Radio color="primary" id="transactionType" />}
            label="Expenses"
          />
          <FormControlLabel
            value="investments"
            control={<Radio color="primary" id="transactionType" />}
            label="Investments"
          />
        </RadioGroup>
      </Paper>
    );
  }
}

export default FilterTransactions;
