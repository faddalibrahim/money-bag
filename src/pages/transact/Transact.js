import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { Typography } from "@material-ui/core";

import "../../scss/transact.scss";

class Transact extends Component {
  state = {
    transactionType: "",
    amount: "",
    source: "",
    description: "",
  };

  handleTransaction = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    console.log(this.state);

    return (
      <div id="transact">
        <form autoComplete="off" onSubmit={this.handleTransaction}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2rem",
              alignSelf: "flex-start",
            }}
          >
            <MonetizationOnIcon color="primary" fontSize="large" />
            <Typography variant="h5" color="primary">
              Transact
            </Typography>
          </div>
          <div>
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup
              row
              aria-label="transaction-type"
              name="transactionType"
              value={this.state.transactionType}
              onChange={this.handleChange}
            >
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
            </RadioGroup>
          </div>

          <TextField
            id="amount"
            label="Amount"
            type="number"
            variant="outlined"
            onChange={this.handleChange}
          />

          <TextField
            id="source"
            label="Source"
            type="text"
            variant="outlined"
            onChange={this.handleChange}
          />

          <TextareaAutosize
            id="description"
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Description"
            variant="outlined"
            className="description-text"
            onChange={this.handleChange}
          />

          <Button type="submit" variant="contained" color="primary">
            Add Transaction
          </Button>
        </form>
      </div>
    );
  }
}

export default Transact;
