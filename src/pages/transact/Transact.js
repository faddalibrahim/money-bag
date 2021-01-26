import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import "../../scss/transact.scss";

class Transact extends Component {
  state = {};

  render() {
    return (
      <div id="transact">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
            // justifySelf: "start",
            alignSelf: "flex-start",
          }}
        >
          <ArrowLeftIcon />
          <span>Exit</span>
        </div>
        <form noValidate autoComplete="off">
          <div>
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup
              row
              aria-label="transaction-type"
              name="transaction-type"
              value="Income"
              // onChange={() => alert("its been changed")}
            >
              <FormControlLabel
                value="Income"
                control={<Radio color="primary" />}
                label="Income"
              />
              <FormControlLabel
                value="Expenses"
                control={<Radio color="primary" />}
                label="Expenses"
              />
            </RadioGroup>
          </div>

          <TextField
            id="outlined-password-input"
            label="Amount"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />

          <TextField
            id="outlined-password-input"
            label="Expenses made for"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />

          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Description"
            variant="outlined"
            className="description-text"
          />

          <Button variant="contained" color="primary">
            Add Transaction
          </Button>
        </form>
      </div>
    );
  }
}

export default Transact;
